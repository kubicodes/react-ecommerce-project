import React from 'react';
import ShopCard from '../shop-card/shop-card.component';

const ShopCardPreview = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <div className='row row-cols-1 row-cols-md-3'>
        {data.items
          .filter((data, index) => index < 3)
          .map(item => {
            return <ShopCard key={item.id} {...item} />;
          })}
      </div>
      <br />
    </div>
  );
};

export default ShopCardPreview;
