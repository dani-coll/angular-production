import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { HttpModule } from '@angular/http';
import { UserListComponent } from './user-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserCellComponent } from './components/user-cell/user-cell.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule , FormsModule, HttpModule],
      declarations: [
        UserListComponent,
        SearchBarComponent,
        UserCellComponent
      ],
      providers: [ ApiService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    const user = new User();
    user.login = 'dani7cl';
    component.users = new Array<User>();
    component.users.push(user);
    component.users.push(user);
    component.users.push(user);
    component.users.push(user);
    fixture.detectChanges();

  });
  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));
  it('user array should equal DOM', async(() => {
    expect(fixture.nativeElement.querySelectorAll('app-user-cell').length)
    .toEqual(component.users.length);
  }));
});
