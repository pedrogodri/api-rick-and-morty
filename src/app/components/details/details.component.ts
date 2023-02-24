import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/api/character-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public character:Character = new Character({});

  constructor(public service: ApiService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {

    let paramId = this.route.snapshot.paramMap.get('id');
    if(paramId) {
      this.service.getCharacterByName(paramId).subscribe(
        (resp) => {
          this.character = resp;
        }
      )
    }
  }

}
