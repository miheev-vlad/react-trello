import React, { useRef } from 'react';
import { IColumn } from '../../shared/interfaces/IColumn';

export const Column: React.FC<IColumn> = ({ title, id, cards, onRemove, onAdd }) => {
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(ref.current!.value);
            ref.current!.value = ''
        }
    }

    return (
        <ul>
            Title: {title}
            Id: {id}
            <input
                ref={ref}
                type="text"
                id="title"
                placeholder="Enter Card Title"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title">
                Enter Card Title
            </label>
            {cards.map(card => {
                return (
                    <li key={card.id}>
                        <label>
                            <span>{card.title}</span>
                            <span>{card.id}</span>
                            <span>{card.comment}</span>
                            <i onClick={() => onRemove(card.id)}>x</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}