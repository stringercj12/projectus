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
    this.avatarImg = 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }



}
