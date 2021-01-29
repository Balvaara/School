import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeclasseComponent } from './listeclasse.component';

describe('ListeclasseComponent', () => {
  let component: ListeclasseComponent;
  let fixture: ComponentFixture<ListeclasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeclasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
