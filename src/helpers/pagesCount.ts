const pagesCount = (totalCount: number, pageSize: number): number => {
  return Math.ceil(totalCount / pageSize);
};

export default pagesCount;
