import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService implements OnInit {

  constructor(private http:HttpClient) { }

  baseUrl:any="http://localhost:3000/"

  ngOnInit(): void {
  }
  getRecords(table:string){
    return this.http.get(this.baseUrl+table)
  }

  getRecord(id:any,table:string){
    const getRecord:any=`${this.baseUrl}${table}/${id}`
    return this.http.get(getRecord)
  }

  deleteRecord(table:string,id:any){
   const delUrl=`${this.baseUrl}${table}/${id}`
   return this.http.delete(delUrl)
  }

  addRecord(empData:any,table:string){
    return this.http.post(this.baseUrl+table,empData)
  }
  
  updateData(val:any,empData:any,table:string){
    const updateUrl=`${this.baseUrl}${table}/${empData.id}`
    return this.http.put(updateUrl,empData,val)
  }

  signIn(user:any){
    sessionStorage.setItem('user_key',user)

    sessionStorage.setItem('user_id',user.id)
  }
  signOff(){
    sessionStorage.removeItem('user_key')
  }
}
