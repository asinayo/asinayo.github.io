webpackJsonp([0],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getModeState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(52);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = { mode: "kr" };
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["c" /* MODE */]: {
            return __assign({}, state, { mode: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getModeState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('modeState');
var getMode = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getModeState, function (state) { return state.mode; });
//# sourceMappingURL=mode.reducer.js.map

/***/ }),

/***/ 173:
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
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 216:
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
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_steem__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_steem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_steem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_mode_reducer__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_ng_actions_srtActions__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_showdown__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_showdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_showdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var STORAGE_NAME = 'STORAGE_NAME';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modeStore, talkStore, loadingCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.modeStore = modeStore;
        this.talkStore = talkStore;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.modes$ = null;
        this.converter = new __WEBPACK_IMPORTED_MODULE_8_showdown___default.a.Converter();
        this.modes$ = modeStore.select(__WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_mode_reducer__["a" /* getMode */]);
        // this.talks$ = talkStore.select(TalkReducer.getTalk);
    }
    HomePage.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.storage.get(STORAGE_NAME).then(function (val) {
            if (val == null) {
                _this.storage.set(STORAGE_NAME, []);
                _this.histories = [];
            }
            else {
                _this.histories = val;
            }
            // console.log('histories', val);
        });
    };
    HomePage.prototype.search = function () {
        console.log(this.youId);
        console.log(this.friendId);
        if (this.checkNull(this.youId) || this.checkNull(this.friendId)) {
            this.showAlert('당신 혹은 친구의 이름을 입력해주세요');
            return;
        }
        this.getYouInfo(this.youId);
    };
    HomePage.prototype.searchHistory = function (his) {
        this.youId = his.youId;
        this.friendId = his.friendId;
        this.getYouInfo(this.youId);
    };
    HomePage.prototype.countHistory = function (youId, friendId) {
        var check = false;
        for (var ii = 0; ii < this.histories.length; ++ii) {
            if (this.histories[ii].youId == youId && this.histories[ii].friendId == friendId) {
                this.histories[ii].count += 1;
                check = true;
            }
        }
        if (check == false) {
            this.histories.push({
                youId: youId,
                friendId: friendId,
                count: 1
            });
        }
        this.histories.sort(function (a, b) {
            if (a.count > b.count) {
                return -1;
            }
            else {
                return 1;
            }
        });
        this.storage.set(STORAGE_NAME, this.histories);
    };
    HomePage.prototype.checkNull = function (str) {
        if (str === undefined
            || str === null
            || str.length <= 0
            || str == '') {
            return true;
        }
        return false;
    };
    HomePage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: '경고!',
            subTitle: msg,
            buttons: ['응']
        });
        alert.present();
    };
    HomePage.prototype.getYouInfo = function (youId) {
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present();
        this.countHistory(this.youId, this.friendId);
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_steem__["api"].getAccountHistory(youId, -1, 10000, function (err, result) {
            if (err != null) {
                alert('에러났어요');
                return;
            }
            _this.parseTalk(result);
        });
    };
    HomePage.prototype.parseTalk = function (result) {
        var list = result;
        var realList = new Array();
        var talkList = new Array();
        for (var i = 0; i < list.length; ++i) {
            var data = list[i];
            // console.log(data[0]);
            if (data[1].op[0] == undefined || data[1].op[0] == null || data[1].op[0] != 'comment') {
                continue;
            }
            var cmtData = data[1].op[1];
            if (data[1].op[1].parent_author == undefined
                || data[1].op[1].parent_author == null
                || data[1].op[1].parent_author == '') {
                continue;
            }
            if (cmtData.parent_author == this.friendId || cmtData.author == this.friendId) {
                // ddd += cmtData.author;
                // ddd += '\r\n';
                // ddd += cmtData.body;
                // ddd += '\r\n';
                // json_metadata
                data[1].op[1].json_metadata = JSON.parse(data[1].op[1].json_metadata);
                data[1].op[1].body = this.converter.makeHtml(data[1].op[1].body);
                talkList.push(data);
            }
        }
        // this.viewTalkList = talkList;
        var ti = {
            talkList: talkList,
            youId: this.youId,
            friendId: this.friendId
        };
        this.loader.dismissAll();
        this.talkStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__app_ng_actions_srtActions__["b" /* TalkAction */](ti));
        this.modeStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__["d" /* ModeAction */]('talk'));
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\project\vscode\steemit\srt\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content justify-content-center align-items-center>\n  <form (ngSubmit)="search()">\n    <ion-grid fixed>\n      <ion-item float="left">\n        <ion-label color="primary" floating>너의 이름은..</ion-label>\n        <ion-input [(ngModel)]="youId" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <ion-item float="left">\n        <ion-label color="primary" floating>친구의 이름은..</ion-label>\n        <ion-input [(ngModel)]="friendId" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n      <button float="left" ion-button round outline type="submit" item-right>Search</button>\n    </ion-grid>\n  </form>\n\n  <ion-grid >\n      <ion-row justify-content-center align-items-center style="height: 100%">\n          <ion-list class="history-list"  >\n              <ion-item class="item-css" *ngFor="let his of histories" (click)="searchHistory(his)">\n                <!-- <ion-avatar item-start> -->\n                    <ion-avatar item-start>\n                        <img src="https://steemitimages.com/u/{{his.youId}}/avatar">\n                      </ion-avatar>\n                  \n                <!-- </ion-avatar> -->\n                <h2>{{his.youId}} ♡ {{his.friendId}}</h2>\n                <h3>count - {{his.count}}</h3>\n                <!-- <p>I\'ve had a pretty messed up day. If we just...</p> -->\n                <!-- <ion-avatar item-start>\n                    <img src="https://steemitimages.com/u/{{his.friendId}}/avatar">\n                  </ion-avatar> -->\n        \n                  <ion-avatar item-end>\n                      <img src="https://steemitimages.com/u/{{his.friendId}}/avatar">\n                    </ion-avatar>\n              </ion-item>\n            </ion-list>\n      </ion-row>\n    </ion-grid>\n  \n  \n</ion-content>\n'/*ion-inline-end:"D:\project\vscode\steemit\srt\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TALKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TalkAction; });
var TALKS = 'TALKS';
var TalkAction = /** @class */ (function () {
    function TalkAction(payload) {
        this.payload = payload;
        this.type = TALKS;
    }
    return TalkAction;
}());

