import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEpisodeComponent } from './list-episode.component';

describe('ListCharacterComponent', () => {
  let component: ListEpisodeComponent;
  let fixture: ComponentFixture<ListEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEpisodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
