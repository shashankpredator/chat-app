import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { state } from '../common-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  message$: any;
  constructor(private msgSvc: MessageService) {}

  ngOnInit(): void {
    this.message$ = state(this.msgSvc.message)
  }
}
