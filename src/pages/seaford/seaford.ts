import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';
/**
 * Generated class for the SeafordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seaford',
  templateUrl: 'seaford.html',
})
export class SeafordPage {
  videoUrl: string;
  inAppBroserOps: InAppBrowserOptions;
  constructor(public inAppBrowser: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {
  }
  async playVideo()
  {
    try {
      this.inAppBroserOps = {
        zoom: 'no'

      }
      this.videoUrl = "https://aldingakh.ddns.net/Seaford/index.php"
      const browser = this.inAppBrowser.create (this.videoUrl, '_blank',this.inAppBroserOps)
      browser.show;
    }
    catch(e){
      console.log(e);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeafordPage');
  }

}
