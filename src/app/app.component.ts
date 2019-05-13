import {Component, OnInit} from '@angular/core';
import {ProjectService} from './services/project-service.service';
import {Project} from './models/project';
import {Section} from './models/section';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectList: any[];
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    /*this.projectService.getProjects()
      .valueChanges()
      .subscribe(projs => {
        this.projectList = projs;
      });*/
  }
}
