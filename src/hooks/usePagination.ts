import pagesCount from '@/helpers/pagesCount';
import range from '@/helpers/pagesRange';
import { useMemo } from 'react';

interface IProps {
  totalCount: number;
  currentPage: number;
}

export default function usePagination({ totalCount, currentPage }: IProps) {
  const paginationRange = useMemo(() => {
    const siblingCount = 1;

    const totalPages = pagesCount(totalCount, 20);

    const totalPagesWithSiblings = siblingCount + 5;

    if (totalPagesWithSiblings >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [firstPageIndex, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
  }, [totalCount, currentPage]);

  return paginationRange;
}
