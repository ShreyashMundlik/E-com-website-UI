import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ClothesComponent } from './clothes/clothes.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { FootwearComponent } from './footwear/footwear.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PantsComponent } from './pants/pants.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ShirtsComponent } from './shirts/shirts.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"", component:LoginComponent},
  {path:"sign-up", component:SignUpComponent},
  {path:"update",component:UpdateComponent},
  {path:"home", component:HomeComponent, canActivate:[AuthGuard],children:[ 
     {path:"mobiles",component:MobilesComponent},
     {path:"footwear",component:FootwearComponent},
     {path:"clothes",component:ClothesComponent,children:[
      {path:"shirts",component:ShirtsComponent},
      {path:"pants",component:PantsComponent},
     ]},

]},
{path:"cart",component:CartComponent},

  {path:"footer",component:FooterComponent,canActivate:[AuthGuard]},
  {path:"**",component:Error404Component,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
