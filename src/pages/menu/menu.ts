import { PageInterface } from './menu';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { AlertController } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [AuthService]
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Novidades', pageName: 'NewsPage', tabComponent: 'NewsPage', index: 0, icon: 'book' },
    { title: 'Eventos', pageName: 'EventsPage', tabComponent: 'EventsPage', index: 1, icon: 'calendar' }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, private alertCtrl: AlertController) {  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index};
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
        this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

  doLogout() {
    this.auth.logout();
    this.navCtrl.setRoot('LoginPage');
  }  


  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Efetuar Logout?',
      message: 'Você deseja efetuar o logout?',
      buttons: [
        {
          text: 'Não',
          role: 'nao',
          handler: () => { }
        },
        {
          text: 'Sim',
          handler: () => {
            this.doLogout();
          }
        }
      ]
    });
    alert.present();
  }
}
