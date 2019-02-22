const Prefix = '[ui-state]';

export const ActionTypes = {
  SET_SELECTED_MENU: `${Prefix} set selected menu`
};

export const setSelectedMenu = data => ({
  type: ActionTypes.SET_SELECTED_MENU,
  data
});
