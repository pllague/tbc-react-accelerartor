interface postElement {
    id: number;
    title: string;
    body: string;
    userId: number;
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
}

interface cardProps {
    card: productElement;
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