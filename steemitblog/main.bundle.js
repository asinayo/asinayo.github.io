webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    // {path: '', component: SearchComponent },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_2__blog_blog_component__["a" /* BlogComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-search></app-search> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__covalent_core__ = __webpack_require__("./node_modules/@covalent/core/esm5/covalent-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_services_services_component__ = __webpack_require__("./src/app/pages/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_reducers_reducers__ = __webpack_require__("./src/app/ng/reducers/reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blog2_blog2_component__ = __webpack_require__("./src/app/blog2/blog2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["x" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["w" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatProgressSpinnerModule */]
];






var COVALENT_MODULES = [
    __WEBPACK_IMPORTED_MODULE_9__covalent_core__["a" /* CovalentCommonModule */], __WEBPACK_IMPORTED_MODULE_9__covalent_core__["e" /* CovalentLayoutModule */], __WEBPACK_IMPORTED_MODULE_9__covalent_core__["g" /* CovalentMediaModule */], __WEBPACK_IMPORTED_MODULE_9__covalent_core__["d" /* CovalentExpansionPanelModule */],
    __WEBPACK_IMPORTED_MODULE_9__covalent_core__["m" /* CovalentStepsModule */], __WEBPACK_IMPORTED_MODULE_9__covalent_core__["c" /* CovalentDialogsModule */], __WEBPACK_IMPORTED_MODULE_9__covalent_core__["f" /* CovalentLoadingModule */], __WEBPACK_IMPORTED_MODULE_9__covalent_core__["l" /* CovalentSearchModule */],
    __WEBPACK_IMPORTED_MODULE_9__covalent_core__["k" /* CovalentPagingModule */], __WEBPACK_IMPORTED_MODULE_9__covalent_core__["j" /* CovalentNotificationsModule */], __WEBPACK_IMPORTED_MODULE_9__covalent_core__["h" /* CovalentMenuModule */], __WEBPACK_IMPORTED_MODULE_9__covalent_core__["b" /* CovalentDataTableModule */],
    __WEBPACK_IMPORTED_MODULE_9__covalent_core__["i" /* CovalentMessageModule */],
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_4__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__blog2_blog2_component__["a" /* Blog2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                MATERIAL_MODULES,
                COVALENT_MODULES,
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                // LazyLoadModule,
                __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__ng_reducers_reducers__["a" /* reducers */])
            ],
            exports: [
                MATERIAL_MODULES,
                COVALENT_MODULES,
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<td-layout>\n  <td-navigation-drawer flex sidenavTitle=\"Covalent\" logo=\"assets:teradata\" name=\"Firstname Lastname\" email=\"firstname.lastname@company.com\">\n    <mat-nav-list>\n      <a mat-list-item>\n        <mat-icon>home</mat-icon>Home</a>\n    </mat-nav-list>\n    <div td-navigation-drawer-menu>\n      <mat-nav-list>\n        <a mat-list-item>\n          <mat-icon>account_box</mat-icon>Profile</a>\n      </mat-nav-list>\n    </div>\n  </td-navigation-drawer>\n  <td-layout-nav-list logo=\"assets:teradata\" toolbarTitle=\"Steemit Blog\" navigationRoute=\"/\" opened=\"true\" mode=\"side\">\n    <!-- <button mat-icon-button td-menu-button tdLayoutToggle>\n            <mat-icon>menu</mat-icon>\n          </button> -->\n    <div td-sidenav-content>\n      <!-- https://steemitimages.com/u/ruka0105/avatar/ -->\n      <div fxLayout=\"column\">\n        <div *ngFor=\"let authorInfo of authorInfoList | async\">\n          <div *ngIf=\"authorInfo.meta.profile.profile_image != undefined\">\n            <div *ngIf=\"!iconOnly\" fxLayoutAlign=\"space-around center\" [style.margin]=\"'10px 0px'\">\n              <img width=\"100\" [style.borderRadius]=\"'50%'\" src=\"https://steemitimages.com/200x0/{{authorInfo.meta.profile.profile_image}}\">\n            </div>\n            <div *ngIf=\"iconOnly\" style=\"height: 100px;\" fxLayoutAlign=\"space-around center\">\n              <img width=\"50\" [style.borderRadius]=\"'50%'\" src=\"https://steemitimages.com/200x0/{{authorInfo.meta.profile.profile_image}}\">\n            </div>\n          </div>\n          <div *ngIf=\"authorInfo.meta.profile.profile_image == undefined\">\n            <div *ngIf=\"!iconOnly\" fxLayoutAlign=\"space-around center\" [style.margin]=\"'10px 0px'\">\n              <img width=\"100\" [style.borderRadius]=\"'50%'\" src=\"https://steemitimages.com/u/ruka0105/avatar/\">\n            </div>\n            <div *ngIf=\"iconOnly\" style=\"height: 100px;\" fxLayoutAlign=\"space-around center\">\n              <img width=\"50\" [style.borderRadius]=\"'50%'\" src=\"https://steemitimages.com/u/ruka0105/avatar/\">\n            </div>\n          </div>\n\n          <div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center\">\n            ID : {{authorInfo.meta.profile.name}}\n            <br/> Last Post : {{authorInfo.author.last_post}}\n          </div>\n        </div>\n        <!-- <cdk-sidemenu-item *ngFor=\"let menu of menus\" [menu]=\"menu\" [iconOnly]=\"iconOnly\"> </cdk-sidemenu-item> -->\n\n        <!-- https://steemitimages.com/400x0/https://steemitimages.com/DQmbBnihcmu8Bxqs1ux9MbXrGRd5aK5q3HPte2jy8d7XQGR/asinayo2_500.png -->\n        <!-- <div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center\">\n            ID : {{sibmmm.meta.profile.name}}\n            <br/> Posts : {{sibmmm.tagMap['all_all'].length}}\n            <br/> Last Post : {{sibmmm.author.last_post}}\n          </div> -->\n\n        <!-- <h3 mat-subheader>Tags</h3>\n              <mat-list role=\"list\" *ngFor=\"let postInfo of postInfoList | async\">\n                <mat-list-item role=\"listitem\" *ngFor=\"let key of postInfo.tagList\" (click)='clickTag(key)'>\n                  <div *ngIf=\"key == 'all_all'\">\n                    all - {{postInfo.tagMap[key].length}} \n                  </div>\n                  <div *ngIf=\"key != 'all_all'\">\n                    {{key}} - {{postInfo.tagMap[key].length}} \n                  </div>\n                </mat-list-item>\n              </mat-list> -->\n\n        <h3 mat-subheader>Tags</h3>\n        <mat-list *ngFor=\"let postInfo of postInfoList | async\">\n          <mat-list-item *ngFor=\"let key of postInfo.tagList\" (click)='clickTag(key)'>\n            <mat-icon mat-list-icon>folder</mat-icon>\n            <h4 mat-line>\n              <div *ngIf=\"key == 'all_all'\">\n                all\n              </div>\n              <div *ngIf=\"key != 'all_all'\">\n                {{key}}\n              </div>\n            </h4>\n            <p mat-line>\n              <b> Count : {{postInfo.tagMap[key].length}} </b>\n            </p>\n          </mat-list-item>\n        </mat-list>\n      </div>\n\n      <!-- <mat-list role=\"list\" *ngFor=\"let post of tagList[key]\">\n                <mat-list-item role=\"listitem\"><a href=\"https://steemit.com{{post.url}}\">{{post.root_title}}</a></mat-list-item>\n              </mat-list> -->\n\n      <div fxLayout=\"column\">\n\n      </div>\n    </div>\n    <div td-toolbar-content>\n      <button mat-icon-button td-menu-buttonn tdLayoutNavListToggle>\n        <mat-icon>Toggle</mat-icon>\n      </button>\n    </div>\n    <div>\n      <!-- <mat-list role=\"list\" *ngFor=\"let postInfo of postInfoList | async\">\n            <mat-list-item role=\"listitem\" *ngFor=\"let post of postInfo.tagMap[selectTag]\">\n              <a href=\"https://steemit.com{{post.url}}\">{{post.root_title}}</a>\n            </mat-list-item>\n          </mat-list> -->\n      <!-- <div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center\"> -->\n        <mat-grid-list cols=\"9\" rowHeight=\"2:1\">\n          <mat-grid-tile [colspan]=2>img</mat-grid-tile>\n          <mat-grid-tile [colspan]=3>\n            title\n          </mat-grid-tile>\n          <mat-grid-tile>create date</mat-grid-tile>\n          <mat-grid-tile>vote count</mat-grid-tile>\n          <mat-grid-tile>reply count</mat-grid-tile>\n        </mat-grid-list>\n        <div *ngFor=\"let postInfo of postInfoList | async\">\n          <mat-grid-list cols=\"9\" rowHeight=\"1:1\" *ngFor=\"let post of postInfo.tagMap[selectTag]\">\n            <mat-grid-tile [colspan]=2>\n              <!-- <img width=\"100\" [style.borderRadius]=\"'50%'\" src=\"https://steemitimages.com/200x0/{{authorInfo.meta.profile.profile_image}}\"> -->\n              <div *ngIf=\"post.json_metadata.image != undefined \">\n                <img width=\"200\" src=\"https://steemitimages.com/200x0/{{post.json_metadata.image[0]}}\">\n              </div>\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=3>\n              <a href=\"https://steemit.com{{post.url}}\" target=\"_blank\">{{post.root_title}}</a>\n            </mat-grid-tile>\n            <mat-grid-tile>{{post.created}}</mat-grid-tile>\n            <mat-grid-tile>{{post.net_votes}}</mat-grid-tile>\n            <mat-grid-tile>{{post.children}}</mat-grid-tile>\n            <br/>\n          </mat-grid-list>\n          \n        </div>\n      <!-- </div> -->\n      <!-- <mat-list role=\"list\" *ngFor=\"let post of sibmmm.tagMap[selectTag]\">\n          <mat-list-item role=\"listitem\">\n            <a href=\"https://steemit.com{{post.url}}\">{{post.root_title}}</a>\n          </mat-list-item>\n        </mat-list> -->\n      <!-- img title comments views date -->\n      <!-- <mat-grid-list cols=\"5\" rowHeight=\"2:1\" *ngFor=\"let post of sibmmm.tagMap[selectTag]\">\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n            {{post.root_title}}\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n            {{post.root_title}}\n          </mat-grid-tile>  \n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n            {{post.root_title}}\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n            {{post.root_title}}\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n            {{post.root_title}}\n          </mat-grid-tile>\n        </mat-grid-list> -->\n\n    </div>\n\n  </td-layout-nav-list>\n</td-layout>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-icon.mat-icon-logo {\n  position: relative;\n  top: -4px; }\n\n.td-search-box .td-search-icon.mat-icon-button {\n  margin: 0;\n  height: 30px; }\n\n.td-search-box .td-search-icon.mat-icon-button .mat-icon {\n    margin-top: -10px; }\n\n.td-search-box td-search-input {\n  margin-left: 0 !important;\n  margin-bottom: 5px; }\n\n.td-search-box td-search-input .mat-form-field {\n    width: auto; }\n\n.td-search-box td-search-input .mat-form-field-wrapper {\n    padding-bottom: 0; }\n\n.td-search-box td-search-input .mat-input-infix {\n    padding: 0; }\n\n.td-search-box td-search-input .mat-form-field-infix {\n    border-top: 0; }\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_steem__ = __webpack_require__("./node_modules/steem/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_steem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_steem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__("./node_modules/@covalent/core/esm5/covalent-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_actions_actions__ = __webpack_require__("./src/app/ng/actions/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_reducers_post_reducer__ = __webpack_require__("./src/app/ng/reducers/post.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_reducers_author_reducer__ = __webpack_require__("./src/app/ng/reducers/author.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BlogComponent = /** @class */ (function () {
    function BlogComponent(route, _loadingService, postStore, authorStore, router) {
        this.route = route;
        this._loadingService = _loadingService;
        this.postStore = postStore;
        this.authorStore = authorStore;
        this.router = router;
        this.selectedPosts = new Array();
        this.postInfoList = postStore.select(__WEBPACK_IMPORTED_MODULE_6__ng_reducers_post_reducer__["a" /* getPosts */]);
        this.authorInfoList = authorStore.select(__WEBPACK_IMPORTED_MODULE_7__ng_reducers_author_reducer__["a" /* getAuthor */]);
        BlogComponent_1.sauthorStore = this.authorStore;
        BlogComponent_1.spostStore = this.postStore;
        BlogComponent_1.srouter = this.router;
        this.selectTag = 'all_all';
    }
    BlogComponent_1 = BlogComponent;
    BlogComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        console.log(this.id);
        this.searchID(this.id);
    };
    BlogComponent.prototype.ngOnInit = function () {
        // SearchComponent.srouter.navigateByUrl('/blog/asinayo');
    };
    BlogComponent.prototype.clickTag = function (tag) {
        this.selectTag = tag;
        console.log(this.selectTag);
        this.selectedPosts = this.postInfoList[0].tagMap.get(tag);
    };
    BlogComponent.prototype.searchID = function (searchWord) {
        BlogComponent_1.sid = searchWord;
        // this.loading.push("Loading")
        BlogComponent_1.getAuthorInfo(searchWord);
        var pi = {
            postList: new Array(),
            tagMap: new Map(),
            tagList: new Array()
        };
        BlogComponent_1.getNextPosts2(searchWord, null, pi);
    };
    BlogComponent.getAuthorInfo = function (searchWord) {
        __WEBPACK_IMPORTED_MODULE_2_steem__["api"].getAccounts([searchWord], function (err, response) {
            var ai = {};
            if (err != undefined) {
                console.log(err);
            }
            else {
                ai.author = response[0];
                if (ai.author.json_metadata.length <= 0 || ai.author.json_metadata == undefined) {
                    ai.meta = {
                        profile: {
                            name: ai.author.name,
                        }
                    };
                }
                else {
                    ai.meta = JSON.parse(ai.author.json_metadata);
                }
                // console.log(ai.author);
                ai.author.last_post = BlogComponent_1.convertDate(ai.author.last_post);
                var arr = new Array();
                arr.push(ai);
                console.log(arr);
                BlogComponent_1.sauthorStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__ng_actions_actions__["b" /* AuthorAction */](arr));
            }
        });
    };
    BlogComponent.getNextPosts2 = function (author, startPermlink, pi) {
        // console.log(startPermlink + " -- " +date );
        __WEBPACK_IMPORTED_MODULE_2_steem__["api"].getDiscussionsByAuthorBeforeDateAsync(author, startPermlink, BlogComponent_1.DATE, BlogComponent_1.GET_SIZE, function (err, result) {
            // console.log(result);
            var post = null;
            var lastPermlink;
            for (var indexI = 0; indexI < result.length; ++indexI) {
                post = result[indexI];
                lastPermlink = post.permlink;
                if (indexI + 1 < result.length) {
                    // console.log(post.author + " --- " + post.root_title);
                    pi.postList.push(post);
                }
            }
            if (result.length >= BlogComponent_1.GET_SIZE || false) {
                // console.log(lastPermlink);
                BlogComponent_1.getNextPosts2(author, lastPermlink, pi);
            }
            else {
                // for (var indexI = 0; indexI < pi.postList.length; ++indexI) {
                // console.log(pi.postList[indexI]);
                // console.log(sm.postList[indexI].author + " --- " + sm.postList[indexI].root_title);
                // }
                BlogComponent_1.sortTag2(pi);
            }
        });
    };
    BlogComponent.convertDate = function (date) {
        var index = String(date).indexOf('T');
        var retDate = String(date).substring(0, index);
        return retDate;
    };
    BlogComponent.sortTag2 = function (pi) {
        var post = null;
        pi.tagMap['all_all'] = new Array();
        pi.tagList.push('all_all');
        for (var indexI = 0; indexI < pi.postList.length; ++indexI) {
            post = pi.postList[indexI];
            pi.tagMap['all_all'].push(post);
            post.created = BlogComponent_1.convertDate(post.created);
            post.json_metadata = JSON.parse(post.json_metadata);
            var tags = post.json_metadata.tags;
            for (var indexJ = 0; indexJ < tags.length; ++indexJ) {
                if (pi.tagMap[tags[indexJ]] === undefined) {
                    pi.tagMap[tags[indexJ]] = new Array();
                    pi.tagList.push(tags[indexJ]);
                }
                pi.tagMap[tags[indexJ]].push(post);
            }
        }
        console.log('END');
        var arr = new Array();
        arr.push(pi);
        // console.log(arr);
        BlogComponent_1.sauthorStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__ng_actions_actions__["d" /* PostAction */](arr));
        // BlogComponent.srouter.navigateByUrl('/blog/'+BlogComponent.sid);
    };
    BlogComponent.DATE = new Date().toISOString().split('.')[0];
    BlogComponent.GET_SIZE = 10;
    BlogComponent = BlogComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            selector: 'app-blog',
            template: __webpack_require__("./src/app/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__covalent_core__["n" /* TdLoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], BlogComponent);
    return BlogComponent;
    var BlogComponent_1;
}());



/***/ }),

