import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from '../app/components/transaction/transaction.component';
import { HomeComponent } from '../app/components/home/home.component';
import { NotFoundComponent } from '../app/components/not-found/not-found.component'

const routes: Routes = [
  { path: 'transaction', component: TransactionComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'notFound', component: NotFoundComponent },
  { path: '', redirectTo:'home' , pathMatch:'full' },
  { path: '**' ,component:NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
