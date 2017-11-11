import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DescriptionComponent } from './description/description.component';
import { CategoriesComponent } from './categories/categories.component';
import { OasitComponent } from './oasit/oasit.component';
import { CalendarIosComponent } from './calendar-ios/calendar-ios.component';
import { CalendarWebComponent } from './calendar-web/calendar-web.component';
import { PetropowerComponent } from './petropower/petropower.component';
import { PetropowerProjectsComponent } from './petropower-projects/petropower-projects.component';
import { AiaaComponent } from './aiaa/aiaa.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DescriptionComponent,
    CategoriesComponent,
    OasitComponent,
    CalendarIosComponent,
    CalendarWebComponent,
    PetropowerComponent,
    PetropowerProjectsComponent,
    AiaaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
