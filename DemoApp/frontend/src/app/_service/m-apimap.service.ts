import { Injectable } from '@angular/core';
import { MInterfaceService } from './m-interface.service';

@Injectable({
  providedIn: 'root'
})

export class MAPImapService {

  constructor(private server: MInterfaceService) { }

  login(data: any) {
    return this.server.apiConnect(data, '/v1/login');
  }

  signup(data: any) {
    return this.server.apiConnect(data, '/v1/signup');
  }

  requestReset(data: any) {
    return this.server.apiConnect(data, '/v1/req-reset-password');
  }

  newPassword(data: any) {
    return this.server.apiConnect(data, '/v1/new-password');
  }

  ValidPasswordToken(data: any) {
    return this.server.apiConnect(data, '/v1/valid-password-token');
  }
}
