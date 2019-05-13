import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  getPosts() {
    return this.postList = this.db.list('posts');
  }

  addPost(p: Post) {
    this.postList.push({
      title: p.title,
      subtitle: p.subtitle,
      content: p.content,
      path: p.path,
      project: p.$project,
      section: p.$section
    });
  }
}
