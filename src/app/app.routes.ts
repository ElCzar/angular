import { Routes } from '@angular/router';
import { ContratosVerComponent } from './components/contratos-ver/contratos-ver.component';
import { ContratosCuComponent } from './components/contratos-cu/contratos-cu.component';

export const routes: Routes = [
  { path: '', redirectTo: '/ver', pathMatch: 'full' },
  { path: 'ver', component: ContratosVerComponent },
  { path: 'cu', component: ContratosCuComponent }
];