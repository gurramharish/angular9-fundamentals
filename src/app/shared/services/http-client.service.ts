import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class HttpClientService {
  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  get<T>(url, config?: null): Observable<T> {
    return this.http.get<T>(`${BASE_URL}${url}`);
  }
}
