import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let edu1 ={
      fecha: "2005-2008",
      grado_educativo:"Educación Preescolar",
      universidad: "UGM"
  };

  let edu2 ={
    fecha: "2008-2014",
    grado_educativo:"Educación Primaria",
    universidad: "Universidad Veracruzana"
};

  let edu3 ={
  fecha: "2014-2017",
  grado_educativo:"Educación Secundaria",
  universidad: "UGM"
};

let edu4 ={
  fecha: "2017-2020",
  grado_educativo:"Bachillerato",
  universidad: "COBAEV 06"
};

let edu5 ={
  fecha: "2020-2024",
  grado_educativo:"Licenciatura en Ingeniería de Software",
  universidad: "Universidad Veracruzana"
};

this.education.push(edu1);
this.education.push(edu2);
this.education.push(edu3);
this.education.push(edu4);
this.education.push(edu5);

}
}