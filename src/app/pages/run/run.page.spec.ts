import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RunPage } from './run.page';

describe('RunPage', () => {
  let component: RunPage;
  let fixture: ComponentFixture<RunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
