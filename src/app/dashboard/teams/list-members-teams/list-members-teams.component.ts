import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-members-teams',
  templateUrl: './list-members-teams.component.html',
  styleUrls: ['./list-members-teams.component.scss']
})
export class ListMembersTeamsComponent implements OnInit {

  teamsId: any;
  items: any = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.teamsId = this.activeRoute.snapshot.params['teamsId'];
    console.log(this.teamsId, this.activeRoute.snapshot.params['teamsId']);
  }

  openStaff(id: number) {
    this.teamsId = id;
  }
}
