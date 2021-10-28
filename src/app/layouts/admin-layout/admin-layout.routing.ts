import { PersonComponent } from './../../person/person.component';
import { RegisterComponent } from './../../register/register.component';
import { EditarVacunaComponent } from './../../vacunas/editar-vacuna/editar-vacuna.component';
import { EmpleadosComponent } from './../../empleados/empleados.component';
import { Routes } from '@angular/router';
import { ErrorComponent } from 'app/error/error.component';
import { EditarEmpleadoComponent } from 'app/empleados/editar-empleado/editar-empleado.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'error', component: ErrorComponent },
    { path: 'person', component: PersonComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'modificar-empleado/:id', component: EditarEmpleadoComponent },
    { path: 'modificar-vacuna/:id', component: EditarVacunaComponent },

];
