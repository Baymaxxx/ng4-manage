/** 关于angular2+ 拦截器：
    1:http://ng-alain.com/docs/net
    2:http://www.jianshu.com/p/4af551ad0901
**/

import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';
/**
 * 封装HttpClient:
 *    优化HttpClient在参数上便利性
 *    统一实现loading
 *    统一处理时间格式
 */
@Injectable()
export class HttpService {
  private _loading: boolean;
  constructor(
    private http: HttpClient
  ) {
    this._loading = false;
  }


  // 是否在loading
  get loading(): boolean {
    return this._loading;
  }
  /**
   * 处理前后台统一时间格式
   * @param params 向后台发送的参数
   */
  parseParams(params: any): HttpParams {
    let ret = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params) {
          let _data = params[key];
          // 将时间转化为时间戳(秒)
          if (moment.isDate(_data)) {
            _data = moment(_data).unix();
          }
          ret = ret.set(key, _data);
        }
      }
    }
    return ret;
  }

  private begin() {
    console.time('http');
    this._loading = true;
  }

  private end() {
    console.timeEnd();
    this._loading = false;
  }

  get SERVER_URL(): string {
    return environment.SERVER_URL;
  }

  /**
    * GET请求
    *
    * @param {string} url URL地址
    * @param {*} [params] 请求参数
    */
  get(url: string, params?: any): Observable<any> {
    this.begin();
    return this.http
      .get(url, {
        params: this.parseParams(params)
      })
      .do(() => this.end())
      .catch((res) => {
        this.end();
        return res;
      });
  }

  /**
   * POST请求
   *
   * @param {string} url URL地址
   * @param {*} [body] body内容
   * @param {*} [params] 请求参数
   */
  post(url: string, body?: any, params?: any): Observable<any> {
    this.begin();
    return this.http
      .post(url, body || null, {
        params: this.parseParams(params)
      })
      .do(() => this.end())
      .catch((res) => {
        this.end();
        return res;
      });
  }

  /**
   * DELETE请求
   *
   * @param {string} url URL地址
   * @param {*} [params] 请求参数
   */
  delete(url: string, params?: any): Observable<any> {
    this.begin();
    return this.http
      .delete(url, {
        params: this.parseParams(params)
      })
      .do(() => this.end())
      .catch((res) => {
        this.end();
        return res;
      });
  }
}
