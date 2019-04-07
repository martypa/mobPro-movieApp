import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../../interface/Movie';
import {AlertController} from '@ionic/angular';
import {DetailPage} from '../detail/detail.page';
import {NavController} from '@ionic/angular';
import {MovieAbfrageService} from '../movie-abfrage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchQuery: string

  constructor(public httpClient: HttpClient, public alertControler: AlertController,
              public navCtrl: NavController, private service: MovieAbfrageService) {}

  doSearch(): void {
    const url = "https://www.omdbapi.com/?apikey=9b0c293&plot=short&r=json&t=" + this.searchQuery;
    const movieJson = this.httpClient.get(url);
    movieJson.subscribe(data => {
      const movie: Movie = <Movie>data;
      if (movie.Response == 'True') {
        this.service.setData(movie);
        this.navCtrl.navigateForward('/detail');
      } else {
        this.presentAlert(movie.Error);
      }
    });
  }

  async presentAlert(message) {
    const alert = await this.alertControler.create({
      header: 'Error',
      message: 'Somthing is wrong: ' + message,
      buttons: ['OK']
    });
    await alert.present();
  }



  ngOnInit() {
  }

}
