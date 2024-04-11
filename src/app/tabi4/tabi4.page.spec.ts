import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tabi4Page } from './tabi4.page';

describe('Tabi4Page', () => {
  let component: Tabi4Page;
  let fixture: ComponentFixture<Tabi4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabi4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
