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
  async addForm(btype:string,otype:string){
   // event.preventDefault();
   
   this.clickMessage="btype+otype"+btype+otype;
    
    const servDt =await this.Form.sendData(btype,otype);
    
    this.servicedata="htis is service dAatta"+servDt;
    //+servDt.toString();
    
  }
}
