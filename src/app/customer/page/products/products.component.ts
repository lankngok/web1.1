import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list: any;
  listCate:any
  constructor(private productsevice: ProductService) { }

  ngOnInit(): void {
    this.productsevice.getAll().subscribe((data) => {
      this.list = data;
    })
    this.productsevice.getCate().subscribe((data)=>{
      this.listCate=data
    })
  }
  filter_pro(id:any){
    this.productsevice.filter_pro(id).subscribe((data)=>{
      this.list = data
    })
  }
}
