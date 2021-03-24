const MenuCard = ({ id, title, imageUrl }) => {
  return (
    <div className='col mb-4'>
      <div className='card h-100'>
        <img
          src={imageUrl}
          className='card-img-top'
          alt={title}
          style={{ maxWidth: '400px', height: '250px' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <a href='#' className='btn btn-dark'>
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
