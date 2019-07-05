(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aanlevering-edit/aanlevering-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/aanlevering-edit/aanlevering-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aanlevering-edit/aanlevering-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/aanlevering-edit/aanlevering-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Id</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.aanleveringId}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Groep</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.group}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Naam</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.naam}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Peildatum</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.startTijd}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Eindstatus</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.overallstatus}}</div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Maken levering</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.status}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Start</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.startTijd}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Einde</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.eindTijd}}</div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Opsturen PDOK status</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.pdokLeveringStatus}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Opsturen PDOK start</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.pdokLeveringStartTijd}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Opsturen PDOK einde</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.pdokLeveringEindTijd}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">PDOK id</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.pdokLeveringId}}</div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">PDOK verwerking status</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.pdokVerwerkingStatus}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">PDOK verwerking start</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.pdokVerwerkingStartTijd}}</div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">PDOK verwerking einde</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.pdokVerwerkingEindTijd}}</div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col-3 font-weight-bold\">Consistentie Telling</div>\n        <div class=\"col-8 ml-2\">{{aanlevering.aantal}}</div>\n    </div>\n</div>\n<p *ngIf=\"errorMessage.length > 0\">{{errorMessage}}</p>\n<button type=\"button\" class=\"btn btn-space btn-info ml-2\"\n        (click)=\"goBack()\">Terug\n</button>\n\n"

/***/ }),

/***/ "./src/app/aanlevering-edit/aanlevering-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/aanlevering-edit/aanlevering-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: AanleveringEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AanleveringEditComponent", function() { return AanleveringEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_applicatiedata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/applicatiedata.service */ "./src/app/shared/applicatiedata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AanleveringEditComponent = /** @class */ (function () {
    function AanleveringEditComponent(applicatieData, route, router) {
        this.applicatieData = applicatieData;
        this.route = route;
        this.router = router;
        this.errorMessage = '';
    }
    AanleveringEditComponent.prototype.ngOnInit = function () {
        var id = +(this.route.snapshot.params['aanleveringid']);
        this.aanlevering = this.applicatieData.getAanleveringById(id);
    };
    AanleveringEditComponent.prototype.goBack = function () {
        this.router.navigate(['/aanleveringen']);
    };
    AanleveringEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aanlevering-edit',
            template: __webpack_require__(/*! ./aanlevering-edit.component.html */ "./src/app/aanlevering-edit/aanlevering-edit.component.html"),
            styles: [__webpack_require__(/*! ./aanlevering-edit.component.css */ "./src/app/aanlevering-edit/aanlevering-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_applicatiedata_service__WEBPACK_IMPORTED_MODULE_1__["ApplicatiedataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AanleveringEditComponent);
    return AanleveringEditComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        router.navigate(['/aanleveringen']);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_applicatiedata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/applicatiedata.service */ "./src/app/shared/applicatiedata.service.ts");
/* harmony import */ var _shared_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/modal.component */ "./src/app/shared/modal.component.ts");
/* harmony import */ var _overzicht_overzicht_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overzicht/overzicht.component */ "./src/app/overzicht/overzicht.component.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _aanlevering_edit_aanlevering_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aanlevering-edit/aanlevering-edit.component */ "./src/app/aanlevering-edit/aanlevering-edit.component.ts");
/* harmony import */ var _shared_aanleveringenapi_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/aanleveringenapi.service */ "./src/app/shared/aanleveringenapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', redirectTo: '/aanleveringen', pathMatch: 'full' },
    { path: 'aanleveringen', component: _overzicht_overzicht_component__WEBPACK_IMPORTED_MODULE_7__["OverzichtComponent"] },
    { path: 'aanlevering-edit/:aanleveringid', component: _aanlevering_edit_aanlevering_edit_component__WEBPACK_IMPORTED_MODULE_10__["AanleveringEditComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _shared_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"],
                _overzicht_overzicht_component__WEBPACK_IMPORTED_MODULE_7__["OverzichtComponent"],
                _safe_pipe__WEBPACK_IMPORTED_MODULE_8__["SafePipe"],
                _aanlevering_edit_aanlevering_edit_component__WEBPACK_IMPORTED_MODULE_10__["AanleveringEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [_shared_applicatiedata_service__WEBPACK_IMPORTED_MODULE_5__["ApplicatiedataService"], _shared_aanleveringenapi_service__WEBPACK_IMPORTED_MODULE_11__["AanleveringenApiService"]],
            entryComponents: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/overzicht/overzicht.component.css":
/*!***************************************************!*\
  !*** ./src/app/overzicht/overzicht.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listMaxEntries {\n  height: 55vh;\n  max-height: 55vh;\n  overflow-y:scroll;\n  overflow-x:hidden;\n}\n.liststrong {\n  font-weight: bold;\n}\n.list-no-padding {\n  padding: 0px;\n}\n.ul-less-padding {\n  -webkit-padding-start: 5px;\n          padding-inline-start: 5px;\n}\n#myspinner {\n  position: absolute;\n  top: 40vh;\n  left: 50vw;\n  z-index: 1;\n}"

/***/ }),

