import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../shared/crud.service';
import { NgbOffcanvasConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:CrudService, private router:Router,config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas){
    config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
  }
  tableName:string='Users'
  id:any=sessionStorage.getItem('user_key')
  search:any
  ngOnInit(): void {
    
  }
  signOut(){
if(confirm("Are you sure u want to signOut?")){
    this.service.signOff()
    this.router.navigate(['/login'])
}
  }
  deleteAccount(){
    
    sessionStorage.removeItem(this.id)
    alert('Account has been deleted!')
    this.router.navigate(['/login'])
  }
  
  
  open(content:any) {
		this.offcanvasService.open(content);
	}
}
