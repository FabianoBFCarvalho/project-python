import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';
import { Property } from '../../interfaces/property';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'property-form',
	templateUrl: 'property-form.html'
})
export class PropertyForm {

    public property: Property = <Property>{};

    constructor(
        private navParams: NavParams,
        private viewController: ViewController
    ) { }

    ngOnInit() {
        if (this.navParams.get('property'))
            this.property = this.navParams.get('property');
    }

    save(form: NgForm) {
        this.viewController.dismiss(this.property);
    }

    close() {
        this.viewController.dismiss();
    }

}