import { Component, Output, EventEmitter } from "@angular/core";
import { Deal, DealObjectPrepare } from "../../interfaces/deal";
import { DealService } from "../../service/deal.service";
import { Modal, ModalController } from "ionic-angular";
import { DealForm } from "./deal-form";

@Component({
	selector: 'deal',
	templateUrl: 'deal.html'
})
export class DealPage {

    public deals: Deal[];
    @Output() onClickDeal: EventEmitter<Deal> = new EventEmitter<Deal>();

    constructor(
        private _deal: DealService,
        private modalController: ModalController
    ){ }

    ngOnInit() {
        this.get();
    }

    dealForm(deal: Deal = undefined) {
        let modal: Modal = this.modalController.create(DealForm, {
            deal: deal
        });
        modal.onDidDismiss((dealForm: DealObjectPrepare) => {
            if (dealForm) {
                if (dealForm.deal.db_id)
                    this.update(dealForm)
                else
                    this.save(dealForm);
            }
        });
        modal.present();
    }

    update(deal: DealObjectPrepare) {
        this._deal.update(deal).subscribe(() => {});
    }
    
    get() {
        this._deal.get().subscribe(deals => this.deals = deals);
    }

    save(deal: DealObjectPrepare) {
        this._deal.post(deal).subscribe(response =>{
            console.log(response);
            this.get();
        });
    }

    delete(db_id: string) {
        this._deal.delete(db_id).subscribe(() => this.get());
    }

    showDeal(deal: Deal) {
        this.onClickDeal.emit(deal);
    }
}