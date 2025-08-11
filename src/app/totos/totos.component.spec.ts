import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotosComponent } from './totos.component';

describe('TotosComponent', () => {
  let component: TotosComponent;
  let fixture: ComponentFixture<TotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
