import { Component, input } from '@angular/core';
import { ImageModal } from '../../modals/image.modal';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
})
export class DashboardItem {
  image = input<ImageModal>()
  title = input<string>()
}
