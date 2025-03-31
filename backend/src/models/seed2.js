// Enhanced seed file with food products and more test data
// Using placehold.co for image placeholders

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "./user.model.js";
import { Category } from "./category.model.js";
import { Product } from "./product.model.js";
import { Order } from "./order.model.js";

// Connect to MongoDB (update with your connection string)
mongoose
  .connect("mongodb://localhost:27017/ecommerce-food")
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Clear existing data
const clearData = async () => {
  //   await User.deleteMany({});
  //   await Category.deleteMany({});
  //   await Product.deleteMany({});
  //   await Order.deleteMany({});
  console.log("All collections cleared");
};

// Create sample data
const createTestData = async () => {
  try {
    // ---------- USERS ----------
    // Hash passwords
    const adminPassword = await bcrypt.hash("admin123", 10);
    const userPassword = await bcrypt.hash("user123", 10);

    const admin = await User.create({
      username: "admin",
      email: "admin@foodstore.com",
      password: adminPassword,
      isAdmin: true,
    });

    const michael = await User.create({
      username: "michael",
      email: "michael@example.com",
      password: userPassword,
      isAdmin: false,
    });

    const sarah = await User.create({
      username: "sarah",
      email: "sarah@example.com",
      password: userPassword,
      isAdmin: false,
    });

    const david = await User.create({
      username: "david",
      email: "david@example.com",
      password: userPassword,
      isAdmin: false,
    });

    const emma = await User.create({
      username: "emma",
      email: "emma@example.com",
      password: userPassword,
      isAdmin: false,
    });

    const alex = await User.create({
      username: "alex",
      email: "alex@example.com",
      password: userPassword,
      isAdmin: false,
    });

    console.log("Sample users created");

    // ---------- CATEGORIES ----------
    const fruits = await Category.create({
      name: "Fruits",
    });

    const vegetables = await Category.create({
      name: "Vegetables",
    });

    const dairy = await Category.create({
      name: "Dairy & Eggs",
    });

    const bakery = await Category.create({
      name: "Bakery",
    });

    const beverages = await Category.create({
      name: "Beverages",
    });

    const snacks = await Category.create({
      name: "Snacks",
    });

    const organic = await Category.create({
      name: "Organic Foods",
    });

    console.log("Sample categories created");

    // ---------- PRODUCTS ----------
    // Fruits
    const apple = await Product.create({
      name: "Organic Apples",
      image: "https://placehold.co/600x400/FF5733/FFFFFF?text=Organic+Apples",
      brand: "Farm Fresh",
      description:
        "Sweet and crisp organic apples, perfect for snacking or baking.",
      price: 3.99,
      quantity: 100,
      category: fruits._id,
      countInStock: 100,
      rating: 4.7,
      numReviews: 3,
      reviews: [
        {
          name: "Sarah Jones",
          rating: 5,
          comment: "These apples are incredibly fresh and sweet!",
          user: sarah._id,
        },
        {
          name: "Michael Smith",
          rating: 4,
          comment: "Good quality and flavor, would buy again.",
          user: michael._id,
        },
        {
          name: "David Williams",
          rating: 5,
          comment: "Best apples I've had in a long time.",
          user: david._id,
        },
      ],
    });

    const banana = await Product.create({
      name: "Bunch Bananas",
      image: "https://placehold.co/600x400/FFE733/000000?text=Bananas",
      brand: "Tropical Farms",
      description: "Perfectly ripened bananas, sold in bunches of 5-7.",
      price: 1.99,
      quantity: 150,
      category: fruits._id,
      countInStock: 150,
      rating: 4.5,
      numReviews: 2,
      reviews: [
        {
          name: "Emma Johnson",
          rating: 4,
          comment: "Good size and ripeness, great value.",
          user: emma._id,
        },
        {
          name: "Alex Brown",
          rating: 5,
          comment: "Always consistently good quality.",
          user: alex._id,
        },
      ],
    });

    const strawberries = await Product.create({
      name: "Fresh Strawberries",
      image: "https://placehold.co/600x400/FF0000/FFFFFF?text=Strawberries",
      brand: "Berry Farms",
      description:
        "Sweet and juicy strawberries, perfect for desserts or snacking.",
      price: 4.99,
      quantity: 80,
      category: fruits._id,
      countInStock: 80,
      rating: 4.3,
      numReviews: 1,
      reviews: [
        {
          name: "Michael Smith",
          rating: 4.3,
          comment: "Very flavorful and fresh!",
          user: michael._id,
        },
      ],
    });

    // Vegetables
    const broccoli = await Product.create({
      name: "Broccoli Crowns",
      image: "https://placehold.co/600x400/008000/FFFFFF?text=Broccoli",
      brand: "Green Valley",
      description: "Fresh broccoli crowns, rich in vitamins and minerals.",
      price: 2.49,
      quantity: 75,
      category: vegetables._id,
      countInStock: 75,
      rating: 4.0,
      numReviews: 1,
      reviews: [
        {
          name: "Sarah Jones",
          rating: 4,
          comment: "Good quality and stays fresh for days.",
          user: sarah._id,
        },
      ],
    });

    const carrots = await Product.create({
      name: "Organic Carrots",
      image: "https://placehold.co/600x400/FFA500/FFFFFF?text=Organic+Carrots",
      brand: "Farm Fresh",
      description:
        "Sweet and crunchy organic carrots, perfect for salads or cooking.",
      price: 2.99,
      quantity: 100,
      category: vegetables._id,
      countInStock: 100,
      rating: 4.8,
      numReviews: 2,
      reviews: [
        {
          name: "Emma Johnson",
          rating: 5,
          comment: "These carrots are exceptionally crisp and sweet.",
          user: emma._id,
        },
        {
          name: "David Williams",
          rating: 4.5,
          comment: "Great organic option, very fresh.",
          user: david._id,
        },
      ],
    });

    const spinach = await Product.create({
      name: "Baby Spinach",
      image: "https://placehold.co/600x400/006400/FFFFFF?text=Baby+Spinach",
      brand: "Green Valley",
      description: "Tender baby spinach leaves, pre-washed and ready to use.",
      price: 3.49,
      quantity: 60,
      category: vegetables._id,
      countInStock: 60,
      rating: 4.2,
      numReviews: 1,
      reviews: [
        {
          name: "Alex Brown",
          rating: 4.2,
          comment: "Very clean and fresh, perfect for my salads.",
          user: alex._id,
        },
      ],
    });

    // Dairy & Eggs
    const milk = await Product.create({
      name: "Organic Whole Milk",
      image: "https://placehold.co/600x400/FFFFFF/000000?text=Organic+Milk",
      brand: "Happy Cow",
      description: "Fresh organic whole milk from grass-fed cows. 1 gallon.",
      price: 5.99,
      quantity: 50,
      category: dairy._id,
      countInStock: 50,
      rating: 4.6,
      numReviews: 2,
      reviews: [
        {
          name: "Sarah Jones",
          rating: 5,
          comment: "Delicious and creamy, best milk I've tried.",
          user: sarah._id,
        },
        {
          name: "Michael Smith",
          rating: 4.2,
          comment: "Good quality organic milk, worth the price.",
          user: michael._id,
        },
      ],
    });

    const eggs = await Product.create({
      name: "Free-Range Eggs",
      image: "https://placehold.co/600x400/F5F5DC/000000?text=Free-Range+Eggs",
      brand: "Happy Hen",
      description: "Farm fresh free-range eggs. 12 count.",
      price: 4.49,
      quantity: 80,
      category: dairy._id,
      countInStock: 80,
      rating: 4.9,
      numReviews: 3,
      reviews: [
        {
          name: "Emma Johnson",
          rating: 5,
          comment: "These eggs have beautiful orange yolks and great flavor!",
          user: emma._id,
        },
        {
          name: "David Williams",
          rating: 5,
          comment: "Much better than store-brand eggs, worth every penny.",
          user: david._id,
        },
        {
          name: "Alex Brown",
          rating: 4.7,
          comment: "Consistently fresh and high quality.",
          user: alex._id,
        },
      ],
    });

    const cheese = await Product.create({
      name: "Aged Cheddar Cheese",
      image: "https://placehold.co/600x400/FFDB58/000000?text=Cheddar+Cheese",
      brand: "Dairy Delight",
      description:
        "Sharp aged cheddar cheese, perfect for sandwiches or cooking. 8oz block.",
      price: 6.99,
      quantity: 40,
      category: dairy._id,
      countInStock: 40,
      rating: 4.4,
      numReviews: 1,
      reviews: [
        {
          name: "Michael Smith",
          rating: 4.4,
          comment: "Great flavor, melts well in recipes.",
          user: michael._id,
        },
      ],
    });

    // Bakery
    const bread = await Product.create({
      name: "Artisan Sourdough Bread",
      image: "https://placehold.co/600x400/CD853F/FFFFFF?text=Sourdough+Bread",
      brand: "Hometown Bakery",
      description:
        "Freshly baked artisan sourdough bread with a crispy crust and soft interior.",
      price: 4.99,
      quantity: 30,
      category: bakery._id,
      countInStock: 30,
      rating: 4.7,
      numReviews: 2,
      reviews: [
        {
          name: "Sarah Jones",
          rating: 5,
          comment: "This bread is amazing! Great texture and flavor.",
          user: sarah._id,
        },
        {
          name: "David Williams",
          rating: 4.4,
          comment: "Excellent sourdough, stays fresh for days.",
          user: david._id,
        },
      ],
    });

    const croissant = await Product.create({
      name: "Butter Croissants",
      image:
        "https://placehold.co/600x400/D2B48C/000000?text=Butter+Croissants",
      brand: "Hometown Bakery",
      description: "Flaky, buttery croissants. Pack of 4.",
      price: 6.99,
      quantity: 25,
      category: bakery._id,
      countInStock: 25,
      rating: 4.8,
      numReviews: 1,
      reviews: [
        {
          name: "Emma Johnson",
          rating: 4.8,
          comment: "So buttery and delicious, just like from a French bakery!",
          user: emma._id,
        },
      ],
    });

    // Beverages
    const coffee = await Product.create({
      name: "Organic Dark Roast Coffee",
      image:
        "https://placehold.co/600x400/654321/FFFFFF?text=Dark+Roast+Coffee",
      brand: "Mountain Brew",
      description: "Rich, bold organic dark roast coffee. 12oz ground bag.",
      price: 12.99,
      quantity: 45,
      category: beverages._id,
      countInStock: 45,
      rating: 4.5,
      numReviews: 2,
      reviews: [
        {
          name: "Alex Brown",
          rating: 4.5,
          comment: "Smooth with no bitterness, my new favorite!",
          user: alex._id,
        },
        {
          name: "Michael Smith",
          rating: 4.5,
          comment: "Great aroma and rich flavor.",
          user: michael._id,
        },
      ],
    });

    const tea = await Product.create({
      name: "Organic Green Tea",
      image: "https://placehold.co/600x400/90EE90/000000?text=Green+Tea",
      brand: "Zen Tea",
      description: "Delicate, refreshing organic green tea. 20 tea bags.",
      price: 4.99,
      quantity: 60,
      category: beverages._id,
      countInStock: 60,
      rating: 4.3,
      numReviews: 1,
      reviews: [
        {
          name: "Sarah Jones",
          rating: 4.3,
          comment: "Subtle flavor, very calming.",
          user: sarah._id,
        },
      ],
    });

    // Snacks
    const chips = await Product.create({
      name: "Sea Salt Kettle Chips",
      image: "https://placehold.co/600x400/F5DEB3/000000?text=Kettle+Chips",
      brand: "Crunch Time",
      description: "Crispy kettle-cooked potato chips with sea salt. 8oz bag.",
      price: 3.49,
      quantity: 70,
      category: snacks._id,
      countInStock: 70,
      rating: 4.4,
      numReviews: 2,
      reviews: [
        {
          name: "David Williams",
          rating: 4.5,
          comment: "Perfect crunch and just the right amount of salt.",
          user: david._id,
        },
        {
          name: "Emma Johnson",
          rating: 4.3,
          comment: "Great chips, not too greasy.",
          user: emma._id,
        },
      ],
    });

    const chocolate = await Product.create({
      name: "Dark Chocolate Bar",
      image: "https://placehold.co/600x400/3C2218/FFFFFF?text=Dark+Chocolate",
      brand: "Sweet Dreams",
      description: "70% cocoa dark chocolate bar. Ethically sourced. 3.5oz.",
      price: 4.29,
      quantity: 50,
      category: snacks._id,
      countInStock: 50,
      rating: 4.9,
      numReviews: 3,
      reviews: [
        {
          name: "Alex Brown",
          rating: 5,
          comment: "Smooth, rich flavor with no bitterness.",
          user: alex._id,
        },
        {
          name: "Sarah Jones",
          rating: 5,
          comment: "Perfect balance of sweetness, my favorite chocolate!",
          user: sarah._id,
        },
        {
          name: "Michael Smith",
          rating: 4.7,
          comment: "High quality chocolate with complex flavor notes.",
          user: michael._id,
        },
      ],
    });

    console.log("Sample products created");

    // ---------- ORDERS ----------
    const order1 = await Order.create({
      user: michael._id,
      orderItems: [
        {
          name: apple.name,
          qty: 2,
          image: apple.image,
          price: apple.price,
          product: apple._id,
        },
        {
          name: milk.name,
          qty: 1,
          image: milk.image,
          price: milk.price,
          product: milk._id,
        },
        {
          name: bread.name,
          qty: 1,
          image: bread.image,
          price: bread.price,
          product: bread._id,
        },
      ],
      shippingAddress: {
        address: "123 Pine St",
        city: "Chicago",
        postalCode: "60601",
        country: "USA",
      },
      paymentMethod: "PayPal",
      paymentResult: {
        id: "PAY-ABCD1234EFGH",
        status: "COMPLETED",
        update_time: new Date().toISOString(),
        email_address: michael.email,
      },
      itemsPrice: apple.price * 2 + milk.price + bread.price,
      taxPrice: 1.79,
      shippingPrice: 5.99,
      totalPrice: apple.price * 2 + milk.price + bread.price + 1.79 + 5.99,
      isPaid: true,
      paidAt: new Date(Date.now() - 86400000), // 1 day ago
      isDelivered: true,
      deliveredAt: new Date(),
    });

    const order2 = await Order.create({
      user: sarah._id,
      orderItems: [
        {
          name: strawberries.name,
          qty: 2,
          image: strawberries.image,
          price: strawberries.price,
          product: strawberries._id,
        },
        {
          name: eggs.name,
          qty: 1,
          image: eggs.image,
          price: eggs.price,
          product: eggs._id,
        },
        {
          name: chocolate.name,
          qty: 3,
          image: chocolate.image,
          price: chocolate.price,
          product: chocolate._id,
        },
      ],
      shippingAddress: {
        address: "456 Maple Ave",
        city: "New York",
        postalCode: "10001",
        country: "USA",
      },
      paymentMethod: "Credit Card",
      paymentResult: {
        id: "CC-XYZ9876543",
        status: "COMPLETED",
        update_time: new Date().toISOString(),
        email_address: sarah.email,
      },
      itemsPrice: strawberries.price * 2 + eggs.price + chocolate.price * 3,
      taxPrice: 2.35,
      shippingPrice: 5.99,
      totalPrice:
        strawberries.price * 2 + eggs.price + chocolate.price * 3 + 2.35 + 5.99,
      isPaid: true,
      paidAt: new Date(),
      isDelivered: false,
    });

    const order3 = await Order.create({
      user: emma._id,
      orderItems: [
        {
          name: carrots.name,
          qty: 1,
          image: carrots.image,
          price: carrots.price,
          product: carrots._id,
        },
        {
          name: spinach.name,
          qty: 1,
          image: spinach.image,
          price: spinach.price,
          product: spinach._id,
        },
        {
          name: cheese.name,
          qty: 1,
          image: cheese.image,
          price: cheese.price,
          product: cheese._id,
        },
        {
          name: croissant.name,
          qty: 1,
          image: croissant.image,
          price: croissant.price,
          product: croissant._id,
        },
      ],
      shippingAddress: {
        address: "789 Oak Lane",
        city: "Los Angeles",
        postalCode: "90001",
        country: "USA",
      },
      paymentMethod: "PayPal",
      itemsPrice:
        carrots.price + spinach.price + cheese.price + croissant.price,
      taxPrice: 1.6,
      shippingPrice: 5.99,
      totalPrice:
        carrots.price +
        spinach.price +
        cheese.price +
        croissant.price +
        1.6 +
        5.99,
      isPaid: false,
      isDelivered: false,
    });

    const order4 = await Order.create({
      user: david._id,
      orderItems: [
        {
          name: coffee.name,
          qty: 2,
          image: coffee.image,
          price: coffee.price,
          product: coffee._id,
        },
        {
          name: chips.name,
          qty: 3,
          image: chips.image,
          price: chips.price,
          product: chips._id,
        },
      ],
      shippingAddress: {
        address: "321 Cedar Road",
        city: "Seattle",
        postalCode: "98101",
        country: "USA",
      },
      paymentMethod: "Credit Card",
      paymentResult: {
        id: "CC-LMNO5678",
        status: "COMPLETED",
        update_time: new Date().toISOString(),
        email_address: david.email,
      },
      itemsPrice: coffee.price * 2 + chips.price * 3,
      taxPrice: 3.24,
      shippingPrice: 5.99,
      totalPrice: coffee.price * 2 + chips.price * 3 + 3.24 + 5.99,
      isPaid: true,
      paidAt: new Date(Date.now() - 172800000), // 2 days ago
      isDelivered: true,
      deliveredAt: new Date(Date.now() - 86400000), // 1 day ago
    });

    console.log("Sample orders created");
    console.log("All test data created successfully!");

    // Return created data for reference
    return {
      users: { admin, michael, sarah, david, emma, alex },
      categories: {
        fruits,
        vegetables,
        dairy,
        bakery,
        beverages,
        snacks,
        organic,
      },
      products: {
        apple,
        banana,
        strawberries,
        broccoli,
        carrots,
        spinach,
        milk,
        eggs,
        cheese,
        bread,
        croissant,
        coffee,
        tea,
        chips,
        chocolate,
      },
      orders: { order1, order2, order3, order4 },
    };
  } catch (error) {
    console.error("Error creating test data:", error);
  }
};

// Run the import
(async () => {
  await clearData();
  const data = await createTestData();
  console.log("Import complete");

  // Optional: Print IDs for reference
  console.log("\nReference IDs:");
  console.log("==============");
  console.log("Admin User ID:", data.users.admin._id);
  console.log("Fruits Category ID:", data.categories.fruits._id);
  console.log("Organic Apples ID:", data.products.apple._id);
  console.log("Michael's Order ID:", data.orders.order1._id);

  // Disconnect from MongoDB
  mongoose.disconnect();
})();
