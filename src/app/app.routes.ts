import { Routes } from '@angular/router';
import { AddEditorialComponent } from './components/add-editorial/add-editorial.component';
import { AddEjemploComponent } from './components/add-ejemplo/add-ejemplo.component';

export const routes: Routes = [
    { path: '', component: AddEjemploComponent },
    { path: 'registraEditorial', component: AddEditorialComponent}
];
