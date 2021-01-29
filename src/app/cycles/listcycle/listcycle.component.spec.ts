import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcycleComponent } from './listcycle.component';

describe('ListcycleComponent', () => {
  let component: ListcycleComponent;
  let fixture: ComponentFixture<ListcycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
