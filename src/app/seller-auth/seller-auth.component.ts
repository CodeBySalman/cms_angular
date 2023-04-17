import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{


  constructor(private seller:SellerService ){}

  ngOnInit(): void {}
  signUp(data:Object):void{
   console.log(data);

   this.seller.userSignup(data).subscribe((result)=>{
  console.log(result);
   });
  }
}
