import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Tabs, Tab } from '@blueprintjs/core';
import NewCar from '../newCar';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTabId: 'Latest' };
  }

  handleTabChange = (id) => {
    console.log('tab id', id);
    this.setState({ selectedTabId: id });
  }

  render() {
    const { selectedTabId } = this.state;
    return (
      <Card elevation={0} className="home-product-list">
        <div style={{ width: '100%' }}><h2 style={{ margin: 0 }}>Cars</h2></div>
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Latest" title="Latest" panel={<NewCar {...this.props} category="Latest" />} />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Popular" title="Popular" panel={<NewCar {...this.props} category="Popular" />} />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Upcoming" title="Upcoming" panel={<NewCar {...this.props} category="Upcoming" />} />
        </Tabs>
        <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
          <Link to="/more/cars"><span style={{ fontWeight: 'bold' }}>More Cars</span></Link>
        </div>
      </Card>
    );
  }
}
export default ProductDetails;
ProductDetails.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
