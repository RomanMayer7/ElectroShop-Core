import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ItemService } from '../../services/item.service';
import { OrderService } from '../../services/order.service';
import { Product } from '../../entities/product.entity';
import { Item } from '../../entities/item.entity';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    constructor(public activatedRoute: ActivatedRoute,
        private router: Router,
        public productService: ProductService,
        public itemService: ItemService,
        public orderService: OrderService
    ) { }

    ngOnInit() {
        if (this.orderService.loginRequired)
        {
            //Force Login
            this.router.navigate(["login"])
        } 
  }
    errorMessage: string = ""

    onCheckout() {
        // TODO
        //alert("Doing checkout");
        this.orderService.checkout().
            subscribe(success => {
                if (success) {
                    this.router.navigate(["Shop"]);
                }
            }, err => this.errorMessage = "Failed to Save Order");
    }


}
