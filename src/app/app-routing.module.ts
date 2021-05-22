import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { TransformationComponent } from './transformation/transformation.component';
import { BlogComponent} from './blog/blog.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { Blog1Component} from './blog1/blog1.component';


import { Blog2Component} from './blog2/blog2.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'transformation',component:TransformationComponent},
    {path:'blog',component:BlogComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'blog1',component:Blog1Component},
    {path:'blog2',component:Blog2Component},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

