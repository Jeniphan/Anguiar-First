import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayColumns = ['image', 'name', 'price', 'stock', 'action'];

  dataSource = new MatTableDataSource<Product>();

  constructor() { }

  ngOnInit(): void {
    this.feedData();
  }

  feedData() {
    const dummy: Product[] = [{
      name: "mac book",
      stock: 10,
      price: 900,
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"
    },
    {
      name: "mac book",
      stock: 9,
      price: 900,
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"
    },
    {
      name: "mac book",
      stock: 8,
      price: 900,
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"
    },
    {
      name: "mac book",
      stock: 10,
      price: 900,
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"
    },
    {
      name: "mac book",
      stock: 7,
      price: 900,
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"
    },
    ]
    this.dataSource.data = dummy
  }
}
