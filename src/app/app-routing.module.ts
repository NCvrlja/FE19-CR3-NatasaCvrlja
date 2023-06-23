import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { DetailsComponent } from './details/details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: "about-us", component: AboutUsComponent
  },
  {
    path: "menu", component: MenuComponent
  },
  {
    path: "", component: HomeComponent
  },
  {
    path: "order", component: OrderComponent
  },{
    path: "details/:indexRouting", component: DetailsComponent
  },
  {
    path: "contact-us", component: ContactUsComponent
  },{
    path: "**", redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
