import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShortenerDetail } from 'src/app/model/shortener/shortener.details.model';
import { ShortenerUrl } from 'src/app/model/shortener/shortener.model';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  constructor(private http: HttpClient, public router: Router) {
  }

  public createShortUrl(shortenerUrl: ShortenerUrl): Observable<ShortenerDetail>  {
    return this.http.post<ShortenerDetail>(`server/tiny/save`, shortenerUrl);
  }
}
