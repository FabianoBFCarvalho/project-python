import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Property, SearchProperty } from '../../interfaces/property';
import { PropertiesService } from '../../service/property.service';

@Component({
	selector: 'property-search',
    templateUrl: 'property-search.html' 
})
export class PropertySearch {

    public profile: SearchProperty = <SearchProperty>{};
    public properties: Property[] = [];
    public countPropertyFounds: number;

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