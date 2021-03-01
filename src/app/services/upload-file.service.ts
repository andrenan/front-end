import { Injectable } from '@angular/core';
import { Pagina} from '../components/upload-files/upload-file.model'

import { HttpClient, HttpRequest, HttpHeaders, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = '/api/paginas';
  private baseUrl2 = '/api/images';

  constructor(private http: HttpClient) { }


  create(pagina: Pagina, currentFile: File): Observable<HttpResponse<Pagina>> {
    this.upload(currentFile );
    return this.http.post<Pagina>(this.baseUrl, pagina, {observe: 'response'});
  }
  upload(file: File): void {
    const formData: FormData = new FormData();

    formData.append('files', file);
    formData.append('file', file);
    const headers1 = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxNDY5ODY5NX0.s-zeUy_wQN0aQOWlD4XCzh7oXEodNt65orSEBzSaa0SOT4txGsT6JmqEbjhD45cz_PF_ik_lAF3I6bTKbww2IQ'
    });
    const req = new HttpRequest('POST', `${this.baseUrl2}`, formData, {
      headers: headers1,
      reportProgress: true,
      responseType: 'json'
    });
    this.http.request(req);
  }

}
