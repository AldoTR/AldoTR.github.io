import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class HeaderServices{
    header={
            name  : "Aldo Torres Ramírez",
            charges: "Software Engineer",
            objetive:"I want to be an profesional of technology and help the world making useful things for everyone",
            photo:"https://firebasestorage.googleapis.com/v0/b/aldocv-fb0fc.appspot.com/o/Screenshot_20221217-015113.jpg?alt=media&token=42e805e5-13a5-4930-9bf6-eb30e1754280",
            email : "aldotrcontacto@gmail.com",
            cel   : "272 191 96 97",
            ubication: "Orizaba, Veracruz, México",
            social: "@AldoTR"
    } 
    getHeaderInfo(){
              return this.header;
    }
    
    
}
