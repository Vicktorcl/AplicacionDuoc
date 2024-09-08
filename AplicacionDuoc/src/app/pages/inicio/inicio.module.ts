import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { RouteReuseStrategy } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';

// CGV: Para usar Angular Material se deben agregar los sguientes módulos

@NgModule({
  imports: [
      CommonModule
    , FormsModule
    , IonicModule
    , InicioPageRoutingModule
    , MatDatepickerModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
  ],
  declarations: [InicioPage],
})
export class InicioPageModule {}
