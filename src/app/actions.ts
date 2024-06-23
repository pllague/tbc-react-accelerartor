"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
  addContact,
  addSubscriber,
  deleteProductFromCart,
} from "./api";

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  await createUser(name as string, email as string, age as string);
  revalidatePath("/admin");
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

export async function updateUserAction(formData: FormData) {
  const { id, name, email, age } = Object.fromEntries(formData);
  await updateUser(
    id as string,
    name as string,
    email as string,
    age as string
  );
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
  const { name, userSub, role } = formData;
  await editProfile(name, userSub, role);
  revalidatePath("/profile");
}

export async function addProductAction(productData: CreateProduct) {
  const { title, description, price, image_url, brand, category } = productData;
  await addProduct(
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
  await updateProduct(
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
  await updateBlog(
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
  await addBlog(
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
  await addReview(
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
  await addRating(rating as number, userId as string, productId as number);
  revalidatePath(`/products/${productId}`);
}

export async function addContactAction(contactForm: ContactForm) {
  await addContact(contactForm);
  revalidatePath(`/admin`);
}

export async function addSubscriberAction(email: string) {
  await addSubscriber(email);
  revalidatePath(`/admin`);
}
export async function deleteProductFromCartAction(item_id: number) {
  await deleteProductFromCart(item_id);
  revalidatePath(`/cart`);
}

export async function createRefundAction(chargeId: string) {
  await fetch(
    process.env.NEXT_PUBLIC_VERCEL_URL + "/api/orders/create-refund",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chargeId }),
    }
  );
  revalidatePath("/orders");
}

export async function checkoutAction(
  cartProducts: ProductElement[],
  profile: CheckoutProfile
) {
  await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + "/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ products: cartProducts, profile }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.url) {
        redirect(response.url);
      }
    });
}
