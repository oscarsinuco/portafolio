import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  public avatar = localStorage.getItem('avatar');

  public estado = false;

  angForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.compose([
      Validators.email,
      Validators.required
    ])),
    mensaje: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5)
    ])),
  });


  public loading = this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Enviando mensaje...',
    mode: 'ios'
  });



  async presentAlert(m1, m2) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: m1,
      message: m2,
      buttons: ['OK']
    });

    await alert.present();
  }


  constructor(public loadingController: LoadingController, public alertController: AlertController) {

  }

  ngOnInit() {
  }

    async enviar() {
      if (this.angForm.status != 'INVALID') {
        
        this.loading.then(res=>{
          res.present();
          let datos = {
            nombre: this.angForm.get('nombre').value,
            correo: this.angForm.get('correo').value,
            mensaje: this.angForm.get('mensaje').value
          }
          fetch(environment.urlCorreo, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => { return res.json() }).then(data => {
            console.log(data)
            this.loadingController.dismiss()

            let m1 = "Muy bien"
            let m2 = "Mensaje enviado correctamente, en un momento me contactaré contigo. Ten un buen día."
            this.presentAlert(m1,m2)
            this.limpiar()
          }).catch(err => {
            this.loadingController.dismiss()
            let m1 = "Error, algo ha ocurrido"
            let m2 = "No se ha podido enviar el mensaje correctamente, intenta de nuevo mas tarde"
            this.presentAlert(m1,m2)
          })
          
        })
        
      }
    }

    limpiar() {
      this.angForm.reset();
    }

  }
