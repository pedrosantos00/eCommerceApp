import { OrdersModule } from './orders/orders.module';
import { CanActivate } from '@angular/router';
import { CheckoutsModule } from './checkout/checkouts.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'} },
  {path: 'test-error', component: TestErrorComponent },
  {path: 'not-found', component: NotFoundComponent },
  {path: 'server-error', component: ServerErrorComponent },
  // THIS IS FOR LAZY LOADING
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},
  {path: 'basket', loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule)},
  {
    path: 'checkout',
    canActivate:  [AuthGuard],
    loadChildren: () => import('./checkout/checkouts.module').then(m => m.CheckoutsModule)
  },
  {path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
   data: { breadcrumb: {skip: true}}},
  {path: 'orders',canActivate: [AuthGuard], loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
  data: { breadcrumb: 'orders' }
},

  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
