import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from "./code404/code404.component";
import {ProductDescComponent} from "./product-desc/product-desc.component";
import {SellerInfoComponent} from "./seller-info/seller-info.component";
import {ChatComponent} from "./chat/chat.component";
import {LoginGuard} from "./guard/login.guard";
import {UnsaveGuard} from "./guard/unsave.guard";
import {ProductResolve} from "./guard/product.resolve";


const routes: Routes = [
  //  重定向路由 redirectTo
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  // {path: 'product', component: ProductComponent},
  {
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [LoginGuard],
    canDeactivate: [UnsaveGuard],
    resolve: {product: ProductResolve},
    children: [
      {path: '', component: ProductDescComponent},
      {path: 'seller/:id', component: SellerInfoComponent},
    ]
  },
  {path: '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsaveGuard, ProductResolve]
})
export class AppRoutingModule {

}
