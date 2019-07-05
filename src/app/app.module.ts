import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApplicatiedataService} from './shared/applicatiedata.service';
import {ModalComponent} from './shared/modal.component';
import {OverzichtComponent} from './overzicht/overzicht.component';
import {SafePipe} from './safe.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AanleveringEditComponent} from './aanlevering-edit/aanlevering-edit.component';
import {AanleveringenApiService} from "./shared/aanleveringenapi.service";

const appRoutes: Routes = [
    {path: '', redirectTo: '/aanleveringen', pathMatch: 'full'},
    {path: 'aanleveringen', component: OverzichtComponent},
    {path: 'aanlevering-edit/:aanleveringid', component: AanleveringEditComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ModalComponent,
        OverzichtComponent,
        SafePipe,
        AanleveringEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule],
    providers: [ApplicatiedataService, AanleveringenApiService],
    entryComponents: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
