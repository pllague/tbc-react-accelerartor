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