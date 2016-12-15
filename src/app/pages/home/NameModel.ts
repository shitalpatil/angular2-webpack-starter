/**
 * Created by skpatil on 12/14/2016.
 */
export class Name {
    id : string;
    firstName : string;
    lastName :string;
    userName:string;
    constructor(id:string, firstName:string, lastName:string,userName:string ){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
    }
}