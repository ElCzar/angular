import { Routes } from '@angular/router';
import { ContratosVerComponent } from './components/contratos-ver/contratos-ver.component';
import { ContratosCuComponent } from './components/contratos-cu/contratos-cu.component';
import { ContratosEliminarComponent } from './components/contratos-eliminar/contratos-eliminar.component';
import { ContratosActualizarComponent } from './components/contratos-actualizar/contratos-actualizar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/ver', pathMatch: 'full' },
  { path: 'ver', component: ContratosVerComponent },
  { path: 'eliminar', component: ContratosEliminarComponent },
  { path: 'crear', component: ContratosCuComponent },
  { path: 'actualizar', component: ContratosActualizarComponent },
];