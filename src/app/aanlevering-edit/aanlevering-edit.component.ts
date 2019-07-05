import {Component, OnInit} from '@angular/core';
import {ApplicatiedataService} from "../shared/applicatiedata.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Aanlevering} from "../shared/aanlevering.model";

@Component({
    selector: 'app-aanlevering-edit',
    templateUrl: './aanlevering-edit.component.html',
    styleUrls: ['./aanlevering-edit.component.css']
})
export class AanleveringEditComponent implements OnInit {
    aanlevering: Aanlevering;
    errorMessage = '';

    constructor(private applicatieData: ApplicatiedataService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        const id = +(this.route.snapshot.params['aanleveringid']);
        this.aanlevering = this.applicatieData.getAanleveringById(id);
    }

    goBack() {
        this.router.navigate(['/aanleveringen']);
    }
}
