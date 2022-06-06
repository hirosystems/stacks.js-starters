import { Component, OnInit } from '@angular/core';
import { showConnect } from '@stacks/connect';
import { userSession } from 'src/stacksUserSession';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.css'],
})
export class ConnectWalletComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public userSession = userSession;

  authenticate() {
    showConnect({
      appDetails: {
        name: 'Stacks Angular Starter',
        icon: window.location.origin + '/logo240.png',
      },
      redirectTo: '/',
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  }

  disconnect() {
    userSession.signUserOut('/');
  }
}
