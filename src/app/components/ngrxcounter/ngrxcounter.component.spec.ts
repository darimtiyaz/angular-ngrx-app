import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCounterComponent } from './ngrxcounter.component';
import { Store, StoreModule } from '@ngrx/store';

describe('NgrxCounterComponent', () => {
  let component: NgrxCounterComponent;
  let fixture: ComponentFixture<NgrxCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgrxCounterComponent],
      imports: [NgrxCounterComponent, StoreModule.forRoot({})],
    })
    .compileComponents();


    fixture = TestBed.createComponent(NgrxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});