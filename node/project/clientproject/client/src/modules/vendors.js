import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Gadget } from '../resources/data/vendor-object';
@inject(Vendor)

export class Vendors {
  constructor(vendor) {
    this.vendor = vendor;
    this.userObj = JSON.parse(sessionStorage.getItem('userObj'));
    this.statuses = ['Vendor', 'In Process', 'Completed'];
    this.isCheckedCompleted = true;
  }
  
  async attached() {
    await this.getVendors();
  }
  async getVendors() {
    await this.todo.getVendors(this.userObj._id);
    this.showForm = false;
  }

  updateVendor(vendor) {
    this.vendor.selectedVendor = vendor;
    this.saveVendor();
  }

  newVendor() {
    this.vendor.newVendor(this.userObj._id);
    this.showForm = true;
  }

  editVendor(vendor) {
    this.todo.selectedVendor = vendor;
    this.showForm = true;
  }

  async saveVendor() {
    await this.vendor.saveVendor()
    this.getVendors();
  }
  

  async deleteVendor(vendor) {
    await this.vendor.deleteVendor(vendor._id);
    this.getVendor();
    
  }

  Cancel() {
    this.showForm = false;
  }

  }