import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoutingComponent } from './list-routing.component';

describe('ListRoutingComponent', () => {
  let component: ListRoutingComponent;
  let fixture: ComponentFixture<ListRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
