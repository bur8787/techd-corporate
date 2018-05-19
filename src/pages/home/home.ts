import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    lat: number = 35.777764
    lng: number = 139.720912
    zoom: number = 15

    message: string = `Techd creates web applications for making people happy. I think that humans should do what humans are good at and computers should do what computers are good at.\n\nHappy engineering!`

    technologies: Array<TableMap> = [
        {name: "Applications", description: "Web Application(SPA, PWA)"},
        {name: "Platforms", description: "AWS(EC2, ECS, Lambda, RDS, Redshift), GCP( Kubernetes Engine, Cloud SQL)"},
        {name: "Programming Languages (Backend)", description: "Kotlin(Spring Boot), Go"},
        {name: "Programming Languages (Frontend)", description: "Angular(Ionic)"},
        {name: "Methods", description: "MicroService, RestAPI, gRPC, TDD, DDD"},
        {name: "Tools", description: "Github, Gitlab, CircleCI, Docker, Kubernetes, Terraform"},
    ]

    profile: Array<TableMap> = [
        {name: "Trade Name", description: "techd"},
        {name: "Established", description: "Jun 11, 2017"},
        {name: "Business", description: "Web Application Engineering"},
        {name: "President", description: "Takahiro Suzuki"},
        {name: "Place", description: "Akabane Kita-ku Tokyo, Japan"},
    ]

    seede() {
        window.open('https://seede.io', '_blank')
    }

    facebook() {
        window.open('https://www.facebook.com/takahiro.suzuki.9216', '_blank')
    }

    twitter() {
        window.open('https://twitter.com/_suzutt', '_blank')
    }

}

export interface TableMap {
    name: string
    description: string
}
