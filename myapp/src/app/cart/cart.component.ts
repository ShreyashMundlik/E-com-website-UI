import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor( private service:CrudService, private router: Router  ){}

  
  CartProducts:any=[]
  ID:any=[]

  ngOnInit(): void {
    for(let i=0;i < localStorage.length;i++){

      this.ID.push(JSON.parse(localStorage.key(i)!))

    }
    for(let j of this.ID){
      this.CartProducts.push(JSON.parse(localStorage.getItem(j)!))
      
      console.log(this.CartProducts)
    }
  }
  delete(id:any){
    localStorage.removeItem(id)
    window.location.reload()
  }
}
