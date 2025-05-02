import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2SsrComponent } from './route-2-ssr.component';

describe('Route2SsrComponent', () => {
  let component: Route2SsrComponent;
  let fixture: ComponentFixture<Route2SsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Route2SsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Route2SsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
