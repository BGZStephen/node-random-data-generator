import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment"

@Injectable()
export class DashboardApiService {

  constructor() { }

  apiUrl: String = environment.apiUrl

}
