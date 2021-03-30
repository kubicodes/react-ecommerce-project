import { createSelector } from 'reselect';

const selectMenuCards = state => state.menuCards;

export const selectMenuData = createSelector(
  [selectMenuCards],
  menuData => menuData.sections
);
