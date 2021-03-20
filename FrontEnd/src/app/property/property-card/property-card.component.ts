import { createDirective } from "@angular/compiler/src/core";
import { Component } from "@angular/core";



@Component({
    selector:'app-property-card',
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css']
})
export class PropertyCardComponent
{
    property:any={
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
    }
}