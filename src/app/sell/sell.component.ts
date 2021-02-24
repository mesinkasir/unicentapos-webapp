import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent{
  title = 'angularphp';
    data = [];
  constructor(private http: HttpClient) {
    this.http.get('https://axcora.com/ngchromisdb/bus.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
   
    
    }, error => console.error(error));
  }
}