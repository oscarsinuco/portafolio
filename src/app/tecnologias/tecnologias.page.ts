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
        spaceBetween: 30
      }
    }
  }

  public tec: any;

  public tec_bd = [{
    imagen: 'https://www.anerbarrena.com/wp-content/uploads/2016/05/mysql.jpg',
    subtitulo: '',
    titulo: 'MySql',
    descripcion: 'Esto es una descripcion'
  },
  {
    imagen: 'https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2017/10/postgresql.png?width=1200&enable=upscale',
    subtitulo: '',
    titulo: 'Postgresql',
    descripcion: 'Esto es una descripcion'
  },
  {
    imagen: 'https://3.bp.blogspot.com/-qNzNkEmSu7M/W0CKA2UZ5QI/AAAAAAAAaoM/Jm1EVdyvSuY3D3L804QVLxPLjoAnmn2OwCK4BGAYYCw/s400/download-1.png',
    subtitulo: '',
    titulo: 'MongoDB',
    descripcion: 'Esto es una descripcion'
  },
  ];

  public tec_back = [
    {
      imagen: 'https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png',
      subtitulo: 'Node + Express',
      titulo: 'NodeJS + Express',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://www.matteoavanzini.it/files/2015/10/jsp.jpg',
      subtitulo: 'JSP',
      titulo: 'Java + netbeans',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://neunapp.com/media/blog/djangourls.png',
      subtitulo: 'Django',
      titulo: 'Python + Django',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png',
      subtitulo: 'PHP puro',
      titulo: 'PHP lenguaje puro',
      descripcion: 'Esto es una descripcion'
    }
  ]


  public tec_front = [
    {
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      subtitulo: 'Angular Framework',
      titulo: 'Angular 2+',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://licencias.info/wp-content/uploads/2019/07/angularjs.jpg',
      subtitulo: 'Librería',
      titulo: 'AngularJS',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://hackernoon.com/drafts/ux832eqm.png',
      subtitulo: 'Javascript',
      titulo: 'VanillaJS',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://www.victoriglesias.net/wp-content/uploads/2017/03/j-query.jpg',
      subtitulo: 'Librería',
      titulo: 'JQuery',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://miro.medium.com/max/3920/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg',
      subtitulo: 'Librería',
      titulo: 'VueJS',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://www.irontec.com/image/trainingsFull/38-curso-desarrollo-apps-ionic.png',
      subtitulo: 'Framework',
      titulo: 'Ionic 4+',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://dc722jrlp2zu8.cloudfront.net/media/cache/92/fd/92fd4709184887100530a77bedee32f5.jpg',
      subtitulo: 'Librería CSS',
      titulo: 'Bootstrap',
      descripcion: 'Esto es una descripcion'
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV0-uIWSySpmPC91P3G8Kz7AXAk4Q5EORHntzTNkuvIV8ZDAEJ&usqp=CAU',
      subtitulo: 'MD Angular',
      titulo: 'Angular Material',
      descripcion: 'Esto es una descripcion'
    },
  ]


  constructor(private zone: NgZone) {
    fetch(environment.url).then(res => { return res.json() }).then(data => {
      this.datosMios = data;
      localStorage.setItem('askd', data.name)
      localStorage.setItem('urlGit', data.html_url)
    })
  }
  ngOnInit() {
    this.tec = this.tec_front;
  }

  segmentChanged(ev: any) {
    let tec = ev.target.value
    switch (tec) {
      case 'Frontend':
        this.zone.run(() => {
          this.tec = this.tec_front;
        })
        break
      case 'Backend':
        this.zone.run(() => {
          this.tec = this.tec_back;
        })
        break

      case 'Motores':
        this.zone.run(() => {
          this.tec = this.tec_bd;
        })
        break

      case 'Otros':
        this.zone.run(() => {
          this.tec = this.tec_bd;
        })
        break
    }
  }

}
