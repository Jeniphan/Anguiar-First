import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product, ProductResponse } from 'src/app/models/product.model';
import { NetwortService } from 'src/app/service/networt.service';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayColumns = ['image', 'name', 'price', 'stock', 'action'];

  dataSource = new MatTableDataSource<Product>();

  textSearch: any;

  @ViewChild(MatSort, { static: true }) sort: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor(private networkService: NetwortService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedData();
  }

  feedData() {
    this.networkService.getProducts().subscribe(
      data => {
        this.dataSource.data = data.map(item => {
          item.image = this.networkService.getProductImageURL(item.image)
          return item;
        })
      },
      error => {
        console.log(error)
      },
      () => {
        console.log("feed network done")
      }
    )

  }

  search(event: Event) {
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }
    console.log(typeof fliterValue);
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null!);
  }

  onClickDeleteProduct(product: ProductResponse) {

    Swal.fire({
      title: 'Are you sure?',
      text: `Delete Product ${product.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.networkService.deleteProduct(product.id).subscribe(
          data => {
            Swal.fire(
              'Deleted!',
              'Your file hae been deleted.',
              'success'
            )
            this.feedData()
          },
          error => {
            console.log(JSON.stringify(error.error.message));
          }
        )

      }
    })


  }
}
