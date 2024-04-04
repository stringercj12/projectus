import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  faCheck = faCheck;

  constructor() { }

  ngOnInit() {
  }


  actives = [
    {
      title: '<strong>Darika Samak</strong> mark as done <strong>Listing on Product Hunt</strong>',
      hour: '8:40 PM'
    },

    {
      title: '<strong>Emilee Simchenko</strong> commented on <strong>Account for teams and personal in bottom style</strong>',
      hour: '7:32 PM'
    },

    {
      title: '<strong>Darika Samak</strong> uploaded 4 files on <strong> An option to search in current projects or in all projects</strong>',
      hour: '6:02 PM',
      images: [
        {
          path: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

        {
          path: 'https://images.unsplash.com/photo-1527219525722-f9767a7f2884?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

        {
          path: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

        {
          path: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },

        {
          path: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    },

  ]


}
