import { StatusEnum } from "../StatusEnum";
import { ICard } from "./ICard";
import { IComment } from "./IComment";

export interface IColumn {
    title: string
    id: number
    status: StatusEnum
    cards?: ICard[]
    onRemove?: (id: number) => void
    onAdd?: (title: string, status: StatusEnum) => void
    onEdit?: (id: number, title: string) => void
    onAddComment?: (id: number, comment: IComment) => void
    onRemoveComment?: (id: number, commentId: number) => void
    onAddDescription?: (id: number, description: string) => void
    onEditCadTitle?: (id: number, title: string) => void
}