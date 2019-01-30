import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Property } from '../../interfaces/property';
import { Contact } from '../../interfaces/contact';
import { Deal } from '../../interfaces/deal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public deal: Deal;
  public contact: Contact;
  public property: Property;

  constructor(

  ) { }

  onClickProperty(property: Property) {
    console.log('onClickProperty');
    
    this.property = property;
    this.deal = undefined;
    this.contact = undefined;
  }

  onClickContact(contact: Contact) {
    console.log('onClickContact');
    
    this.contact = contact;
    this.property = undefined;
    this.deal = undefined;
  }

  onClickDeal(deal: Deal) {
    console.log('onClickDeal');
    
    this.deal = deal;
    this.property = undefined;
    this.contact = undefined;
  }

}
