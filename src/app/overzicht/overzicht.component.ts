import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ApplicatiedataService} from '../shared/applicatiedata.service';
import {AanleveringenApiService} from '../shared/aanleveringenapi.service';
import {Router} from '@angular/router';
import {AanleveringenPage} from "../shared/aanleveringenpage.model";
import {Aanlevering} from "../shared/aanlevering.model";

@Component({
    selector: 'app-overzicht',
    templateUrl: './overzicht.component.html',
    styleUrls: ['./overzicht.component.css']
})
export class OverzichtComponent implements OnInit, OnDestroy {
    @ViewChild('loader') loader;
    aanleveringenPage: AanleveringenPage = new AanleveringenPage();
    loading = false;

    private subscription = null;

    itemsPerPage = 10;
    totalItems = 100;
    pageAscending = false;
    pageFilter = null;
    resetPaging = true;
    maxNumberOfPagesInPaging = 5;
    buttonSize = 'md';
    currentPage = 1;

    errorMessage = '';

    constructor(private applicatieData: ApplicatiedataService, private aanleveringenApi: AanleveringenApiService,
                private router: Router) {
    }

    ngOnInit() {
        const that = this;
        this.currentPage = this.applicatieData.aanleveringenPageCurrent;

        this.subscription = this.applicatieData.pageObservable.subscribe(
            (newPageArrived) => {
                if (newPageArrived !== null) {
                    console.log('New page arrived!' + newPageArrived.pageNumber);
                    this.aanleveringenPage = this.applicatieData.aanleveringenPage;
                    this.loading = false;
                    this.currentPage = this.applicatieData.aanleveringenPageCurrent;
                    this.resetPaging = false;
                    console.log('loading off ... ');
                }
            }, (error) => {
                this.errorMessage = 'Kan geen data laden: ' + error.toString();
            }
        );
        this.resetPaging = true;
        this.loadPage(this.applicatieData.aanleveringenPageCurrent);
    }

    ngOnDestroy() {
        if( this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }

    showLessOnSmallerScreens() {
        if (window.matchMedia('(max-width: 480px)').matches) {
            this.maxNumberOfPagesInPaging = 3;
            this.buttonSize = 'sm';
        }
        this.maxNumberOfPagesInPaging = 5;
        this.buttonSize = 'md';
    }

    isLoading() {
        if (this.loading) {
            return 'block';
        } else {
            return 'none';
        }
    }

    loadPage(page: number) {
        this.showLessOnSmallerScreens();
        // if (page !== this.applicatieData.aanleveringenPagePrevious) {
            this.applicatieData.aanleveringenPagePrevious = page;
            this.loading = true;
            this.aanleveringenApi.getAanleveringenPage( page, this.itemsPerPage, this.pageAscending,
                this.pageFilter, this.resetPaging);
        // }
    }

    loadPage2(page: number) {
        this.loadPage(page);
    }


    getAanleveringById( id: number) {
        let foundAanleveringId = -1;
        const that = this;
        let aanleveringFound = this.aanleveringenPage.aanleveringen[0];
        this.aanleveringenPage.aanleveringen.forEach( aanlevering => {
           if( aanlevering.aanleveringId === id) {
               aanleveringFound = aanlevering;
           }
        });
        return aanleveringFound;
    }
}