/***/ "./src/app/overzicht/overzicht.component.html":
/*!****************************************************!*\
  !*** ./src/app/overzicht/overzicht.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myspinner\" class=\"spinner-border text-warning \" [style.display]=\"isLoading()\"></div>\n<div class=\"row m-2\">\n    <table class=\"table table-bordered\">\n        <thead>\n        <tr class=\"d-flex\">\n            <th class=\"col-1 py-1\">Groep</th>\n            <th class=\"col-2 py-1\">Naam</th>\n            <th class=\"col-3 py-1\">Peildatum</th>\n            <th class=\"col-2 py-1\">Status</th>\n            <th class=\"col-4 py-1\">Start</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr class=\"d-flex\" *ngFor=\"let aanlevering of aanleveringenPage.aanleveringen\"\n            [routerLink]=\"['/aanlevering-edit', aanlevering.aanleveringId]\">\n            <td class=\"col-1 py-1\">{{ aanlevering.group }}</td>\n            <td class=\"col-2 py-1\">{{ aanlevering.naam | slice:0:12 }}</td>\n            <td class=\"col-3 py-1\">{{ aanlevering.startTijd }}</td>\n            <td class=\"col-2 py-1\">{{ aanlevering.overallstatus }}</td>\n            <td class=\"col-4 py-1\">{{ aanlevering.startTijd }}</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<div class=\"row m-2\">\n    <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\"\n                    [(page)]=\"currentPage\"\n                    [maxSize]=\"maxNumberOfPagesInPaging\" (pageChange)=\"loadPage2($event)\" [size]=\"buttonSize\"\n                    [directionLinks]=\"true\" [boundaryLinks]=\"true\" [ellipses]=\"false\"></ngb-pagination>\n</div>\n<p class=\"m-2\" *ngIf=\"errorMessage.length > 0\">{{errorMessage}}</p>\n\n\n"

/***/ }),

/***/ "./src/app/overzicht/overzicht.component.ts":
/*!**************************************************!*\
  !*** ./src/app/overzicht/overzicht.component.ts ***!
  \**************************************************/
