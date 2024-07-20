import { Component, inject } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { UsersService } from '@services/users.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,TitleComponent,RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public userService = inject(UsersService);

}
