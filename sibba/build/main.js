webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getSelectState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(29);
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
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["i" /* SELECTTAG */]: {
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getAuthorState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAuthor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(29);
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = searchList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

function searchList(searchWord, tempList) {
    if (searchWord == null || searchWord == '') {
        return __WEBPACK_IMPORTED_MODULE_0_lodash__["clone"](tempList);
        ;
    }
    var tl = __WEBPACK_IMPORTED_MODULE_0_lodash__["clone"](tempList);
    tl[0] = __WEBPACK_IMPORTED_MODULE_0_lodash__["clone"](tempList[0]);
    var newTagMap = new Map();
    tl[0].tagMap.forEach(function (value, key) {
        // if(value.root_title)
        // indexOf
        var searcharr = [];
        for (var i = 0; i < value.length; ++i) {
            var post = value[i];
            if (post.root_title.indexOf(searchWord) >= 0) {
                searcharr.push(post);
            }
        }
        newTagMap.set(key, searcharr);
    });
    tl[0].tagMap = newTagMap;
    return tl;
}
//# sourceMappingURL=SearchUtil.js.map

/***/ }),

/***/ 177:
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
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 220:
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
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_post_reducer__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_author_reducer__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_steem__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_steem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_steem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, postStore, authorStore, selectStore, getEndStore, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.postStore = postStore;
        this.authorStore = authorStore;
        this.selectStore = selectStore;
        this.getEndStore = getEndStore;
        this.loadingCtrl = loadingCtrl;
        this.selectTag = 'all_all';
        this.selectedPosts = new Array();
        this.postInfoList = postStore.select(__WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_post_reducer__["a" /* getPosts */]);
        this.authorInfoList = authorStore.select(__WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_author_reducer__["a" /* getAuthor */]);
        HomePage_1.sauthorStore = this.authorStore;
        HomePage_1.spostStore = this.postStore;
        HomePage_1.snavCtrl = this.navCtrl;
        HomePage_1.sgetEndStore = this.getEndStore;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ngAfterContentInit = function () {
        // this.searchID('asinayo');
    };
    HomePage.prototype.search = function () {
        console.log(this.steemitid);
        this.searchID(this.steemitid);
        HomePage_1.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        HomePage_1.loader.present();
    };
    HomePage.prototype.searchID = function (searchWord) {
        HomePage_1.ll = true;
        HomePage_1.sid = searchWord;
        // this.loading.push("Loading")
        // MyApp.getAuthorInfo(searchWord);
        var pi = {
            postList: new Array(),
            tagMap: new Map(),
            tagList: new Array()
        };
        HomePage_1.getNextPosts2(searchWord, null, pi);
        var bb = true;
        HomePage_1.sgetEndStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__["d" /* GetEndAction */](bb));
    };
    HomePage.getAuthorInfo = function (searchWord) {
        __WEBPACK_IMPORTED_MODULE_6_steem__["api"].getAccounts([searchWord], function (err, response) {
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
                ai.author.last_post = HomePage_1.convertDate(ai.author.last_post);
                var arr = new Array();
                arr.push(ai);
                // console.log(arr);
                HomePage_1.sauthorStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__["b" /* AuthorAction */](arr));
            }
        });
    };
    HomePage.getNextPosts2 = function (author, startPermlink, pi) {
        // console.log(startPermlink + " -- " +date );
        __WEBPACK_IMPORTED_MODULE_6_steem__["api"].getDiscussionsByAuthorBeforeDateAsync(author, startPermlink, HomePage_1.DATE, HomePage_1.GET_SIZE, function (err, result) {
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
            if (result.length >= HomePage_1.GET_SIZE || false) {
                // console.log(lastPermlink);
                var ppi = __WEBPACK_IMPORTED_MODULE_7_lodash__["clone"](pi);
                HomePage_1.sortTag2(ppi);
                HomePage_1.getNextPosts2(author, lastPermlink, pi);
            }
            else {
                // for (var aa = 0; aa < pi.postList.length; ++aa) {
                //   // console.log(pi.postList[indexI]);
                //   console.log(pi.postList[aa].author + " --- " + pi.postList[aa].root_title);
                // }
                HomePage_1.sortTag2(pi);
            }
        });
    };
    HomePage.convertDate = function (date) {
        var index = String(date).indexOf('T');
        if (index < 0) {
            return date;
        }
        var retDate = String(date).substring(0, index);
        return retDate;
    };
    HomePage.sortTag2 = function (pi) {
        var post = null;
        pi.tagMap = new Map();
        pi.tagList = new Array();
        pi.tagMap.set('all_all', new Array());
        pi.tagList.push('all_all');
        for (var indexI = 0; indexI < pi.postList.length; ++indexI) {
            post = pi.postList[indexI];
            pi.tagMap.get('all_all').push(post);
            post.created = HomePage_1.convertDate(post.created);
            // post.created = post.created.split("T")[0];
            try {
                post.json_metadata = JSON.parse(post.json_metadata);
            }
            catch (e) {
            }
            var tags = post.json_metadata.tags;
            for (var indexJ = 0; indexJ < tags.length; ++indexJ) {
                if (pi.tagMap.get(tags[indexJ]) === undefined) {
                    pi.tagMap.set(tags[indexJ], new Array());
                    pi.tagList.push(tags[indexJ]);
                }
                pi.tagMap.get(tags[indexJ]).push(post);
            }
        }
        // console.log('END');
        var arr = new Array();
        arr.push(pi);
        // console.log(arr);
        HomePage_1.spostStore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__["h" /* PostAction */](arr));
        // BlogComponent.srouter.navigateByUrl('/blog/'+BlogComponent.sid);
        if (HomePage_1.ll) {
            HomePage_1.ll = false;
            console.log('close loading!!!');
            HomePage_1.loader.dismissAll();
        }
        // HomePage.snavCtrl.push(ListPage, {
        //   postStore: HomePage.spostStore,
        //   selectStore: HomePage.sauthorStore
        // });
    };
    HomePage.DATE = new Date().toISOString().split('.')[0];
    HomePage.GET_SIZE = 10;
    HomePage.ll = true;
    HomePage.replaceAll = function (str, org, dest) {
        return str.split(org).join(dest);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\project\steemit\sibba\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Search</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n  <ion-grid fixed>\n\n    <form (ngSubmit)="search()">\n\n      <ion-grid fixed>\n\n        <ion-item float="left">\n\n          <ion-label color="primary" floating>아이디를 입력해주세요</ion-label>\n\n          <ion-input [(ngModel)]="steemitid" [ngModelOptions]="{standalone: true}"></ion-input>\n\n        </ion-item>\n\n        <button float="left" ion-button round outline type="submit" item-right>Search</button>\n\n      </ion-grid>\n\n    </form>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\project\steemit\sibba\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SELECTTAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GETEND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SelectAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetEndAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ModeAction; });
