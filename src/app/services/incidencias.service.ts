import { Injectable, signal, computed } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Incidencia } from '../models/incidencia.model';

const KEY = 'incidencias';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {

  private _incidencias = signal<Incidencia[]>([]);
  incidencias = this._incidencias.asReadonly();

  total = computed(() => this._incidencias().length);

  // Inicializar desde storage
  async load(): Promise<void> {
    const { value } = await Preferences.get({ key: KEY });

    if (value) {
      this._incidencias.set(JSON.parse(value));
    } else {
      this._incidencias.set([]);
    }
  }

  async add(incidencia: Incidencia): Promise<void> {
    const updated = [...this._incidencias(), incidencia];

    this._incidencias.set(updated);

    await this.saveToStorage(updated);
  }

  private async saveToStorage(data: Incidencia[]): Promise<void> {
    await Preferences.set({
      key: KEY,
      value: JSON.stringify(data)
    });
  }

  async clear(): Promise<void> {
    this._incidencias.set([]);
    await Preferences.remove({ key: KEY });
  }
}