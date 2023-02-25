import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service:CrudService, private router:Router){}

  

  ngOnInit(): void {
    
  }
  uname:any;
  upass:any;
  id:any
  userData:any;

   tableName:string='Users'
  getData(){
    
    this.service.getRecords(this.tableName).subscribe((res)=>{
      console.log(res)
    console.log(this.uname+','+this.upass)
    
      this.userData=res;
    
      const data:any= this.userData.filter((item:any)=>{
        return((item.username == this.uname)&&(item.password == this.upass))
      })
      if(data.length > 0){
       alert("valid user!")
        this.service.signIn(this.uname)
        this.router.navigate(['/home'])
        
      }
      else{
        alert("invalid login credentials!")
      }
    })
    
    }

}
