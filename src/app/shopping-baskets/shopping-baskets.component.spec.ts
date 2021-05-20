import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBasketsComponent } from './shopping-baskets.component';

describe('ShoppingBasketsComponent', () => {
  let component: ShoppingBasketsComponent;
  let fixture: ComponentFixture<ShoppingBasketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBasketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
