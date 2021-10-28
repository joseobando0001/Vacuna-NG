import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminService } from './services/admin.service';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { NgxSpinnerModule } from 'ngx-spinner';
//import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthService } from './services/auth.service';
import { ChartistModule } from 'ng-chartist';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ChartistModule,
    ButtonModule,
    ToastrModule.forRoot(),
    ToastModule,
    DynamicDialogModule,
    TableModule,
   // OAuthModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [AdminService, AuthService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
