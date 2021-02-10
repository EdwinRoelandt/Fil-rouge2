import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModifComponent } from './card-modif.component';

describe('CardModifComponent', () => {
  let component: CardModifComponent;
  let fixture: ComponentFixture<CardModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
