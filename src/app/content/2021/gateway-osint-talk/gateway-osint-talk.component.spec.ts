import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayOsintTalkComponent } from './gateway-osint-talk.component';

describe('GatewayOsintTalkComponent', () => {
  let component: GatewayOsintTalkComponent;
  let fixture: ComponentFixture<GatewayOsintTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayOsintTalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayOsintTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
