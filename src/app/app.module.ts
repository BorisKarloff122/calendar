import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { MealFormComponent } from './forms/meal-form/meal-form.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RegPageComponent } from './pages/reg-page/reg-page.component';
import { MealViewComponent } from './forms/meal-view/meal-view.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserFormComponent,
    MealFormComponent,
    CalendarComponent,
    RegPageComponent,
    MealViewComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
