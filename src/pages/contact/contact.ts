
import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactService } from '../../service/contact.service';
import { ModalController, Modal } from 'ionic-angular';
import { ContactForm } from './contact-form';

@Component({
	selector: 'contact',
	templateUrl: 'contact.html'
})
export class ContactPage {

    public contacts: Array<Contact> = [];
    @Output() onClickContact: EventEmitter<Contact> = new EventEmitter<Contact>();

    constructor(
        private _contact: ContactService,
        private modalController: ModalController
    ){ }

    ngOnInit() {
        this.getContacts();
    }

    getContacts() {
        this._contact.getContacts().subscribe(contacts => {
            this.contacts = contacts;
            console.log(contacts);
            
        });
    }

    contactForm(contact: Contact = undefined) {
		let modal: Modal = this.modalController.create(ContactForm, {contact: contact});
		modal.onDidDismiss(contact => {
			if (contact) {
				if (contact.db_id)
					this.update(contact);
				else
					this.save(contact)
			}
		});
		modal.present();
    }

    save(contact: Contact) {
        this._contact.post(contact).subscribe(response => {
            contact.db_id = response.db_id;
            this.contacts.push(contact);
        });
    }

    update(contact: Contact) {
        this._contact.update(contact).subscribe(response => {
        });
    }

    delete(db_id: string, idx: number) {
        this._contact.delete(db_id).subscribe(() => {
            this.contacts.splice(idx, 1);
        });
    }

    showContact(contact: Contact) {
        this._contact.getContact(contact.db_id).subscribe(contact => {
            this.onClickContact.emit(contact);
        });
    }

}