/***/ "./src/app/blog2/blog2.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog2/blog2.component.html":
/***/ (function(module, exports) {

module.exports = "<td-layout>\n    <td-navigation-drawer logo=\"assets:covalent\" sidenavTitle=\"Chat\" name=\"Firstname Lastname\" email=\"firstname.lastname@company.com\">\n      \n      <mat-nav-list td-navigation-drawer-menu>\n        <a mat-list-item (click)=\"logout()\"><mat-icon>exit_to_app</mat-icon>Sign out</a>\n      </mat-nav-list>\n    </td-navigation-drawer>\n    <td-layout-nav-list #navList [sidenavWidth]=\"'240px'\">\n      <button mat-icon-button td-menu-button tdLayoutToggle>\n        <mat-icon>menu</mat-icon>\n      </button>\n      <div td-sidenav-toolbar-content layout=\"row\" flex>\n        <div>\n          \n        </div>\n        <span flex></span>\n        <div>\n          \n        </div>\n      </div>\n      <mat-nav-list td-sidenav-content class=\"bgc-purple-900\" (click)=\"!media.query('gt-sm') && navList.close()\">\n        <a mat-list-item class=\"tc-white\"><mat-icon class=\"tc-white\" matListIcon>sort</mat-icon> All Unreads</a>\n        <a mat-list-item class=\"tc-white\"><mat-icon class=\"tc-white\" matListIcon>chat</mat-icon> All Threads</a>\n        <mat-divider></mat-divider>\n        <h3 mat-subheader class=\"tc-white\">STARRED</h3>\n        <ng-template let-item let-i=\"index\" let-last=\"last\" ngFor [ngForOf]=\"[0,1]\">\n          <a mat-list-item class=\"tc-white\"><mat-icon class=\"tc-white\" matListIcon>forum</mat-icon> starred-channel-{{i}}</a>\n        </ng-template>\n        <mat-divider></mat-divider>\n        <h3 mat-subheader class=\"tc-white\">CHANNELS (5)</h3>\n        <ng-template let-item let-i=\"index\" let-last=\"last\" ngFor [ngForOf]=\"[0,1,2,3]\">\n          <a mat-list-item class=\"tc-white\"><mat-icon class=\"tc-white\" matListIcon>forum</mat-icon> channel-name-{{i}}</a>\n        </ng-template>\n        <mat-divider></mat-divider>\n        <h3 mat-subheader class=\"tc-white\">DIRECT MESSAGES</h3>\n        <ng-template let-item let-i=\"index\" let-last=\"last\" ngFor [ngForOf]=\"[0,1,2,3,4,5]\">\n          <a mat-list-item class=\"tc-white\"><mat-icon color=\"accent\" matListIcon>lens</mat-icon> username{{i}}</a>\n        </ng-template>\n      </mat-nav-list>\n      <!-- <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n        <div flex>\n          <div [matMenuTriggerFor]=\"channelMenu\" class=\"cursor-hover pull-bottom-sm\">#channel</div>\n          <mat-menu #channelMenu=\"matMenu\">\n            <button mat-menu-item>Jump to date...</button>\n            <button mat-menu-item>Invite team members to join...</button>\n            <button mat-menu-item>View channel details</button>\n            <button mat-menu-item>Additional options...</button>\n            <mat-divider></mat-divider>\n            <button mat-menu-item>Notification preferences</button>\n            <button mat-menu-item>Mute #channel</button>\n            <mat-divider></mat-divider>\n            <button mat-menu-item>Add an app or integration</button>\n            <mat-divider></mat-divider>\n            <button mat-menu-item>Leave #channel</button>\n          </mat-menu>\n          <div layout=\"row\" layout-align=\"start center\">\n            <mat-icon class=\"md-caption\">star</mat-icon>\n            <mat-icon class=\"md-caption push-left-sm\">person</mat-icon>\n            <span class=\"md-caption\">94</span>\n            <mat-icon class=\"md-caption push-left-sm\">note</mat-icon>\n            <span class=\"md-caption\">12</span>\n            <span class=\"md-caption push-left-sm\">channel description</span>\n          </div>\n        </div>\n        <button mat-icon-button matTooltip=\"Call\" [style.margin]=\"'0 -5px'\"><mat-icon>phone</mat-icon></button>\n        <button mat-icon-button matTooltip=\"Show conversation details\" [style.margin]=\"'0 -5px'\" (click)=\"channelInfo.toggle()\"><mat-icon>info</mat-icon></button>\n        <button mat-icon-button matTooltip=\"Conversation settings\" [style.margin]=\"'0 -5px'\"><mat-icon>settings</mat-icon></button>\n        <mat-card flex=\"20\">\n          <td-search-box [alwaysVisible]=\"true\" #searchBox placeholder=\"Search\" [showUnderline]=\"false\"></td-search-box>\n        </mat-card>\n        <button mat-icon-button matTooltip=\"Show activity\" [style.margin]=\"'0 -5px'\"><mat-icon>@</mat-icon></button>\n        <button mat-icon-button matTooltip=\"Show starred items\" [style.margin]=\"'0 -5px'\"><mat-icon>star_border</mat-icon></button>\n        <button mat-icon-button matTooltip=\"More items\" [style.margin]=\"'0 -5px'\"><mat-icon>more_vert</mat-icon></button>\n      </div> -->\n      <mat-sidenav-container fullscreen>\n        <mat-sidenav #channelInfo mode=\"side\" align=\"end\" [opened]=\"true\" [style.width.px]=\"270\">\n          <div layout=\"column\" layout-fill>\n            <mat-toolbar>\n              <span class=\"md-subhead\">About #channel</span>\n              <span flex></span>\n              <button mat-icon-button (click)=\"channelInfo.toggle()\"><mat-icon>clear</mat-icon></button>\n            </mat-toolbar>\n            <td-expansion-panel [expand]=\"true\">\n              <ng-template td-expansion-panel-label>\n                <mat-icon class=\"tc-grey-600\">info_outline</mat-icon>\n                <span>Channel Details</span>\n              </ng-template>\n              <div>\n                <mat-list dense>\n                  <h3 matSubheader>Workspaces</h3>\n                  <ng-template let-item let-i=\"index\" let-last=\"last\" ngFor [ngForOf]=\"[0,1]\">\n                    <mat-list-item>\n                      <mat-icon matListIcon>business</mat-icon>\n                      <h3 matLine>Workspace name {{i + 1}}</h3>\n                      <p matLine>152 members</p>\n                    </mat-list-item>\n                  </ng-template>\n                  <h3 matSubheader>Purpose</h3>\n                  <mat-list-item>\n                    <h3 matLine>Channel purpose here</h3>\n                  </mat-list-item>\n                  <h3 matSubheader>Created</h3>\n                  <mat-list-item>\n                    <h3 matLine>Created by John Jameson on May 11, 2017</h3>\n                  </mat-list-item>\n                </mat-list>\n              </div>\n            </td-expansion-panel>\n            <td-expansion-panel>\n              <ng-template td-expansion-panel-label>\n                <mat-icon class=\"tc-light-blue-600\">flare</mat-icon>\n                <span>Highlights</span>\n              </ng-template>\n              <div class=\"pad-sm md-caption\">\n                Nothing yet. When this channel gets a bit more active, check back here.\n              </div>\n            </td-expansion-panel>\n            <td-expansion-panel>\n              <ng-template td-expansion-panel-label>\n                <mat-icon class=\"tc-green-600\">person_outline</mat-icon>\n                <span>94 Members</span>\n              </ng-template>\n              <div>\n                <mat-list dense>\n                  <ng-template let-item let-i=\"index\" let-last=\"last\" ngFor [ngForOf]=\"[0,1,2,3,4,5]\">\n                    <a mat-list-item>\n                      <mat-icon color=\"accent\" matListIcon>lens</mat-icon> \n                      <span layout=\"row\" layout-align=\"start center\">\n                        <img class=\"size-16 push-right-sm\" src=\"https://api.adorable.io/avatars/285/{{i}}@adorable.io.png\" /> username{{i}}</span>\n                    </a>\n                  </ng-template>\n                </mat-list>\n              </div>\n            </td-expansion-panel>\n          </div>\n        </mat-sidenav>\n        <div layout=\"column\" layout-fill>\n          <div flex class=\"mat-content\">\n            <mat-card tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['push-sm']\">\n              <mat-list>\n                <ng-template let-item let-i=\"index\" let-last=\"last\" ngFor [ngForOf]=\"[0,1,2,3,4,5,6,7,8,9]\">\n                  <mat-list-item class=\"pad-top pad-bottom\">\n                    <img matListAvatar src=\"https://api.adorable.io/avatars/285/{{i}}@adorable.io.png\" />\n                    <h3 matLine class=\"cursor-pointer\"> Firstname Lastname <span class=\"tc-grey-500 md-caption\">11:24 AM</span></h3>\n                    <div matLine>\n                      <div class=\"text-wrap\">\n                        {{ 'Farm-to-table poke distillery, bushwick messenger bag vaporware neutra artisan paleo. Single-origin coffee shabby chic glossier lumberjack chambray dreamcatcher, blue bottle raclette.' | truncate:200 }}\n                      </div>\n                    </div>\n                  </mat-list-item>\n                  <mat-divider *ngIf=\"!last\" mat-inset></mat-divider>\n                </ng-template>\n              </mat-list>\n            </mat-card>\n          </div>\n          <mat-card>\n            <div layout=\"row\" layout-align=\"start center\">\n              <div>\n                <button mat-icon-button matTooltip=\"Add content\" matTooltipPosition=\"after\" [matMenuTriggerFor]=\"chatMenu\"><mat-icon>add</mat-icon></button>\n                <mat-menu #chatMenu=\"matMenu\">\n                  <button mat-menu-item>Code or text snippet</button>\n                  <button mat-menu-item>Google Docs file</button>\n                  <button mat-menu-item>Post</button>\n                  <button mat-menu-item>Google Drive</button>\n                  <button mat-menu-item>Upload file</button>\n                </mat-menu>\n              </div>\n              <mat-form-field class=\"push-left push-right\" flex layout=\"row\" floatPlaceholder=\"never\">\n                <textarea flex matInput placeholder=\"message\"></textarea>\n              </mat-form-field>\n              <div>\n                <button mat-icon-button matTooltip=\"Add emoji\" matTooltipPosition=\"before\" [matMenuTriggerFor]=\"emojiMenu\"><mat-icon>sentiment_very_satisfied</mat-icon></button>\n                <mat-menu #emojiMenu=\"matMenu\" x-position=\"before\">\n                  <td-menu>\n                    <div td-menu-header>\n                      \n                    </div>\n                    <div style=\"height:200px;\" class=\"push\">\n                      <div layout=\"row\" layout-wrap>\n                        <button flex=\"20\" mat-icon-button><mat-icon>mood</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>mood_bad</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>sentiment_dissatisfied</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>sentiment_neutral</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>sentiment_satisfied</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>sentiment_very_dissatisfied</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>sentiment_very_satisfied</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>whatshot</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>face</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>pan_tool</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>pregnant_woman</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>pets</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>rowing</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>touch_app</mat-icon></button>\n                        <button flex=\"20\" mat-icon-button><mat-icon>visibility_off</mat-icon></button>\n                      </div>\n                    </div>\n                    <div td-menu-footer>\n                      <div layout=\"row\" layout-align=\"center center\" class=\"push-sm\">\n                        <span class=\"mat-subhead\">Emoji Deluxe</span>\n                        <span flex></span>\n                        <span>:happy:</span>\n                        <mat-icon>sentiment_very_satisfied</mat-icon>\n                      </div>\n                    </div>\n                  </td-menu>\n                </mat-menu>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n      </mat-sidenav-container>\n    </td-layout-nav-list>\n  </td-layout>\n  "

/***/ }),

