import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Client } from '../_models/client';
import { ClientService } from '../_services/client.service';

@Injectable()
export class ClientsResolver implements Resolve<Client[]> {
    pageNumber = 1;
    pageSize = 5;

    constructor(private clientService: ClientService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Client[]> {
        return this.clientService.getClients(this.pageNumber, this.pageSize, null).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
