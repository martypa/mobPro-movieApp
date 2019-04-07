import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {Movie} from '../interface/Movie';


@Injectable({
  providedIn: 'root'
})


export class MovieAbfrageService {

  private data: Movie;

  constructor() { }

  public setData(data) {
    this.data = data;
  }

  public getData() {
    return this.data;
  }

}
