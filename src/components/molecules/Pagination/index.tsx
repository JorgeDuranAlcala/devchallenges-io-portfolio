import { HTMLAttributes, ReactNode, useCallback, useState } from 'react'
import { Flex } from "../../atoms"

type PaginationData<T> = { 
    page: number, 
    items: T[]
}

type Props<T> = {
    items: T[],
    children: (data: PaginationData<T>) => ReactNode
} & HTMLAttributes<HTMLDivElement>

export function Pagination<T>({
    children,
    items,
    ...props
}: Props<T>) {

    const [currentPage, setCurrentPage] = useState(0)
    const paginationData = []
    let j = 1;
for (let i = 0; i < items.length; i += 3) {
    let data: PaginationData<T> = {
        page: j,
        items: items.slice(i, i + 3)
    };
    paginationData.push(data)
    j++
}

const changePageForward = useCallback(() => {
    if (currentPage !== paginationData.length) {
        setCurrentPage(current => current + 1)
        return;
    }
}, [])

const changePageBackward = useCallback(() => {
    if (currentPage !== 0) {
        setCurrentPage(current => current - 1)
        return;
    }
}, [])

  return (
    <Flex direct="column" gap={15} {...props}>
        {children(paginationData[currentPage])}
        <Flex align="center" gap={10} >
            <Flex onClick={changePageBackward} className="p-2 border-2 border-primary cursor-pointer">{"<"}</Flex>
            {
                new Array(paginationData.length)
                .fill(0)
                .map((_, i) => (
                    <Flex  className="p-2 border-2 border-primary cursor-pointer" key={i}>
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