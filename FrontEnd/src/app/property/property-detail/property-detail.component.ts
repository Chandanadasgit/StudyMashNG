import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

 public  propertySelected:number
  constructor(private route:ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
    this.propertySelected=+(this.route.snapshot.params['id'])

    this.route.params.subscribe(
      param=> this.propertySelected= +param['id']
      );
  }

  onSelectNext()
  {   this.propertySelected +=1
      this.router.navigate(['property-detail',this.propertySelected])
  }
}
