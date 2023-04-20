import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SellerSignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{


  constructor(private seller:SellerService, private router:Router){}

  ngOnInit(): void {}
  signUp(data:SellerSignUp):void{
   console.log(data);

   this.seller.userSignup(data).subscribe((result)=>{
  if(result){
    this.router.navigate(['seller-home'])
  }
   });
  }
}
