import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TagComponent } from './components/pages/tag/tag.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'cart',
    component:CartPageComponent
  },
  {
    path:'food/:id',
    component:FoodpageComponent
  },
  {
    path:'tags/:tag',
    component:HomeComponent
  },
  {
    path:'search/:searchItem',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
