import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  private API_URL: string = environment.API_URL

  constructor(private _Http: HttpClient) { }

  getProf(page: number, size: number){
    return this._Http.get(`${this.API_URL}professionnels?page=${page}&size=${size}`)
  }

}
