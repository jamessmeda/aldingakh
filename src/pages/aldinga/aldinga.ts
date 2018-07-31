import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';
import { urlToNavGroupStrings } from '../../../node_modules/ionic-angular/umd/navigation/url-serializer';
/**
 * Generated class for the AldingaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aldinga',
  templateUrl: 'aldinga.html',
})
export class AldingaPage {
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
      this.videoUrl = "https://aldingakh.ddns.net/"
      const browser = this.inAppBrowser.create (this.videoUrl, '_blank',this.inAppBroserOps)
    }
    catch(e){
      console.log(e);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AldingaPage');
  }

}
