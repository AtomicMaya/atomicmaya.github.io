import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan2021GatewayOsintTalkComponent } from './gateway-osint-talk.component';

describe('GatewayOsintTalkComponent', () => {
  let component: Jan2021GatewayOsintTalkComponent;
  let fixture: ComponentFixture<Jan2021GatewayOsintTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jan2021GatewayOsintTalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jan2021GatewayOsintTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
