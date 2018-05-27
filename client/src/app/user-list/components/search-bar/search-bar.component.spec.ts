import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../../../models/user';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { HttpModule } from '@angular/http';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule , FormsModule, HttpModule],
      declarations: [
        SearchBarComponent
      ],
      providers: [ ApiService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));
});
