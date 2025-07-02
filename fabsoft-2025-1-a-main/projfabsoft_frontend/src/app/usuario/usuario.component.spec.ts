import { ComponentFixture, TestBed } from '@angular/core/testing';

import { usuarioComponent } from './usuario.component';

describe('usuarioComponent', () => {
  let component: usuarioComponent;
  let fixture: ComponentFixture<usuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [usuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(usuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
