import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TecnologiasPage } from './tecnologias.page';

describe('TecnologiasPage', () => {
  let component: TecnologiasPage;
  let fixture: ComponentFixture<TecnologiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TecnologiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
