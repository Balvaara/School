import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulttinComponent } from './bulttin.component';

describe('BulttinComponent', () => {
  let component: BulttinComponent;
  let fixture: ComponentFixture<BulttinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulttinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulttinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
