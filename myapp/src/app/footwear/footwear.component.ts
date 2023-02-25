import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {


  search:any
  
  footwear:any;
  tableName:string="Footwear"
  constructor(private service:CrudService, private router:Router){}

  ngOnInit(): void {
    this.service.getRecords(this.tableName).subscribe((res)=>{
      this.footwear=res
    })
  }
  cartProduct(val:any){
    localStorage.setItem(val.id, JSON.stringify((val)))
      this.router.navigate(['/cart'])
  }

}
