import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = 'Home';
  @Input() mainRoute = false;
  @Input() profileRoute = false;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activeRoute.snapshot.data.subscribe(res => {
    //   console.log(res)
    // })
  }

}
