import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFabButton,
IonFab } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { camera } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFab,
IonFabButton],
})
export class HomePage  {
  public photo?: SafeResourceUrl;
  private sanitizer = inject(DomSanitizer);
  constructor() {
    addIcons({ camera });
  }
  public async takePicture(): Promise<void> {
    try {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
  
      if (image.webPath) {
        this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
      }
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }
}