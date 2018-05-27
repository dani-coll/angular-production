import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailComponent } from './user-detail.component';
import { ApiService } from '../services/api.service';
import { HttpModule } from '@angular/http';
import { User } from '../models/user';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        UserDetailComponent
      ],
      providers: [ApiService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    component.user = new User();
    component.user.login = 'dani7cl';
    component.user.name = 'Daniel Coll';
    component.user.company = 'Itequia';
    component.user.location = 'Barcelona';
    component.followers = new Array<User>();
    component.followers.push(component.user);
    fixture.detectChanges();
  });
  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));
  it('should display user details', async(() => {
    expect('[' + component.user.login + ']')
    .toEqual(fixture.nativeElement.querySelector('.details .name a').text);
  }));
  it('should display the user followers', async(() => {
    expect(component.followers.length)
    .toEqual(fixture.nativeElement.querySelectorAll('.item').length);
  }));
});
