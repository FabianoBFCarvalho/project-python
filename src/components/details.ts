
import { Component, Input, SimpleChange } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { Deal } from '../interfaces/deal';
import { Property } from '../interfaces/property';

@Component({
	selector: 'details',
	templateUrl: 'details.html'
})
export class DetailsComponent {
    
    @Input() contact: Contact;
    @Input() deal: Deal;
    @Input() property: Property;

}