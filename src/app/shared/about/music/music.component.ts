import { Component, OnDestroy, OnInit } from '@angular/core';
import { YoutubeService } from '@core/service/youtube.service';
import { Video } from '@core/interface/youtube';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit, OnDestroy {

  videos: Video[] = [];
  play: boolean = false;
  loading = false;
  audio!: any;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    document.getElementById('navbarSupportedContent')?.classList.remove('show');
    this.youtubeService.getVideos()
      .subscribe(res => {
        this.videos.push(...res);
        this.loading = true;
      });
    this.initAudio();
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

  showVideo(title: string, url: string): void {
    this.audio.pause();
    Swal.fire({
      confirmButtonColor: '#00df9a',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        confirmButton: 'd-block w-100 mt-1 m-4',
      },
      html:
        `
      <h4> ${title} </h4>
      <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/${url}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
      </iframe>
      `
    }).then(() => {
      this.play && this.audio.play();
    });
  }

  showYoutube(id: string): void {
    window.open(`https://www.youtube.com/watch/${id}`, "_blank");
  }

  initAudio() {
    this.audio = new Audio();
    this.play = true;
    this.audio.src = '../../../../assets/audio/music.wav';
    this.audio.loop = true;
    this.audio.load();
    this.audio.play();
  }

  changeAudio() {
    if (this.play) {
      this.audio.pause();
      this.play = false;
    } else {
      this.audio.play();
      this.play = true;
    }
  }
}
