import { useState, useEffect } from "react";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import menu from "../menu/menu";
import { motion } from "framer-motion";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const {
    closeCart,
    cartItems,
    removeFromCart,
  } = useShoppingCart();
  const [isOrdering, setIsOrdering] = useState(false);

  const handleOrder = () => {
    setIsOrdering(true);
    clearCart(); 
  };

  const clearCart = () => {
    cartItems.forEach((item) => {
      removeFromCart(item.id);
    });
  };

  useEffect(() => {
    let timer: number;
    if (isOrdering) {
      timer = setTimeout(() => {
        setIsOrdering(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isOrdering]);

  const total = cartItems.reduce((total, cartItem) => {
    const item = menu.find((i: { id: number }) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const isCartEmpty = cartItems.length === 0;

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total {formatCurrency(total)}
          </div>
          <Button
            onClick={handleOrder}
            disabled={isCartEmpty}
            className="w-100"
          >
            Order
          </Button>
          {isOrdering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-3 text-success"
            >
              Your order will be ready in 30 minutes
            </motion.div>
          )}
          {isCartEmpty && (
            <div className="text-center mt-3 text-danger">
              Your cart is empty
            </div>
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
