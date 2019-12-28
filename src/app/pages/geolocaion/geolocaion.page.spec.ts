import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeolocaionPage } from './geolocaion.page';

describe('GeolocaionPage', () => {
  let component: GeolocaionPage;
  let fixture: ComponentFixture<GeolocaionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocaionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeolocaionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