/***/ "./src/app/blog2/blog2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blog2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__("./node_modules/@covalent/core/esm5/covalent-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_reducers_post_reducer__ = __webpack_require__("./src/app/ng/reducers/post.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_reducers_author_reducer__ = __webpack_require__("./src/app/ng/reducers/author.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_steem__ = __webpack_require__("./node_modules/steem/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_steem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_steem__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Blog2Component = /** @class */ (function () {
    function Blog2Component(route, _loadingService, postStore, authorStore, router) {
        this.route = route;
        this._loadingService = _loadingService;
        this.postStore = postStore;
        this.authorStore = authorStore;
        this.router = router;
        this.postInfo = postStore.select(__WEBPACK_IMPORTED_MODULE_4__ng_reducers_post_reducer__["a" /* getPosts */]);
        this.authorInfo = authorStore.select(__WEBPACK_IMPORTED_MODULE_5__ng_reducers_author_reducer__["a" /* getAuthor */]);
        Blog2Component_1.sauthorStore = this.authorStore;
        Blog2Component_1.spostStore = this.postStore;
        Blog2Component_1.srouter = this.router;
        this.selectTag = 'all_all';
    }
    Blog2Component_1 = Blog2Component;
    Blog2Component.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        console.log(this.id);
        this.searchID(this.id);
    };
    Blog2Component.prototype.ngOnInit = function () {
        // SearchComponent.srouter.navigateByUrl('/blog/asinayo');
    };
    Blog2Component.prototype.clickTag = function (tag) {
        this.selectTag = tag;
        console.log(this.selectTag);
        // this.selectedPosts = this.tagList.get(tag);
    };
    Blog2Component.prototype.searchID = function (searchWord) {
        Blog2Component_1.sid = searchWord;
        // this.loading.push("Loading")
        Blog2Component_1.getAuthorInfo(searchWord);
        var pi = {
            postList: new Array(),
            tagMap: new Map(),
            tagList: new Array()
        };
        Blog2Component_1.getNextPosts2(searchWord, null, pi);
    };
    Blog2Component.getAuthorInfo = function (searchWord) {
        __WEBPACK_IMPORTED_MODULE_6_steem__["api"].getAccounts([searchWord], function (err, response) {
            var ai = {};
            if (err != undefined) {
                console.log(err);
            }
            else {
                ai.author = response[0];
                if (ai.author.json_metadata.length <= 0 || ai.author.json_metadata != undefined) {
                    ai.meta = {
                        profile: {
                            name: ai.author.name,
                        }
                    };
                }
                else {
                    ai.meta = JSON.parse(ai.author.json_metadata);
                }
                console.log(ai.author);
                // Blog2Component.sauthorStore.dispatch(new fromActions.AuthorAction(ai));
            }
        });
    };
    Blog2Component.getNextPosts2 = function (author, startPermlink, pi) {
        // console.log(startPermlink + " -- " +date );
        __WEBPACK_IMPORTED_MODULE_6_steem__["api"].getDiscussionsByAuthorBeforeDateAsync(author, startPermlink, Blog2Component_1.DATE, Blog2Component_1.GET_SIZE, function (err, result) {
            // console.log(result);
            var post = null;
            var lastPermlink;
            for (var indexI = 0; indexI < result.length; ++indexI) {
                post = result[indexI];
                lastPermlink = post.permlink;
                if (indexI + 1 < result.length) {
                    // console.log(post.author + " --- " + post.root_title);
                    pi.postList.push(post);
                }
            }
            if (result.length >= Blog2Component_1.GET_SIZE || false) {
                // console.log(lastPermlink);
                Blog2Component_1.getNextPosts2(author, lastPermlink, pi);
            }
            else {
                for (var indexI = 0; indexI < pi.postList.length; ++indexI) {
                    // console.log(pi.postList[indexI]);
                    console.log(pi.postList[indexI].author + " --- " + pi.postList[indexI].root_title);
                }
                Blog2Component_1.sortTag2(pi);
            }
        });
    };
    Blog2Component.sortTag2 = function (pi) {
        var post = null;
        pi.tagMap['all_all'] = new Array();
        pi.tagList.push('all_all');
        for (var indexI = 0; indexI < pi.postList.length; ++indexI) {
            post = pi.postList[indexI];
            pi.tagMap['all_all'].push(post);
            var tags = JSON.parse(post.json_metadata).tags;
            for (var indexJ = 0; indexJ < tags.length; ++indexJ) {
                if (pi.tagMap[tags[indexJ]] === undefined) {
                    pi.tagMap[tags[indexJ]] = new Array();
                    pi.tagList.push(tags[indexJ]);
                }
                pi.tagMap[tags[indexJ]].push(post);
            }
        }
        console.log('END');
        // Blog2Component.sauthorStore.dispatch(new fromActions.PostAction(pi));
        // BlogComponent.srouter.navigateByUrl('/blog/'+BlogComponent.sid);
    };
    Blog2Component.DATE = new Date().toISOString().split('.')[0];
    Blog2Component.GET_SIZE = 10;
    Blog2Component = Blog2Component_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog2',
            template: __webpack_require__("./src/app/blog2/blog2.component.html"),
            styles: [__webpack_require__("./src/app/blog2/blog2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__covalent_core__["n" /* TdLoadingService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], Blog2Component);
    return Blog2Component;
    var Blog2Component_1;
}());



/***/ }),

