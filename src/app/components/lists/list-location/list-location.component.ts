import { ApiService } from './../../../service/api.service';
import { Results } from './../../../models/api-return';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.scss']
})
export class ListLocationComponent implements OnInit {

  public resultsList$ = new Subject<Results[] | undefined>();

  constructor(public service: ApiService) { }

  ngOnInit(): void {
    this.service.getLocationList().subscribe(
      (resp) => {
        this.resultsList$.next(resp.results);
      }
    )
  }
}
