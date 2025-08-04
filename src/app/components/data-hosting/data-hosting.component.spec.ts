import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatahostingComponent } from './data-hosting.component';

describe('DatahostingComponent', () => {
  let component: DatahostingComponent;
  let fixture: ComponentFixture<DatahostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatahostingComponent]
    });
    fixture = TestBed.createComponent(DatahostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