/***/ "./src/app/ng/actions/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthorAction; });
var POSTS = 'POSTS';
var AUTHOR = 'AUTHOR';
var PostAction = /** @class */ (function () {
    function PostAction(payload) {
        this.payload = payload;
        this.type = POSTS;
    }
    return PostAction;
}());

var AuthorAction = /** @class */ (function () {
    function AuthorAction(payload) {
        this.payload = payload;
        this.type = AUTHOR;
    }
    return AuthorAction;
}());



/***/ }),

/***/ "./src/app/ng/reducers/author.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getAuthorState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAuthor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__("./src/app/ng/actions/actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = { authorInfo: [] };
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["a" /* AUTHOR */]: {
            return __assign({}, state, { authorInfo: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getAuthorState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('authorState');
var getAuthor = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getAuthorState, function (state) { return state.authorInfo; });


/***/ }),

/***/ "./src/app/ng/reducers/post.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getPostState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPosts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__("./src/app/ng/actions/actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = { postInfo: [] };
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["c" /* POSTS */]: {
            return __assign({}, state, { postInfo: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getPostState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('postState');
var getPosts = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getPostState, function (state) { return state.postInfo; });


/***/ }),

/***/ "./src/app/ng/reducers/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* unused harmony export logger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_reducer__ = __webpack_require__("./src/app/ng/reducers/post.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__author_reducer__ = __webpack_require__("./src/app/ng/reducers/author.reducer.ts");


