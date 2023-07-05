import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course | undefined;

  constructor(){
  }
  ngOnInit() {
  }

  onCourseView(){
    console.log("card-component - button clicked ...")
  }

}
