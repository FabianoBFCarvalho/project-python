import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Deal } from '../../interfaces/deal';
import { Contact } from '../../interfaces/contact';
import { Property } from '../../interfaces/property';
import { PropertiesService } from '../../service/property.service';
import { ContactService } from '../../service/contact.service';

@Component({
	selector: 'deal-form',
	templateUrl: 'deal-form.html'
})
export class DealForm {

    public deal: Deal = <Deal>{};
    public contacts: Contact[];
    public properties: Property[]
    public contact: Contact;
    public property: Property;

    constructor(
        private navParams: NavParams,
        private viewController: ViewController,
        private _properties: PropertiesService,
        private _contacts: ContactService
    ) { }

    ngOnInit() {
        if (this.navParams.get('deal')) {
            this.deal = this.navParams.get('deal');
            this.contact = <Contact>this.deal.contact;
            this.property = <Property>this.deal.property;
        }
        this._contacts.get().subscribe(contacts => this.contacts = contacts);
        this._properties.get().subscribe(properties => this.properties = properties)
    }

    save(form: NgForm) {
        this.viewController.dismiss({deal: this.deal, contact: this.contact, property: this.property});
    }

    close() {
        this.viewController.dismiss();
    }

    compareFn(obj1: any, obj2: any): boolean {
        return obj1.db_id == obj2.db_id
    }

}