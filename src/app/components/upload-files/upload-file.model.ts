import {LocalNgModuleData} from '@angular/compiler-cli/src/ngtsc/scope';
import {getLocaleDateFormat} from '@angular/common';

export class Pagina {
  id: number;
  titulo: string;
  subtitulo: string;
  description: string;
  orden: number;
  fechaPublicacion: string;
  fechaExpiracion: string;
  activa: boolean;
  etiqueta: string;
  images: string;
}
export const PAGINAS: Pagina[] = [
  {
    id: 0,
    titulo: '',
    subtitulo: 'd',
    description: 'string',
    orden: 0,
    fechaPublicacion: '0000-00-00',
    fechaExpiracion: '0000-00-00',
    activa: false,
    etiqueta: 'string',
    images: 'string',
  }
];
