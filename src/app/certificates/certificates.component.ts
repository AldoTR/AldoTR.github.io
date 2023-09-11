import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit { 

  constructor() { }


  certifications : Array<any> = [];
  ngOnInit(): void {
    let cert1 ={
      cerfificacion: "Licenciatura en Ingeniería de Software por la Universidad Veracruzana."
  };

  let cert2 ={
    cerfificacion: "Certificación como Python Developer por el Microsoft Innovation Center."
  };

  let cert3 ={
    cerfificacion: "Distinción honorífica como Proyect Management por la SCRUM University."
  };

this.certifications.push(cert1);
this.certifications.push(cert2);
this.certifications.push(cert3)
  }

}