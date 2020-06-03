import { Injectable } from '@angular/core';
import { TransformType } from '../enums/transform-type.enum';
import { TransformConfig } from '../interfaces/transform-config.interface';
import { camelCase } from 'lodash';

@Injectable({ providedIn: 'root' })
export class TransformationService {
  constructor() { }


  transform<T>(data: T, config: TransformConfig): T {
    const transformType = config.type;
    switch (transformType) {
      case TransformType.UNDERSCORE:
        return this.keysToCamelCase(data);
      case TransformType.RENAME:
        return this.renameKeys(data, config);
      default:
        return data;
    }
  }

  private keysToCamelCase(data) {
    if (Array.isArray(data)) {
      return data.map(d => this.keysToCamelCase(d));
    } else if (data != null && data.constructor === Object) {
      return Object.keys(data).reduce((reslut, key) => ({
        ...reslut,
        [camelCase(key)]: this.keysToCamelCase(data[key])
      }), {});
    }
    return data;
  }

  private renameKeys(data, config) {
    const newKeys = config.options;
    return this.renameKey(data, newKeys);
  }

  private renameKey(data, newKeys) {
    if (Array.isArray(data)) {
      return data.map(d => this.renameKey(d, newKeys));
    } else if (data !== null && data.constructor === Object) {
      return Object.keys(data).reduce((result, key) => {
        let newKey = key;
        if (newKeys[key]) {
          newKey = newKeys[key];
        }
        return { ...result, [newKey]: this.renameKey(data[key], newKeys) };
      }, {});
    }
    return data;
  }
}
