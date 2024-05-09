import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CreateFormComponent } from './components/pages/create-form/create-form.component';
import { EditInfoComponent } from './components/pages/edit-info/edit-info.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/pages/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DashboardComponent,
    CreateFormComponent,
    EditInfoComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
