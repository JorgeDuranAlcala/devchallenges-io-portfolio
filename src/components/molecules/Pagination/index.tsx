import { HTMLAttributes, memo, ReactNode, useCallback, useMemo, useState } from 'react'
import type { MouseEvent } from 'react'
import { Flex } from "../../atoms"
import { createPagesData } from '../../../helpers/createPagesData'

type PaginationData<T> = { 
    page: number, 
    items: T[]
}

type Props<T> = {
    items: T[],
    children: (data?: PaginationData<T>) => ReactNode
} & HTMLAttributes<HTMLDivElement>

export function Pagination<T>({
    children,
    items,
    ...props
}: Props<T>) {

    const [currentPage, setCurrentPage] = useState(0)
    const paginationData = useMemo(() => {
        return createPagesData(items, (i, page) => ({
            page,
            items: items.slice(i, i + 3)
        }))
    }, [items])

const steppersClasses = (index: number) => `p-2 border-2 border-primary cursor-pointer ${ currentPage === index  ? "bg-primary" : ""}`

const changePageForward = () => {
    if (currentPage === paginationData.length - 1) return;
    setCurrentPage(current => current + 1)
}

const changePageBackward = () => {
    if (currentPage === 0) return;
    setCurrentPage(current => current - 1)
}

const changePage = (index: number) => (e: MouseEvent<HTMLDivElement>) => {
    setCurrentPage(index)
}


  return (
    <Flex direct="column" gap={15} {...props}>
        {children(paginationData[currentPage])}
        <Flex align="center" gap={10} >
            <Flex onClick={changePageBackward} className="p-2 border-2 border-primary cursor-pointer">{"<"}</Flex>
            {
                new Array(paginationData.length)
                .fill(0)
                .map((_, i) => (
                    <Flex  
                        className={steppersClasses(i)} 
                        key={i}
                        onClick={changePage(i)}
                    >
                        {i + 1}
                    </Flex>
                ))
            }
            <Flex onClick={changePageForward} className="p-2 border-2 border-primary cursor-pointer">{">"}</Flex>
        </Flex>
    </Flex>
  )
}


export default Pagination