import { LoginComponent } from './../../login/login.component';
import { EditarVacunadosComponent } from './../../vacunado/editar-vacunados/editar-vacunados.component';
import { MostrarVacunadosComponent } from './../../vacunado/mostrar-vacunados/mostrar-vacunados.component';
import { PersonComponent } from './../../person/person.component';
import { RegisterComponent } from './../../register/register.component';
import { EditarVacunaComponent } from './../../vacunas/editar-vacuna/editar-vacuna.component';
import { EmpleadosComponent } from './../../empleados/empleados.component';
import { Routes } from '@angular/router';
import { ErrorComponent } from 'app/error/error.component';
import { EditarEmpleadoComponent } from 'app/empleados/editar-empleado/editar-empleado.component';
import { CreacionComponent } from 'app/creacion/creacion.component';
import { ModificarUserComponent } from 'app/creacion/modificar-user/modificar-user.component';
import { VacunadoComponent } from 'app/vacunado/vacunado.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'person', component: PersonComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'creacion', component: CreacionComponent },
    { path: 'vacunado', component: VacunadoComponent },
    { path: 'modificar-empleado/:id', component: EditarEmpleadoComponent },
    { path: 'modificar-vacuna/:id', component: EditarVacunaComponent },
    { path: 'modificar-user/:id', component: ModificarUserComponent },
    { path: 'vacunaciones', component: MostrarVacunadosComponent },
    { path: 'modificar-vacunaciones/:id', component: EditarVacunadosComponent },

];
