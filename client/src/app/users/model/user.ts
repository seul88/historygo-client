import { Place } from 'src/app/places/model/place';

export interface User {
    id : number;
    name : string;
    email : string; 
    points : number;
    country : string;
    places : Place[];
}