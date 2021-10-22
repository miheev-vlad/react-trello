import React, { useRef, useState } from 'react';
import { ICard } from '../../shared/interfaces/ICard';
import { IColumn } from '../../shared/interfaces/IColumn';
import { Modal } from '../Modal/Modal';

export const Column: React.FC<IColumn> = ({
    title,
    id,
    cards,
    status,
    onRemove,
    onAdd,
    onEdit,
    onAddComment,
    onRemoveComment,
    onAddDescription,
    onEditCadTitle,
}) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [card, setCard] = useState<ICard>()
    const [columnTitle, setColumnTitle] = useState<string>(title)
    const [isAddBtnDisabled, setIsAddBtnDisabled] = useState<boolean>(true)
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd!(ref.current!.value, status);
            ref.current!.value = ''
            setIsAddBtnDisabled(true)
        }
    }

    const disabledBtnHandler = () => {
        if (ref.current!.value.trim() !== '') {
            setIsAddBtnDisabled(false)
        } else {
            setIsAddBtnDisabled(true)
        }
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColumnTitle(event.target.value)
    }

    const keyUpHandler = (event: React.KeyboardEvent) => {
        onEdit!(id, columnTitle)
    }

    const clickHandler = () => {
        if (ref.current!.value.trim() !== '') {
            onAdd!(ref.current!.value, status);
            ref.current!.value = ''
            setIsAddBtnDisabled(true)
        }
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }

    const showModalHandler = (card: ICard) => {
        setShowModal(true)
        setCard(card)
    }

    return (
        <React.Fragment>
            <ul>
                <input
                    onChange={changeHandler}
                    value={columnTitle}
                    type="text"
                    id="title"
                    placeholder="Enter Todo Name"
                    onKeyUpCapture={keyUpHandler}
                />
                Title: {title}
                Id: {id}
                <input
                    ref={ref}
                    type="text"
                    id="title"
                    placeholder="Enter Card Title"
                    onKeyPress={keyPressHandler}
                    onChange={disabledBtnHandler}
                />
                <button type="button" onClick={clickHandler} disabled={isAddBtnDisabled}>Add Card</button>
                <label htmlFor="title">
                    Enter Card Title
                </label>
                {cards!.filter(card => card.status === status).map(card => {
                    return (
                        <li key={card.id}>
                            <label onClick={() => showModalHandler(card)}>
                                <span>{card.title}</span>
                                <span>{card.id}</span>
                                <span>comments: {card.comments.length}</span>
                            </label>
                            <i onClick={() => onRemove!(card.id)}>x</i>
                        </li>
                    )
                })}
            </ul>
            {showModal && (
                            <Modal
                                columnTitle={columnTitle}
                                onClose={closeModalHandler}
                                card={card}
                                onRemove={onRemove!}
                                onAddComment={onAddComment!}
                                onRemoveComment={onRemoveComment!}
                                onAddDescription={onAddDescription!}
                                onEditCadTitle={onEditCadTitle!}
                            />
                          )}
        </React.Fragment>
    )
}