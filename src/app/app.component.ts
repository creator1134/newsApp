import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arr: String[];
  constructor(private http: HttpClient) {
    this.http
      .get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+environment.APIKEY)
      .subscribe(data => {
        // console.log(data['articles']);
        this.arr = data['articles'].map(c => c);

        console.log(this.arr);
      });
  }
}
