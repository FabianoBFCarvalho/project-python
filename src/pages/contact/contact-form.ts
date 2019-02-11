import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Contact } from '../../interfaces/contact';
import { Observable } from 'rxjs/Observable';

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

    prepareImage($event) {
        let formData: FormData = new FormData();
        let file: File = $event.target.files[0];
        console.log(file);
        // formData.append('image', file, file.name);
        // console.log(formData);
        this.fileTob64(file).subscribe(b64 => {
            this.contact['profile_image'] = b64;
            console.log(this.contact);
            
            
        });
        
    }

    fileTob64(file: File): Observable<Object> {
        return new Observable<Object>(observer => {
            if (file.type.match(/image.*/)) {
                // Load the image
                let reader = new FileReader();
                reader.onload =  (readerEvent) => {
                    let image = new Image();
                    image.onload = (event) => {
                        let canvas = document.createElement('canvas');
                        observer.next(canvas.toDataURL());
                    }
                    image.src = readerEvent.target['result'];
                };        
                reader.readAsDataURL(file);
            }
        });
 
    }

    save(form: NgForm) {
        this.viewController.dismiss(this.contact);
    }

    close() {
        this.viewController.dismiss();
    }

}