import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Status } from "./dashboard/status/status";
import { Tickets } from "./dashboard/tickets/tickets";
import { Traffic } from "./dashboard/traffic/traffic";
import { DashboardItem } from "./dashboard/dashboard-item/dashboard-item";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Status, Traffic, Tickets, DashboardItem]
})
export class App {}
