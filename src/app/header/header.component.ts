import { Component, OnInit } from '@angular/core';
import { HeaderServices } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  headerInfo:any={
    name  : "default",
  charges: "default",
  objetive:"default",
  photo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEUAAAD///+3t7dzc3Px8fHh4eGpqamHh4etra1WVlZNTU3r6+seHh6wsLANDQ0qKirOzs5HR0c1NTVdXV3Gxsafn5/4+PhiYmKOjo4jIyM6OjqVlZV+fn4TExPZ2dk/Pz9p/2I1AAAE+0lEQVRogcWb2ZaqMBBFwywiQ4NiO7X//5eXiAhIVeoEuIvzLNkSUklNUY61/MLdRV5VHh5KPQ5l5UU7t/Dtx1GW1PB8UaQu59CSb4EO0iqnsZ3yKg3WRydhnJm5rbI4TFZFFx6C7eQVq6HTHxuw1k+6CnoHTfRE4WK0Ow/cKHMXoYv9XLDW3vzNTWg/WgLWikyWbkAfy6VkpcrjHPTvcrDWrzU6ua5DVurKbTEM+rgWWIuZdBp9WpOs1AlHL17Z34pQtNWGjcnD0P+BTLKnaJC8v6XHRukN3PCm7AkaInujRXvEnpHQyAqLJpaaQI+Z0YBV7f8mU9foD5j3Lxsbo4GdJKopsuPUwIuP95YROpGfNngAofz06EuN0PK+bXR8UvHxK4eWz6qbiew4N3GA4Tk2QMsfOjaTHScWhxh87h7ti55BJkYXvujJlf0YPVpeobKT6ezEQXrr/qAL8aGSMauhanmlfnzFD1reEoCXRl57/412xUcOUCyVHMSBOv+8Q8ue/hkhO85ZHCgbo+V5wuYb2VfUboQGwhswcg7kkbIhGvirGRg2Jw95rHSABqLYJ5itqJ/yWD89WrbpxiYAq36hEYep+KARBydG0fI+/naWNBo4pld+69fBrdHAGY9/ax/41q2lajQyRV8eBi9oCl/Hb4MOsJwF6Q1OBdh1oyx4oQGj1qJjtonASDF9oSvsx6KL0gocrdJoX8g+dsqgnRT8eir3GzSyn7wk+IStZM/wraJBQ6b1/qOi0CnU5qWAA7YTn5Gxf+nm+FcOk9+mJH5tzLJeujjKx3+tSgltk2nzFbzKtKi8xEBW+YhCyf7gUMbPbZf9cRW8wFvd1yI3YNtE1Zk5RhLcUlpFyjpflJN5bhc26E6ewk7MkapJnrsAd+6hYjUr83w9DUw8OM1K5ZZKDlQYxb+nND39zpi1VgcFuM3/R5uBN9aGEz57mS3VYZ5xraFyzpayjmL7jXQtedbHx2qKrA7N/Hk/7VxGu9P9aXOGhLir8IgKMdisiwg2Vhd1kOijcsnxWYBuIZg+aoWFXT7kDO8t+i60AiC8v0AhgAcmFHrVssmekcBH8IBpiewQCPfABOW3pMks5CD3Yj3brWrzufQKcoVg3HKF9TLHX5Wc0DC4/JKMnzuV0zgzmrk6mXaMdxrHlLwia96o7vy47+SVybzAjBWtP37cLmXHZ9l+lpAdh08cdolKfkFAmRtebLnwk57ld5VF820Yt09Kc6n4x2yjbsXZziAVz5n2dYFpaXG1ymEBgim7oDlwTjU9m6OyC1NsqpaRuR1jXGyiX3vpW9Np+a8SG11YzNG+TEYJ6QF9FxbpcirWlcmKLMZPyqm0Dc50EzqR7sK0iEynvQz9ebLIlyZK57QRXhZsKgHlp5ANA/SfxKrWJJmMQ8g2CW63h8OOseiAimkO4Vpi7jOsu6bdBLYlhju4r9Y2dmSSeHwjENsVc7c6R3zOMzK0P/GRWh7Cs16HXBRnbPoyJLVLcLmlbF5IaHUzec/ZTW4EMnRQiQ1+Zs/97BrovmuKs4C2RiFqyOIddcfCL3bmawpQM6ccoObxPTwGQZL4fpIEwTG8x1ISA2xhRQsoh/z5zLE8J9y4u2W78pZN2lu2pjsbNuQ7W15D2PLyhbPhlROtzS7aaFmWejstv16ktdmlKq3NrpJpbXaB7qWtrg222uqyZM9f54roP0AEOscqtlr2AAAAAElFTkSuQmCC",
  email : "default",
  cel   : "default",
  ubication: "default",
  social: "default"
  };
  constructor(private headerService: HeaderServices){};
  ngOnInit(): void {
    this.headerService.getHeaderInfo().subscribe(data=>{
      this.headerInfo=data;
    })
  }

}