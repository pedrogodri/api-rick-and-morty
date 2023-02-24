import { ApiService } from './../../../service/api.service';
import { Results } from './../../../models/api-return';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class ListCharacterComponent implements OnInit {

  public resultsList$ = new Subject<Results[] | undefined>();

  constructor(public service: ApiService) { }

  ngOnInit(): void {
    this.service.getCharacterList().subscribe(
      (resp) => {
        this.resultsList$.next(resp.results);
      }
    )
  }
}
