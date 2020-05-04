import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizersService {
  private limit = 10
  private offset = 0
  private url: string = "http://clavem-api.herokuapp.com/organizers"
  private token: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTlhYzkzN2FhNWViNjAwMzZkMjg1NmQiLCJpYXQiOjE1ODg2MTQwNjgsImV4cCI6MTc0NDEzNDA2OH0.BZ1h-inKxamNq9NRqdo7qCVFtQGJaMnrzByhgpVvxSE"
  constructor(private http: HttpClient) { }

  getOrganizers(limit?: number, offset?: number){
    if(limit != undefined) this.limit = limit
    if(offset != undefined) this.offset = offset

    return this.http.get(`${this.url}?limit=${this.limit}&offset=${this.offset}`, 
      { headers: new HttpHeaders({Authorization: this.token}) }
    )
  }
}
