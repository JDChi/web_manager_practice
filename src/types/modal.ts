export type IAction = 'create' | 'edit' | 'delete';

export interface ICreateUserModel {
    display: (action: IAction, data: string) => void;
}
