import { Component, OnInit } from '@angular/core';
import { WorkexperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{
  works:any[
  ]=[
    {
        charge : "default charge",
        company: "company",
        startdate: "startdate",
        enddate: "enddate",
        city: "city",
        country: "country",
        acomplishments: [
            {
                description: "default description"
            },
            {
                description: "default description"
            }
          ]
    }];

  constructor(private service:WorkexperienceService){};

  ngOnInit(): void {
    this.service.getWorkExperienceInfo().subscribe(data=>{
      this.works=data.works;
    })
  }
}