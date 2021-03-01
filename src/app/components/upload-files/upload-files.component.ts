import { Component, OnInit, Input } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HttpEventType, HttpResponse, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagina, PAGINAS } from './upload-file.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  pagina: Pagina;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  form: FormGroup;

  constructor(private service: UploadFileService, private fb: FormBuilder) {
    this.pagina = new Pagina();
    this.initForm();
  }
private initForm(): void{
  this.form = this.fb.group({
    id: [],
    titulo: [null],
    subtitulo: [],
    descripcion: [],
    orden: [],
    fechaPublicacion: [],
    fechaExpiracion: [],
    activa: [],
    etiqueta: [],
    images: [],
  });
}
private getEntity(): Pagina{
  return{
    ...new Pagina(),
    id: this.form.get('id').value,
    titulo: this.form.get('titulo').value,
    subtitulo: this.form.get('subtitulo').value,
    description: this.form.get('description').value,
    orden: this.form.get('orden').value,
    fechaExpiracion: this.form.get('fechaExpiracion').value,
    fechaPublicacion: this.form.get('fechaPublicacion').value,
    etiqueta: this.form.get('etiqueta').value,
    images: this.form.get('images').value
  };
}

  ngOnInit(): void{


  }
  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }



  public savePagina(): void {

    if (!this.pagina.id) {
      this.service.create(this.pagina).subscribe(
        (res: HttpResponse<Pagina>) => this.onSaveSuccess(res.body, true),
        (res: HttpErrorResponse) => this.onSaveError(res));
    } else {
          }

  }
  upload(): void {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.service.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
  public onSaveSuccess(pagina: Pagina, edit: boolean): void {
 }
  public onSaveError(res: HttpErrorResponse): void {
  }
}
