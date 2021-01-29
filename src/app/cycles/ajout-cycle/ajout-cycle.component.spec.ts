import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCycleComponent } from './ajout-cycle.component';

describe('AjoutCycleComponent', () => {
  let component: AjoutCycleComponent;
  let fixture: ComponentFixture<AjoutCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
