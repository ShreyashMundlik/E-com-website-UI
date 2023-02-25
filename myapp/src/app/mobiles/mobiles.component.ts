import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  constructor(private service:CrudService, private router:Router){}
  search:any
  order:string='' 
  reverse:boolean=false 

  mobile:any;
  tableName:string='Mobiles'
  ngOnInit(): void {
    this.service.getRecords(this.tableName).subscribe((res)=>{

      this.mobile=res
      console.log(res)
    })
  }
  cartProduct(val:any){
    localStorage.setItem(val.id, JSON.stringify((val)))
      this.router.navigate(['/cart'])
  }
}
