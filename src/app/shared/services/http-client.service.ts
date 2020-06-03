import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransformType } from '../enums/transform-type.enum';
import { TransformConfig } from '../interfaces/transform-config.interface';
import { TransformationService } from './transformation.service';

const BASE_URL = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' })
export class HttpClientService {
  constructor(private http: HttpClient, private transformService: TransformationService) { }

  get<T>(url: string, config?: TransformConfig): Observable<T> {
    console.log('In common http client for app:: ', url);
    return this.http.get<T>(`${BASE_URL}${url}`)
      .pipe(
        map(response => {
          return this.transformResponse<T>(response, config);
        })
      );
  }

  transformResponse<T>(response, config) {
    console.log('Response before transforming :: ', response);
    if (config) {
      const convertedResponse = this.transformService.transform<T>(response, config);
      console.log(`Converted response using ${config.type} strategry :: `, convertedResponse);
      return convertedResponse;
    } else {
      return response;
    }
  }
}
