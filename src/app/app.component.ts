import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  cousrses = COURSES;
  angular = COURSES[0];
  rxjs = COURSES[1];
  ngrx = COURSES[2];

  getCourseFromChild(data: Course) {
    console.log("App Component");
    console.log(data);
  }
}
