import { Component } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [
    { _id: "1", name: 'ANgular', category: 'Front-end'}
  ];
  displayedColumns = ['name','category'];

  constructor () {
  }

  ngOnInit(): void {

  }

}
