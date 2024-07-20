import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  public userService = inject(UsersService);

}
