import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsproduitComponent } from './detailsproduit.component';

describe('DetailsproduitComponent', () => {
  let component: DetailsproduitComponent;
  let fixture: ComponentFixture<DetailsproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
