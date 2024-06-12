"use server";
import { revalidatePath } from "next/cache";
import {
  addToCart,
  clearCart,
  createUser,
  decrementProductQuantity,
  deleteUser,
  removeProductFromCart,
  updateUser,
  editProfile,
  addProduct,
  updateProduct,
  deleteProduct,
  deleteBlog,
  updateBlog,
  addBlog,
  addReview,
  addRating,
} from "./api";

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  createUser(name as string, email as string, age as string);
  revalidatePath("/admin");
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

export async function updateUserAction(formData: FormData) {
  const { id, name, email, age } = Object.fromEntries(formData);
  updateUser(id as string, name as string, email as string, age as string);
  revalidatePath("/admin");
}

export async function addToCartAction(id: number) {
  await addToCart(id);
  revalidatePath("/");
}

export async function decrementProductQuantityAction(id: number) {
  await decrementProductQuantity(id);
  revalidatePath("/checkout");
}

export async function removeProductFromCartAction(id: number) {
  await removeProductFromCart(id);
  revalidatePath("/checkout");
}

export async function clearCartAction() {
  await clearCart();
  revalidatePath("/checkout");
}

export async function editProfileInfo(formData: ProfileData) {
  const { name, email, userSub } = formData;
  revalidatePath("/profile");
  editProfile(name, email, userSub);
}

export async function addProductAction(productData: CreateProduct) {
  const { title, description, price, image_url, brand, category } = productData;
  addProduct(
    title as string,
    description as string,
    price as string,
    image_url as string,
    brand as string,
    category as string
  );
  revalidatePath("/admin");
  revalidatePath("/products");
}

export async function updateProductAction(productData: CreateProduct) {
  const { id, title, description, price, image_url, brand, category } =
    productData;
  updateProduct(
    id as number,
    title as string,
    description as string,
    price as string,
    image_url as string,
    brand as string,
    category as string
  );
  revalidatePath("/admin");
  revalidatePath(`/products/${id}`);
}

export async function deleteProductAction(id: number) {
  await deleteProduct(id);
  revalidatePath("/admin");
  revalidatePath("/products");
}

export async function deleteBlogAction(id: number) {
  await deleteBlog(id);
  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function updateBlogAction(blogData: CreateBlog) {
  const { id, author, title, description, image_url } = blogData;
  updateBlog(
    id as number,
    author as string,
    title as string,
    description as string,
    image_url as string
  );
  revalidatePath("/admin");
  revalidatePath(`/blog/${id}`);
}

export async function addBlogAction(blogData: CreateBlog) {
  const { author, title, description, image_url } = blogData;
  addBlog(
    author as string,
    title as string,
    description as string,
    image_url as string
  );
  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function addReviewAction(productRate: ProductRate) {
  const { userId, userName, productId, review } = productRate;
  addReview(
    userId as string,
    userName as string,
    productId as number,
    review as string
  );
  revalidatePath(`/products/${productId}`);
}

export async function addRatingAction(
  rating: number,
  userId: string,
  productId: number
) {
  addRating(rating as number, userId as string, productId as number);
  revalidatePath(`/products/${productId}`);
}
