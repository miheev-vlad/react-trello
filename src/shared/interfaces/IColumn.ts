import { StatusEnum } from "../StatusEnum";
import { ICard } from "./ICard";

export interface IColumn {
    title: string
    id: number
    status: StatusEnum
    cards?: ICard[]
    onRemove?: (id: number) => void
    onAdd?: (title: string, status: StatusEnum) => void
    onEdit?: (id: number, title: string) => void
}