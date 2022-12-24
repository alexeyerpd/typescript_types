import Cart from "../service/Cart";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("card should be added", () => {
  const cart = new Cart();

  cart.add({ id: 100, name: "Name", price: 100 });
  expect(cart.items.length).toBe(1);
});
