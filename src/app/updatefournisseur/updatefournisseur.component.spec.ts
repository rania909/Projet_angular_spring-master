import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefournisseurComponent } from './updatefournisseur.component';

describe('UpdatefournisseurComponent', () => {
  let component: UpdatefournisseurComponent;
  let fixture: ComponentFixture<UpdatefournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