/*! exports provided: OverzichtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverzichtComponent", function() { return OverzichtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_applicatiedata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/applicatiedata.service */ "./src/app/shared/applicatiedata.service.ts");
/* harmony import */ var _shared_aanleveringenapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/aanleveringenapi.service */ "./src/app/shared/aanleveringenapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_aanleveringenpage_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/aanleveringenpage.model */ "./src/app/shared/aanleveringenpage.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OverzichtComponent = /** @class */ (function () {
    function OverzichtComponent(applicatieData, aanleveringenApi, router) {
        this.applicatieData = applicatieData;
        this.aanleveringenApi = aanleveringenApi;
        this.router = router;
        this.aanleveringenPage = new _shared_aanleveringenpage_model__WEBPACK_IMPORTED_MODULE_4__["AanleveringenPage"]();
        this.loading = false;
        this.subscription = null;
        this.itemsPerPage = 10;
        this.totalItems = 100;
        this.pageAscending = false;
        this.pageFilter = null;
        this.resetPaging = true;
        this.maxNumberOfPagesInPaging = 5;
        this.buttonSize = 'md';
        this.currentPage = 1;
        this.errorMessage = '';
    }
    OverzichtComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.currentPage = this.applicatieData.aanleveringenPageCurrent;
        this.subscription = this.applicatieData.pageObservable.subscribe(function (newPageArrived) {
            if (newPageArrived !== null) {
                console.log('New page arrived!' + newPageArrived.pageNumber);
                _this.aanleveringenPage = _this.applicatieData.aanleveringenPage;
                _this.loading = false;
                _this.currentPage = _this.applicatieData.aanleveringenPageCurrent;
                _this.resetPaging = false;
                console.log('loading off ... ');
            }
        }, function (error) {
            _this.errorMessage = 'Kan geen data laden: ' + error.toString();
        });
        this.resetPaging = true;
        this.loadPage(this.applicatieData.aanleveringenPageCurrent);
    };
    OverzichtComponent.prototype.ngOnDestroy = function () {
        if (this.subscription !== null) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    };
    OverzichtComponent.prototype.showLessOnSmallerScreens = function () {
        if (window.matchMedia('(max-width: 480px)').matches) {
            this.maxNumberOfPagesInPaging = 3;
            this.buttonSize = 'sm';
        }
        this.maxNumberOfPagesInPaging = 5;
        this.buttonSize = 'md';
    };
    OverzichtComponent.prototype.isLoading = function () {
        if (this.loading) {
            return 'block';
        }
        else {
            return 'none';
        }
    };
    OverzichtComponent.prototype.loadPage = function (page) {
        this.showLessOnSmallerScreens();
        // if (page !== this.applicatieData.aanleveringenPagePrevious) {
        this.applicatieData.aanleveringenPagePrevious = page;
        this.loading = true;
        this.aanleveringenApi.getAanleveringenPage(page, this.itemsPerPage, this.pageAscending, this.pageFilter, this.resetPaging);
        // }
    };
    OverzichtComponent.prototype.loadPage2 = function (page) {
        this.loadPage(page);
    };
    OverzichtComponent.prototype.getAanleveringById = function (id) {
        var foundAanleveringId = -1;
        var that = this;
        var aanleveringFound = this.aanleveringenPage.aanleveringen[0];
        this.aanleveringenPage.aanleveringen.forEach(function (aanlevering) {
            if (aanlevering.aanleveringId === id) {
                aanleveringFound = aanlevering;
            }
        });
        return aanleveringFound;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loader'),
        __metadata("design:type", Object)
    ], OverzichtComponent.prototype, "loader", void 0);
    OverzichtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overzicht',
            template: __webpack_require__(/*! ./overzicht.component.html */ "./src/app/overzicht/overzicht.component.html"),
            styles: [__webpack_require__(/*! ./overzicht.component.css */ "./src/app/overzicht/overzicht.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_applicatiedata_service__WEBPACK_IMPORTED_MODULE_1__["ApplicatiedataService"], _shared_aanleveringenapi_service__WEBPACK_IMPORTED_MODULE_2__["AanleveringenApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OverzichtComponent);
    return OverzichtComponent;
}());



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/shared/aanlevering.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/aanlevering.model.ts ***!
  \*********************************************/
/*! exports provided: Aanlevering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aanlevering", function() { return Aanlevering; });
var Aanlevering = /** @class */ (function () {
    function Aanlevering() {
    }
    return Aanlevering;
}());



/***/ }),

/***/ "./src/app/shared/aanleveringenapi.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/aanleveringenapi.service.ts ***!
  \****************************************************/
/*! exports provided: AanleveringenApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AanleveringenApiService", function() { return AanleveringenApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _applicatiedata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applicatiedata.service */ "./src/app/shared/applicatiedata.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _aanleveringenpage_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aanleveringenpage.model */ "./src/app/shared/aanleveringenpage.model.ts");
/* harmony import */ var _aanlevering_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aanlevering.model */ "./src/app/shared/aanlevering.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AanleveringenApiService = /** @class */ (function () {
    function AanleveringenApiService(applicatieData) {
        this.applicatieData = applicatieData;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.loadingSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.loadingObservable = this.loadingSource.asObservable();
    }
    AanleveringenApiService.prototype.getAanleveringenPage = function (page, pageSize, direction, filter, reset) {
        this.applicatieData.aanleveringenPage = new _aanleveringenpage_model__WEBPACK_IMPORTED_MODULE_4__["AanleveringenPage"]();
        this.applicatieData.aanleveringenPage.aanleveringen = [];
        for (var i = 0; i < 10; i++) {
            var aanlevering = new _aanlevering_model__WEBPACK_IMPORTED_MODULE_5__["Aanlevering"]();
            aanlevering.group = 'Page_' + page;
            aanlevering.naam = 'Naam_page_' + page + '_row_' + i;
            aanlevering.aanleveringId = page * 10 + i;
            this.applicatieData.aanleveringenPage.aanleveringen.push(aanlevering);
        }
        this.applicatieData.aanleveringenPageCurrent = page;
        this.applicatieData.dataIsReady(10);
    };
    AanleveringenApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_applicatiedata_service__WEBPACK_IMPORTED_MODULE_2__["ApplicatiedataService"]])
    ], AanleveringenApiService);
    return AanleveringenApiService;
}());



