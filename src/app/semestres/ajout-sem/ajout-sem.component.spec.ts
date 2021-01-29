import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSemComponent } from './ajout-sem.component';

describe('AjoutSemComponent', () => {
  let component: AjoutSemComponent;
  let fixture: ComponentFixture<AjoutSemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutSemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
