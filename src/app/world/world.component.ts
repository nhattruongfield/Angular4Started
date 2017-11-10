import {Component} from "@angular/core"

@Component({
	templateUrl:"./world.component.html",
	selector:"app-world",
	styleUrls:["./world.component.css"]
})

export class WorldComponent{
	en="Hello";
	vn="Xin chao";
	imageUrl="https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
	forgot=false;

	toggleForgot(){
		this.forgot=!this.forgot;
	}
}