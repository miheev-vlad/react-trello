import { ICard } from "./ICard";

export interface IColumn {
    title: string
    id: number
    cards: ICard[]
    onRemove: (id: number) => void
    onAdd: (title: string) => void
}