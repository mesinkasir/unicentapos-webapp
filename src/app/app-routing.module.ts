import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { BuyComponent } from "./buy/buy.component";
import { SellComponent } from "./sell/sell.component";
import { CatComponent } from "./cat/cat.component";
import { UserComponent } from "./user/user.component";
import { CashComponent } from "./cash/cash.component";
import { CostComponent } from "./cost/cost.component";
import { DocComponent } from "./doc/doc.component";
import { HomeComponent } from "./home/home.component";
import { AndroidComponent } from "./android/android.component";

const routes: Routes = [
  { path: "first", component: FirstComponent },
  { path: "buy", component: BuyComponent },
  { path: "sell", component: SellComponent },
  { path: "cat", component: CatComponent },
  { path: "user", component: UserComponent },
  { path: "cash", component: CashComponent },
  { path: "cost", component: CostComponent },
  { path: "doc", component: DocComponent },
  { path: "home", component: HomeComponent },
  { path: "android", component: AndroidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
