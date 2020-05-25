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
      950: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  }
  constructor(private zone: NgZone) {
    fetch(`${environment.url}/repos`).then(res => { return res.json() }).then(data => {
      //this.proyectos = []
      this.proyectos = data;
      this.proyectos.unshift({
        name: 'Calumet Estándar',
        owner: {
          login: 'UIS'
        },
        language: 'JAVA + JSP',
        html_url: 'http://cormoran.uis.edu.co/eisi/'
      });
      fetch('https://gitlab.com/api/v4/users/oscarsinuco/projects').then(res => { return res.json() }).then(data2 => {
        data2.forEach(element => {

          element['html_url'] = element['web_url'];
          element['language'] = 'Any';
          element['owner'] = {
            login: element.namespace.path
          };
          console.log(element);
          this.zone.run(() => {

            this.proyectos.push(element);
          })
        });
        fetch('https://gitlab.com/api/v4/users/Diego.98/projects').then(res => { return res.json() }).then(data=>{
          let element = data[0];
          element['html_url'] = element['web_url'];
          element['language'] = 'Any';
          element['owner'] = {
            login: element.namespace.path
          };
          console.log(element);
          this.zone.run(() => {

            this.proyectos.push(element);
          })
        })  
      })
    })
  }


  openWebpage(url) {
    window.open(url);
  }

  ngOnInit() {
  }


}
