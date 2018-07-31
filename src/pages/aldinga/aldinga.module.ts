import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AldingaPage } from './aldinga';
import { VideoPlayer } from '@ionic-native/video-player';
import { Platform } from 'ionic-angular';

@NgModule({
  declarations: [
    AldingaPage,
  ],
  imports: [
    IonicPageModule.forChild(AldingaPage),
  ],
})
export class AldingaPageModule {
  constructor(private platform: Platform, private videoPlayer: VideoPlayer) { 
    platform.ready().then(() => {
// Playing a video.
this.videoPlayer.play('https://khfilterlist.ddns.net/VideoStream/ALD_KH_VOD/aldinga.m3u8').then(() => {
 console.log('video completed');
}).catch(err => {
 console.log(err);
});
    });
  }
  

}
