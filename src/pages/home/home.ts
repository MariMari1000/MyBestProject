import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { StatsProvider } from '../../providers/stats/stats';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//  these variables are atribute names of the JSON object used to diplay quote data on the home page
  content: string;
  author: string;
  tags: string[];
  
  
  constructor(public navCtrl: NavController, private qt:QuotesProvider, private st: StatsProvider) {

  }
  // this funcion gets the data from the JSON object
  ionViewDidLoad(){
    this.qt.getQuotes().subscribe(data => {
      this.author = data.author;
      this.content = data.content; 
      this.tags = data.tags;
    });
  }
  //this function opens the settins page
  openSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }
  
 
}
