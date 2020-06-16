import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { Card, Tabs, Tab } from '@blueprintjs/core';
import NewScooter from '../newScooter';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTabId: 'Latest' };
  }

  handleTabChange = (id) => {
    this.setState({ selectedTabId: id });
  }

  render() {
    const { selectedTabId } = this.state;
    return (
      <Card elevation={0} className="home-product-list">
        <div style={{ width: '100%' }}><h2 style={{ margin: 0 }}>Scooters</h2></div>
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={selectedTabId}>
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Latest" title="Latest" panel={<NewScooter {...this.props} category="Latest" />} />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Popular" title="Popular" panel={<NewScooter {...this.props} category="Popular" />} />
          <Tab style={{ fontSize: 15, fontWeight: 'bold' }} id="Upcoming" title="Upcoming" panel={<NewScooter {...this.props} category="Upcoming" />} />
        </Tabs>
        <div style={{ width: '100%', textAlign: 'end', marginTop: 15 }}>
          <Link to="/more/scooters"><span style={{ fontWeight: 'bold' }}>More Scooters</span></Link>
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
