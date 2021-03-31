import React from 'react';
import CollectionItem from '../collection-item/colletion-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ data }) => {
  return (
    <div>
      <div className='collection-preview'>
        <h1 className='title'>{data.title.toUpperCase()}</h1>
        <div className='preview'>
          {data.items
            .filter((data, index) => index < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
      <br />
    </div>
  );
};

export default CollectionPreview;
