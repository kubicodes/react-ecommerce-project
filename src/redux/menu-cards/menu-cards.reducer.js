const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'Hats',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/03/26/09/54/people-690547_960_720.jpg',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/03/09/09/39/shoes-1245920_960_720.jpg',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/04/01/17/00/mother-and-daughter-3281388_960_720.jpg',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/01/19/17/45/hiker-1149877_960_720.jpg',
    },
  ],
};

const menuCardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuCardsReducer;
