import { GState, ObjectModel } from "@/types/global";
import { EventType } from "@/types/enums/education_method";

export interface EMState extends GState
{
    items: Array<EducationMethod>
}

export interface EducationMethod extends ObjectModel
{
    id: string
    code: string
    name: string
    type: EventType
}

export interface LoadOptions
{
    db: string
    page: number
    size: number
}