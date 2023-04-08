import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'https://api.github.com/'
  }

  getUsersByName(name: string): Promise<any> {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}search/users?q=${name}`)
    )
  }
}
