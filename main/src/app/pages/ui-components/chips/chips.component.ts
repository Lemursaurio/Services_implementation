import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ZipService } from 'src/app/services/zip.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})

export class AppChipsComponent {
  zip: String = '';
  zip$!: Observable<any>;

  constructor(private zipService: ZipService) {}

  onSubmit(): void {
    this.zip$ = this.zipService.getZip(this.zip);
  }
}

