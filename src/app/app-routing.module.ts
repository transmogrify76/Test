import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiabeticComponent } from './diabetic/diabetic.component';
import { KidneyComponent } from './kidney/kidney.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ParkinsonsComponent } from './parkinsons/parkinsons.component';
import { LiverComponent } from './liver/liver.component';


const routes: Routes = [


  {  path: 'diabetic',
    component: DiabeticComponent
  },

  { path: 'kidney', 
  component: KidneyComponent
  },

  { path: 'navbar',
  component: NavbarComponent
  },

  { path: 'home' ,
  component: HomeComponent
  },

  { path: 'parkinsons' ,
  component: ParkinsonsComponent
  },

  { path: 'liver' ,
  component: LiverComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
