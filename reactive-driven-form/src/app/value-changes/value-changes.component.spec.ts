import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueChangesComponent } from './value-changes.component';

describe('ValueChangesComponent', () => {
  let component: ValueChangesComponent;
  let fixture: ComponentFixture<ValueChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValueChangesComponent]
    });
    fixture = TestBed.createComponent(ValueChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});