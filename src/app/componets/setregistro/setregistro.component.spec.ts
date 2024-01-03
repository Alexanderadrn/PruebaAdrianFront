import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetregistroComponent } from './setregistro.component';

describe('SetregistroComponent', () => {
  let component: SetregistroComponent;
  let fixture: ComponentFixture<SetregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
