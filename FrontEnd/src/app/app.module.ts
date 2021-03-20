import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'





@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
