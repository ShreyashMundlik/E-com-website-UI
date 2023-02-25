import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service:CrudService, private router:Router){}

  ngOnInit(): void {
    
  }
  id:any;
  tableName:string='Users'
  sign(val:any){
    const users={
      id:this.id,
 fname:val.fname,
 email:val.email,     
username:val.username,
password:val.password
    }
    this.service.addRecord(users,this.tableName).subscribe(()=>{
      alert("record has been Added!")
      this.router.navigate(['/login'])
    })
    console.log(val)
  }
}
