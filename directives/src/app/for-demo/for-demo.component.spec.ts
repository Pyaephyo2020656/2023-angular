import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDemoComponent } from './for-demo.component';

describe('ForDemoComponent', () => {
  let component: ForDemoComponent;
  let fixture: ComponentFixture<ForDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForDemoComponent]
    });
    fixture = TestBed.createComponent(ForDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
