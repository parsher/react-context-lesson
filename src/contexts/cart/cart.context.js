import { createContext} from 'react';

const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {} // default function to prevent null exception
});

export default CartContext;