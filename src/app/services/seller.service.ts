import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SellerSignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  userSignup(data:SellerSignUp){
    return this.http.post('http://localhost:3000/seller',data);
  }
}
