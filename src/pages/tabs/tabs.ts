import { Component } from '@angular/core';

import { AldingaPage } from '../aldinga/aldinga';
import { SeafordPage } from '../seaford/seaford';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AldingaPage;
  tab3Root = SeafordPage;

  constructor() {

  }
}
