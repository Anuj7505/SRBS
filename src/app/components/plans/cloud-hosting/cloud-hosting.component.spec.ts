import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudhostingComponent } from './cloud-hosting.component';

describe('CloudhostingComponent', () => {
  let component: CloudhostingComponent;
  let fixture: ComponentFixture<CloudhostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudhostingComponent]
    });
    fixture = TestBed.createComponent(CloudhostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
