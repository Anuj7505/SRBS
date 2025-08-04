import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearedhostingComponent } from './sheared-hosting.component';

describe('ShearedhostingComponent', () => {
  let component: ShearedhostingComponent;
  let fixture: ComponentFixture<ShearedhostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShearedhostingComponent]
    });
    fixture = TestBed.createComponent(ShearedhostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
