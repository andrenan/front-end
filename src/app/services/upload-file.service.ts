import { Injectable } from '@angular/core';
import { Pagina} from '../components/upload-files/upload-file.model';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = '/api/paginas';

  constructor(private http: HttpClient) { }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('files', file);
    formData.append('file', file);
    const headers = new HttpHeaders({
      'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYxNDUzNDM2N30.15yAxXo1KXY-KqZM_Z4rUflC7-B7-xmx2aWRqchE-x-evvXnovKPTCqh-c1ieR0lijSYMmDsVlIZi_jpaPVV4Q'
    });
    const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
      headers: headers,
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  create(pagina: Pagina): Observable<HttpResponse<Pagina>> {
    return this.http.post<Pagina>(this.baseUrl, pagina, {observe: 'response'});
  }

}
