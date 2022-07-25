import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  list: any;
  constructor(private productsevice: ProductService) { }

  ngOnInit(): void {
    this.productsevice.getAll().subscribe((data) => {
      this.list = data;
    })
  }

}
