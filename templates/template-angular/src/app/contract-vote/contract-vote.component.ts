import { Component, OnInit } from '@angular/core';
import { openContractCall } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import {
  AnchorMode,
  PostConditionMode,
  stringUtf8CV,
} from '@stacks/transactions';
import { userSession } from 'src/stacksUserSession';

@Component({
  selector: 'app-contract-vote',
  templateUrl: './contract-vote.component.html',
  styleUrls: ['./contract-vote.component.css'],
})
export class ContractVoteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public userSession = userSession;

  vote(pick: string) {
    openContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any,
      contractAddress: 'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK',
      contractName: 'example-fruit-vote-contract',
      functionName: 'vote',
      functionArgs: [stringUtf8CV(pick)],
      postConditionMode: PostConditionMode.Deny,
      postConditions: [],
      onFinish: (data) => {
        console.log('onFinish:', data);
        window
          ?.open(
            `https://explorer.hiro.so/txid/${data.txId}?chain=testnet`,
            '_blank'
          )
          ?.focus();
      },
      onCancel: () => {
        console.log('onCancel:', 'Transaction was canceled');
      },
    });
  }
}
