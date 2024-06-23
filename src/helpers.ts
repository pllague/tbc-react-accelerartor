const initialState: SelectedProduct[] = [];
type Action =
  | { type: "INCREMENT"; payload: ProductElement }
  | { type: "DECREMENT"; payload: ProductElement }
  | { type: "REMOVE"; payload: ProductElement }
  | { type: "RESET" };

export function reducer(state: SelectedProduct[], action: Action) {
  switch (action.type) {
    case "INCREMENT": {
      const SelectedProductIdx = state.findIndex(
        (p) => p.id === action.payload.id
      );
      if (SelectedProductIdx === -1)
        return [
          ...state,
          { id: action.payload.id, count: 1, selectedCard: action.payload },
        ];
      const clone = [...state];
      const SelectedProduct = clone[SelectedProductIdx];
      const updatedSelectedProduct = {
        ...SelectedProduct,
        count: SelectedProduct.count + 1,
      };
      clone[SelectedProductIdx] = updatedSelectedProduct;
      return clone;
    }
    case "DECREMENT": {
      const SelectedProductIdx = state.findIndex(
        (p) => p.id === action.payload.id
      );
      if (SelectedProductIdx === -1)
        return [
          ...state,
          { id: action.payload.id, count: 1, selectedCard: action.payload },
        ];
      const clone = [...state];
      const SelectedProduct = clone[SelectedProductIdx];
      const updatedSelectedProduct = {
        ...SelectedProduct,
        count: SelectedProduct.count - 1,
      };
      clone[SelectedProductIdx] = updatedSelectedProduct;
      if (clone[SelectedProductIdx].count === 0) {
        return state.filter((product) => product.id !== action.payload.id);
      }
      return clone;
    }
    case "REMOVE":
      return state.filter((product) => product.id !== action.payload.id);

    case "RESET":
      return initialState;
  }
}

const formatDate = (dateStr: string): string => {
  const dateObj = new Date(dateStr);

  // Extract time and date parts
  const hours = dateObj.getUTCHours().toString().padStart(2, "0");
  const minutes = dateObj.getUTCMinutes().toString().padStart(2, "0");
  const day = dateObj.getUTCDate().toString().padStart(2, "0");
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year = dateObj.getUTCFullYear().toString();

  // Format date as "HH:MM DD-MM-YYYY"
  return `${hours}:${minutes} ${day}-${month}-${year}`;
};

import { SignJWT, jwtVerify, JWTPayload } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

interface TokenPayload extends JWTPayload {
  id: string;
}
// Create a JWT token
const createToken = async (payload: TokenPayload): Promise<string> => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS384" })
    .setExpirationTime("1h")
    .sign(JWT_SECRET);
};

// Verify a JWT token
const verifyToken = async (token: string): Promise<TokenPayload | null> => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as TokenPayload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};

export { formatDate, createToken, verifyToken };
