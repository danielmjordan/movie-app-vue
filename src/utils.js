export const saveStatePlugin = (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  });
};
