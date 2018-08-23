import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipListComponent } from 'src/app/components/tip-list/tip-list.component'
import { AboutComponent } from 'src/app/components/about/about.component'

const routes: Routes = [
  {
    path: 'tiplist',
    component: TipListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: TipListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
