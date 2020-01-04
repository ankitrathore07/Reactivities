export interface IUser {
    username: string;
    displayName: string;
    token: string;
    image?: string;
}

export interface IUserFormValues{
    password: string;
    email: string;
    username?: string;
    displayName?: string;    
}