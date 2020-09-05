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
          path: 'https://jcfsoft.com/images/Image.png'
        },

        {
          path: 'https://jcfsoft.com/images/Image.png'
        },

        {
          path: 'https://jcfsoft.com/images/Image.png'
        },

        {
          path: 'https://jcfsoft.com/images/Image.png'
        },

        {
          path: 'https://jcfsoft.com/images/Image.png'
        }
      ]
    },

  ]


}
