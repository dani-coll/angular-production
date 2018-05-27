import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserCellComponent } from './user-cell.component';
import { User } from '../../../models/user';

describe('UserCellComponent', () => {
  let component: UserCellComponent;
  let fixture: ComponentFixture<UserCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        UserCellComponent
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCellComponent);
    component = fixture.componentInstance;
    component.user = new User();
    component.user.login = 'dani7cl';
    fixture.detectChanges();
  });
  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));
  it('should display login name', async(() => {
    expect(component.user.login)
    .toEqual(fixture.nativeElement.querySelector('.username').textContent
                                  .replace(/\n/g, '')
                                  .replace(/\ /g, '')
            );
  }));
});