//# sourceMappingURL=srtActions.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_talk_reducer__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_commons_StringUtil__ = __webpack_require__(603);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, talkStore) {
        this.navCtrl = navCtrl;
        this.talkStore = talkStore;
        this.talkInfos = [];
        this.allTalkInfos = [];
        this.pageInfos = [];
        this.pageMap = new Map();
        this.rangeDate = '';
        this.talks$ = talkStore.select(__WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_talk_reducer__["a" /* getTalk */]);
    }
    ListPage.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.talks$.subscribe(function (talkInfo) {
            if (talkInfo != undefined && talkInfo != null) {
                _this.pageMap.clear();
                _this.talkInfos = [];
                _this.talkInfos.push(talkInfo);
                _this.allTalkInfos.push(talkInfo);
                _this.processOther(talkInfo);
                _this.processDatePage(talkInfo);
            }
            // console.log(talkInfo.talkList[0]);
        });
    };
    ListPage.prototype.processOther = function (talk) {
        this.rangeDate = this.getTotalRange(talk);
    };
    ListPage.prototype.getTotalRange = function (talk) {
        if (talk.talkList == undefined || talk.talkList == null || talk.talkList.length <= 0) {
            return '';
        }
        var start = __WEBPACK_IMPORTED_MODULE_4__app_commons_StringUtil__["a" /* convertDate */]((talk.talkList[0])[1].timestamp);
        var end = __WEBPACK_IMPORTED_MODULE_4__app_commons_StringUtil__["a" /* convertDate */]((talk.talkList[talk.talkList.length - 1])[1].timestamp);
        var fileName = '';
        fileName += start;
        fileName += ' ~ ';
        fileName += end;
        return fileName;
    };
    ListPage.prototype.processDatePage = function (talkInfo) {
        if (talkInfo == undefined || talkInfo == null) {
            return;
        }
        var td = this.getTotalRange(talkInfo);
        this.pageMap.set(td, talkInfo.talkList);
        for (var _i = 0, _a = talkInfo.talkList; _i < _a.length; _i++) {
            var talk = _a[_i];
            var date = __WEBPACK_IMPORTED_MODULE_4__app_commons_StringUtil__["a" /* convertDate */](talk[1].timestamp);
            if (this.pageMap.has(date.toString()) == false) {
                this.pageMap.set(date.toString(), []);
            }
            this.pageMap.get(date.toString()).push(talk);
        }
        var _this = this;
        this.pageMap.forEach(function (value, key) {
            _this.pageInfos.push({
                label: key,
                key: key
            });
        });
    };
    ListPage.prototype.optionSelected = function (event) {
        var tl = this.pageMap.get(event);
        this.rangeDate = event;
        // console.log(tl);
        this.talkInfos[0].talkList = tl;
        // console.log(event);
    };
    ListPage.prototype.ccopy = function () {
        var copyData = '';
        for (var _i = 0, _a = this.allTalkInfos; _i < _a.length; _i++) {
            var talkInfo = _a[_i];
            for (var _b = 0, _c = talkInfo.talkList; _b < _c.length; _b++) {
                var it = _c[_b];
                copyData += it[1].op[1].author;
                copyData += ' - ';
                copyData += '<a href="https://steemit.com/' + it[1].op[1].json_metadata.tags[0] + '/@' + it[1].op[1].parent_author + '/' + it[1].op[1].parent_permlink + '"' + ' target="_blank">' + it[1].timestamp + '</a>';
                copyData += '<br/>';
                copyData += it[1].op[1].body;
                copyData += '<br/>';
            }
        }
        // Clipboard.copy(copyData);
        this.download(copyData);
    };
    ListPage.prototype.download = function (data) {
        var talk = this.allTalkInfos[0];
        var fileName = '';
        fileName += talk.youId;
        fileName += '-';
        fileName += talk.friendId;
        fileName += '_';
        var start = __WEBPACK_IMPORTED_MODULE_4__app_commons_StringUtil__["a" /* convertDate */]((talk.talkList[0])[1].timestamp);
        var end = __WEBPACK_IMPORTED_MODULE_4__app_commons_StringUtil__["a" /* convertDate */]((talk.talkList[talk.talkList.length - 1])[1].timestamp);
        fileName += start;
        fileName += '-';
        fileName += end;
        fileName += '.html';
        var csvData = new Blob([data], { type: 'text/html;charset=utf-8;' });
        var csvURL = null;
        if (navigator.msSaveBlob) {
            csvURL = navigator.msSaveBlob(csvData, fileName);
        }
        else {
            csvURL = window.URL.createObjectURL(csvData);
        }
        var tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', fileName);
        tempLink.click();
        tempLink.remove();
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\project\vscode\steemit\srt\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-grid>\n      <ion-row>\n        <!-- <ion-title>List</ion-title> -->\n       \n        <ion-list>\n          <ion-item style="min-width: \'30%\'">\n            <ion-label> {{rangeDate}}</ion-label>\n            <ion-select (ionChange)="optionSelected($event)">\n              <ng-container *ngFor="let pi of pageInfos" >\n                  <ion-option value="{{pi.key}}">{{pi.label}}</ion-option>\n              </ng-container>\n              \n              <!-- <ion-option value="n64">Nintendo64</ion-option>\n              <ion-option value="ps">PlayStation</ion-option>\n              <ion-option value="genesis">Sega Genesis</ion-option>\n              <ion-option value="saturn">Sega Saturn</ion-option>\n              <ion-option value="snes">SNES</ion-option> -->\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        <button ion-button (click)="ccopy()">\n            추억을.. 내 컴퓨터에 저장\n          </button>\n      </ion-row>\n      <!-- <ion-row>\n        2018-03-19 ~ 2018-04-19\n      </ion-row> -->\n    </ion-grid>\n\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="srtlist" *ngFor="let talkInfo of talkInfos">\n    <ng-container *ngFor="let talk of talkInfo.talkList">\n      <ion-card>\n        <ion-card-header>\n          {{talk[1].op[1].author}} -\n          <a href="https://steemit.com/{{talk[1].op[1].json_metadata.tags[0]}}/@{{talk[1].op[1].parent_author}}/{{talk[1].op[1].parent_permlink}}/"\n            target="_blank">{{talk[1].timestamp}}</a>\n\n\n        </ion-card-header>\n        <ion-card-content>\n          <div [innerHtml]="talk[1].op[1].body"></div>\n\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\project\vscode\steemit\srt\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getTalkState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTalk; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_srtActions__ = __webpack_require__(321);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = { talkInfo: null };
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_srtActions__["a" /* TALKS */]: {
            return __assign({}, state, { talkInfo: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getTalkState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('talkState');
var getTalk = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getTalkState, function (state) { return state.talkInfo; });
//# sourceMappingURL=talk.reducer.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_reducers_reducers__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__ng_reducers_reducers__["a" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_reducers_mode_reducer__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modetore) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modetore = modetore;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.modeFlag = this.modetore.select(__WEBPACK_IMPORTED_MODULE_7__ng_reducers_mode_reducer__["a" /* getMode */]);
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.modeFlag.subscribe(function (mode) {
            console.log("this mode - " + mode);
            if (mode == "talk") {
                console.log("mode - talk");
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]);
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\project\vscode\steemit\srt\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\project\vscode\steemit\srt\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* Store */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SELECTTAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GETEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MODE; });
/* unused harmony export PostAction */
/* unused harmony export AuthorAction */
/* unused harmony export SelectAction */
/* unused harmony export GetEndAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModeAction; });
var POSTS = 'POSTS';
var AUTHOR = 'AUTHOR';
var SELECTTAG = 'SELECTTAG';
var GETEND = 'GETEND';
var MODE = 'GETEND';
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

var SelectAction = /** @class */ (function () {
    function SelectAction(payload) {
        this.payload = payload;
        this.type = SELECTTAG;
    }
    return SelectAction;
}());

var GetEndAction = /** @class */ (function () {
    function GetEndAction(payload) {
        this.payload = payload;
        this.type = GETEND;
    }
    return GetEndAction;
}());

var ModeAction = /** @class */ (function () {
    function ModeAction(payload) {
        this.payload = payload;
        this.type = MODE;
    }
    return ModeAction;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertDate;
function convertDate(date) {
    var index = String(date).indexOf('T');
    if (index < 0) {
        return date;
    }
    var retDate = String(date).substring(0, index);
    return retDate;
}
//# sourceMappingURL=StringUtil.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* unused harmony export logger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_reducer__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__author_reducer__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_reducer__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getend_reducer__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mode_reducer__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__talk_reducer__ = __webpack_require__(324);






// import { environment } from '../../environments/environment';
var reducers = {
    postState: __WEBPACK_IMPORTED_MODULE_0__post_reducer__["a" /* reducer */],
    authorState: __WEBPACK_IMPORTED_MODULE_1__author_reducer__["a" /* reducer */],
    selectState: __WEBPACK_IMPORTED_MODULE_2__select_reducer__["a" /* reducer */],
    getEndState: __WEBPACK_IMPORTED_MODULE_3__getend_reducer__["a" /* reducer */],
    modeState: __WEBPACK_IMPORTED_MODULE_4__mode_reducer__["b" /* reducer */],
    talkState: __WEBPACK_IMPORTED_MODULE_5__talk_reducer__["b" /* reducer */]
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
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getPostState */
/* unused harmony export getPosts */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(52);
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
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["e" /* POSTS */]: {
            return __assign({}, state, { postInfo: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getPostState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('postState');
var getPosts = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getPostState, function (state) { return state.postInfo; });
//# sourceMappingURL=post.reducer.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getAuthorState */
/* unused harmony export getAuthor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(52);
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
//# sourceMappingURL=author.reducer.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getSelectState */
/* unused harmony export getSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(52);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = { selectTag: 'all_all' };
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["f" /* SELECTTAG */]: {
            return __assign({}, state, { selectTag: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getSelectState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('selectState');
var getSelect = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getSelectState, function (state) { return state.selectTag; });
//# sourceMappingURL=select.reducer.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getGetEndState */
/* unused harmony export getGetEnd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(52);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = { getEnd: false };
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["b" /* GETEND */]: {
            return __assign({}, state, { getEnd: action.payload });
        }
        default: {
            return state;
        }
    }
}
var getGetEndState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('getEndState');
var getGetEnd = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getGetEndState, function (state) { return state.getEnd; });
//# sourceMappingURL=getend.reducer.js.map

/***/ })

},[325]);
//# sourceMappingURL=main.js.map