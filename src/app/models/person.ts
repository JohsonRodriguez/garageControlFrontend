import { Car } from './car';
export class Person {
    dni?: string;
    name: string;
    lastname: string;
    phone: string;
    type: string;
    state: string;
    cars:Array<any>;
    
    

    constructor(dni:string, name: string, lastname: string,phone: string,type: string,state: string,cars:Array<any> ) {
        this.dni = dni;
        this.name = name;
        this.lastname = lastname;
        this.phone = phone;
        this.type = type;
        this.state = state;
        this.cars=cars;
             
    }
}

