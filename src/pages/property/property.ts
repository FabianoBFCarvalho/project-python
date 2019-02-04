import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Property } from '../../interfaces/property';
import { PropertiesService } from '../../service/property.service';
import { ModalController, Modal } from 'ionic-angular';
import { PropertyForm } from './property-form';
import { PropertySearch } from './property-search';

@Component({
	selector: 'property',
	templateUrl: 'property.html'
})
export class PropertyPage {

	public properties: Property[];
	@Output() onClickProperty: EventEmitter<Property> = new EventEmitter<Property>();

	constructor(
		private _properties: PropertiesService,
		private modalController: ModalController
	) { }

	ngOnInit() {
		console.log('Ieenit');
		this.getProperties();
	}

	getProperties() {
		this._properties.get().subscribe(properties => this.properties = properties);
	}

	propertyForm(property: Property = undefined) {
		let modal: Modal = this.modalController.create(PropertyForm, {
			property: property
		});
		modal.onDidDismiss(property => {
			if (property) {
				if (property.db_id)
					this.update(property)
				else
					this.save(property);
			}
		});
		modal.present();
	}

	searchProperties() {
		let modal: Modal = this.modalController.create(PropertySearch);
		modal.onWillDismiss(property => {
			if (property)
				this.showProperty(property);
		});
		modal.present();
	}
	  
	save(property: Property) {
        this._properties.post(property).subscribe(response => {
			property.db_id = response.db_id;
			this.properties.push(property);
        });
    }

	update(property: Property) {
		this._properties.update(property).subscribe(() => {});
	}

	delete(db_id: string, idx: number) {
		this._properties.delete(db_id).subscribe(() => {
			this.properties.splice(idx, 1);
		});
	}

	showProperty(property: Property) {
		this.onClickProperty.emit(property);		
	}
}
