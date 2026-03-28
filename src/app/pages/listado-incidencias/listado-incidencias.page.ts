import { Component, inject, OnInit } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonList, IonItem, IonLabel, IonThumbnail, IonButtons, IonBackButton, IonButton, IonIcon } from '@ionic/angular/standalone';

import { DatePipe } from '@angular/common';

import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({

  selector: 'app-listado',
  templateUrl: './listado-incidencias.page.html',
  styleUrl : './listado-incidencias.page.scss',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, DatePipe, IonThumbnail, IonButtons, IonBackButton,]
})
export class ListadoIncidenciasPage implements OnInit {

  private service = inject(IncidenciasService);
  private router = inject(Router);

  incidencias = this.service.incidencias;

  async ngOnInit() {
    addIcons({ arrowBack });
    if (this.service.incidencias().length === 0) {
      await this.service.load();
    }
  }

  verDetalle(id: string) {
    this.router.navigate(['/detalle-incidencia', id]);
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;

    // Si ya es el placeholder, no hacer nada (evita bucle/parpadeo)
    if (img.src.includes('no-image.jpg')) return;

    img.src = 'assets/no-image.jpg';
  }
}