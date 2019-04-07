import { Component, OnInit } from '@angular/core';
import {MovieAbfrageService} from '../movie-abfrage.service';
import {Movie} from '../../interface/Movie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  movie_title: string;
  imgSource: string;
  intro: string;
  year: string;
  country: string;
  regisseur: string;

  movie: Movie;

  constructor(private service: MovieAbfrageService) {
    this.movie = this.service.getData();
    let m = this.movie.Title;
    let y = this.movie.Year;
    let img = this.movie.Poster;
    let i = this.movie.Plot;
    let c = this.movie.Country;
    let r = this.movie.Director;
    this.movie_title = m;
    this.imgSource = img;
    this.intro = i;
    this.year = y;
    this.country = c;
    this.regisseur = r;
  }

  ngOnInit() {

  }




}
