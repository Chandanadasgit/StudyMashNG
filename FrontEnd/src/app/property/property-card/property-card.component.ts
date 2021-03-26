import { createDirective } from "@angular/compiler/src/core";
import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty";



@Component({
    selector:'app-property-card',
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css']
})
export class PropertyCardComponent
{
  @Input() property:IProperty;

}
