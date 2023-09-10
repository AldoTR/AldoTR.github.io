import { Component, OnInit } from '@angular/core';
import { WorkexperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{
  works:any[]=[];

  constructor(private service:WorkexperienceService){};

  ngOnInit(): void {
    this.works=this.service.getWEInfo()
  }
}