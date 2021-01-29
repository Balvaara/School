import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSemestreComponent } from './liste-semestre.component';

describe('ListeSemestreComponent', () => {
  let component: ListeSemestreComponent;
  let fixture: ComponentFixture<ListeSemestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSemestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
