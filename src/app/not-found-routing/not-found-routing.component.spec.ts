import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRoutingComponent } from './not-found-routing.component';

describe('NotFoundRoutingComponent', () => {
  let component: NotFoundRoutingComponent;
  let fixture: ComponentFixture<NotFoundRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
