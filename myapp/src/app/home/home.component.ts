import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 popularProducts:any
 tableName:string='PopularProducts'
  constructor(private service:CrudService,public router:Router){}
  ngOnInit(): void {
    this.service.getRecords(this.tableName).subscribe((res)=>{
      this.popularProducts=res
    })
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
