import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExamComponent } from './menu-exam.component';

describe('MenuExamComponent', () => {
  let component: MenuExamComponent;
  let fixture: ComponentFixture<MenuExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