// import { environment } from '../../environments/environment';
var reducers = {
    postState: __WEBPACK_IMPORTED_MODULE_0__post_reducer__["b" /* reducer */],
    authorState: __WEBPACK_IMPORTED_MODULE_1__author_reducer__["b" /* reducer */]
};
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
// export const metaReducers: MetaReducer<AppState>[] = !environment.production
//   ? [logger]
//   : [];


/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n\r\n\t<div class=\"service-header\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\r\n\r\n\t\t<div fxFlex class=\"content\" fxLayout.lt-sm=\"column\" style=\"padding: 20px;\" fxLayout=\"row\" fxLayoutAlign=\"center stretch\">\r\n\r\n\t\t\t<div fxFlex=\"35\" fxFlex.lt-sm=\"100\" fxLayout=\"row\" style=\"background-color: #45aae3; padding: 20px;\" fxLayoutAlign=\"center stretch\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<h3 class=\"mat-display-1\">Our Services</h3>\r\n\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t<p class=\"mat-body-2\">\r\n\t\t\t\t\t\tFrom ideation to market research:Discover, Design, plan your product!From ideation to market research:Discover, Design, plan\r\n\t\t\t\t\t\tyour product!From ideation to market research:Discover, Design, plan your product!\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div fxFlex=\"65\" fxHide.lt-sm fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t\t\t\t<img style=\"width: 400px;\" src=\"./assets/images/bg/cdk.png\">\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div fxLayout=\"column\" class=\"service-card-content\">\r\n\r\n\t\t<div fxLayout=\"row\" class=\"service-card-container\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \">\r\n\t\t\t\t<img src=\"/assets/pages/webdesign.png\" fxFlex>\r\n\r\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title1</h3>\r\n\t\t\t\t<p class=\"mat-body-2\" fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \">\r\n\t\t\t\t<img src=\"/assets/pages/mobile.png\" fxFlex>\r\n\r\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title3</h3>\r\n\t\t\t\t<p class=\"mat-body-2\" fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \">\r\n\t\t\t\t<img src=\"/assets/pages/custom.png\" fxFlex>\r\n\r\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title4</h3>\r\n\t\t\t\t<p class=\"mat-body-2\" fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\r\n\t\t<div fxLayout=\"row\" class=\"service-card-container\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\r\n\r\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \">\r\n\t\t\t\t<img src=\"/assets/pages/strategy.png\" fxFlex>\r\n\r\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title1</h3>\r\n\t\t\t\t<p class=\"mat-body-2\" fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \">\r\n\t\t\t\t<img src=\"/assets/pages/mobile.png\" fxFlex>\r\n\r\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title3</h3>\r\n\t\t\t\t<p class=\"mat-body-2\" fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \">\r\n\t\t\t\t<img src=\"/assets/pages/prototype.png\" fxFlex>\r\n\r\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title4</h3>\r\n\t\t\t\t<p class=\"mat-body-2\" fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\r\n\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/services/services.component.scss":
/***/ (function(module, exports) {

module.exports = ".service-header {\n  height: 350px;\n  width: 100%;\n  padding: 30px 0 0 0;\n  color: white; }\n  .service-header .content {\n    background-color: white; }\n  .service-header h3 {\n    margin: 0;\n    margin-bottom: 10px;\n    text-align: center; }\n  .service-header p {\n    margin: 0;\n    text-align: center; }\n  .service-header mat-divider {\n    border-top-color: white; }\n  .service-card-content .service-card-container {\n  padding: 20px; }\n  .service-card-content .service-card-container .service-card {\n    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    cursor: default;\n    background-color: white;\n    padding: 20px; }\n  .service-card-content .service-card-container .service-card img {\n      height: 200px; }\n  .service-card-content .service-card-container .service-card h3 {\n      margin: 0; }\n  .service-card-content .service-card-container .service-card p {\n      margin: 0;\n      text-align: center; }\n  .service-card-content .service-card-container .service-card:hover {\n      -webkit-transform: translate(0, -8px);\n              transform: translate(0, -8px);\n      -webkit-box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16);\n              box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__("./src/app/pages/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"아이디를 입력해주세요\" value=\"asinayo\" [(ngModel)]=\"searchWord\">\n  </mat-form-field>\n  <button mat-button (click)=\"searchID(searchWord)\">Search</button>\n  \n</p>\n\n\n\n\n<!-- <mat-tab-group class=\"demo-tab-group\">\n  <mat-tab label=\"{{key}}\" *ngFor=\"let key of keys\">\n    <div class=\"demo-tab-content\">\n        <mat-list role=\"list\" *ngFor=\"let post of tagList[key]\">\n            <mat-list-item role=\"listitem\"><a href=\"https://steemit.com{{post.url}}\">{{post.root_title}}</a></mat-list-item>\n          </mat-list>\n    </div>\n  </mat-tab>\n\n</mat-tab-group> -->\n\n\n\n<!-- <mat-tab-group *ngFor=\"let key of keys\">\n  <mat-tab label=\"{{key}}\">Content 1</mat-tab>\n</mat-tab-group> -->\n\n<!-- <mat-list role=\"list\" *ngFor=\"let post of postList\">\n  <mat-list-item role=\"listitem\"><a href=\"https://steemit.com{{post.url}}\">{{post.root_title}}</a></mat-list-item>\n</mat-list> -->\n\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ".demo-tab-group {\n  border: 1px solid #e8e8e8; }\n\n.demo-tab-content {\n  padding: 16px; }\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_steem__ = __webpack_require__("./node_modules/steem/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_steem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_steem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__covalent_core__ = __webpack_require__("./node_modules/@covalent/core/esm5/covalent-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_reducers_post_reducer__ = __webpack_require__("./src/app/ng/reducers/post.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_reducers_author_reducer__ = __webpack_require__("./src/app/ng/reducers/author.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, _loadingService, postStore, authorStore, router) {
        this.route = route;
        this._loadingService = _loadingService;
        this.postStore = postStore;
        this.authorStore = authorStore;
        this.router = router;
        this.postInfos = postStore.select(__WEBPACK_IMPORTED_MODULE_5__ng_reducers_post_reducer__["a" /* getPosts */]);
        this.authorInfo = authorStore.select(__WEBPACK_IMPORTED_MODULE_6__ng_reducers_author_reducer__["a" /* getAuthor */]);
        SearchComponent_1.sauthorStore = this.authorStore;
        SearchComponent_1.spostStore = this.postStore;
        SearchComponent_1.srouter = this.router;
        this.selectTag = 'all_all';
    }
    SearchComponent_1 = SearchComponent;
    SearchComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        console.log(this.id);
        this.searchID(this.id);
    };
    SearchComponent.prototype.ngOnInit = function () {
        // SearchComponent.srouter.navigateByUrl('/blog/asinayo');
    };
    SearchComponent.prototype.clickTag = function (tag) {
        this.selectTag = tag;
        console.log(this.selectTag);
        // this.selectedPosts = this.tagList.get(tag);
    };
    SearchComponent.prototype.searchID = function (searchWord) {
        SearchComponent_1.sid = searchWord;
        // this.loading.push("Loading")
        SearchComponent_1.getAuthorInfo(searchWord);
        var pi = {
            postList: new Array(),
            tagMap: new Map(),
            tagList: new Array()
        };
        SearchComponent_1.getNextPosts2(searchWord, null, pi);
    };
    SearchComponent.getAuthorInfo = function (searchWord) {
        __WEBPACK_IMPORTED_MODULE_1_steem__["api"].getAccounts([searchWord], function (err, response) {
            var ai = {};
            if (err != undefined) {
                console.log(err);
            }
            else {
                ai.author = response[0];
                if (ai.author.json_metadata.length <= 0 || ai.author.json_metadata != undefined) {
                    ai.meta = {
                        profile: {
                            name: ai.author.name,
                        }
                    };
                }
                else {
                    ai.meta = JSON.parse(ai.author.json_metadata);
                }
                console.log(ai.author);
                // SearchComponent.sauthorStore.dispatch(new fromActions.AuthorAction(ai));
            }
        });
    };
    SearchComponent.getNextPosts2 = function (author, startPermlink, pi) {
        // console.log(startPermlink + " -- " +date );
        __WEBPACK_IMPORTED_MODULE_1_steem__["api"].getDiscussionsByAuthorBeforeDateAsync(author, startPermlink, SearchComponent_1.DATE, SearchComponent_1.GET_SIZE, function (err, result) {
            // console.log(result);
            var post = null;
            var lastPermlink;
            for (var indexI = 0; indexI < result.length; ++indexI) {
                post = result[indexI];
                lastPermlink = post.permlink;
                if (indexI + 1 < result.length) {
                    // console.log(post.author + " --- " + post.root_title);
                    pi.postList.push(post);
                }
            }
            if (result.length >= SearchComponent_1.GET_SIZE || false) {
                // console.log(lastPermlink);
                SearchComponent_1.getNextPosts2(author, lastPermlink, pi);
            }
            else {
                for (var indexI = 0; indexI < pi.postList.length; ++indexI) {
                    // console.log(pi.postList[indexI]);
                    // console.log(sm.postList[indexI].author + " --- " + sm.postList[indexI].root_title);
                }
                SearchComponent_1.sortTag2(pi);
            }
        });
    };
    SearchComponent.sortTag2 = function (pi) {
        var post = null;
        pi.tagMap['all_all'] = new Array();
        pi.tagList.push('all_all');
        for (var indexI = 0; indexI < pi.postList.length; ++indexI) {
            post = pi.postList[indexI];
            pi.tagMap['all_all'].push(post);
            var tags = JSON.parse(post.json_metadata).tags;
            for (var indexJ = 0; indexJ < tags.length; ++indexJ) {
                if (pi.tagMap[tags[indexJ]] === undefined) {
                    pi.tagMap[tags[indexJ]] = new Array();
                    pi.tagList.push(tags[indexJ]);
                }
                pi.tagMap[tags[indexJ]].push(post);
            }
        }
        console.log('END');
        SearchComponent_1.srouter.navigateByUrl('/blog/' + SearchComponent_1.sid);
    };
    SearchComponent.DATE = new Date().toISOString().split('.')[0];
    SearchComponent.GET_SIZE = 10;
    SearchComponent = SearchComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__covalent_core__["n" /* TdLoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
    var SearchComponent_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map