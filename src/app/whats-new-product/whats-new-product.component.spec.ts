import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsNewProductComponent } from './whats-new-product.component';

describe('WhatsNewProductComponent', () => {
  let component: WhatsNewProductComponent;
  let fixture: ComponentFixture<WhatsNewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsNewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
