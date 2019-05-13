import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Project} from '../models/project';
import {Section} from '../models/section';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: AngularFireList<any>;
  sectionList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {

  }

  getProjectsList() {
    return this.projectList = this.db.list('projects');
  }
  getProjectsArray() {
    // this.getProjectsList().snapshotChanges().subscribe()
  }

  addProject(p: Project) {
    this.projectList.push({
      name : p.name,
      brief: p.brief,
      description: p.description,
      path: p.path,
      sections: {}
    });
  }

  updateProject(p: Project) {
    this.projectList.update(p.$key, {
      name : p.name,
      brief: p.brief,
      description: p.description,
      path: p.path
    });
  }

  removeProject($project: string) {
    this.projectList.remove($project);
  }

  getSectionsList($project: string) {
    return this.sectionList = this.db.list('projects/' + $project);
  }

  addSection($project: string, s: Section) {
    this.getSectionsList($project);
    this.sectionList.push({
      name: s.name,
      path: s.path,
      posts: {}
    });
  }

  updateSection($project: string, s: Section) {
    this.getSectionsList($project);
    this.sectionList.update(s.$key, {
      name: s.name,
      path: s.path
    });
  }

  removeSection($project: string, $section: string) {
    this.getSectionsList($project);
    this.sectionList.remove($section);
  }
}
