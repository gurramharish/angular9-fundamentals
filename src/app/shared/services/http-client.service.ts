import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransformType } from '../enums/transform-type.enum';
import { TransformConfig } from '../interfaces/transform-config.interface';

const BASE_URL = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class HttpClientService {
  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  get<T>(url: string, config?: TransformType | TransformConfig): Observable<T> {
    console.log('In common http client for app:: ', url);
    return this.http.get<T>(`${BASE_URL}${url}`)
      .pipe(
        map(posts => {
          console.log('In response map LL :: ', posts);
          return this.transformResponse(posts, config);
        })
      );
  }

  transformResponse<T>(response, config) {
    if (config) {
      return response;
    } else {
      return response;
    }
  }
}