var POSTS = 'POSTS';
var AUTHOR = 'AUTHOR';
var SELECTTAG = 'SELECTTAG';
var GETEND = 'GETEND';
var MODE = 'GETEND';
var PostAction = (function () {
    function PostAction(payload) {
        this.payload = payload;
        this.type = POSTS;
    }
    return PostAction;
}());

var AuthorAction = (function () {
    function AuthorAction(payload) {
        this.payload = payload;
        this.type = AUTHOR;
    }
    return AuthorAction;
}());

var SelectAction = (function () {
    function SelectAction(payload) {
        this.payload = payload;
        this.type = SELECTTAG;
    }
    return SelectAction;
}());

var GetEndAction = (function () {
    function GetEndAction(payload) {
        this.payload = payload;
        this.type = GETEND;
    }
    return GetEndAction;
}());

var ModeAction = (function () {
    function ModeAction(payload) {
        this.payload = payload;
        this.type = MODE;
    }
    return ModeAction;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_post_reducer__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_select_reducer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_commons_SearchUtil__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListPage = (function () {
    // modeFlag: Observable<String>;
    function ListPage(navCtrl, navParams, postStore, selectStore, modetore) {
        // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postStore = postStore;
        this.selectStore = selectStore;
        this.modetore = modetore;
        this.postList = [];
        this.selectTag = 'all_all';
        this.searchWord = '';
        if (this.postStore == null || this.postStore == undefined) {
            postStore = this.navParams.get('postStore');
            selectStore = this.navParams.get('selectStore');
        }
        // this.modeFlag = this.modetore.select(ModeReducer.getMode);
        // console.log(postStore);
        this.postInfoList = postStore.select(__WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_post_reducer__["a" /* getPosts */]);
        this.selectTemp = selectStore.select(__WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_select_reducer__["a" /* getSelect */]);
        // Let's populate this page with some filler content for funzies
        // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        // 'american-football', 'boat', 'bluetooth', 'build'];
        // this.items = [];
        // for (let i = 1; i < 11; i++) {
        //   this.items.push({
        //     title: 'Item ' + i,
        //     note: 'This is item #' + i,
        //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        //   });
        // }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.postInfoList.subscribe(function (posts) {
            // console.log(posts);
            // this.dataSource = new MatTableDataSource(probes);
            // this.dataSource.sort = this.sort;
            // console.log(ttt);
            _this.tempPostList = posts;
            _this.postList = __WEBPACK_IMPORTED_MODULE_6__app_commons_SearchUtil__["a" /* searchList */](_this.searchWord, _this.tempPostList);
            ;
            // this.tempPostList = posts;
            // console.log(posts);
        }, function (error) {
            console.log(error.message);
        });
        this.selectTemp.subscribe(function (st) {
            // console.log(posts);
            // this.dataSource = new MatTableDataSource(probes);
            // this.dataSource.sort = this.sort;
            console.log(st);
            _this.selectTag = st;
            // console.log(this.selectTag);
            // let posts: PostInfo[] = [];
            // posts.push(this.postList[0]);
            // this.postStore.dispatch(new fromActions.PostAction(posts));
            // console.log(this.selectTag);
        }, function (error) {
            console.log(error.message);
        });
    };
    ListPage.prototype.getItems = function (ev) {
        this.searchWord = ev.target.value;
        this.postList = __WEBPACK_IMPORTED_MODULE_6__app_commons_SearchUtil__["a" /* searchList */](ev.target.value, this.tempPostList);
        // var tl: PostInfo[] = null;
        // console.log(ev.target.value);
        // if(ev.target.value == null || ev.target.value == '') {
        //   this.postList = _.clone(this.tempPostList);
        //   // this.postList[0].tagMap = _.clone(this.tempPostList[0].tagMap);
        //   return;
        // }
        // tl = _.clone(this.tempPostList);
        // tl[0] = _.clone(this.tempPostList[0]);
        // let newTagMap = new Map();
        // tl[0].tagMap.forEach((value: any[], key: string) => {
        //   // if(value.root_title)
        //   // indexOf
        //   let searcharr: any[] = [];
        //   for(var i = 0 ; i < value.length; ++i) {
        //     let post = value[i];
        //     if(post.root_title.indexOf(ev.target.value) >= 0) {
        //       searcharr.push(post);
        //     }
        //   }
        //   newTagMap.set(key, searcharr);
        // });
        // tl[0].tagMap = newTagMap;
        // this.postList = tl;
        // console.log(ev.target.value);
    };
    ListPage.prototype.optionSelected = function (event) {
        console.log('-=-=-=-=optionSelected=-=-=-=-=-=');
        console.log(event);
        this.modetore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__["f" /* ModeAction */](String(event)));
    };
    ListPage.prototype.onCancel = function (event) {
        // console.log('-=-=-=-=onCancel=-=-=-=-=-=');
        // console.log(event);
    };
    ListPage.prototype.changeMode = function () {
        this.modetore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__["f" /* ModeAction */]("kr-art"));
    };
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\project\steemit\sibba\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n\n\n\n\n      <div *ngIf="selectTag == \'all_all\'">\n\n        List - Posts - all\n\n      </div>\n\n      <div *ngIf="selectTag != \'all_all\'">\n\n        List - Posts - {{selectTag}}\n\n      </div>\n\n\n\n      <ion-item>\n\n        <ion-label>Mode</ion-label>\n\n        <ion-select (ionChange)="optionSelected($event)">\n\n          <ion-option value=\'list\'>list</ion-option>\n\n          <ion-option value=\'card\'>card</ion-option>\n\n          <div *ngIf="selectTag == \'kr-art\' || selectTag == \'kr-gazua\' || selectTag == \'catchmind\'">\n\n              <ion-option value=\'image\'>image</ion-option>\n\n            </div>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div> -->\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-grid fixed>\n\n    <ion-list *ngFor="let postInfo of postList">\n\n      <ion-item *ngFor="let post of postInfo.tagMap.get(selectTag)">\n\n        <ion-avatar item-start>\n\n          <div *ngIf="post.json_metadata.image != undefined ">\n\n            <img src="https://steemitimages.com/200x0/{{post.json_metadata.image[0]}}">\n\n          </div>\n\n        </ion-avatar>\n\n        <h2>\n\n          <a href="https://steemit.com{{post.url}}" target="_blank">{{post.root_title}}</a>\n\n        </h2>\n\n        <p>{{post.created}}</p>\n\n        <p>Votes : {{post.net_votes}} , reply : {{post.children}} </p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\project\steemit\sibba\src\pages\list\list.html"*/,
            styleUrls: ['/src/pages/card/list.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getGetEndState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGetEnd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(29);
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
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["c" /* GETEND */]: {
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

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getModeState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(29);
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
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["e" /* MODE */]: {
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

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_post_reducer__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_select_reducer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_commons_SearchUtil__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CardPage = (function () {
    function CardPage(navCtrl, navParams, postStore, selectStore, modetore) {
        // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postStore = postStore;
        this.selectStore = selectStore;
        this.modetore = modetore;
        this.selectTag = 'all_all';
        this.searchWord = '';
        if (this.postStore == null || this.postStore == undefined) {
            postStore = this.navParams.get('postStore');
            selectStore = this.navParams.get('selectStore');
        }
        // console.log(postStore);
        this.postInfoList = postStore.select(__WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_post_reducer__["a" /* getPosts */]);
        this.selectTemp = selectStore.select(__WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_select_reducer__["a" /* getSelect */]);
        this.postInfoList.subscribe(function (posts) {
            // console.log(posts);
            // this.dataSource = new MatTableDataSource(probes);
            // this.dataSource.sort = this.sort;
            // console.log(ttt);
            _this.tempPostList = posts;
            _this.postList = __WEBPACK_IMPORTED_MODULE_6__app_commons_SearchUtil__["a" /* searchList */](_this.searchWord, _this.tempPostList);
            ;
            // if(posts.length > 0) {
            //   if(posts[0].postList.length > 0) {
            //     console.log(JSON.stringify(posts[0].postList[0]));
            //   }
            // }
        }, function (error) {
            console.log(error.message);
        });
        this.selectTemp.subscribe(function (st) {
            // console.log(posts);
            // this.dataSource = new MatTableDataSource(probes);
            // this.dataSource.sort = this.sort;
            console.log(st);
            _this.selectTag = st;
            // console.log(this.selectTag);
            // let posts: PostInfo[] = [];
            // posts.push(this.postList[0]);
            // this.postStore.dispatch(new fromActions.PostAction(posts));
            // console.log(this.selectTag);
        }, function (error) {
            console.log(error.message);
        });
    }
    CardPage.prototype.optionSelected = function (event) {
        console.log('-=-=-=-=optionSelected=-=-=-=-=-=');
        console.log(event);
        this.modetore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__["f" /* ModeAction */](String(event)));
    };
    CardPage.prototype.onCancel = function (event) {
        // console.log('-=-=-=-=onCancel=-=-=-=-=-=');
        // console.log(event);
    };
    CardPage.prototype.ngAfterContentInit = function () {
    };
    CardPage.prototype.getItems = function (ev) {
        this.searchWord = ev.target.value;
        this.postList = __WEBPACK_IMPORTED_MODULE_6__app_commons_SearchUtil__["a" /* searchList */](ev.target.value, this.tempPostList);
    };
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"D:\project\steemit\sibba\src\pages\card\card.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <div *ngIf="selectTag == \'all_all\'">\n\n                Image - Posts - all\n\n              </div>\n\n              <div *ngIf="selectTag != \'all_all\'">\n\n                Image - Posts - {{selectTag}}\n\n              </div>\n\n        \n\n              <ion-item>\n\n                <ion-label>Mode</ion-label>\n\n                <ion-select (ionChange)="optionSelected($event)">\n\n                  <ion-option value=\'list\'>list</ion-option>\n\n                  <ion-option value=\'card\'>card</ion-option>\n\n                  <div *ngIf="selectTag == \'kr-art\' || selectTag == \'kr-gazua\' || selectTag == \'catchmind\'">\n\n                    <ion-option value=\'image\'>image</ion-option>\n\n                  </div>\n\n                </ion-select>\n\n              </ion-item>\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-grid >\n\n        <ion-row *ngFor="let postInfo of postList">\n\n            <ion-col *ngFor="let post of postInfo.tagMap.get(selectTag)">\n\n                <div *ngIf="post.json_metadata.image != undefined ">\n\n                    <div *ngFor="let img of post.json_metadata.image">\n\n                        <ion-card class="ion-card-small">\n\n                            <!-- <div *ngIf="post.json_metadata.image != undefined "> -->\n\n                            <img src="https://steemitimages.com/400x0/{{img}}">\n\n\n\n                            <div class="card-title">\n\n                                <a href="https://steemit.com{{post.url}}" target="_blank">{{post.root_title}}</a>\n\n                            </div>\n\n                            <div class="card-subtitle">{{post.created}} Votes : {{post.net_votes}} , reply : {{post.children}}</div>\n\n                        </ion-card>\n\n                    </div>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\project\steemit\sibba\src\pages\card\card.html"*/,
            styleUrls: ['/src/pages/card/card.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_post_reducer__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_select_reducer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_commons_SearchUtil__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RealCardPage = (function () {
    function RealCardPage(navCtrl, navParams, postStore, selectStore, modetore) {
        // If we navigated to this page, we will have an item available as a nav param
        // this.selectedItem = navParams.get('item');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postStore = postStore;
        this.selectStore = selectStore;
        this.modetore = modetore;
        this.postList = [];
        this.selectTag = 'all_all';
        this.searchWord = '';
        if (this.postStore == null || this.postStore == undefined) {
            postStore = this.navParams.get('postStore');
            selectStore = this.navParams.get('selectStore');
        }
        // console.log(postStore);
        this.postInfoList = postStore.select(__WEBPACK_IMPORTED_MODULE_3__app_ng_reducers_post_reducer__["a" /* getPosts */]);
        this.selectTemp = selectStore.select(__WEBPACK_IMPORTED_MODULE_4__app_ng_reducers_select_reducer__["a" /* getSelect */]);
    }
    RealCardPage.prototype.optionSelected = function (event) {
        console.log('-=-=-=-=optionSelected=-=-=-=-=-=');
        console.log(event);
        this.modetore.dispatch(new __WEBPACK_IMPORTED_MODULE_5__app_ng_actions_actions__["f" /* ModeAction */](String(event)));
    };
    RealCardPage.prototype.onCancel = function (event) {
        // console.log('-=-=-=-=onCancel=-=-=-=-=-=');
        // console.log(event);
    };
    RealCardPage.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.postInfoList.subscribe(function (posts) {
            // console.log(posts);
            // this.dataSource = new MatTableDataSource(probes);
            // this.dataSource.sort = this.sort;
            // console.log(ttt);
            _this.tempPostList = posts;
            _this.postList = __WEBPACK_IMPORTED_MODULE_6__app_commons_SearchUtil__["a" /* searchList */](_this.searchWord, _this.tempPostList);
            ;
            // if(posts.length > 0) {
            //   if(posts[0].postList.length > 0) {
            //     console.log(JSON.stringify(posts[0].postList[0]));
            //   }
            // }
        }, function (error) {
            console.log(error.message);
        });
        this.selectTemp.subscribe(function (st) {
            // console.log(posts);
            // this.dataSource = new MatTableDataSource(probes);
            // this.dataSource.sort = this.sort;
            console.log(st);
            _this.selectTag = st;
            // console.log(this.selectTag);
            // let posts: PostInfo[] = [];
            // posts.push(this.postList[0]);
            // this.postStore.dispatch(new fromActions.PostAction(posts));
            // console.log(this.selectTag);
        }, function (error) {
            console.log(error.message);
        });
    };
    RealCardPage.prototype.getItems = function (ev) {
        this.searchWord = ev.target.value;
        this.postList = __WEBPACK_IMPORTED_MODULE_6__app_commons_SearchUtil__["a" /* searchList */](ev.target.value, this.tempPostList);
    };
    RealCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-real-card',template:/*ion-inline-start:"D:\project\steemit\sibba\src\pages\real-card\real-card.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <div *ngIf="selectTag == \'all_all\'">\n\n                Card - Posts - all\n\n              </div>\n\n              <div *ngIf="selectTag != \'all_all\'">\n\n                Card - Posts - {{selectTag}}\n\n              </div>\n\n        \n\n              <ion-item>\n\n                <ion-label>Mode</ion-label>\n\n                <ion-select (ionChange)="optionSelected($event)">\n\n                  <ion-option value=\'list\'>list</ion-option>\n\n                  <ion-option value=\'card\'>card</ion-option>\n\n                  <div *ngIf="selectTag == \'kr-art\'">\n\n                    <ion-option value=\'image\'>image</ion-option>\n\n                  </div>\n\n                </ion-select>\n\n              </ion-item>\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-grid>\n\n        <ion-row *ngFor="let postInfo of postList">\n\n            <ion-col *ngFor="let post of postInfo.tagMap.get(selectTag)">\n\n                <ion-card class="ion-card-small">\n\n                    <div *ngIf="post.json_metadata.image != undefined ">\n\n                        <img src="https://steemitimages.com/200x0/{{post.json_metadata.image[0]}}">\n\n                    </div>\n\n\n\n                    <div class="card-title">\n\n                        <a href="https://steemit.com{{post.url}}" target="_blank">{{post.root_title}}</a>\n\n                    </div>\n\n                    <div class="card-subtitle">{{post.created}} Votes : {{post.net_votes}} , reply : {{post.children}}</div>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\project\steemit\sibba\src\pages\real-card\real-card.html"*/,
            styleUrls: ['/src/pages/real-card/real-card.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], RealCardPage);
    return RealCardPage;
}());

//# sourceMappingURL=real-card.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_reducers_reducers__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_card_card__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_real_card_real_card__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_real_card_real_card__["a" /* RealCardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__ng_reducers_reducers__["a" /* reducers */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_real_card_real_card__["a" /* RealCardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_reducers_post_reducer__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_reducers_author_reducer__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_reducers_getend_reducer__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_reducers_mode_reducer__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_actions_actions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_card_card__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_real_card_real_card__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// import * as steem from "steem";
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, postStore, authorStore, selectStore, getEndStore, modetore) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.postStore = postStore;
        this.authorStore = authorStore;
        this.selectStore = selectStore;
        this.getEndStore = getEndStore;
        this.modetore = modetore;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.selectTag = 'all_all';
        this.selectedPosts = new Array();
        this.postInfoList = postStore.select(__WEBPACK_IMPORTED_MODULE_7__ng_reducers_post_reducer__["a" /* getPosts */]);
        this.authorInfoList = authorStore.select(__WEBPACK_IMPORTED_MODULE_8__ng_reducers_author_reducer__["a" /* getAuthor */]);
        this.getEndFlag = this.getEndStore.select(__WEBPACK_IMPORTED_MODULE_9__ng_reducers_getend_reducer__["a" /* getGetEnd */]);
        MyApp_1.sauthorStore = this.authorStore;
        MyApp_1.spostStore = this.postStore;
        this.modeFlag = this.modetore.select(__WEBPACK_IMPORTED_MODULE_10__ng_reducers_mode_reducer__["a" /* getMode */]);
        this.initializeApp();
        // used for an example of ngFor and navigation
        // this.pages = [
        //   { title: 'Home', component: HomePage },
        //   { title: 'List', component: ListPage }
        // ];
    }
    MyApp_1 = MyApp;
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
        this.authorInfoList.subscribe(function (authors) {
            console.log(authors);
            // this.dataSource = new MatTableDataSource(probes);
            // this.dataSource.sort = this.sort;
        }, function (error) {
            console.log(error.message);
        });
        this.getEndFlag.subscribe(function (getEnd) {
            console.log("END - " + getEnd);
            if (getEnd) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]);
            }
        });
        this.modeFlag.subscribe(function (mode) {
            console.log("this mode - " + mode);
            if (mode == "image") {
                console.log("mode - image");
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_card_card__["a" /* CardPage */]);
            }
            else if (mode == "card") {
                console.log("mode - card");
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_real_card_real_card__["a" /* RealCardPage */]);
            }
            else if (mode == "list") {
                console.log("mode - list");
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]);
            }
        });
        this.postInfoList.subscribe(function (posts) {
            if (posts.length <= 0)
                return;
            // this.postList = posts;
            // console.log('----------------------');
            var tpages = new Array();
            var postOne = posts[0];
            for (var i = 0; i < postOne.tagList.length; ++i) {
                var tagName = postOne.tagList[i];
                tpages.push({ tag: tagName, count: postOne.tagMap.get(tagName.toString()).length, component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] });
            }
            _this.pages = tpages;
        }, function (error) {
            console.log(error.message);
        });
        // this.searchID('asinayo');
    };
    MyApp.prototype.goSearch = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        this.getEndStore.dispatch(new __WEBPACK_IMPORTED_MODULE_11__ng_actions_actions__["d" /* GetEndAction */](false));
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log(page.tag);
        this.selectStore.dispatch(new __WEBPACK_IMPORTED_MODULE_11__ng_actions_actions__["j" /* SelectAction */](page.tag));
        this.nav.setRoot(page.component);
    };
    MyApp.DATE = new Date().toISOString().split('.')[0];
    MyApp.GET_SIZE = 10;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = MyApp_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\project\steemit\sibba\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n      <ion-toolbar>\n\n          <button menuClose ion-item (click)="goSearch()">\n\n          Go Search</button>\n\n        </ion-toolbar>\n\n    <ion-toolbar>\n\n      <ion-title>Tags</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n\n\n          <div *ngIf="p.tag == \'all_all\'">\n\n              all - {{p.count}}\n\n            </div>\n\n            <div *ngIf="p.tag != \'all_all\'">\n\n                {{p.tag}} - {{p.count}}\n\n            </div>\n\n        \n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\project\steemit\sibba\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* Store */]])
    ], MyApp);
    return MyApp;
    var MyApp_1;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* unused harmony export getPostState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPosts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions__ = __webpack_require__(29);
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
        case __WEBPACK_IMPORTED_MODULE_1__actions_actions__["g" /* POSTS */]: {
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

/***/ 519:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* unused harmony export logger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_reducer__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__author_reducer__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_reducer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getend_reducer__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mode_reducer__ = __webpack_require__(327);





// import { environment } from '../../environments/environment';
var reducers = {
    postState: __WEBPACK_IMPORTED_MODULE_0__post_reducer__["b" /* reducer */],
    authorState: __WEBPACK_IMPORTED_MODULE_1__author_reducer__["b" /* reducer */],
    selectState: __WEBPACK_IMPORTED_MODULE_2__select_reducer__["b" /* reducer */],
    getEndState: __WEBPACK_IMPORTED_MODULE_3__getend_reducer__["b" /* reducer */],
    modeState: __WEBPACK_IMPORTED_MODULE_4__mode_reducer__["b" /* reducer */]
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

/***/ })

},[330]);
//# sourceMappingURL=main.js.map