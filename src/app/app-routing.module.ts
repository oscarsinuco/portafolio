import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BienvenidaPageModule } from "./bienvenida/bienvenida.module";
import { TecnologiasPageModule } from './tecnologias/tecnologias.module';
import { HomePageModule } from './home/home.module';
import { ContactoPageModule } from './contacto/contacto.module';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => {return HomePageModule},
    data: {
      state: 'home'
    }
  },
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    loadChildren: () => {return BienvenidaPageModule},
    data: {
      state: 'bienvenida'
    }
  },
  {
    path: 'tecnologias',
    loadChildren: () => {return TecnologiasPageModule},
    data: {
      state: 'tecnologias'
    }
  },
  {
    path: 'contacto',
    loadChildren: () => {return ContactoPageModule}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
