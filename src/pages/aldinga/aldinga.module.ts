import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AldingaPage } from './aldinga';
import { VideoPlayer } from '@ionic-native/video-player';
import { Platform } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';


@NgModule({
  declarations: [
    AldingaPage,
  ],
  imports: [
    IonicPageModule.forChild(AldingaPage),
  ],
})
export class AldingaPageModule {
  constructor(private streamingMedia: StreamingMedia) { }
  startVideo() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
 
    // http://www.sample-videos.com/
    this.streamingMedia.playVideo('https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);
  }
 
  startAudio() {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };
 
    //http://soundbible.com/2196-Baby-Music-Box.html
    this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
  }
 
  stopAudio() {
    this.streamingMedia.stopAudio();
  }
}
