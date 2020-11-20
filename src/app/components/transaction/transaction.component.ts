import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../../view-models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})

export class TransactionComponent implements OnInit {
  page: number;
  per_page: number;
  total: number;
  total_items_almost: number;
  seller_id: number;
  transactionsList: Array<Transaction>;

  constructor(private transactionService: TransactionService, private route: ActivatedRoute, private router: Router) {
    this.page = 1;
    this.per_page = 10;
    this.total = 0;
    this.total_items_almost = 0;
    this.seller_id = 1;
    this.transactionsList = [];
    this.getUrlParamenters();
    this.retrieveTransactions();
  }

  ngOnInit(): void {
    //console.log("ttt="+ this.transactionsList);
  }

  getUrlParamenters() {
    this.page = parseInt(this.route.snapshot.queryParamMap.get('page') || "1");;
    this.per_page = parseInt(this.route.snapshot.queryParamMap.get('per_page') || "10");
    this.seller_id = parseInt(this.route.snapshot.queryParamMap.get('seller_id') || "1");
  }

  retrieveTransactions(): any {
    this.getUrlParamenters();
    this.transactionService.getUserTransaction(this.per_page, this.page, this.seller_id).subscribe(
      (data) => {
        this.transactionsList = data.data.transaction;
        this.total = data.data.paging.total;
        this.total_items_almost = this.total * this.per_page;
        //console.log("transactionsList="+ JSON.stringify(this.transactionsList));
        //console.log("total="+this.total)

      }, (error) => {
        console.log("error=" + error)
      })

  }

  handlePageChange(event: any) {
    this.page = event;
    console.log("page=" + this.page);
    console.log("per page=" + this.per_page);
    console.log("total=" + this.total)
    this.router.navigateByUrl(`/transaction?per_page=${this.per_page}&page=${this.page}&seller_id=1`)
    this.retrieveTransactions();
  }

}
