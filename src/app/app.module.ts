import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { LoginaccountComponent } from './shop/loginaccount/loginaccount.component';
import { ShopModule } from './shop/shop.module';
import { FormsModule } from '@angular/forms';
import { RestService } from './model/rest.services';
import { HttpClientModule } from '@angular/common/http';
import { OrderpageComponent } from './shop/orderpage/orderpage.component';
import { PendingorderComponent } from './shop/pendingorder/pendingorder.component';
import { OrderhistoryComponent } from './shop/orderhistory/orderhistory.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ShopModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'login',component:LoginaccountComponent},
      {path:'shop',component:ShopComponent},
      {path:'orderpage',component:OrderpageComponent,canActivate:[],children:[
        {path:'pendingorder',component:PendingorderComponent},
        {path:'orderhistory',component:OrderhistoryComponent},
  
      ]},

      {path:'**',redirectTo:"/login"}
    ])

  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
