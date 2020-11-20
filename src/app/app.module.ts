import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TransactionComponent } from './components/transaction/transaction.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component'; 
import { Interceptor } from '../app/interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransactionComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
