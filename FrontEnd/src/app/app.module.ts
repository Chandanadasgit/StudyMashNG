import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router'


import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component'



const appRoutes:Routes=[
    {path : '',component:PropertyListComponent},
    {path :'add-property', component:AddPropertyComponent},
    {path :'rent-property',component:PropertyListComponent},
    {path :'property-detail/:id',component:PropertyDetailComponent},
    {path :'**' ,component:PropertyListComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
