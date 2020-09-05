import { Component, OnInit } from '@angular/core';

import { faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faEllipsisH = faEllipsisH;
  faSearch = faSearch;
  avatarImg = '';
  dropdown = false;
  menu: any;
  projetos: any;
  constructor() { }


  ngOnInit() {
    this.avatar();
    this.menu = {
      title: 'Menu',
      subMenu: [
        {
          path: 'main',
          classActive: 'active',
          name: 'Home'
        },
        {
          path: 'tasks',
          classActive: 'active',
          name: 'Minhas tarefas'
        },
        {
          path: 'notifications',
          classActive: 'active',
          name: 'Notificações',
          icon: true
        }
      ]
    };

    this.projetos = {
      title: 'Projetos',
      subMenu: [
        {
          path: '#',
          name: 'Dashboard UI Kit',
          icon: ''
        },
        {
          path: '#',
          name: 'CRM System',
          icon: ''
        },
        {
          path: '#',
          name: 'Website Redesign',
          icon: ''
        },
        {
          path: '#',
          name: 'Communication Tool',
          icon: ''
        },
      ]
    };
  }

  avatar() {
    this.avatarImg = 'https://ava.unicarioca.edu.br/graduacao/pluginfile.php/400075/user/icon/graduacao/f2?rev=6430968';
  }



}
