import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceEditComponent } from './balance-edit.component';

describe('BalanceEditComponent', () => {
  let component: BalanceEditComponent;
  let fixture: ComponentFixture<BalanceEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceEditComponent]
    });
    fixture = TestBed.createComponent(BalanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
