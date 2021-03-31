import CollectionPreview from '../../collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { selectShopItems } from '../../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const Shop = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(data => (
        <CollectionPreview key={data.id} data={data} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});
export default connect(mapStateToProps)(Shop);
