import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {

  constructor(private service:CrudService, private router:Router){}

  search:any
  
  tableName:string='Pants'
  pants:any;
  ngOnInit(): void {
    this.service.getRecords(this.tableName).subscribe((res)=>{
      this.pants=res
    })
  }
  cartProduct(val:any){
    localStorage.setItem(val.id, JSON.stringify((val)))
      this.router.navigate(['/cart'])
  }
}
