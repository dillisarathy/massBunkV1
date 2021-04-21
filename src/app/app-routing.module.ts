import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'services',
      component: ServicesComponent,
    },
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path: '**',
      component: PagenotfoundComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
