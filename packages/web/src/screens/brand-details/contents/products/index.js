import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';
import PriceRange from '../../../common/filters/priceRange';
import VehicleType from '../../../common/filters/vehicleType';
import FuelType from '../../../common/filters/fuelType';
import { filterHandler } from '../../../common/filters/filterActionHandler';
import EnqueryForm from '../../../common/EnquiryForm';
import ShowAll from '../../../common/filters/showAll';

const brandFilter = (props) => {
  const { match } = props;
  const { url, params, path } = match;
  switch (path) {
    case '/car/brand/:brandName':
      return (
        <div className="side-menu">
          <ShowAll {...props} />
          <PriceRange {...props} bike />
          <VehicleType {...props} car />
          <FuelType {...props} car />
        </div>
      );
    case '/bike/brand/:brandName':
      return (
        <div className="side-menu">
          <ShowAll {...props} />
          <PriceRange {...props} bike />
          <VehicleType {...props} bike />
          <FuelType {...props} bike />
        </div>
      );
    default:
      return null;
  }
};

brandFilter.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

const brandProductListProvider = (props, enquiryFormToggleHandler) => {
  const { match, main } = props;
  const { url, path, params } = match;
  const sbId = main.initialData.vehicleBrand.find((b) => (`${b.brandName.replace(/\s/g, '')}-${b.id}`.toLocaleLowerCase() === params.brandName)).id;
  // console.log('sbId', sbId, params);
  switch (path) {
    case '/car/brand/:brandName':
      return (
        <div className="brand-product-list">
          {main.initialData.vehicleModel ? filterHandler(props, main.initialData.vehicleModel.filter((c) => ((c.stypeId === 1) && (c.sbId === sbId)))).map((obj) => ProductCard(obj, enquiryFormToggleHandler)) : []}
        </div>
      );
    case '/bike/brand/:brandName':
      return (
        <div className="brand-product-list">
          {main.initialData.vehicleModel ? filterHandler(props, main.initialData.vehicleModel.filter((c) => ((c.stypeId === 2) && (c.sbId === sbId)))).map((obj) => ProductCard(obj, enquiryFormToggleHandler)) : []}
        </div>
      );
    default:
      return null;
  }
};

brandProductListProvider.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEnquiry: false };
  }

  enquiryFormToggleHandler = (id) => {
    console.log('Propduct id in form', id);
    const { updateFormValue } = this.props;
    this.setState({ showEnquiry: !this.state.showEnquiry });
    updateFormValue('addEnquiry', { pId: id });
  }

  render() {
    const { showEnquiry } = this.state;
    return (
      <div className="main-brand-product">
        {brandFilter(this.props)}
        {brandProductListProvider(this.props, this.enquiryFormToggleHandler)}
        <EnqueryForm schema="addEnquiry" onClose={this.enquiryFormToggleHandler} isOpen={showEnquiry} props={this.props} />
      </div>
    );
  }
}

export default Index;
Index.propTypes = {
  updateMainValue: PropTypes.func.isRequired,
};
