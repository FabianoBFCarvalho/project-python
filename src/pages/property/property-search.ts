import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Property } from '../../interfaces/property';
import { PropertiesService } from '../../service/property.service';
import { PropertyProfile } from '../../interfaces/property-profile';

@Component({
	selector: 'property-search',
    templateUrl: 'property-search.html' 
})
export class PropertySearch {

    public profile: PropertyProfile = <PropertyProfile>{};
    public properties: Property[] = [];
    public countPropertyFounds: number;
    public area = {
        upper: 50,
        lower: 0
    }
    constructor(
        private _property: PropertiesService,
        private viewController: ViewController
    ) { }

    search() {
        this._property.getFromSearch(this.profile).subscribe(response => {
            this.properties = response.properties;
            this.countPropertyFounds = response.count;
        });
    }

    select(property: Property) {
        this.viewController.dismiss(property);
    }

}