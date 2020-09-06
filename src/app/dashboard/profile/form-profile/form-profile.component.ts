import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateProfile(event) {
    event.preventDefault();
  }
}
