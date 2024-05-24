import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiabeticComponent } from './diabetic/diabetic.component';
import { KidneyComponent } from './kidney/kidney.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ParkinsonsComponent } from './parkinsons/parkinsons.component';
import { LiverComponent } from './liver/liver.component';
import { BraintumorComponent } from './braintumor/braintumor.component';
import { PneumoniaComponent } from './pneumonia/pneumonia.component';
import { AlzheimersComponent } from './alzheimers/alzheimers.component';
import { TuberculosisComponent } from './tuberculosis/tuberculosis.component';

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

  { path: 'braintumor' ,
  component: BraintumorComponent
  },

  { path: 'pneumonia' ,
  component: PneumoniaComponent
  },
  
  { path: 'tb' ,
  component: TuberculosisComponent
  },

  { path: 'alzhemiers' ,
  component: AlzheimersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
