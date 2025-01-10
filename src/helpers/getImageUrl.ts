const getImageUrl = (index: number) => {
  const id = index + 1 < 10 ? `00${index + 1}` : `0${index + 1}`;

  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
};

export default getImageUrl;
