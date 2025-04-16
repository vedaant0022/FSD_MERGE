import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExaminorComponent } from './Component/Examinor/examinor/examinor.component';
import { VenueComponent } from './Component/Venue/venue/venue.component';
import { MarksheetComponent } from './Component/Marksheet/marksheet/marksheet.component';
import { PracticalComponent } from './Component/PracticalExam/practical/practical.component';

export const routes: Routes = [
    {path:'examinor', component:ExaminorComponent},
    {path:'venue', component:VenueComponent},
    {path:'practicalexam', component:PracticalComponent},
    {path:'marksheet', component:MarksheetComponent},
    {path:'', component:AppComponent},
];
