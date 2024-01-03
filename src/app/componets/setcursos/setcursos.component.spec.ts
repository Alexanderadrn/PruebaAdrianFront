import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetcursosComponent } from './setcursos.component';

describe('SetcursosComponent', () => {
  let component: SetcursosComponent;
  let fixture: ComponentFixture<SetcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetcursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
