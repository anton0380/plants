import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent} from './main/main.component';
import { StaticPageComponent } from './static-page/static-page.component';

const appRoutes: Routes = [
  {
    path: 'howtobuy', component: StaticPageComponent, data: {
      fileName: 'howtobuy.html',
      title: 'Оплата'
    }},
  {
    path: 'about', component: StaticPageComponent, data: {
      fileName: 'about.html',
      title: 'О фирме'
    }
  },
  {
    path: '', pathMatch: 'full', component: MainComponent
  },
  {
    path: '**', component: StaticPageComponent, data: {
      fileName: '404.html',
      title: 'Ошибка'
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
