import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingComponent } from './creating.component';

describe('CreatingComponent', () => {
  let component: CreatingComponent;
  let fixture: ComponentFixture<CreatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
