import { Component, inject } from '@angular/core';
import { IonContent, IonButton, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { IncidenciasService } from '../../services/incidencias.service';
import { ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nueva-incidencia',
  templateUrl: './nueva-incidencia.page.html',
  standalone: true,
  imports: [IonContent, IonButton, IonHeader, IonToolbar, IonTitle],
})
export class NuevaIncidenciaPage {

  private incidenciasService = inject(IncidenciasService);
  private toastController = inject(ToastController);

  photo?: string;
  latitude?: number;
  longitude?: number;

  // 📷 Tomar foto + geolocalización
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 80,
        resultType: CameraResultType.Uri
      });

      if (image.webPath) {
        this.photo = image.webPath;

        const position = await Geolocation.getCurrentPosition();

        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }

    } catch (error) {
      console.error('Error:', error);
      this.showToast('Error al tomar la foto o obtener ubicación', 'danger');
    }
  }

  // 💾 Guardar incidencia
  async save() {
    if (!this.photo || !this.latitude || !this.longitude) {
      this.showToast('Faltan datos', 'warning');
      return;
    }

    await this.incidenciasService.add({
      id: crypto.randomUUID(),
      photo: this.photo,
      latitude: this.latitude,
      longitude: this.longitude,
      createdAt: Date.now()
    });

    this.showToast('Incidencia guardada', 'success');

    // reset
    this.photo = undefined;
    this.latitude = undefined;
    this.longitude = undefined;
  }

  // 🔔 Función genérica para mostrar Toast
  private async showToast(message: string, color: 'success' | 'warning' | 'danger' = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top'
    });
    await toast.present();
  }
}