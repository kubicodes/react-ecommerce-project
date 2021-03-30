import ShopCardPreview from '../../shop-card-preview/shop-card-preview.component';
import { connect } from 'react-redux';
import { selectShopData } from '../../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const Shop = ({ shopData }) => {
  return (
    <div>
      {shopData.map(data => (
        <ShopCardPreview key={data.id} data={data} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopData,
});
export default connect(mapStateToProps)(Shop);
