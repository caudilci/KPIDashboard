import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  constructor() { }

  getSalesData(){
    return {
      totalSales: 1000,
      lipstickSales: 243,
      eyelinerSales: 203,
      makeupPalletSales: 403,
      mascaraSales: 151,
    };

  }

  getCustomerData() {
    return {
      totalCustomers: 450,
      returningCustomers: 250,
      newCustomers: 200,
      multiItemCustomers: 350,
      singleItemCustomers: 100
    };
  }
}
