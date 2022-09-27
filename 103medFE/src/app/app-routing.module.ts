import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'data-table', loadChildren: () => import('./Pages/data-table/data-table.module').then(m => m.DataTableModule), pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./Pages/users/users.module').then(m => m.UsersModule), pathMatch: 'full' },
  { path: '**', redirectTo: '/data-table' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
