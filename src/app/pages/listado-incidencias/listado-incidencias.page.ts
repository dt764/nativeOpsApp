import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-listado-incidencias',
  templateUrl: './listado-incidencias.page.html',
  styleUrls: ['./listado-incidencias.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListadoIncidenciasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
