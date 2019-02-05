import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Contact } from '../../interfaces/contact';

@Component({
	selector: 'contact-form',
	templateUrl: 'contact-form.html'
})
export class ContactForm {

    public contact: Contact = <Contact>{profile: {}};

    constructor(
        private navParams: NavParams,
        private viewController: ViewController
    ) { }

    ngOnInit() {
        if (this.navParams.get('contact'))
            this.contact = this.navParams.get('contact');
    }

    save(form: NgForm) {
        this.viewController.dismiss(this.contact);
    }

    close() {
        this.viewController.dismiss();
    }

}