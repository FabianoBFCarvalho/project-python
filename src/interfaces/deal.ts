import { Property } from "./property";
import { Contact } from "./contact";
import { PropertyProfile } from "./property-profile";

export class Deal {
    db_id: string;
    value: string;
    title: string;
    contact: {
        db_id: string;
        name: string;
    }
    property: {
        db_id: string;
        address: string;
    }
    profile: PropertyProfile[];
    interest: string;
    status: string;
}

export interface DealObjectPrepare {
    property: Property;
    deal: Deal;
    contact: Contact
}