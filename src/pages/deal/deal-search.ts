import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Deal } from '../../interfaces/deal';
import { DealService } from '../../service/deal.service';

@Component({
	selector: 'deal-search',
    templateUrl: 'deal-search.html'
})
export class DealSearch {

    public deals: Deal[] = [];
    public textSearch: string;
    constructor(
        private _deals: DealService,
        private viewController: ViewController
    ) { }

    onChange() {
        // this._deals.getFromSearch(this.textSearch).subscribe(deals => {
        //     this.deals = deals;
        // });
    }

    select(contact: Deal) {
        this.viewController.dismiss(contact);
    }

}