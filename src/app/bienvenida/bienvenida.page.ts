import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  public datosMios: any = {};
  public nombre: any = localStorage.getItem('askd')
  constructor() {
    fetch(environment.url).then(res => { return res.json() }).then(data => {
      this.datosMios = data;
      localStorage.setItem('askd', data.name)
      localStorage.setItem('urlGit', data.html_url)
      localStorage.setItem('avatar', data.avatar_url)
    })
  }

  ngOnInit() {

  }

}
