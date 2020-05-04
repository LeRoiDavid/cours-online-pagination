import { IOrganizer } from './IOrganizer';

export interface IPagination<T>{
    currentPage?: number,
    limit?:  number,
    offset?: number,
    pages?: number,
    recordsLength?: number,
    totalRecords?: number,
    records?: T[]
}