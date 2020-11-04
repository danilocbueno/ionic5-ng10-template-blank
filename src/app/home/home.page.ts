import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private cliente = {
    nome: "",
    email: ""
  };

  constructor(private alertController: AlertController) {}

  async salvar() {
    console.log(this.cliente);

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Teste Modal',
      subHeader: 'Meu super Modal',
      message: `O nome informado foi de ${this.cliente.nome}. E o email: ${this.cliente.email}`,
      buttons: ['OK']
    });

    await alert.present();

  }

}
