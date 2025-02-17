export interface IPerson {
  name: string;
  age: number;
}

export interface IStudent extends IPerson {
    is_active: boolean
}
