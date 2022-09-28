import { Injectable } from '@angular/core';
import { MInterfaceService } from './m-interface.service';

@Injectable({
  providedIn: 'root'
})
export class MAPImapService {

  constructor(private server: MInterfaceService) { }

  login(data: any) {
    return this.server.apiConnect({ data : data }, '/v1/login');
  }
}
