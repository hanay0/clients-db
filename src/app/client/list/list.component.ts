import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ClientServiceService } from '../../core/services/client-service.service';
import { BaseModel } from '../../core/models/base-model';
import { Client } from '../../core/models/client';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  clients: Client[] = [];
  isLoading: boolean = true;


  constructor(
    private clientService: ClientServiceService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.getClientsList();
  }

  getClientsList() {
    this.clientService.getClients().subscribe({
      next: (response: BaseModel<Client[]>) => {
        console.log('API Response:', response);
        if (response.code === 200) {
          this.clients = response.data;
          console.log('Clients:', this.clients);
        } else {
          console.error('Unexpected response code:', response.code);
        }
        this.isLoading = false;
        this.cdr.detectChanges();  // Manually trigger change detection
      },
      error: (error) => {
        console.error('API Error:', error);
        this.isLoading = false;
        this.cdr.detectChanges();  // Manually trigger change detection
      }
    });
  }
}
