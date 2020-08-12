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
    
  }

  ngOnInit() {

  }

}
