import { Stack } from "expo-router";
import "@/global.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishListContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </WishlistProvider>
    </CartProvider>
  );
}
