import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, 
         IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, constructOutline } from 'ionicons/icons';

@Component({
  selector: 'app-detalle-incidencia',
  templateUrl: './detalle-incidencia.page.html',
  styleUrl: './detalle-incidencia.page.scss',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, 
            IonButtons, IonBackButton, IonIcon]
})
export class DetalleIncidenciaPage {
  constructor() {
    addIcons({ arrowBack, constructOutline });
  }
}