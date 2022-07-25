import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: any
  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    this.productService.detail(id).subscribe((data) => {
      this.product = data
    })
    console.log(this.product)
    console.log(id)
  }

}
