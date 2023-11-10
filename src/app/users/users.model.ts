export interface IAddress{
city: string;
street: string;
number: number;
zipcode: string;
}
export interface Iname{
    firstname: string;
    lastname: string;
}

export interface IUsers {
    address: IAddress;
    id: number;
    email: string;
    password: string;
    name: Iname;
    phone: string;

}
