import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
selector: 'page-details',
templateUrl: 'details.html',
styles: ['./details.scss']
})

export class DetailsPage {

    public parameters: any;

    constructor(
        public navCtrl: NavController,
        public params: NavParams){
            this.parameters = params.get("parameters");
        }

    ionViewDidLoad() {
        console.log("Page details shown", this.parameters);
    }
}