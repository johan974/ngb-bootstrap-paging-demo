import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ApplicatiedataService} from './applicatiedata.service';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {AanleveringenPage} from "./aanleveringenpage.model";
import {Aanlevering} from "./aanlevering.model";


@Injectable()
export class AanleveringenApiService {
    apiUrl = environment.apiUrl;

    private loadingSource = new BehaviorSubject<string>(null);
    loadingObservable = this.loadingSource.asObservable();

    constructor(private applicatieData: ApplicatiedataService) { }

    getAanleveringenPage(page: number, pageSize: number, direction: boolean, filter: string, reset: boolean) {
        this.applicatieData.aanleveringenPage = new AanleveringenPage();
        this.applicatieData.aanleveringenPage.aanleveringen = [];
        for (let i = 0; i < 10; i++) {
            let aanlevering = new Aanlevering();
            aanlevering.group = 'Page_' + page;
            aanlevering.naam = 'Naam_page_' + page + '_row_' + i;
            aanlevering.aanleveringId = page * 10 + i;
            this.applicatieData.aanleveringenPage.aanleveringen.push( aanlevering);
        }
        this.applicatieData.aanleveringenPageCurrent = page;
        this.applicatieData.dataIsReady(10);
    }
}
