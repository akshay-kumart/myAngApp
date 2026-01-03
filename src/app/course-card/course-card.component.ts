import { Component, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  @Input({ required: true }) // required is when dev uses this component then to notify that input is required
  course: Course;

  @Output()
  courseEmitter = new EventEmitter<Course>(); // use @angular/core one

  constructor() {}

  ngOnInit() {}

  onCourseViewed() {
    console.log("Card component button clicked");
    this.courseEmitter.emit(this.course);
  }
}
