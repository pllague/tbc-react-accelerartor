interface postElement {
    id: number;
    title: string;
    body: string;
    UserId: number;
    tags: Array<string>;
    reactions: number;
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
    thumbnail: string;
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
    layout: string;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CartWithProducts {
    count: number,
    price: number,
    products: productElement[],
}