import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsPage } from '../../pages/settings/settings';
import { Storage } from '@ionic/storage';
import { SettingsPageModule } from '../../pages/settings/settings.module';



@Injectable()
export class StatsProvider {


  constructor(public http: HttpClient, public storage: Storage) {
  }


  //These variables present the API values
  //I couldn't connect them to storage so the values have to be changed manually to display player info in the table
  // countryID: number = 35;
  // maxAge: number = 38;
  // minAge: number = 19;

  //This function fecthes the data from the API website
  // getStats(): Observable<any> {

  //  return this.http.get("https://app.sportdataapi.com/api/v1/soccer/players?apikey=aa1c1a00-886e-11ed-9927-3fd1f0361d34&country_id="
  //   + this.countryID + "&max_age=" + this.maxAge + "&min_age=" + this.minAge);

  // }

  getStats(countryID: number, maxAge: number, minAge: number): Observable<any> {

    console.log('getStats')
    console.log('countryID', countryID)
    console.log('maxAge', maxAge)
    console.log('minAge', minAge)
    
    return this.http.get("https://app.sportdataapi.com/api/v1/soccer/players?apikey=aa1c1a00-886e-11ed-9927-3fd1f0361d34&country_id="
      + countryID + "&max_age=" + maxAge + "&min_age=" + minAge);
  }


}





