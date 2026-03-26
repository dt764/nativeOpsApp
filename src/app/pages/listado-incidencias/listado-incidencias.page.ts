import { Component, inject, OnInit } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';
import {
  IonHeader, IonToolbar, IonContent, IonTitle, 
  IonList, IonItem, IonLabel, IonThumbnail
} from '@ionic/angular/standalone';

import { DatePipe } from '@angular/common';

@Component({

  selector: 'app-listado',
  templateUrl: './listado-incidencias.page.html',
  styleUrl : './listado-incidencias.page.scss',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, DatePipe, IonThumbnail]
})
export class ListadoIncidenciasPage implements OnInit {

  private service = inject(IncidenciasService);

  incidencias = this.service.incidencias;

  async ngOnInit() {
  if (this.service.incidencias().length === 0) {
    await this.service.load();
  }
}
}