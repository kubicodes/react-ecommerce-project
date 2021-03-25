import React, { useState } from 'react';
import SHOP_DATA from '../../../data/ShoppingData';
import ShopCardPreview from '../../shop-card-preview/shop-card-preview.component';

const Shop = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div>
      {shopData.map(data => (
        <ShopCardPreview key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Shop;
