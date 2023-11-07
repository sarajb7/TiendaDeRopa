export interface IAdress{
  city: string;
  street: string;
  number: number;
  zipcode: string;
}
export interface IName{
  firstname: string;
  lastname: string;
}

export interface IUsers {
  address: IAdress;
  id: number;
  email: string;
  username: string;
  password: string;
  name: IName;
  phone: string;
}
