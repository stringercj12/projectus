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
  constructor() { }

  ngOnInit() {
    this.avatar();
  }

  avatar() {
    this.avatarImg = 'https://jcfsoft.com/select-icon-1.jpg';
  }
}
