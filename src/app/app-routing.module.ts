import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from '../app/components/transaction/transaction.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionComponent },
 /* { path: '', redirectTo:'home' , pathMatch:'full' },
  { path: '**' ,component:NotFoundComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
