import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  search:any
  
  tableName:string="Shirts"
  shirts:any
  constructor(private service:CrudService, private router:Router){}

  ngOnInit(): void {
    this.service.getRecords(this.tableName).subscribe((res)=>{
      this.shirts=res
    })
  }
  cartProduct(val:any){
    localStorage.setItem(val.id, JSON.stringify((val)))
      this.router.navigate(['/cart'])
  }
}
