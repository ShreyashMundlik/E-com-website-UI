import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 constructor(private service:CrudService, private activatedroute: ActivatedRoute, private router:Router){}

 id:any=sessionStorage.getItem("user_key");
 tableName:string='Users'
 user:any

 ngOnInit():void{
  //  this.activatedroute.paramMap.subscribe((para)=>{
  //   this.id=para.get('id')
  //   console.log(">>>>>>"+this.id)
  //  })

   this.service.getRecord(this.id,this.tableName).subscribe((res)=>{
     this.user={...res}
     console.log(res)
   })

 }
  save(val:any){
    console.log(val)
    const user:any={
      
      fname:val.fname,
      email:val.email,     
     username:val.username,
     password:val.password
  }
  this.service.updateData(user,this.tableName,val).subscribe(()=>{
    alert("Record has been updated!")
    this.router.navigate(['/home'])
  })
}
}
