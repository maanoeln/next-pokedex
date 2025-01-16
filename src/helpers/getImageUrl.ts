const getImageUrl = (id: number): string => {
  const parseID = () => {
    if (id < 10) {
      return `00${id}`;
    } else if (id >= 10 && id < 100) {
      return `0${id}`;
    } else if (id > 99) {
      return id;
    }
  };

  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${parseID()}.png`;
};

export default getImageUrl;
