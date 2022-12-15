import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DifferencesDatesComponent } from "./differences-dates/differences-dates.component";


@NgModule({
    declarations: [
        AppComponent,
        DifferencesDatesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        FlexLayoutModule,
        
    ]
})
export class AppModule { }
