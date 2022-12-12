import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { LoginaccountComponent } from "./loginaccount/loginaccount.component";
import { ShopComponent } from "./shop.component";
import { CategoriesComponent } from './categories/categories.component';
import { PopularprodutcsComponent } from './popularprodutcs/popularprodutcs.component';
import { RecentlyvisitedComponent } from './recentlyvisited/recentlyvisited.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { PendingorderComponent } from './pendingorder/pendingorder.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';

@NgModule({
  
    imports: [BrowserModule,FormsModule,RouterModule],
    providers:[],
    declarations: [
      ShopComponent,
      LoginaccountComponent,
      CategoriesComponent,
      PopularprodutcsComponent,
      RecentlyvisitedComponent,
      OrderpageComponent,
      PendingorderComponent,
      OrderhistoryComponent
    ],
    exports:[LoginaccountComponent,ShopComponent]
  })
export class ShopModule{}