/***/ }),

/***/ "./src/app/shared/aanleveringenpage.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/aanleveringenpage.model.ts ***!
  \***************************************************/
/*! exports provided: AanleveringenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AanleveringenPage", function() { return AanleveringenPage; });
// Model object: Geocache
var AanleveringenPage = /** @class */ (function () {
    function AanleveringenPage() {
    }
    return AanleveringenPage;
}());



/***/ }),

/***/ "./src/app/shared/applicatiedata.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/applicatiedata.service.ts ***!
  \**************************************************/
/*! exports provided: ApplicatiedataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicatiedataService", function() { return ApplicatiedataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _paged_source_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paged-source.model */ "./src/app/shared/paged-source.model.ts");
/* harmony import */ var _aanleveringenpage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aanleveringenpage.model */ "./src/app/shared/aanleveringenpage.model.ts");



var ApplicatiedataService = /** @class */ (function () {
    function ApplicatiedataService() {
        this.aanleveringen = [];
        this.aanleveringenPage = new _aanleveringenpage_model__WEBPACK_IMPORTED_MODULE_2__["AanleveringenPage"]();
        this.aanleveringenPageCurrent = 1;
        this.aanleveringenPagePrevious = 0;
        this.username = '';
        this.pageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.pageObservable = this.pageSource.asObservable();
        console.log('Starting with the application data');
        this.pageCommand = new _paged_source_model__WEBPACK_IMPORTED_MODULE_1__["PagedSource"](this.aanleveringenPageCurrent, 20, false);
        this.pageCommand.rowCount = 0;
        this.pageCommand.reset = true;
    }
    ApplicatiedataService.prototype.dataIsReady = function (rowCount) {
        console.log('Date is ready: row conount ' + rowCount);
        if (rowCount > 0) {
            this.pageCommand.rowCount = rowCount;
        }
        console.log('Page >>');
        console.log(this.pageCommand);
        console.log('Firing command: ' + this.pageCommand);
        this.pageCommand.pageNumber = this.aanleveringenPageCurrent;
        this.pageSource.next(this.pageCommand);
    };
    ApplicatiedataService.prototype.getAanleveringById = function (aanleveringId) {
        if (this.aanleveringenPage === null ||
            this.aanleveringenPage.aanleveringen === null ||
            this.aanleveringenPage.aanleveringen.length < 1) {
            return null;
        }
        for (var i = 0; i < this.aanleveringenPage.aanleveringen.length; i++) {
            if (this.aanleveringenPage.aanleveringen[i].aanleveringId === aanleveringId) {
                return this.aanleveringenPage.aanleveringen[i];
            }
        }
        return null;
    };
    return ApplicatiedataService;
}());



/***/ }),

/***/ "./src/app/shared/modal.component.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/modal.component.ts ***!
  \*******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: "\n  <div (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'show': visibleAnimate}\"\n       [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <ng-content select=\".app-modal-header\"></ng-content>\n        </div>\n        <div class=\"modal-body\">\n          <ng-content select=\".app-modal-body\"></ng-content>\n        </div>\n        <div class=\"modal-footer\">\n          <ng-content select=\".app-modal-footer\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  "
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/paged-source.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/paged-source.model.ts ***!
  \**********************************************/
/*! exports provided: PagedSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedSource", function() { return PagedSource; });
var PagedSource = /** @class */ (function () {
    function PagedSource(pageNumber, pageSize, pageDirection) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.pageDirection = pageDirection;
        this.rowCount = 1;
        this.reset = false;
    }
    return PagedSource;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    apiUrl: '/aanleveringen',
    foutenUrl: '/fouten',
    production: false,
    envName: 'dev'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\ng-bootstrap-angular-pager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map