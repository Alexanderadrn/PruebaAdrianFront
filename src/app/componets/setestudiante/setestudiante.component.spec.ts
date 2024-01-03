import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetestudianteComponent } from './setestudiante.component';

describe('SetestudianteComponent', () => {
  let component: SetestudianteComponent;
  let fixture: ComponentFixture<SetestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetestudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
