import { Component, OnInit, NgZone, ViewChild, HostListener } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.page.html',
  styleUrls: ['./tecnologias.page.scss'],
})
export class TecnologiasPage implements OnInit {



  @ViewChild('slides') slides;
  @HostListener('window:resize')
  onResize() {
    setTimeout(() => this.slides.update(), 100);
  }

  

  public datosMios: any = {};
  public nombre: any = localStorage.getItem('askd');
  public slideOpts = {
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    freemode: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      840: {
        slidesPerView: 2,
        spaceBetween: 50
      }
    }
  }

  public tec: any = [];



  public tipo:String = "Frontend"

  constructor(private zone: NgZone) {
    fetch(`${environment.url}/tecnologias`).then(res=>res.json()).then(data=>{
      this.tec = data.tecnologias
    })
  }
  ngOnInit() {

  }



  getFiltrados (array, tipo){
    return array.filter(e=>e.tipo == tipo)
  }


  segmentChanged(ev: any) {
    let tec = ev.target.value
    this.tipo = tec
  }

}
