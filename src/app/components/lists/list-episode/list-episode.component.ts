import { ApiService } from './../../../service/api.service';
import { Results } from './../../../models/api-return';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-episode',
  templateUrl: './list-episode.component.html',
  styleUrls: ['./list-episode.component.scss']
})
export class ListEpisodeComponent implements OnInit {
  public resultsList$ = new Subject<Results[] | undefined>();

  constructor(public service: ApiService) { }

  ngOnInit(): void {
    this.service.getEpisodeList().subscribe(
      (resp) => {
        this.resultsList$.next(resp.results);
      }
    )
  }
}
