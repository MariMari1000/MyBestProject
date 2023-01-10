import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatsProvider } from '../../providers/stats/stats';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
 //these variables are used to store data into storage and display the same data on the settings page
  newCountryID: number;
  countryID: number;
  newMinAge: number;
  minAge: number;
  newMaxAge: number;
  maxAge: number;

  //this variable is used to get players' info from a JSON object  
  statistics: any[];


   constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams, private st: StatsProvider, public storage: Storage) {
  
  }
  //this function is used to get data from a JSON object
  // ionViewDidLoad() {
  //   this.st.getStats().subscribe(data =>{
  //     this.statistics = data.data;
  //   });
  // }
  ionViewDidLoad() {
    this.st.getStats(
      this.countryID,
      this.maxAge,
      this.minAge,
    ).subscribe(data => {
      this.statistics = data.data;
    });
  }



  //this function is used to access stored data from storage
  ionViewWillEnter(){
    this.storage.get("countryID")
    .then((val) =>{
      this.countryID = val;
  
    })
    .catch((error) => {
      alert("Error accessing Storage")
    })
    this.storage.get("maxAge")
    .then((val) =>{
      this.maxAge = val;
    })
    .catch((error) => {
      alert("Error accessing Storage")
    })
    this.storage.get("minAge")
    .then((val) =>{
      this.minAge = val;
    })
    .catch((error) => {
      alert("Error accessing Storage")
    })
  }
  //this function opens the home page
  openHomePage() {
    this.navCtrl.pop();
  }

  //this function saves the values enetered into user input forms into storage
  saveIntoStorage() {
    //if a country ID value isn't enetered, an alert box appears
    if (this.newCountryID == null){
      alert("Plese enter ID");

    }else{
    this.countryID = this.newCountryID;
    this.newCountryID = null;
    this.minAge = this.newMinAge;
    this.newMinAge = null;
    this.maxAge = this.newMaxAge;
    this.newMaxAge = null;
    this.storage.set("countryID", this.countryID);
    this.storage.set("maxAge", this.maxAge);
    this.storage.set("minAge", this.minAge);
    
        
  }
  }
 
}
