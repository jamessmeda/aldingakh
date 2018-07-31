import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoOptions, VideoPlayer} from '@ionic-native/video-player';
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
  videoOptions: VideoOptions;
  videoUrl: string;
  constructor(public videoPlayer: VideoPlayer, public navCtrl: NavController, public navParams: NavParams) {
  }
  async playVideo()
  {
    try {
       this.videoOptions = {
         volume: 0.7
       }
       this.videoUrl = "https://aldingakh.ddns.net/Seaford/Live/seaford.m3u8";
       this.videoPlayer.play(this.videoUrl, this.videoOptions)
    }
    catch(e){
      console.log(e);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AldingaPage');
  }

}
