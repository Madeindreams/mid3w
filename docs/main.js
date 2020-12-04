(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/idecentralize/code/mid3w/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() {
        this.greeting = 'Work with us';
        this.winH = 0;
        this.navH = 50;
        this.totalMargin = 0;
        this.winH = window.innerHeight - this.navH;
    }
    onresize(event) {
        this.winH = event.target.innerHeight - this.navH;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HomeComponent_resize_HostBindingHandler($event) { return ctx.onresize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 1, consts: [[1, "board"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Some text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.greeting);
    } }, styles: [".board[_ngcontent-%COMP%]{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    position:relative;\n    background-color: hsla(0,0%,100%,.9);\n    color: #262832;\n    border-radius: 25px;\n    padding:10px;\n}\nh1[_ngcontent-%COMP%]{\n    text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmR7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwwJSwxMDAlLC45KTtcbiAgICBjb2xvcjogIzI2MjgzMjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6MTBweDtcbn1cbmgxe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, { onresize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "D8Mh":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavComponent {
    constructor() { }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 20, vars: 0, consts: [["id", "nav", 1, "navbar", "navbar-expand-md", "navbar-custom"], ["src", "assets/coin32x32.png", 1, "logo"], ["href", "#", 1, "navbar-brand"], ["src", "assets/brand.png", 1, "brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse", "navbar"], [1, "navbar-nav"], [1, "nav-item"], ["href", "./home", 1, "nav-link"], ["href", "#", 1, "nav-link"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%]:hover{\n    \n    color: hsla(0,0%,100%,.9);\n}\n\n.navbar-custom[_ngcontent-%COMP%] { \n    background-color: #262832;\n    height:50px;\n    width:100%;\n    position: fixed;\n    z-index:9999;\n    text-decoration: none;\n    color: hsla(0,0%,100%,.5);\n    padding:0px;\n}\n\n.logo[_ngcontent-%COMP%] {\n    float: left;\n    height: 45px;\n    width: 45px;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.brand[_ngcontent-%COMP%]{\n    height:32px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]{\n    font-size: 32px;\n    font-family: impact;\n    color: #262832;\n    margin-top: 0;\n    padding: 0;\n}\n\n.nav-link[_ngcontent-%COMP%]{\ncolor:#37B6FF;\nheight: 50px;\nfont-size: 32px;\nfont-family: Verdana;\npadding: 0;\nz-index: 99;\nmargin: 0;\n\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%]{\n    \n    margin-right:5px;\n    \n}\n\n.navbar-toggler[_ngcontent-%COMP%]{\n    padding:0px;\n}\n\n.navbar-expend-md[_ngcontent-%COMP%]{\n    padding:0px;\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n    background-image: url('/assets/toggler.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUNBO0FBQ0EsYUFBYTtBQUNiLFlBQVk7QUFDWixlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCLFVBQVU7QUFDVixXQUFXO0FBQ1gsU0FBUzs7QUFFVDs7QUFDQTs7SUFFSSxnQkFBZ0I7O0FBRXBCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVye1xuICAgIFxuICAgIGNvbG9yOiBoc2xhKDAsMCUsMTAwJSwuOSk7XG59XG5cbi5uYXZiYXItY3VzdG9tIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjgzMjtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4Ojk5OTk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBoc2xhKDAsMCUsMTAwJSwuNSk7XG4gICAgcGFkZGluZzowcHg7XG59XG5cbi5sb2dvIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5icmFuZHtcbiAgICBoZWlnaHQ6MzJweDtcbn1cblxuLm5hdmJhci1icmFuZHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC1mYW1pbHk6IGltcGFjdDtcbiAgICBjb2xvcjogIzI2MjgzMjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4ubmF2LWxpbmt7XG5jb2xvcjojMzdCNkZGO1xuaGVpZ2h0OiA1MHB4O1xuZm9udC1zaXplOiAzMnB4O1xuZm9udC1mYW1pbHk6IFZlcmRhbmE7XG5wYWRkaW5nOiAwO1xuei1pbmRleDogOTk7XG5tYXJnaW46IDA7XG5cbn1cbi5uYXZiYXItdG9nZ2xlci1pY29ue1xuICAgIFxuICAgIG1hcmdpbi1yaWdodDo1cHg7XG4gICAgXG59XG4ubmF2YmFyLXRvZ2dsZXJ7XG4gICAgcGFkZGluZzowcHg7XG59XG4ubmF2YmFyLWV4cGVuZC1tZHtcbiAgICBwYWRkaW5nOjBweDtcbn1cbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvdG9nZ2xlci5wbmcnKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() {
    }
    copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 34, vars: 0, consts: [["id", "footer"], [1, "tag"], [1, "social"], ["href", "mailto:admin@madeindreams.ca", "target", "_blank"], ["src", "./assets/social/email.png", "alt", "email link", 1, "social-logo"], ["href", "https://twitter.com/MadeInDreamsCA", "target", "_blank"], ["src", "./assets/social/twitter.png", "alt", "email link", 1, "social-logo"], ["href", "https://www.reddit.com/user/madeindreams", "target", "_blank"], ["src", "./assets/social/reddit.png", "alt", "email link", 1, "social-logo"], ["href", "https://github.com/Madeindreams", "target", "_blank"], ["src", "./assets/social/github.png", "alt", "email link", 1, "social-logo"], ["href", "https://discord.gg/fqzvNSG", "target", "_blank"], ["src", "./assets/social/discord.png", "alt", "email link", 1, "social-logo"], ["href", "https://t.me/joinchat/UCoPdU6my_tLr7bIrQgD3g", "target", "_blank"], ["src", "./assets/social/telegram.png", "alt", "email link", 1, "social-logo"], [1, "donatemsg"], [1, "donate"], [1, "crypto"], ["src", "./assets/crypto/bitcoin-btc-logo.png", "alt", "donate bitcoin", 3, "click"], [1, "tooltiptext"], ["src", "./assets/crypto/ethereum-eth-logo.png", "alt", "donate ethereum", 3, "click"], ["src", "./assets/crypto/tron-trx-logo.png", "alt", "donate trx", 3, "click"], [1, "ssl-logo"], ["href", "https://sectigo.com/trust-seal"], ["src", "https://sectigo.com/images/seals/sectigo_trust_seal_sm_2x.png", "alt", "Protected by Sectigo SSL", 1, "ssl-img"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Photo by Ian Dorion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Donations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_20_listener() { return ctx.copyMessage("13HhYDCPvtqv9pGTZbjVmZRVYEDzJ8MUsh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Click to copy address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_24_listener() { return ctx.copyMessage("0x6EC051607dd0ba7929844773291772D2E51646fD"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Click to copy address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_img_click_28_listener() { return ctx.copyMessage("TJwA97rx8p9bvuTnon8Qs9XMZ5wE4r161s"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Click to copy address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%]{\n    height:200px;\n    background-color: #262832;\n    position: relative;  \n    color:#CCCCCC; \n    text-align: left;\n    \n}\n.tag[_ngcontent-%COMP%]{\n    position:relative;\n    top:-25px;\n    height:1px;\n    color:#ffffff;\n    text-align:left;\n    margin-bottom: 3px;\n    margin-left: 5px;\n}\n.social[_ngcontent-%COMP%]{\n    \nfloat:right;\nmargin:5px;\nclear:both;\nwidth:400px;\n\n}\n.social-logo[_ngcontent-%COMP%]{\n    height:50px;\n    display:inline-block;\n    margin: 5px;  \n}\n.donate[_ngcontent-%COMP%]{\n    float:right;\n    clear:both;\n    margin:5px;\n    width:400px;\n\n}\n.crypto[_ngcontent-%COMP%]{\n    height:50px;\n\n    display:inline-block;\n    margin: 5px;   \n    cursor: pointer; \n}\n.donatemsg[_ngcontent-%COMP%]{\n    clear:both;\n    float:right;\n    width:400px;  \n    text-align: center;\n}\n.crypto[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: hidden;\n    width: 120px;\n    background-color: #555;\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n  \n    \n    position: relative;\n    z-index: 1;\n    bottom: 100%;\n    left: 0px;\n    margin-left: -145px;\n  \n    \n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n.crypto[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 80%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #555 transparent transparent transparent;\n  }\n.crypto[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n    visibility: visible;\n    opacity: 1;\n    \n  }\n.ssl-logo[_ngcontent-%COMP%]{\n      position:absolute;\n      left:0px;\n    display : inline-block;\n      bottom:0px;\n      width:400px;\n\n  }\n.ssl-img[_ngcontent-%COMP%] {\n      height:42px;\n      width:106px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFVBQVU7QUFDVixVQUFVO0FBQ1YsV0FBVzs7QUFFWDtBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFdBQVc7O0lBRVgsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjs7SUFFbEIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxtQkFBbUI7O0lBRW5CLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsc0RBQXNEO0VBQ3hEO0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTs7RUFFWjtBQUNBO01BQ0ksaUJBQWlCO01BQ2pCLFFBQVE7SUFDVixzQkFBc0I7TUFDcEIsVUFBVTtNQUNWLFdBQVc7O0VBRWY7QUFDQTtNQUNJLFdBQVc7TUFDWCxXQUFXO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXJ7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI4MzI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXG4gICAgY29sb3I6I0NDQ0NDQzsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBcbn1cbi50YWd7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdG9wOi0yNXB4O1xuICAgIGhlaWdodDoxcHg7XG4gICAgY29sb3I6I2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc29jaWFse1xuICAgIFxuZmxvYXQ6cmlnaHQ7XG5tYXJnaW46NXB4O1xuY2xlYXI6Ym90aDtcbndpZHRoOjQwMHB4O1xuXG59XG4uc29jaWFsLWxvZ297XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA1cHg7ICBcbn1cbi5kb25hdGV7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgY2xlYXI6Ym90aDtcbiAgICBtYXJnaW46NXB4O1xuICAgIHdpZHRoOjQwMHB4O1xuXG59XG4uY3J5cHRve1xuICAgIGhlaWdodDo1MHB4O1xuXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA1cHg7ICAgXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cbi5kb25hdGVtc2d7XG4gICAgY2xlYXI6Ym90aDtcbiAgICBmbG9hdDpyaWdodDtcbiAgICB3aWR0aDo0MDBweDsgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNyeXB0byAudG9vbHRpcHRleHQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCB0ZXh0ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTE0NXB4O1xuICBcbiAgICAvKiBGYWRlIGluIHRvb2x0aXAgKi9cbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgfVxuICAuY3J5cHRvIC50b29sdGlwdGV4dDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICM1NTUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmNyeXB0bzpob3ZlciAudG9vbHRpcHRleHQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBcbiAgfVxuICAuc3NsLWxvZ297XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIGxlZnQ6MHB4O1xuICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XG4gICAgICBib3R0b206MHB4O1xuICAgICAgd2lkdGg6NDAwcHg7XG5cbiAgfVxuICAuc3NsLWltZyB7XG4gICAgICBoZWlnaHQ6NDJweDtcbiAgICAgIHdpZHRoOjEwNnB4O1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/nav.component */ "D8Mh");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "height.px": a0 }; };
class AppComponent {
    constructor(router) {
        this.router = router;
        this.showOverlay = true;
        this.title = 'app';
        this.winH = 0;
        this.navH = 50;
        this.winH = window.innerHeight - this.navH;
        router.events.subscribe((event) => {
            this.navigationInterceptor(event);
        });
    }
    onresize(event) {
        this.winH = event.target.innerHeight - this.navH;
    }
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.showOverlay = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            this.showOverlay = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
            this.showOverlay = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.showOverlay = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) { return ctx.onresize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 4, consts: [["class", "my-overlay", 4, "ngIf"], ["id", "wrap", 1, "wrap"], [1, "container", 3, "ngStyle"], [1, "my-overlay"], ["aria-hidden", "true", 1, "fa", "fa-spinner", "fa-spin"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOverlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.winH));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".wrap[_ngcontent-%COMP%]{\n    background-image: url('heights.jpg');\n    background-size: 2000px;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-position: 0 -300px;\n    position:relative;\n    margin: 0;\n    overflow-y: hidden;\n    top:0px;\n    height:100%;\n    width: 100%;\n    text-align: center;\n    \n    margin:auto;\n}\n.container[_ngcontent-%COMP%]{\n   \n    position: relative;\n    top:50px;\n}\n.my-overlay[_ngcontent-%COMP%] {\n    left: 0 !important;\n    top: 0 !important;\n    z-index: 10000 !important;\n    width: 100% !important;\n    height: 100% !important;\n    position: fixed !important;\n    background-color: rgba(0,0,0,0.9) !important;\n    cursor: pointer !important;\n    visibility: visible !important;\n    transition: visibility 0s, opacity 0.4s linear !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: wait !important;\n}\n.my-overlay[_ngcontent-%COMP%]   i.fa.fa-spinner.fa-spin[_ngcontent-%COMP%], .spinner-big[_ngcontent-%COMP%] {\n    font-size: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjs7SUFFbEIsV0FBVztBQUNmO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIseURBQXlEO0lBQ3pELGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9oZWlnaHRzLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwMHB4O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMDBweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHRvcDowcHg7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIG1hcmdpbjphdXRvO1xufVxuLmNvbnRhaW5lcntcbiAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6NTBweDtcbn1cbi5teS1vdmVybGF5IHtcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNHMgbGluZWFyICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogd2FpdCAhaW1wb3J0YW50O1xufVxuLm15LW92ZXJsYXkgaS5mYS5mYS1zcGlubmVyLmZhLXNwaW4sIC5zcGlubmVyLWJpZyB7XG4gICAgZm9udC1zaXplOiAxMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onresize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav/nav.component */ "D8Mh");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/nav.component */ "D8Mh");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");







const routes = [
    { path: 'footer', component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"] },
    { path: 'nav', component: _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map