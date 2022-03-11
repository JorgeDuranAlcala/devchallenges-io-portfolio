import {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import type { MouseEvent } from "react";
import { Button, Flex } from "../../atoms";
import { createPagesData } from "../../../helpers/createPagesData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PaginationData<T> = {
  page: number;
  items: T[];
};

type Props<T> = {
  items: T[];
  children: (data?: PaginationData<T>) => ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Pagination<T>({ children, items, ...props }: Props<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const paginationData = useMemo(
    () => createPagesData(items, (i, page) => ({
      page,
      items: items.slice(i, i + 3),
    }))
  , [items])

  const steppersClasses = (index: number) =>
    `py-2 px-4 border-2 border-primary cursor-pointer font-bold ${
      currentPage === index ? "bg-primary text-white" : ""
    }`;

  const changePageForward = () => {
    if (currentPage === paginationData.length - 1) return;
    setCurrentPage((current) => current + 1);
  };

  const changePageBackward = () => {
    if (currentPage === 0) return;
    setCurrentPage((current) => current - 1);
  };

  const changePage = useCallback((index: number) => (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(index);
  }, []);
/*   
  const changePage = (index: number) => (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(index);
  }; 
  
*/

  return (
    <Flex direct="column" gap={15} {...props}>
      {children(paginationData[currentPage])}
      <Flex align="center" gap={10}>
        <Button
          onClick={changePageBackward}
          className="p-2  border-2 border-primary cursor-pointer"
        >
          <FaChevronLeft />
        </Button>
        {new Array(paginationData.length).fill(0).map((_, i) => (
          <Button
            className={steppersClasses(i)}
            key={i}
            onClick={changePage(i)}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          onClick={changePageForward}
          className="p-2 border-2 border-primary cursor-pointer"
        >
          <FaChevronRight />
        </Button>
      </Flex>
    </Flex>
  );
}

export default Pagination;
