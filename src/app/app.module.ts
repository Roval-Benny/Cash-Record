import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { InOutButtonComponent } from './in-out-button/in-out-button.component';
import { InWindowComponent } from './in-window/in-window.component';

import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutWindowComponent } from './out-window/out-window.component';
import { SummaryComponent } from './summary/summary.component';
import { DataService } from './services/data.service';
import { LoginComponent } from './login/login.component';
import { CanActivateRouteGaurd } from './can-activate-route.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    InOutButtonComponent,
    InWindowComponent,
    OutWindowComponent,
    SummaryComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService,CanActivateRouteGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
