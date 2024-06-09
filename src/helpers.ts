const initialState: SelectedProduct[] = [];
type Action =
  | { type: "INCREMENT"; payload: productElement }
  | { type: "DECREMENT"; payload: productElement }
  | { type: "REMOVE"; payload: productElement }
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
      if(clone[SelectedProductIdx].count === 0) {
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

export {formatDate};