export class FilterVendorsValueConverter {
    toView(vendors, nofilterVendors) {
        if (!vendors) return;
        if (!nofilterVendors) return vendors;
        let filteredVendors = [];
        vendors.forEach(vendor => {
            if (vendor.status !== 'Completed') filteredVendors.push(vendor);
        });
        return filteredVendors;
    }
}
