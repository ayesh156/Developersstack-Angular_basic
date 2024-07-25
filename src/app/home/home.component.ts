import { Component } from "@angular/core";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrl:'./home.component.scss',
    // template: '<h1>Hello i am the Template</h1>'
})

export class HomeComponent{
    name:string = "";
}