import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private readonly http: HttpClient) {}

  getAllEmployees() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAllPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getAllComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  getAllAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbumById(id: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
