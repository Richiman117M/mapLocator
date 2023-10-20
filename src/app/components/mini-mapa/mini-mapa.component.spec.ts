import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMapaComponent } from './mini-mapa.component';

describe('MiniMapaComponent', () => {
  let component: MiniMapaComponent;
  let fixture: ComponentFixture<MiniMapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniMapaComponent]
    });
    fixture = TestBed.createComponent(MiniMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
