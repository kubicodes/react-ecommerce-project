import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import selectShopItems from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(data => (
      <CollectionPreview key={data.id} data={data} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(CollectionsOverview);
