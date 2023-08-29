import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoutingComponent } from './create-routing.component';

describe('CreateRoutingComponent', () => {
  let component: CreateRoutingComponent;
  let fixture: ComponentFixture<CreateRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
