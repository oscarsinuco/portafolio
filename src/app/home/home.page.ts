import { Component, OnInit, ViewChild, HostListener, NgZone } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  @ViewChild('slides') slides;
  @HostListener('window:resize')
  onResize() {
    setTimeout(() => this.slides.update(), 100);
  }



  public proyectos: any;
  public imagenes: any;
  public nombre: any = localStorage.getItem('askd');
  public urlGit: any = localStorage.getItem('urlGit');
  public slideOpts = {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    freemode: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      774: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      950: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 10
      },
    }
  }
  constructor(private zone: NgZone) {
    fetch(`${environment.url}/proyectos`).then(res => res.json()).then(proyectos => {
      this.zone.run(() => {
        this.proyectos = proyectos.proyectos
      })
    })

  }


  openWebpage(url) {
    window.open(url);
  }

  ngOnInit() {
  }


}
