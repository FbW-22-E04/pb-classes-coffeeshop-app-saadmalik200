class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }

  addOrder(product) {
    const idx = this.menu.findIndex((item) => item.name === product);
    // console.log(idx);
    if (idx === -1) {
      console.log(`This item is currently unavailable!`);
    } else {
      this.orders.push(product);
      console.log("Order Added!");
    }
  }

  fulfillOrder() {
    if (this.orders.length !== 0) {
      for (const item of this.orders) {
        // console.log(item);
        console.log(`The ${item} is ready!`);
        this.orders.shift();
      }
    } else {
      console.log("All orders have been fulfilled!");
    }
  }

  listOrders() {
    if (this.orders.length !== 0) {
      this.orders.forEach((item) => console.log(item));
    } else {
      console.log([]);
    }
  }

  dueAmount() {
    console.log(this.orders);

    const total = this.orders.forEach((item) => item);
    // console.log(total);
  }

  //   dueAmount = () =>
  //     +this.orders
  //       .reduce((t, x) => t + this.menu.filter((m) => m.item == x)[0].price, 0.0)
  //       .toFixed(2);
  //   ///////////////////////////////////////////////////
  /* dueAmount() {
    console.log(this.orders);
    // this.listOrders();

    // const idx = this.menu.findIndex((item) => this.orders.includes(item.name));
    let total = 0;
    // this.orders.forEach((item) => {
    //   console.log(item);
    // this.menu.forEach((item) => {
    //   if (this.orders.includes(item.name)) {
    //     total += item.price;
    //   }
    // });

    const result = this.orders.reduce((acc, item) => {
      if (acc[item]) acc[item] += 1;
      else acc[item] = 1;
      return acc;
    }, {});

    for (const item in result) {
      console.log(item);
      const price = this.menu.find((menuItem) => menuItem.name === item).price;
      total += price * result[item];
    }
    console.log(total.toFixed(2));
	*/
  //   ///////////////////////////////////////////////////
  // console.log(result);

  // console.log(idx);
  // console.log(this.menu[idx].price);
  //     const total = this.orders
  //       .map((item) => item)
  //       .findIndex((item) => item === this.menu.name);
  //     // console.log(total);
  // console.log(this.orders);
  // const idxMenu = this.menu.findIndex(
  //   (item) => item.name === this.listOrders
  // );
  // console.log(idxMenu);
  //   }
  //   }

  cheapestItem() {
    const cheapPrice = this.menu.reduce((acc, item) => {
      acc.push(item.price);
      return acc;
    }, []);
    const cheapPriceFinal = Math.min(...cheapPrice);
    console.log(cheapPriceFinal);

    const cheapItem = this.menu.find((item) => {
      if (item.price === cheapPriceFinal) {
        console.log(item.name);
        // return item.name;
      }
    });
  }

  drinksOnly() {
    const result = [];
    const drinks = this.menu
      .filter((item) => {
        if (item.type === "drink") {
          // console.log(item.name);
          return item;
          // result.push(item.name);
        }
      })
      .map((item) => item.name);
    // console.log(result);
    console.log(drinks);
  }

  foodOnly() {
    const result = [];
    const food = this.menu.find((item) => {
      if (item.type === "food") {
        result.push(item.name);
        // return item.name;
      }
    });
    console.log(result);
    // console.log([food]);
  }
}
const ma = new CoffeeShop(
  "Celona",
  [
    { name: "Hot Coffee", type: "drink", price: 2.5 },
    { name: "Cheese Cake", type: "food", price: 5 },
    { name: "Cold Coffee", type: "drink", price: 4 },
    { name: "Ice Cream", type: "food", price: 3 },
    { name: "Pan Cakes", type: "food", price: 3.5 },
    { name: "Cola", type: "drink", price: 1.5 },
    { name: "Iced Coffee", type: "drink", price: 1.5 },
    { name: "Cinnamon Roll", type: "food", price: 2 },
  ],
  []
);

// ma.addOrder("Hot Coffee");
// ma.addOrder("Ice Cream");
// ma.addOrder("Ice Cream");
// ma.addOrder("Pan Cakes");
// ma.addOrder("Hot");
// console.log(ma);
console.log(`--------------------`);
// ma.fulfillOrder();
// console.log(`--------------------`);
// ma.listOrders();
// console.log(`--------------------`);
// ma.dueAmount();
// console.log(`--------------------`);

// ma.cheapestItem();
// console.log(`--------------------`);

// ma.drinksOnly();
// console.log(`--------------------`);
// ma.foodOnly();

console.log(`--------------------`);

// ma.addOrder("hot cocoa");

ma.addOrder("Cinnamon Roll");
ma.addOrder("Iced Coffee");
ma.addOrder("Iced Coffee");
console.log(`--------------------`);
// ma.listOrders(); //["cinnamon roll", "iced coffee"]
console.log(`--------------------`);
// ma.dueAmount();
console.log(`--------------------`);
// ma.fulfillOrder();
// ma.fulfillOrder();
// ma.fulfillOrder();
console.log(`---------------------------`);

// ma.listOrders();
console.log(`---------------------------`);
ma.dueAmount();

console.log(`---------------------------`);
// ma.cheapestItem();

console.log(`---------------------------`);
// ma.drinksOnly();
// ma.foodOnly();
