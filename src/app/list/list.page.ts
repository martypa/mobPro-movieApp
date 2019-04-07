import { Component, OnInit } from '@angular/core';
import {Movie} from '../../interface/Movie';
import {HttpClient} from '@angular/common/http';
import {MovieAbfrageService} from '../movie-abfrage.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private mov: Movie;


  // public items: Array<{ title: string; note: string; icon: string }> = [];
  public movies: Array<String> = [
      "The Lord of the Rings",
      "Harry Potter",
      "Scrubs",
      "Suits",
      "Godfather"
  ];
  constructor(private httpClient: HttpClient, private service: MovieAbfrageService,
              private navCtrl: NavController) {
  }


  public movieSelected(movie): void {
    let movieIndex = this.findIndex(movie);
    const movieJson = this.httpClient.get("../../assets/movies/" + movieIndex + ".json");
    movieJson.subscribe(data => {
      const movie: Movie = <Movie>data;
      this.service.setData(movie);
      this.navCtrl.navigateForward('/detail');
    });
  }

  private findIndex(string): any {
    for (let i = 0; i < 5; i++) {
      if( this.movies[i] === string){
        return (i + 1);
      }
    }
  }





  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
