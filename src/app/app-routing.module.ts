import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from '../app/components/transaction/transaction.component';
import { HomeComponent } from '../app/components/home/home.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionComponent },
  { path: 'home', component: HomeComponent }, 
  { path: '', redirectTo:'home' , pathMatch:'full' },
  { path: '**' ,component:HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
