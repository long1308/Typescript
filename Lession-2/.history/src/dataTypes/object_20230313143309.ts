interface Book {
    auther: Author[],
    book_cover ?: string,
    categories: {id: number, name : string, iss_leaf : boolean}
}
interface Author {
    id: number,
    name: string,
    
}