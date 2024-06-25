interface PostElement {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}

interface ArticleProps {
  article: PostElement;
}
interface ProductElement {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: string;
  brand: string;
  category: string;
  image: string;
  images: Array<string>;
  quantity?: number;
}

interface ProductsProps {
  searchQuery: string;
  selectedCategory: string;
}

interface CardProps {
  card: ProductElement;
  handleClick: (productId: number) => void;
}

interface params {
  id: number;
  locale: string;
}

interface ParamsObj {
  params: params;
}

interface ChildrenProps {
  children: React.ReactNode;
  params: params;
}

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  displayFilter?: boolean;
}

interface User {
  id: number;
  name: string;
  sub: string;
  email: string;
  image_url: string;
  role?: string;
}

interface SelectedProduct {
  id: number;
  count: number;
  selectedCard: ProductElement;
}

interface ProductObject {
  id: number;
  quantity: number;
}

interface CartTable {
  id: number;
  user_id: number;
  products: ProductObject[];
  added_on: string;
}

interface NavigationProps {
  layout: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CartWithProducts {
  count: number;
  price: number;
  products: ProductElement[];
}

interface IStorageCart {
  count: number;
  price: number;
  products: ProductElement[];
}

interface ProfileData {
  userSub: string;
  name: string;
  role?: string | Array;
}

interface CreateProduct {
  id?: number;
  title: string;
  description: string;
  price: string;
  image_url: string;
  category: string;
  brand: string;
}

interface FetchedProductsData {
  products: {
    rows: ProductElement[];
  };
}

interface CreateBlog {
  id?: number;
  author: string | null | undefined;
  title: string;
  description: string;
  image_url: string;
}

interface StarRating {
  maxRating: number;
  defaultRating: number;
}

interface StarProps {
  full: boolean;
  onRait: MouseEventHandler<HTMLSpanElement>;
  onHoverIn: MouseEventHandler<HTMLSpanElement> | undefined;
  onHoverOut: MouseEventHandler<HTMLSpanElement> | undefined;
}

interface ProductRate {
  userId: string;
  productId: number;
  review: string;
  userName: string;
}
interface ReviewObject {
  userId: string;
  review: string;
}

interface ReviewsTable {
  id: number;
  product_id: number;
  review: ReviewObject[];
  added_on: string;
}

interface RatingObject {
  userId: string;
  rating: number;
}

interface RatingTable {
  id: number;
  product_id: number;
  rating: RatingObject[];
}

interface ContactForm {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  comment: string;
}

interface ContactFormData {
  id?: number;
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  comment: string;
}

interface SubscribersData {
  id: number;
  email: string;
  added_on: string;
}

interface OrderMetadata {
  id: string;
  address: string;
  city: string;
  phone: string;
}

interface LatestCharge {
  id: string;
  receipt_url: string;
  refunded: boolean;
  billing_details: {
    email: string;
  };
}

interface Order {
  amount: number;
  currency: string;
  latest_charge: LatestCharge;
  metadata: OrderMetadata;
}

interface CheckoutProfile {
  city: string;
  address: string;
  phone: string;
  sub: string | null | undefined;
}

interface StripeData {
  active?: boolean;
  name?: string;
  price: string;
  quantity: number;
  images?: string[];
  metadata?: {
    price: string;
  };
}

interface UserInfoDb {
  id?: number;
  name: string;
  email: string;
  sub: string;
  image_url: string;
  role: string;
}

interface Category {
  id: string;
  name: string;
}
