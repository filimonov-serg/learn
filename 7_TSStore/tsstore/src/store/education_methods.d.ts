import { GState, ObjectModel } from "@/types/global";

export interface EMState extends GState
{
    items: Array<EducationMethod>
}

export interface EducationMethod extends ObjectModel
{
    id: string
    code: string
    name: string
}

export interface LoadOptions
{
    db: string
    page: number
    size: number
}