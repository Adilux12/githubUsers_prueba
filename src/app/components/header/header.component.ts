import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchForm: FormGroup;

  constructor(
    private usersServices: UsersService
  ) {
    this.searchForm = new FormGroup({
      name: new FormControl()
    })

  }

  async getData(): Promise<void> {

    try {
      console.log(this.searchForm.value.name)
      const response = await this.usersServices.getUsersByName(this.searchForm.value.name)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

}
