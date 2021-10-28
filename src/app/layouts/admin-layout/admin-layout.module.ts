import { VacunadoComponent } from './../../vacunado/vacunado.component';
import { CreacionComponent } from './../../creacion/creacion.component';
import { PersonComponent } from './../../person/person.component';
import { CrearVacunaComponent } from './../../vacunas/crear-vacuna/crear-vacuna.component';
import { EditarVacunaComponent } from './../../vacunas/editar-vacuna/editar-vacuna.component';
import { VacunasComponent } from './../../vacunas/vacunas.component';
import { EditarEmpleadoComponent } from './../../empleados/editar-empleado/editar-empleado.component';
import { CrearEmpleadoComponent } from './../../empleados/crear-empleado/crear-empleado.component';
import { EmpleadosComponent } from './../../empleados/empleados.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { BlockUIModule } from 'primeng/blockui';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { ErrorComponent } from 'app/error/error.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ChartistModule } from 'ng-chartist';
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {MatStepperModule} from '@angular/material/stepper'
import { RegisterComponent } from 'app/register/register.component';
import { ModificarUserComponent } from 'app/creacion/modificar-user/modificar-user.component';
import { MostrarVacunadosComponent } from 'app/vacunado/mostrar-vacunados/mostrar-vacunados.component';
import { EditarVacunadosComponent } from 'app/vacunado/editar-vacunados/editar-vacunados.component';
import { LoginComponent } from 'app/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgSelectModule,
    ChartistModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MultiSelectModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    TooltipModule,
    MatMenuModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    DynamicDialogModule,
    PdfViewerModule,
    TableModule,
    DialogModule,
    MessageModule,
    MessagesModule,
    DropdownModule,
    RadioButtonModule,
    BlockUIModule,

    // InputNumberModule,
  ],
  declarations: [
    ErrorComponent,
    EmpleadosComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    VacunasComponent,
    EditarVacunaComponent,
    CrearVacunaComponent,
    RegisterComponent,
    PersonComponent,
    CreacionComponent,
    ModificarUserComponent,
    VacunadoComponent,
    MostrarVacunadosComponent,
    EditarVacunadosComponent,
    LoginComponent
  ]
})

export class AdminLayoutModule { }
