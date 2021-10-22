import { StatusEnum } from "../StatusEnum";
import { IComment } from "./IComment";

export interface ICard {
    author: string
    title: string
    id: number
    comments: IComment[]
    status: StatusEnum
    description?: string
}