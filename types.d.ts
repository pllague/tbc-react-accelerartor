interface postElement {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
    date:string;
}

interface articleProps {
    article: postElement;
}
interface productElement {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    image: string;
    images: Array<string>;
    quantity?: number;
}

interface cardProps {
    card: productElement;
    handleClick: (productId: number) => void;
}

interface params {
    id: number;
    locale: string;
}

interface paramsObj {
    params: params;
}

interface childrenProps {
    children: React.ReactNode;
    params: params;
}

interface searchProps {
    isSorted: boolean;
    setIsSorted: Dispatch<SetStateAction<boolean>>;
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}

interface User {
    id: number;
    name: string;
    age: string;
    email: string;
}

interface SelectedProduct {
    id: number;
    count: number;
    selectedCard: productElement;
}

interface ProductObject {
    id: number;
    quantity: number;
}

interface CartTable {
    id: number,
    user_id: number,
    products: ProductObject[],
    added_on: string,
}

interface NavigationProps {
    layout: string,
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>,
}

interface CartWithProducts {
    count: number,
    price: number,
    products: productElement[],
}

interface IStorageCart {
    count: number,
    price: number,
    products: productElement[]
}

interface ProfileData {
    email: string;
    userSub: string;
    name: string;
}

interface CreateProduct {
    id?:number;
    title:string;
    description: string;
    price: string;
    image_url:string;
    category:string;
    brand: string;
}

interface FetchedProductsData {
    products: {
        rows: productElement[]
    }
}

interface CreateBlog  {
    id?: number,
    author: string | null | undefined,
    title: string
    description:string
    image_url:string
}