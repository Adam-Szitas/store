import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { OutputComponent } from './components/output/output.component';
import { ContainerComponent } from './container/container.component';
import { StoreFacadeService } from './services/store-facade.service';
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { FORM_FEATURE_NAME, Reducer } from './store/reducers/reducer';
import { ReactiveComponentModule } from '@ngrx/component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OutputComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(FORM_FEATURE_NAME, Reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [StoreFacadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
