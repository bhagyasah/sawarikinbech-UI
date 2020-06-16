import React from 'react';
import { format } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';
import SocialMediaShare from '../../../common/socialMediaShare';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log('state value in show details page', this.props, variantId);
    const { news, match } = this.props;
    return (
      <div className="product-detail">
        <SocialMediaShare url={`https://sawarikinbech.com/#/news-details/${match.params.newsSlug}`} />
        <h1 style={{ margin: 0, marginTop: 0 }}>{news.header}</h1>
        {/* <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}> */}
        <AiOutlineCalendar color="red" />
        <span style={{ fontSize: 15, marginLeft: 5 }}>{format(news.timeStamp, 'MMM DD YYYY')}</span>
        <div dangerouslySetInnerHTML={{ __html: news.content }} style={{ width: '100%', overflow: 'hidden' }} />
      </div>
    );
  }
}

export default ProductDetails;
ProductDetails.propTypes = {
};
