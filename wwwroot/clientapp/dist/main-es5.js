function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/app.component.html":
  /*!***********************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/app.component.html ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<app-header></app-header>\n\n\n\n<router-outlet ></router-outlet>\n\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/about/about.component.html":
  /*!******************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/about/about.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"container\">\n\n<div class=\"row\">\n\n    <ol class=\"col-12 breadcrumb\">\n\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/index']\">Home</a></li>\n\n      <li class=\"breadcrumb-item active\">About Us</li>\n\n    </ol>\n\n    <div class=\"col-12\">\n\n       <h3>About Us</h3>\n\n       <hr>\n\n    </div>\n\n</div>\n\n\n\n<div class=\"row row-content\">\n\n    <div class=\"col-sm-6 col-md-6\">\n\n        <h2>Our History</h2>\n         <h3>\n        <p>Started in 2014, ElectroShop quickly established itself as a online marketing icon per excellence. With its unique access to the world top electronical devices retailers and top quality of service.</p>\n\n        <p>ElectroShop traces its humble beginnings to <em>MediaBoom</em>, a successful chain started by our CEO, Mr. Peter O'Really,that featured fast shipments worldwide.</p>\n    </h3>\n    </div>\n\n    <div class=\"col-sm\">\n\n       <div class=\"card\">\n\n           <h3 class=\"card-header bg-primary text-white\">Facts At a Glance</h3>\n\n           <div class=\"card-body\">\n\n             <dl class=\"row\">\n\n                <dt class=\"col-6\">Started</dt>\n\n                <dt class=\"col-6\">7 Feb.2014</dt>\n\n                <dt class=\"col-6\">Major Stake Holder</dt>\n\n                <dd class=\"col-6\">ElectroZone Inc.</dd>\n\n                <dt class=\"col-6\">Last Year's Turnover</dt>\n\n                <dd class=\"col-6\">$1,350,375</dd>\n\n                <dt class=\"col-6\">Employees</dt>\n\n                <dd class=\"col-6\">250</dd>    \n\n             </dl>  \n\n           </div>\n\n       </div>\n\n    </div>\n\n</div>\n\n\n\n\n\n</div>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/cart/cart.component.html":
  /*!****************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/cart/cart.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"cart-section spad\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t<div class=\"cart-table\">\n\t\t\t\t\t\t<h3>Your Cart</h3>\n\t\t\t\t\t\t<div class=\"cart-table-warp\">\n\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th class=\"product-th\">Product</th>\n\t\t\t\t\t\t\t\t\t<th class=\"quy-th\">Quantity</th>\n                  <th class=\"total-th\">Price</th>\n                  <th class=\"total-th\"></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of itemService.items\">\n\t\t\t\t\t\t\t\t\t<td class=\"product-col\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"./clientapp/assets/images/{{item.product.photo}}\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pc-title\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>{{item.product.name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t<p>${{item.product.price}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n                  <td><h4>{{item.quantity}}</h4></td>\n\t\t\t\t\t\t\t\t\n                  <td class=\"total-col\"><h4>${{item.product.price}}</h4></td>\n                  <td align=\"center\">\n                      <a class=\"btn btn-warning\" (click)=\"itemService.remove(item.product.id)\">Remove</a>\n                  </td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"total-cost\">\n\t\t\t\t\t\t\t<h6>Total <span>${{itemService.total}}</span></h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 card-right\">\n\t\t\t\t\t<form class=\"promo-code-form\">\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter promo code\">\n\t\t\t\t\t\t<button>Submit</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<button (click)=\"onOrderCheckout()\" class=\"site-btn\">Proceed to checkout</button>\n\t\t\t\t\t<a href=\"\" class=\"site-btn sb-dark\">Continue shopping</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n<!-- <table border=\"1\">\n  <tr>\n    <th>Option</th>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Photo</th>\n    <th>Price</th>\n    <th>Quantity</th>\n    <th>Sub Total</th>\n  </tr>\n\n  <tr *ngFor=\"let item of itemService.items\">\n    <td align=\"center\">\n      <a (click)=\"itemService.remove(item.product.id)\">Remove</a>\n    </td>\n    <td>{{item.product.id}}</td>\n    <td>{{item.product.name}}</td>\n    <td>\n        <img src=\"../../assets/img/{{item.product.photo}}\">\n    </td>\n    <td>{{item.product.price}}</td>\n    <td>{{item.quantity}}</td>\n    <td>{{item.product.price * item.quantity}}</td>\n  </tr>\n\n  <tr>\n    <td colspan=\"6\" allign=\"right\">Total</td>\n    <td>{{itemService.total}}</td>\n  </tr>\n  \n</table> -->";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/checkout/checkout.component.html":
  /*!************************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/checkout/checkout.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n    <h3>Confirm Order</h3>\r\n    <table class=\"table table-bordered table-hover\">\r\n        <tr *ngFor=\"let item of itemService.items\">\r\n            <td><img src=\"./clientapp/assets/images/{{item.product.photo}}\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n            <td>{{ item.product.name }}</td>\r\n            <td>{{ item.product.category }}</td>\r\n            <td>{{ item.quantity }}</td>\r\n            <td>{{ item.product.price|currency:'USD':true }}</td>\r\n            <td>{{ (item.product.price * item.quantity)|currency:'USD':true }}</td>\r\n        </tr>\r\n    </table>\r\n    <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n        <table class=\"table table-condensed\">\r\n            <tr>\r\n                <td class=\"text-right\">Subtotal</td>\r\n                <td class=\"text-right\">{{ subtotal|currency:'USD':true }}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-right\">Shipping</td>\r\n                <td class=\"text-right\">$ 0.00</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-right\">Total:</td>\r\n                <td class=\"text-right\">{{ subtotal|currency:'USD':true }}</td>\r\n            </tr>\r\n        </table>\r\n        <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n        <a routerLink=\"/shop\" class=\"btn btn-info\">Cancel</a>\r\n    </div>\r\n\r\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/contact/contact.component.html":
  /*!**********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/contact/contact.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container contact\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"contact-info\">\n                <h1><i class=\"fa fa-envelope-o\"></i></h1>\n\t\t\t\t<h2>Contact Us</h2>\n\t\t\t\t<h4>We would love to hear from you !</h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-9\"> \n         <form class=\"contact-form\"  #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"fname\">First Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n                    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Enter First Name\" required maxlength=\"30\" minlength=\"2\" ngModel name=\"fname\" #fname=\"ngModel\">\n                  </div>\n                </div>\n                 \n            <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\" class=\"alert alert-danger\"><div *ngIf=\"fname.errors.required\">\n                  First Name is required.\n               </div>\n               <div *ngIf=\"fname.errors.minlength\">\n                  First Name must be at least 2 characters long.\n              </div>\n              <div *ngIf=\"fname.errors.maxlength\">\n                  First Name cannot be more than 30 characters long.\n              </div>\n            </div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"lname\">Last Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n                        <input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Enter Last Name\" required maxlength=\"30\" minlength=\"2\" ngModel name=\"lname\" #lname=\"ngModel\">\n\t\t\t\t  </div>\n                </div>\n                \n                <div *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\" class=\"alert alert-danger\"><div *ngIf=\"lname.errors.required\">\n                        Last Name is required.\n                     </div>\n                     <div *ngIf=\"lname.errors.minlength\">\n                        Last Name must be at least 2 characters long.\n                    </div>\n                    <div *ngIf=\"lname.errors.maxlength\">\n                        Last Name cannot be more than 30 characters long.\n                    </div>\n                  </div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n\t\t\t\t  <div class=\"col-sm-10\">           \n                  <input type=\"email\" id=\"email\" placeholder=\"Enter Your Email\" class=\"form-control\" name=\"email\" ngModel name=\"email\" required pattern=\"[^ @]*@[^ @]*\" emailDomain #email=\"ngModel\">\n                  </div>\n                </div>\n                \n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\"><div *ngIf=\"email.errors.required\">\n                          Email is required.\n                       </div>\n                  <div *ngIf=\"email.errors.pattern\">\n                      The email address must contain at least the @ character.\n                  </div>\n                  \n                </div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"comment\">Comment:</label>\n\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" id=\"comment\" name=\"comment\" ngModel name=\"comment\" required maxlength=\"30\" minlength=\"10\" #comment=\"ngModel\"></textarea>\n\t\t\t\t  </div>\n                </div>\n                \n                <div *ngIf=\"comment.invalid && (comment.dirty || comment.touched)\" class=\"alert alert-danger\"><div *ngIf=\"comment.errors.required\">\n                        Please Leave Some Comment.\n                     </div>\n                     <div *ngIf=\"comment.errors.minlength\">\n                       Comment must be at least 10 characters long.\n                    </div>\n                    <div *ngIf=\"comment.errors.maxlength\">\n                       Comment cannot be more than 30 characters long.\n                    </div>\n                  </div>\n\n\t\t\t\t<div class=\"form-group\">        \n\t\t\t\t  <div class=\"col-sm-offset-2 col-sm-10\">\n                        <button  type=\"submit\"  [disabled]=\"contactForm.invalid\">\n                           Submit\n                        </button>\n\t\t\t\t  </div>\n                </div>\n\n\t\t\t</form>\n\t\t</div>\n    </div>\n    <div  >\n            <hr>\n    </div>\n\n</div>\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/footer/footer.component.html":
  /*!********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/footer/footer.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\t\t<!-- FOOTER -->\n\t\t<footer id=\"footer\" >\n                <!-- top footer -->\n                <div class=\"section\">\n                    <!-- container -->\n                    <div class=\"container\">\n                        <!-- row -->\n                        <div class=\"row\">\n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">About Us</h3>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>\n                                    <ul class=\"footer-links\">\n                                        <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i>Ramat Gan</a></li>\n                                        <li><a href=\"#\"><i class=\"fa fa-phone\"></i>+021-95-51-84</a></li>\n                                        <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i>romanmayers@yahoo.com</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">Categories</h3>\n                                    <ul class=\"footer-links\">\n                                        <li><a href=\"#\">Hot deals</a></li>\n                                        <li><a href=\"#\">Laptops</a></li>\n                                        <li><a href=\"#\">Smartphones</a></li>\n                                        <li><a href=\"#\">Cameras</a></li>\n                                        <li><a href=\"#\">Accessories</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"clearfix visible-xs\"></div>\n                            \n                                       \n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">Information</h3>\n                                    <ul class=\"footer-links\">\n                                        <li><a [routerLink]=\"['/about']\"><i class=\"fa fa-info\"></i>About Us</a></li>\n                                        <li><a [routerLink]=\"['/contact']\"><i class=\"fa fa-address-book\"></i>Contact Us</a></li>\n                                        <li><a href=\"#\">Privacy Policy</a></li>\n                                        <li><a href=\"#\">Orders and Returns</a></li>\n                                        <li><a href=\"#\">Terms & Conditions</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n    \n                            <div class=\"col-md-3 col-xs-6\">\n                                <div class=\"footer\">\n                                    <h3 class=\"footer-title\">Service</h3>\n                                    <ul class=\"footer-links\">\n                                        <li><a [routerLink]=\"['/index']\">My Account</a></li>\n                                        <li><a [routerLink]=\"['/cart']\"><i class=\"fa fa-shopping-cart\"></i>View Cart</a></li>\n                                        <li><a href=\"#\">Wishlist</a></li>\n                                        <li><a href=\"#\">Track My Order</a></li>\n                                        <li><a href=\"#\">Help</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- /row -->\n                    </div>\n                    <!-- /container -->\n                </div>\n                <!-- /top footer -->\n    \n                <!-- bottom footer -->\n                <div id=\"bottom-footer\" class=\"section\">\n                    <div class=\"container\">\n                        <!-- row -->\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <ul class=\"footer-payments\">\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-visa\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-credit-card\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-paypal\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-mastercard\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-discover\"></i></a></li>\n                                    <li><a href=\"#\"><i class=\"fa fa-cc-amex\"></i></a></li>\n                                </ul>\n                                <span class=\"copyright\">\n                                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a> | WEB Programming by Roman Mayerson\n                                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n                                </span>\n                            </div>\n                        </div>\n                            <!-- /row -->\n                    </div>\n                    <!-- /container -->\n                </div>\n                <!-- /bottom footer -->\n            </footer>\n            <!-- /FOOTER -->\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/header/header.component.html":
  /*!********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/header/header.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\t\t<!-- HEADER -->\n\t\t<header>\n                <!-- TOP HEADER -->\n                <div id=\"top-header\">\n                    <div class=\"container \">\n                        <ul class=\"header-links pull-left\">\n                            <li><a href=\"#\"><i class=\"fa fa-phone\"></i> +021-95-51-84</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> romanmayers@yahoo.com</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i> Ramat Gan</a></li>\n                        </ul>\n                        <ul class=\"header-links  pull-right\">\n                            <li class=\"nav-link\"><a href=\"#\"><i class=\"fa fa-dollar\"></i> USD</a></li>\n                            <li class=\"nav-link\"><a href=\"#\"><i class=\"fa fa-user-o\"></i> My Account</a></li>\n                            <li class=\"nav-link\"><a [routerLink]=\"['/index']\"><i class=\"fa fa-home\"></i>Home</a></li>\n                            <li class=\"nav-link\"><a [routerLink]=\"['/about']\"><i class=\"fa fa-info\"></i>About</a></li>\n                            <li class=\"nav-link\"><a [routerLink]=\"['/contact']\"><i class=\"fa fa-address-book\"></i>Contact</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <!-- /TOP HEADER -->\n    \n                <!-- MAIN HEADER -->\n                <div id=\"header\">\n                    <!-- container -->\n                    <div class=\"container\">\n                        <!-- row -->\n                        <div class=\"row\">\n                            <!-- LOGO -->\n                            <div class=\"col-md-3\">\n                                <div class=\"header-logo\">\n                                    <a [routerLink]=\"['/index']\" class=\"logo\">\n                                        <img src=\"/clientapp/assets/images/logo.png\" alt=\"\">\n                                    </a>\n                                </div>\n                            </div>\n                            <!-- /LOGO -->\n    \n                            <!-- SEARCH BAR -->\n                            <div class=\"col-md-6\">\n                                <div class=\"header-search\">\n                                    <form id=\"filter\">\n                                        <select class=\"input-select\" name=\"category\" [(ngModel)]=\"productService.selectedCategory\">\n                                            <option value=\"All Categories\">All Categories</option>\n                                            <option value=\"laptop\">laptop</option>\n                                            <option value=\"tablet\">tablet</option>\n                                            <option value=\"smartphone\">smartphone</option>\n                                            <option value=\"camera\">camera</option>\n                                            <option value=\"headphones\">headphones</option>\n                                        </select>\n                                        <input class=\"input\" name='search' type=\"text\" [(ngModel)]=\"productService.term\" placeholder=\"Search here\">\n                                        <button class=\"search-btn\" [routerLink]=\"['/']\">Search</button>\n                                    </form>\n                                </div>\n                            </div>\n                            <!-- /SEARCH BAR -->\n    \n                            <!-- ACCOUNT -->\n                            <div class=\"col-md-3 clearfix\">\n                                <div class=\"header-ctn\">\n                                    <!-- Wishlist -->\n                                    <!-- <div>\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-heart-o\"></i>\n                                            <span>Your Wishlist</span>\n                                            <div class=\"qty\">2</div>\n                                        </a>\n                                    </div> -->\n                                    <!-- /Wishlist -->\n    \n                                    <!-- Cart -->\n    \n                                    <div class=\"dropdown show \">\n                                            <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\"aria-haspopup=\"true\" aria-expanded=\"false\">\n                             <i class=\"fa fa-shopping-cart\" style=\"font-size:3em;color:white;\"></i>\n                                                <span  style=\"color:white;\">Your Cart</span>\n                                                <div class=\"qty\">{{itemService.items.length}}</div>\n                                            </a>\n                                            <div class=\"cart-dropdown\">\n                                                <div  class=\"cart-list\">\n                             <div *ngFor=\"let item of itemService.items\"> \n                                                    <div class=\"product-widget\">\n                                                        <div class=\"product-img\">\n                                                            <img src=\"/clientapp/assets/images/{{item.product.photo}}\" alt=\"\">\n                                                        </div>\n                                                        <div class=\"product-body\">\n                                                            <h3 class=\"product-name\"><a href=\"#\">{{item.product.name}}</a></h3>\n                                                            <h4 class=\"product-price\"><span class=\"qty\">{{ item.quantity}}x</span>${{item.product.price * item.quantity}}</h4>\n                                                        </div>\n                                <button class=\"dropdown-item\"  (click)=\"itemService.remove(item.product.id)\" class=\"delete\"><i class=\"fa fa-close\"></i></button>\n                              </div>\n                              </div>\n                              \n                                                </div>\n                                                <div class=\"cart-summary\">\n                                                    <small> Item(s) selected</small>\n                                                    <h5>SUBTOTAL: {{itemService.total}}</h5>\n                                                </div>\n                                                <div class=\"cart-btns\">\n                                                    <a class=\"dropdown-item\" [routerLink]=\"['/cart']\">View Cart</a>\n                                                    <a href=\"#\">Checkout  <i class=\"fa fa-arrow-circle-right\"></i></a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    <!-- /Cart -->\n    \n                                    <!-- Menu Toogle -->\n                                    <!-- <div class=\"menu-toggle\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-bars\"></i>\n                                            <span>Menu</span>\n                                        </a>\n                                    </div> -->\n                                    <!-- /Menu Toogle -->\n                                </div>\n                            </div>\n                            <!-- /ACCOUNT -->\n                        </div>\n                        <!-- row -->\n                    </div>\n                    <!-- container -->\n                </div>\n                <!-- /MAIN HEADER -->\n            <!-- /HEADER -->\n                ";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/index/index.component.html":
  /*!******************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/index/index.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsIndexIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<!-- Products tab & slick -->\n<div class=\"container\">\n  <div class=\"row\"  >\n    <div class=\"col-md-2 col-sm-3\" *ngFor=\"let product of products |filter:productService.term:productService.selectedCategory| paginate: config\"  >\n      <!-- tab -->\n      <div  id=\"tab1\" class=\"tab-pane active\">\n        <div  class=\"products-slick\" data-nav=\"#slick-nav-1\">\n          <!-- product -->\n          <div class=\"product \">\n            <div class=\"product-img\" [routerLink]=\"['/product',{id:product.id}]\">\n              <img src=\"/clientapp/assets/images/{{product.photo}}\" alt=\"\" >\n              <div class=\"product-label\">\n                <span class=\"sale\">-30%</span>\n                <span class=\"new\">NEW</span>\n              </div>\n            </div>\n            <div class=\"product-body\">\n              <p class=\"product-category\">Category:{{product.category}}</p>\n              <h3 class=\"product-name\"><a [routerLink]=\"['/product',{id:product.id}]\">{{product.name}}</a></h3>\n              <h4 class=\"product-price\">{{product.price}}$ <del class=\"product-old-price\">{{productService.round(product.price*100/70)}}$</del></h4>\n\n              <span class=\"product-rating\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(product)))\">\n                  <i class=\"fa fa-star\"></i>\n              </span>\n\n              <div class=\"product-btns\">\n                <button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n                <button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n                <button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n              </div>\n            </div>\n            <div class=\"add-to-cart\">\n              <button (click)=\"itemService.add(product.id)\" class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n            </div>\n          </div>\n          <!-- /product -->\n        </div>\n        <div id=\"slick-nav-1\" class=\"products-slick-nav\"></div>\n      </div>\n      <!-- /tab -->\n    </div>\n  </div>\n  <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n</div>\n\n<!-- Products tab & slick -->\n\n\n\n\n\n\n\n<!-- <h3>Product List</h3>\n<table border=\"1\">\n  <tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Price</th>\n    <th>Photo</th>\n    <th>Buy</th>\n  </tr>\n\n  <tr *ngFor=\"let product of products\">\n    <td>{{product.id}}</td>\n    <td>{{product.name}}</td>\n    <td>{{product.price}}</td>\n    <td>\n        <img src=\"../../assets/img/{{product.photo}}\">\n    </td>\n    <td>\n        \n        <button (click)=\"itemService.add(product.id)\">Buy Now</button>\n    </td>\n  </tr>\n\n</table> -->\n";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/login/login.component.html":
  /*!******************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/login/login.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n                <a eouterLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "../node_modules/raw-loader/dist/cjs.js!./app/components/product/product.component.html":
  /*!**********************************************************************************************!*\
    !*** ../node_modules/raw-loader/dist/cjs.js!./app/components/product/product.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsAppComponentsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- SECTION -->\n<div class=\"section\">\n        <!-- container -->\n        <div class=\"container\">\n            <!-- row -->\n            <div class=\"row\">\n                <!-- Product main img -->\n                <div class=\"col-md-5 col-md-push-2\">\n                    <div id=\"product-main-img\">\n                        <!-- <div class=\"product-preview\">\n                            <img src=\"./images/product01.png\" alt=\"\">\n                        </div>\n\n                        <div class=\"product-preview\">\n                            <img src=\"./images/product03.png\" alt=\"\">\n                        </div> -->\n\n                        <div class=\"product-preview\">\n                            <img src=\"/clientapp/assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n\n                        <!-- <div class=\"product-preview\">\n                            <img src=\"./images/product08.png\" alt=\"\">\n                        </div> -->\n                    </div>\n                </div>\n                <!-- /Product main img -->\n\n                <!-- Product thumb imgs -->\n                <div class=\"col-md-2  col-md-pull-5\">\n                    <!--<div id=\"product-imgs\">\n                        <div class=\"product-preview\">\n                            <img src=\"./assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n\n                        <div class=\"product-preview\">\n                                <img src=\"./assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n\n                        <div class=\"product-preview\">\n                                <img src=\"./assets/images/{{selected_product.photo}}\" alt=\"\">\n                        </div>\n                    </div>-->\n                </div>\n                <!-- /Product thumb imgs -->\n\n                <!-- Product details -->\n                <div class=\"col-md-5\">\n                    <div class=\"product-details\">\n                        <h2 class=\"product-name\">{{selected_product.name}}</h2>\n                        <div>\n\n                            <div class=\"product-rating\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(selected_product)))\">\n                               <i class=\"fa fa-star\"></i>\n                            </div>\n                            <a class=\"review-link\" target=\"_self\" href=\"product;id={{id}}#tab1\">{{selected_product.reviews.length}} Review(s) | Add your review</a>\n                        </div>\n                        <div>\n                            <h3 class=\"product-price\">{{selected_product.price}} <del class=\"product-old-price\">{{productService.round(selected_product.price*100/70)}}$</del></h3>\n                            <span class=\"product-available\">In Stock</span>\n                        </div>\n                        <p>{{selected_product.description}}</p>\n\n                        <!-- <div class=\"product-options\">\n                            <label>\n                                Size\n                                <select class=\"input-select\">\n                                    <option value=\"0\">X</option>\n                                </select>\n                            </label>\n                            <label>\n                                Color\n                                <select class=\"input-select\">\n                                    <option value=\"0\">Red</option>\n                                </select>\n                            </label>\n                        </div> -->\n\n                        <div class=\"add-to-cart\">\n                            <div class=\"qty-label\">\n                                Qty\n                                <div class=\"input-number\">\n                                    <input type=\"number\">\n                                    <span class=\"qty-up\">+</span>\n                                    <span class=\"qty-down\">-</span>\n                                </div>\n                            </div>\n                            <button (click)=\"itemService.add(selected_product.id)\" class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n                        </div>\n\n                        <ul class=\"product-btns\">\n                            <li><a href=\"#\"><i class=\"fa fa-heart-o\"></i> add to wishlist</a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-exchange\"></i> add to compare</a></li>\n                        </ul>\n\n                        <ul class=\"product-links\">\n                            <li>Category:</li>\n                            <li><a href=\"#\">{{selected_product.category}}</a></li>\n                            <!-- <li><a href=\"#\">Accessories</a></li> -->\n                        </ul>\n\n                        <ul class=\"product-links\">\n                            <li>Share:</li>\n                            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-envelope\"></i></a></li>\n                        </ul>\n\n                    </div>\n                </div>\n                <!-- /Product details -->\n\n                <!-- Product tab -->\n                <div class=\"col-md-12\">\n                    <div id=\"product-tab\">\n                        <!-- product tab nav -->\n                        <ul class=\"tab-nav\">\n                            <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">Description</a></li>\n                            <li><a data-toggle=\"tab\" href=\"#tab2\">Details</a></li>\n                            <li><a data-toggle=\"tab\" href=\"#tab3\">Reviews ({{selected_product.reviews.length}})</a></li>\n                        </ul>\n                        <!-- /product tab nav -->\n                    </div>\n                        <!-- product tab content -->\n                        <div class=\"tab-content\">\n                            <!-- tab1  -->\n                            <div id=\"tab1\" class=\"tab-pane  active\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <p>{{selected_product.description}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /tab1  -->\n\n                            <!-- tab2  -->\n                            <div id=\"tab2\" class=\"tab-pane \">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <p>Lorem ipsum dolor sit amet,.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- /tab2  -->\n\n                            \n<!-- tab3  -->\n<div id=\"tab3\" class=\"tab-pane\">\n        <div class=\"row\">\n            <!-- Rating -->\n            <div class=\"col-md-3\">\n                <div id=\"rating\">\n                    <div class=\"rating-avg\">\n                        <span>{{productService.averageRating(selected_product)}}</span>\n                        <div class=\"rating-stars\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(selected_product)))\">\n                            <i class=\"fa fa-star\"></i>\n\n                        </div>\n                    </div>\n                    <ul class=\"rating\" *ngFor=\"let review of selected_product.reviews\">\n                        <li>\n                                <div class=\"rating-stars\" *ngFor=\"let i of [].constructor(review.rating)\">\n                                <i class=\"fa fa-star\"></i>\n                            </div>\n                            <div class=\"rating-progress\">\n                                <div [style.width.%]=\"review.rating*20\"></div>                             \n                            </div>\n                            <span class=\"sum\">{{review.rating}}</span>\n                        </li>\n                       \n                    </ul>\n                </div>\n            </div>\n            <!-- /Rating -->\n\n            <!-- Reviews -->\n            <div class=\"col-md-6\" >\n                <div id=\"reviews\">\n                    <ul class=\"reviews\" *ngFor=\"let review of selected_product.reviews\">\n                        <li>\n                            <div class=\"review-heading\">\n                                <h5 class=\"name\">{{review.reviewer_name}}</h5>\n                                <p class=\"date\">{{review.date}}</p>\n                                \n                                <span class=\"rating-stars\" *ngFor=\"let i of [].constructor(review.rating)\">\n                                    <i class=\"fa fa-star\"></i>\n                                </span>\n\n                            </div>\n                            <div class=\"review-body\">\n                                <p>{{review.content}}</p>\n                            </div>\n                        </li>\n                        \n                    </ul>\n\n                                <!-- <div class=\"rating-stars\" *ngFor=\"let review of selected_product.reviews.rating\">\n                                    <i class=\"fa fa-star-o empty\"></i>\n                                </div> -->\n\n                    <!-- <ul class=\"reviews-pagination\">\n                        <li class=\"active\">1</li>\n                        <li><a href=\"#\">2</a></li>\n                        <li><a href=\"#\">3</a></li>\n                        <li><a href=\"#\">4</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n                    </ul> -->\n                </div>\n            </div>\n            <!-- /Reviews -->\n\n            <!-- Review Form -->\n            <div class=\"col-md-3\">\n                <div id=\"review-form\">\n                    <form class=\"review-form\">\n                        <input class=\"input\" type=\"text\" placeholder=\"Your Name\">\n                        <input class=\"input\" type=\"email\" placeholder=\"Your Email\">\n                        <textarea class=\"input\" placeholder=\"Your Review\"></textarea>\n                        <div class=\"input-rating\">\n                            <span>Your Rating: </span>\n                            <div class=\"stars\">\n                                <input id=\"star5\" name=\"rating\" value=\"5\" type=\"radio\"><label for=\"star5\"></label>\n                                <input id=\"star4\" name=\"rating\" value=\"4\" type=\"radio\"><label for=\"star4\"></label>\n                                <input id=\"star3\" name=\"rating\" value=\"3\" type=\"radio\"><label for=\"star3\"></label>\n                                <input id=\"star2\" name=\"rating\" value=\"2\" type=\"radio\"><label for=\"star2\"></label>\n                                <input id=\"star1\" name=\"rating\" value=\"1\" type=\"radio\"><label for=\"star1\"></label>\n                            </div>\n                        </div>\n                        <button class=\"primary-btn\">Submit</button>\n                    </form>\n                </div>\n            </div>\n            <!-- /Review Form -->\n        </div>\n    </div>\n    <!-- /tab3  -->\n                       </div>\n                   \n                 </div>\n\n<h2>Products you might be interested</h2>\n\n<div class=\"col-md-2 col-sm-3\" *ngFor=\"let product of productService.search_results\"  >\n        <!-- tab -->\n        <div  id=\"tab1_\" class=\"tab-pane active\">\n          <div  class=\"products-slick\" data-nav=\"#slick-nav-1\">\n            <!-- product -->\n            <div class=\"product \">\n              <div class=\"product-img\" [routerLink]=\"['/product',{id:product.id}]\">\n                <img src=\"/clientapp/assets/images/{{product.photo}}\" alt=\"\" >\n                <div class=\"product-label\">\n                  <span class=\"sale\">-30%</span>\n                  <span class=\"new\">NEW</span>\n                </div>\n              </div>\n              <div class=\"product-body\">\n                <p class=\"product-category\">Category:{{product.category}}</p>\n                <h3 class=\"product-name\"><a [routerLink]=\"['/product',{id:product.id}]\">{{product.name}}</a></h3>\n                <h4 class=\"product-price\">{{product.price}}$ <del class=\"product-old-price\">{{productService.round(product.price*100/70)}}$</del></h4>\n  \n                <span class=\"product-rating\" *ngFor=\"let i of [].constructor(productService.round(productService.averageRating(product)))\">\n                    <i class=\"fa fa-star\"></i>\n                </span>\n  \n                <div class=\"product-btns\">\n                  <button class=\"add-to-wishlist\"><i class=\"fa fa-heart-o\"></i><span class=\"tooltipp\">add to wishlist</span></button>\n                  <button class=\"add-to-compare\"><i class=\"fa fa-exchange\"></i><span class=\"tooltipp\">add to compare</span></button>\n                  <button class=\"quick-view\"><i class=\"fa fa-eye\"></i><span class=\"tooltipp\">quick view</span></button>\n                </div>\n              </div>\n              <div class=\"add-to-cart\">\n                <button (click)=\"itemService.add(product.id)\" class=\"add-to-cart-btn\"><i class=\"fa fa-shopping-cart\"></i> add to cart</button>\n              </div>\n            </div>\n            <!-- /product -->\n          </div>\n          <div id=\"slick-nav-1_\" class=\"products-slick-nav\"></div>\n        </div>\n        <!-- /tab -->\n      </div>\n\n\n\n</div>\n</div>\n</div>";
    /***/
  },

  /***/
  "../node_modules/tslib/tslib.es6.js":
  /*!******************************************!*\
    !*** ../node_modules/tslib/tslib.es6.js ***!
    \******************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./app/app-routing.module.ts":
  /*!***********************************!*\
    !*** ./app/app-routing.module.ts ***!
    \***********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function appAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/index/index.component */
    "./app/components/index/index.component.ts");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./app/components/product/product.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./app/components/about/about.component.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./app/components/login/login.component.ts");

    var routes = [{
      path: '',
      component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    }, {
      path: 'product',
      component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]
    }, {
      path: 'cart',
      component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'checkout',
      component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./app/app.component.scss":
  /*!********************************!*\
    !*** ./app/app.component.scss ***!
    \********************************/

  /*! exports provided: default */

  /***/
  function appAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./app/app.component.ts":
  /*!******************************!*\
    !*** ./app/app.component.ts ***!
    \******************************/

  /*! exports provided: AppComponent */

  /***/
  function appAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ElectroShop';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./app/app.module.ts":
  /*!***************************!*\
    !*** ./app/app.module.ts ***!
    \***************************/

  /*! exports provided: AppModule */

  /***/
  function appAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-pagination */
    "../node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./app/app.component.ts");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./app/components/product/product.component.ts");
    /* harmony import */


    var _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/index/index.component */
    "./app/components/index/index.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./app/components/about/about.component.ts");
    /* harmony import */


    var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes/filter.pipe */
    "./app/pipes/filter.pipe.ts");
    /* harmony import */


    var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/checkout/checkout.component */
    "./app/components/checkout/checkout.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./app/components/login/login.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"], _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./app/components/about/about.component.scss":
  /*!***************************************************!*\
    !*** ./app/components/about/about.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./app/components/about/about.component.ts":
  /*!*************************************************!*\
    !*** ./app/components/about/about.component.ts ***!
    \*************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function appComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./app/components/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./app/components/cart/cart.component.scss":
  /*!*************************************************!*\
    !*** ./app/components/cart/cart.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsCartCartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./app/components/cart/cart.component.ts":
  /*!***********************************************!*\
    !*** ./app/components/cart/cart.component.ts ***!
    \***********************************************/

  /*! exports provided: CartComponent */

  /***/
  function appComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/order.service */
    "./app/services/order.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(activatedRoute, router, productService, itemService, order_service) {
        _classCallCheck(this, CartComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.itemService = itemService;
        this.order_service = order_service;
        this.items = [];
        this.total = 0;
      }

      _createClass(CartComponent, [{
        key: "remove",
        value: function remove(id) {}
      }, {
        key: "loadCart",
        value: function loadCart() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.items=this.itemService.items;
          // this.total=this.itemService.total;
          this.remove = this.itemService.remove;
          this.loadCart = this.itemService.loadCart;
          this.activatedRoute.params.subscribe(function (params) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var id, item, cart, _cart, index, i, _item, _item2;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      id = params['id'];

                      if (!id) {
                        _context.next = 42;
                        break;
                      }

                      _context.next = 4;
                      return this.productService.find(id);

                    case 4:
                      _context.t0 = _context.sent;
                      item = {
                        product: _context.t0,
                        quantity: 1
                      };

                      if (!(localStorage.getItem('cart') == null)) {
                        _context.next = 13;
                        break;
                      }

                      cart = [];
                      cart.push(JSON.stringify(item));
                      _context.next = 11;
                      return localStorage.setItem('cart', JSON.stringify(cart));

                    case 11:
                      _context.next = 39;
                      break;

                    case 13:
                      _context.t1 = JSON;
                      _context.next = 16;
                      return localStorage.getItem('cart');

                    case 16:
                      _context.t2 = _context.sent;
                      _cart = _context.t1.parse.call(_context.t1, _context.t2);
                      index = -1;
                      i = 0;

                    case 20:
                      if (!(i < _cart.length)) {
                        _context.next = 28;
                        break;
                      }

                      _item = JSON.parse(_cart[i]);

                      if (!(_item.product.id == id)) {
                        _context.next = 25;
                        break;
                      }

                      index = i;
                      return _context.abrupt("break", 28);

                    case 25:
                      i++;
                      _context.next = 20;
                      break;

                    case 28:
                      if (!(index == -1)) {
                        _context.next = 34;
                        break;
                      }

                      _cart.push(JSON.stringify(item));

                      _context.next = 32;
                      return localStorage.setItem('cart', JSON.stringify(_cart));

                    case 32:
                      _context.next = 39;
                      break;

                    case 34:
                      _item2 = JSON.parse(_cart[index]);
                      _item2.quantity += 1;
                      _cart[index] = JSON.stringify(_item2);
                      _context.next = 39;
                      return localStorage.setItem("cart", JSON.stringify(_cart));

                    case 39:
                      this.loadCart();
                      _context.next = 43;
                      break;

                    case 42:
                      this.loadCart();

                    case 43:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "onOrderCheckout",
        value: function onOrderCheckout() {
          if (this.order_service.loginRequired) {
            //Force Login
            this.router.navigate(["login"]);
          } else {
            //Go to checkout
            this.router.navigate(["checkout"]);
          }
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/cart/cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.scss */
      "./app/components/cart/cart.component.scss"))["default"]]
    })], CartComponent);
    /***/
  },

  /***/
  "./app/components/checkout/checkout.component.scss":
  /*!*********************************************************!*\
    !*** ./app/components/checkout/checkout.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsCheckoutCheckoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".checkout-thumb {\n  max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jaGVja291dC9DOlxcVXNlcnNcXFJvbWFuIE1heWVyc29uXFxzb3VyY2VcXHJlcG9zXFxFbGVjdHJvU2hvcC1Db3JlL0NsaWVudEFwcFxcYXBwXFxjb21wb25lbnRzXFxjaGVja291dFxcY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja291dC10aHVtYiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcbiIsIi5jaGVja291dC10aHVtYiB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./app/components/checkout/checkout.component.ts":
  /*!*******************************************************!*\
    !*** ./app/components/checkout/checkout.component.ts ***!
    \*******************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function appComponentsCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "../node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/order.service */
    "./app/services/order.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");

    var CheckoutComponent =
    /*#__PURE__*/
    function () {
      function CheckoutComponent(activatedRoute, router, productService, itemService, orderService) {
        _classCallCheck(this, CheckoutComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.itemService = itemService;
        this.orderService = orderService;
        this.errorMessage = "";
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCheckout",
        value: function onCheckout() {
          var _this2 = this;

          // TODO
          //alert("Doing checkout");
          this.orderService.checkout().subscribe(function (success) {
            if (success) {
              _this2.router.navigate(["Shop"]);
            }
          }, function (err) {
            return _this2.errorMessage = "Failed to Save Order";
          });
        }
      }, {
        key: "subtotal",
        get: function get() {
          return lodash__WEBPACK_IMPORTED_MODULE_3__["sum"](lodash__WEBPACK_IMPORTED_MODULE_3__["map"](this.itemService, function (i) {
            return i.unitPrice * i.quantity;
          }));
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
      }, {
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
      }];
    };

    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/checkout/checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.component.scss */
      "./app/components/checkout/checkout.component.scss"))["default"]]
    })], CheckoutComponent);
    /***/
  },

  /***/
  "./app/components/contact/contact.component.scss":
  /*!*******************************************************!*\
    !*** ./app/components/contact/contact.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./app/components/contact/contact.component.ts":
  /*!*****************************************************!*\
    !*** ./app/components/contact/contact.component.ts ***!
    \*****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function appComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          alert("Form Submited");
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./app/components/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./app/components/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./app/components/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./app/components/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./app/components/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function appComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./app/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./app/components/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./app/components/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./app/components/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./app/components/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function appComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      //public search_term:any;
      function HeaderComponent(itemService, productService) {
        _classCallCheck(this, HeaderComponent);

        this.itemService = itemService;
        this.productService = productService;
        this.items = [];
        this.total = 0;
      }

      _createClass(HeaderComponent, [{
        key: "remove",
        value: function remove(id) {}
      }, {
        key: "loadCart",
        value: function loadCart() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.items=this.itemService.items;
          // this.total=this.itemService.total;
          this.remove = this.itemService.remove;
          this.loadCart = this.itemService.loadCart; //this.search_term=this.productService.term;

          this.loadCart();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./app/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./app/components/index/index.component.scss":
  /*!***************************************************!*\
    !*** ./app/components/index/index.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsIndexIndexComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./app/components/index/index.component.ts":
  /*!*************************************************!*\
    !*** ./app/components/index/index.component.ts ***!
    \*************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function appComponentsIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pipes/filter.pipe */
    "./app/pipes/filter.pipe.ts");

    var IndexComponent =
    /*#__PURE__*/
    function () {
      function IndexComponent(productService, itemService) {
        _classCallCheck(this, IndexComponent);

        //configs for pagination module
        this.productService = productService;
        this.itemService = itemService;
        this.config = {
          itemsPerPage: 6,
          currentPage: 1,
          totalItems: this.itemService.items.length
        };
      }

      _createClass(IndexComponent, [{
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.productService.findAll();

                  case 2:
                    this.products = _context2.sent;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ctorParameters = function () {
      return [{
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }];
    };

    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/index/index.component.html"))["default"],
      providers: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./index.component.scss */
      "./app/components/index/index.component.scss"))["default"]]
    })], IndexComponent);
    /***/
  },

  /***/
  "./app/components/login/login.component.scss":
  /*!***************************************************!*\
    !*** ./app/components/login/login.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./app/components/login/login.component.ts":
  /*!*************************************************!*\
    !*** ./app/components/login/login.component.ts ***!
    \*************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function appComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/order.service */
    "./app/services/order.service.ts");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(oservice, iservice, router) {
        _classCallCheck(this, LoginComponent);

        this.oservice = oservice;
        this.iservice = iservice;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
          username: "",
          password: ""
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this3 = this;

          //Call the Login Service
          // alert(this.creds.username);
          this.oservice.login(this.creds).subscribe(function (success) {
            if (success) {
              if (_this3.iservice.items.length == 0) {
                _this3.router.navigate(["shop"]);
              } else {
                _this3.router.navigate(["checkout"]);
              }
            }
          }, function (err) {
            return _this3.errorMessage = "Failed to login";
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./app/components/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./app/components/product/product.component.scss":
  /*!*******************************************************!*\
    !*** ./app/components/product/product.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function appComponentsProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./app/components/product/product.component.ts":
  /*!*****************************************************!*\
    !*** ./app/components/product/product.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function appComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product.service */
    "./app/services/product.service.ts");
    /* harmony import */


    var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../node_modules/@angular/router/fesm2015/router.js");

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(productService, itemService, activatedRoute) {
        _classCallCheck(this, ProductComponent);

        this.productService = productService;
        this.itemService = itemService;
        this.activatedRoute = activatedRoute;
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.productService.findAll();

                  case 2:
                    this.products = _context4.sent;
                    this.activatedRoute.params.subscribe(function (params) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                this.id = params['id'];

                                if (!this.id) {
                                  _context3.next = 5;
                                  break;
                                }

                                _context3.next = 4;
                                return this.productService.find(this.id);

                              case 4:
                                this.selected_product = _context3.sent;

                              case 5:
                                ;
                                this.productService.getProductsByCategory(this.selected_product.category); //get all product with same 'category' as selected product 

                              case 7:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "../node_modules/raw-loader/dist/cjs.js!./app/components/product/product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.scss */
      "./app/components/product/product.component.scss"))["default"]]
    })], ProductComponent);
    /***/
  },

  /***/
  "./app/entities/order.entity.ts":
  /*!**************************************!*\
    !*** ./app/entities/order.entity.ts ***!
    \**************************************/

  /*! exports provided: Order */

  /***/
  function appEntitiesOrderEntityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Order", function () {
      return Order;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");

    var Order = function Order() {
      _classCallCheck(this, Order);
    };
    /***/

  },

  /***/
  "./app/pipes/filter.pipe.ts":
  /*!**********************************!*\
    !*** ./app/pipes/filter.pipe.ts ***!
    \**********************************/

  /*! exports provided: FilterPipe */

  /***/
  function appPipesFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");

    var FilterPipe =
    /*#__PURE__*/
    function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(products, term, selected_category) {
          var categorized_products; //filter by category

          if (selected_category === "All Categories") categorized_products = products;else {
            categorized_products = products.filter(function (product) {
              return product.category === selected_category;
            });
          } //check if search term is undefined

          if (term === undefined) return categorized_products; //return all products
          //else filter by name

          return categorized_products.filter(function (product) {
            return product.name.toLowerCase().includes(term.toLowerCase());
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filter'
    })], FilterPipe);
    /***/
  },

  /***/
  "./app/services/item.service.ts":
  /*!**************************************!*\
    !*** ./app/services/item.service.ts ***!
    \**************************************/

  /*! exports provided: ItemService */

  /***/
  function appServicesItemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemService", function () {
      return ItemService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product.service */
    "./app/services/product.service.ts");

    var ItemService =
    /*#__PURE__*/
    function () {
      function ItemService(productService) {
        _classCallCheck(this, ItemService);

        this.productService = productService;
        this.items = [];
        this.total = 0;
      }

      _createClass(ItemService, [{
        key: "loadCart",
        value: function loadCart() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var cart, i, item;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.total = 0;
                    this.items = [];
                    _context5.next = 4;
                    return JSON.parse(localStorage.getItem('cart'));

                  case 4:
                    cart = _context5.sent;

                    for (i = 0; i < cart.length; i++) {
                      item = JSON.parse(cart[i]);
                      this.items.push({
                        product: item.product,
                        quantity: item.quantity
                      });
                      this.total += item.product.price * item.quantity;
                    }

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "add",
        value: function add(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var item, cart, _cart2, index, i, _item3, _item4;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.productService.find(id);

                  case 2:
                    _context6.t0 = _context6.sent;
                    item = {
                      product: _context6.t0,
                      quantity: 1
                    };
                    _context6.next = 6;
                    return localStorage.getItem('cart');

                  case 6:
                    _context6.t1 = _context6.sent;

                    if (!(_context6.t1 == null)) {
                      _context6.next = 14;
                      break;
                    }

                    cart = [];
                    cart.push(JSON.stringify(item));
                    _context6.next = 12;
                    return localStorage.setItem('cart', JSON.stringify(cart));

                  case 12:
                    _context6.next = 40;
                    break;

                  case 14:
                    _context6.t2 = JSON;
                    _context6.next = 17;
                    return localStorage.getItem('cart');

                  case 17:
                    _context6.t3 = _context6.sent;
                    _cart2 = _context6.t2.parse.call(_context6.t2, _context6.t3);
                    index = -1;
                    i = 0;

                  case 21:
                    if (!(i < _cart2.length)) {
                      _context6.next = 29;
                      break;
                    }

                    _item3 = JSON.parse(_cart2[i]);

                    if (!(_item3.product.id == id)) {
                      _context6.next = 26;
                      break;
                    }

                    index = i;
                    return _context6.abrupt("break", 29);

                  case 26:
                    i++;
                    _context6.next = 21;
                    break;

                  case 29:
                    if (!(index == -1)) {
                      _context6.next = 35;
                      break;
                    }

                    _cart2.push(JSON.stringify(item));

                    _context6.next = 33;
                    return localStorage.setItem('cart', JSON.stringify(_cart2));

                  case 33:
                    _context6.next = 40;
                    break;

                  case 35:
                    _item4 = JSON.parse(_cart2[index]);
                    _item4.quantity += 1;
                    _cart2[index] = JSON.stringify(_item4);
                    _context6.next = 40;
                    return localStorage.setItem("cart", JSON.stringify(_cart2));

                  case 40:
                    this.loadCart();

                  case 41:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "remove",
        value: function remove(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var cart, i, item;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return JSON.parse(localStorage.getItem('cart'));

                  case 2:
                    cart = _context7.sent;
                    i = 0;

                  case 4:
                    if (!(i < cart.length)) {
                      _context7.next = 12;
                      break;
                    }

                    item = JSON.parse(cart[i]);

                    if (!(item.product.id == id)) {
                      _context7.next = 9;
                      break;
                    }

                    cart.splice(i, 1);
                    return _context7.abrupt("break", 12);

                  case 9:
                    i++;
                    _context7.next = 4;
                    break;

                  case 12:
                    _context7.next = 14;
                    return localStorage.setItem("cart", JSON.stringify(cart));

                  case 14:
                    _context7.next = 16;
                    return this.loadCart();

                  case 16:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return ItemService;
    }();

    ItemService.ctorParameters = function () {
      return [{
        type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ItemService);
    /***/
  },

  /***/
  "./app/services/order.service.ts":
  /*!***************************************!*\
    !*** ./app/services/order.service.ts ***!
    \***************************************/

  /*! exports provided: OrderService */

  /***/
  function appServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./item.service */
    "./app/services/item.service.ts");
    /* harmony import */


    var _entities_order_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../entities/order.entity */
    "./app/entities/order.entity.ts");

    var OrderService =
    /*#__PURE__*/
    function () {
      function OrderService(http, itemService) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.itemService = itemService;
        this.token = "";
      }

      _createClass(OrderService, [{
        key: "prepareNewOrder",
        value: function prepareNewOrder() {
          this.order = new _entities_order_entity__WEBPACK_IMPORTED_MODULE_5__["Order"]();
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

          var yyyy = today.getFullYear();
          this.order.orderNumber = "ORD-" + mm + '-' + dd + '-' + yyyy;
          this.order.orderDate = mm + '-' + dd + '-' + yyyy;
          this.order.items = this.itemService.items;
        }
      }, {
        key: "checkout",
        value: function checkout() {
          var _this5 = this;

          this.prepareNewOrder();
          return this.http.post("api/Orders", this.order, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.token).set('Content-Type', 'application/json; charset=utf-8')
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this5.order = new _entities_order_entity__WEBPACK_IMPORTED_MODULE_5__["Order"]();
            return true;
          }));
        }
      }, {
        key: "login",
        value: function login(creds) {
          var _this6 = this;

          return this.http.post("/Account/CreateToken", creds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this6.token = data.token;
            _this6.tokenExpiration = data.expiration; //this.currentUser = creds.username;

            return true;
          }));
        }
      }, {
        key: "loginRequired",
        get: function get() {
          return this.token.length == 0 || this.tokenExpiration > new Date();
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"]
      }];
    };

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], OrderService);
    /***/
  },

  /***/
  "./app/services/product.service.ts":
  /*!*****************************************!*\
    !*** ./app/services/product.service.ts ***!
    \*****************************************/

  /*! exports provided: ProductService */

  /***/
  function appServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js"); //import { map } from "rxjs/operators";
    //import { Observable } from "rxjs";
    //import { Review } from '../entities/review.entity';


    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.products = [];
        this.selectedCategory = "All Categories";
      }

      _createClass(ProductService, [{
        key: "loadProducts",
        value: function loadProducts() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.http.get("/api/products").toPromise();

                  case 2:
                    this.products = _context8.sent;

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.loadProducts();

                  case 2:
                    return _context9.abrupt("return", this.products);

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        } //loadProducts(): Observable<boolean> {
        //    console.log("got here")
        //    return this.http.get("/api/products")
        //        .pipe(
        //            map((data: any[]) => {
        //                this.products = data;
        //                return true;
        //            })
        //        );
        //}

      }, {
        key: "find",
        value: function find(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.getSelectedIndex(id);

                  case 2:
                    _context10.t0 = _context10.sent;
                    return _context10.abrupt("return", this.products[_context10.t0]);

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getProductsByCategory",
        value: function getProductsByCategory(ctg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var i;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.search_results = [];

                    for (i = 0; i < this.products.length; i++) {
                      if (this.products[i].category == ctg) {
                        this.search_results.push(this.products[i]);
                      }
                    }

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "getSelectedIndex",
        value: function getSelectedIndex(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var i;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    i = 0;

                  case 1:
                    if (!(i < this.products.length)) {
                      _context12.next = 7;
                      break;
                    }

                    if (!(this.products[i].id == id)) {
                      _context12.next = 4;
                      break;
                    }

                    return _context12.abrupt("return", i);

                  case 4:
                    i++;
                    _context12.next = 1;
                    break;

                  case 7:
                    return _context12.abrupt("return", -1);

                  case 8:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "averageRating",
        value: function averageRating(p) {
          if (p.reviews.length) {
            var total = 0;

            for (var i = 0; i < p.reviews.length; i++) {
              total += p.reviews[i].rating;
            }

            return total / p.reviews.length;
          } else return 0;
        }
      }, {
        key: "round",
        value: function round(n) {
          return Math.floor(n);
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./environments/environment.ts":
  /*!*************************************!*\
    !*** ./environments/environment.ts ***!
    \*************************************/

  /*! exports provided: environment */

  /***/
  function environmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./main.ts":
  /*!*****************!*\
    !*** ./main.ts ***!
    \*****************/

  /*! no exports provided */

  /***/
  function mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***********************!*\
    !*** multi ./main.ts ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Roman Mayerson\source\repos\ElectroShop-Core\ClientApp\main.ts */
    "./main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map