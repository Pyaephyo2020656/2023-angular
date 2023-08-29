import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfDemoComponent } from './if-demo.component';

describe('IfDemoComponent', () => {
  let component: IfDemoComponent;
  let fixture: ComponentFixture<IfDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfDemoComponent]
    });
    fixture = TestBed.createComponent(IfDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
