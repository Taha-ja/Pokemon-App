import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRoutingComponent } from './details-routing.component';

describe('DetailsRoutingComponent', () => {
  let component: DetailsRoutingComponent;
  let fixture: ComponentFixture<DetailsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
