import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    //public search_term:any;
    constructor(itemService, productService, orderService, http) {
        this.itemService = itemService;
        this.productService = productService;
        this.orderService = orderService;
        this.http = http;
        this.items = [];
        this.total = 0;
    }
    remove(id) { }
    ;
    loadCart() { }
    ;
    ngOnInit() {
        // this.items=this.itemService.items;
        // this.total=this.itemService.total;
        this.remove = this.itemService.remove;
        this.loadCart = this.itemService.loadCart;
        //this.search_term=this.productService.term;
        this.loadCart();
    }
    logOut() {
        this.itemService.username = "";
        this.orderService.resetToken();
        this.itemService.loggedIn = false;
        console.log("LogOUt");
        this.http.get("/Account/Logout");
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map