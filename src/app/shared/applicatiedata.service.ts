import {BehaviorSubject} from 'rxjs';
import {PagedSource} from './paged-source.model';
import {Aanlevering} from "./aanlevering.model";
import {AanleveringenPage} from "./aanleveringenpage.model";

export class ApplicatiedataService {
    public aanleveringen: Aanlevering[] = [];
    public aanleveringenPage: AanleveringenPage = new AanleveringenPage();
    public aanleveringenPageCurrent = 1;
    public aanleveringenPagePrevious = 0;
    public username = '';
    public pageCommand: PagedSource;
    private pageSource = new BehaviorSubject<PagedSource>(null);
    pageObservable = this.pageSource.asObservable();

    constructor() {
        console.log('Starting with the application data');
        this.pageCommand = new PagedSource(this.aanleveringenPageCurrent, 20, false);
        this.pageCommand.rowCount = 0;
        this.pageCommand.reset = true;
    }

    dataIsReady(rowCount: number) {
        console.log('Date is ready: row conount ' + rowCount);
        if (rowCount > 0) {
            this.pageCommand.rowCount = rowCount;
        }
        console.log('Page >>');
        console.log(this.pageCommand);
        console.log('Firing command: ' + this.pageCommand);
        this.pageCommand.pageNumber = this.aanleveringenPageCurrent;
        this.pageSource.next(this.pageCommand);
    }

    getAanleveringById(aanleveringId: number) {
        if (this.aanleveringenPage === null ||
            this.aanleveringenPage.aanleveringen === null ||
            this.aanleveringenPage.aanleveringen.length < 1) {
            return null;
        }
        for (let i = 0; i < this.aanleveringenPage.aanleveringen.length; i++) {
            if (this.aanleveringenPage.aanleveringen[i].aanleveringId === aanleveringId) {
                return this.aanleveringenPage.aanleveringen[i];
            }
        }
        return null;
    }
}
