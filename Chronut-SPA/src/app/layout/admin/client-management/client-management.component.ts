import { Component, OnInit } from '@angular/core';
import { Client } from '../../../_models/client';
import { Pagination, PaginatedResult } from '../../../_models/pagination';
import { ClientService } from '../../../_services/client.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent implements OnInit {
  clients: Client[];
  pagination: Pagination = {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: null,
    totalPages: null
  };

  constructor(private clientService: ClientService,
    private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients(this.pagination.currentPage, this.pagination.itemsPerPage, null)
      .subscribe(
        (res: PaginatedResult<Client[]>) => {
          this.clients = res.result;
          this.pagination = res.pagination;
        }, error => {
          this.alertify.error(error);
        }
      );
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadClients();
  }

  editClientModal(client: Client) {
    this.alertify.error("Feature not yet available!");
  }

}
