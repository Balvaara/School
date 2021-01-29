import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouMatComponent } from './ajou-mat.component';

describe('AjouMatComponent', () => {
  let component: AjouMatComponent;
  let fixture: ComponentFixture<AjouMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
