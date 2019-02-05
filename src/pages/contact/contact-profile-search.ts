import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SearchProperty } from '../../interfaces/property';
import { Contact } from '../../interfaces/contact';
import { ContactService } from '../../service/contact.service';

@Component({
	selector: 'contact-profile-search',
    templateUrl: 'contact-profile-search.html' 
})
export class ContactProfileSearch {

    public profile: SearchProperty = <SearchProperty>{};
    public contacts: Contact[] = [];
    public countContactsFounds: number;

    constructor(
        private _contacts: ContactService,
        private viewController: ViewController
    ) { }

    search() {
        this._contacts.getContactsearch(this.profile).subscribe(response => {
            this.contacts = response.contacts;
            this.countContactsFounds = response.count;
        });
    }

    select(contact: Contact) {
        this.viewController.dismiss(contact);
    }

}