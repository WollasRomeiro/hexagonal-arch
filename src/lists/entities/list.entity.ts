import { Column, Model, Table } from 'sequelize-typescript';

export type ListAtrributes = {
    name: string;
}

@Table
export class List extends Model<ListAtrributes> {
    @Column
    name: string;
}
