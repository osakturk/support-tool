import { Component } from '@angular/core';
import { Ticket } from "../ticket/ticket";
import { NewTicket } from "../new-ticket/new-ticket";

@Component({
  selector: 'app-tickets',
  imports: [Ticket, NewTicket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {

}
