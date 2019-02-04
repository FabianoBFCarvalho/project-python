import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Contact } from '../../interfaces/contact';
import { ContactService } from '../../service/contact.service';

@Component({
	selector: 'contact-search',
    template: `
        <ion-input placeholder="search contact" [(ngModel)]="textSearch" (keyup)="onChange()"></ion-input>
        <div *ngFor="let contact of contacts" (click)="select(contact)">
            <span> {{contact.name}} </span>
        </div>
    `
})
export class ContactSearch {

    public contacts: Contact[] = [];
    public textSearch: string;
    constructor(
        private _contacts: ContactService,
        private viewController: ViewController
    ) { }

    onChange() {
        this._contacts.getFromSearch(this.textSearch).subscribe(contacts => {
            this.contacts = contacts;
        });
    }

    select(contact: Contact) {
        this.viewController.dismiss(contact);
    }

}