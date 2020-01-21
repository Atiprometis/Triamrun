import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissionHistoryPage } from './mission-history.page';

describe('MissionHistoryPage', () => {
  let component: MissionHistoryPage;
  let fixture: ComponentFixture<MissionHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
