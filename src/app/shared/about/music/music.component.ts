import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '@core/service/youtube.service';
import { Video } from '@core/interface/youtube';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  videos: Video[] = [];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.youtubeService.getVideos()
      .subscribe(res => {
        this.videos.push(...res);
      })
  }

  showVideo(title: string, url: string): void {
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
    });
  }

  showYoutube(id: string): void {
    window.open(`https://www.youtube.com/watch/${id}`, "_blank");

  }

}
