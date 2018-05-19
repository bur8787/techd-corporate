import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }
    lat: number = 35.777764;
    lng: number = 139.720912;

    facebook() {
        window.open('https://www.facebook.com/takahiro.suzuki.9216', '_blank')
    }

    twitter() {
        window.open('https://twitter.com/_suzutt', '_blank')
    }

}
