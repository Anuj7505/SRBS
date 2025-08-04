import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerhostingComponent } from './reseller-hosting.component';

describe('ResellerhostingComponent', () => {
  let component: ResellerhostingComponent;
  let fixture: ComponentFixture<ResellerhostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResellerhostingComponent]
    });
    fixture = TestBed.createComponent(ResellerhostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
