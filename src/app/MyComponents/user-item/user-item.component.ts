import { Component, Input } from '@angular/core';
import { Users } from 'src/app/Common/users';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {
  @Input() user:Users;
}
