export function createPagesData<T, U>(
    items: T[], 
    transform: (index: number, pageNum: number) => U
): U[] {
    const paginationData = []
    let j = 1;
    for (let i = 0; i < items.length; i += 3) {
        let data = transform(i, j);
        paginationData.push(data)
        j++
    }
    return paginationData
}