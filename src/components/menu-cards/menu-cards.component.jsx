import React from 'react';
import MenuCard from '../menu-card/menu-card.component';
import { connect } from 'react-redux';
import { selectMenuData } from '../../redux/menu-cards/menu-cards.selectors';
import { createStructuredSelector } from 'reselect';

const MenuCards = ({ menuData }) => {
  return (
    <div className='row row-cols-1 row-cols-md-3'>
      {menuData.map(({ id, title, imageUrl }) => {
        return <MenuCard key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menuData: selectMenuData,
});

export default connect(mapStateToProps)(MenuCards);
