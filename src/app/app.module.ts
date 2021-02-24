import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { CatComponent } from './cat/cat.component';
import { UserComponent } from './user/user.component';
import { CostComponent } from './cost/cost.component';
import { CashComponent } from './cash/cash.component';
import { DocComponent } from './doc/doc.component';
import { HomeComponent } from './home/home.component';
import { AndroidComponent } from './android/android.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    BuyComponent,
    SellComponent,
    CatComponent,
    UserComponent,
    CostComponent,
    CashComponent,
    DocComponent,
    HomeComponent,
    AndroidComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
