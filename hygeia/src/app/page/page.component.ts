import { Component, OnInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  
  users=[];
  clickMessage="";
  servicedata="";
  

  constructor(private Form:SawtoothService) { 
    console.log("Inside page component.ts")
  }
  ngOnInit() {
  }
  async addForm(btype:string,otype:string,Gender:string,idproof:string,date:string,Name:string){
   // event.preventDefault();
 
   this.clickMessage="Blood type:"+btype+"Organ type:" +otype +" Gender: "+Gender + " Registration Date:"+date + " Name:" +Name ;
    const proc ="NHS"
    const servDt =await this.Form.sendData(btype,otype,Gender,idproof,date,Name,proc);
    
    this.servicedata="htis is service dAatta"+servDt;
    //+servDt.toString();
    
  }
}
