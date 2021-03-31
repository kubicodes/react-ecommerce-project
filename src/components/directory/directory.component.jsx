import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...props }) => {
        return <MenuItem key={id} {...props} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
