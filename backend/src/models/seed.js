// This file contains test data for all the models in your e-commerce application
// You can use this to populate your MongoDB database for testing purposes

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
    const adminPassword = await bcrypt.hash("admin123", 10);
    const userPassword = await bcrypt.hash("user123", 10);

    const admin = await User.create({
      username: "admin",
      email: "admin@example.com",
      password: adminPassword,
      isAdmin: true,
    });

    const john = await User.create({
      username: "john",
      email: "john@example.com",
      password: userPassword,
      isAdmin: false,
    });

    const jane = await User.create({
      username: "jane",
      email: "jane@example.com",
      password: userPassword,
      isAdmin: false,
    });

    console.log("Sample users created");

    // ---------- CATEGORIES ----------
    const electronics = await Category.create({
      name: "Electronics",
    });

    const clothing = await Category.create({
      name: "Clothing",
    });

    const books = await Category.create({
      name: "Books",
    });

    const homeDecor = await Category.create({
      name: "Home Decor",
    });

    console.log("Sample categories created");

    // ---------- PRODUCTS ----------
    const laptop = await Product.create({
      name: "MacBook Pro",
      image: "/images/macbook.jpg",
      brand: "Apple",
      description: "High-performance laptop with Retina display",
      price: 1299.99,
      quantity: 15,
      category: electronics._id,
      countInStock: 15,
      rating: 4.5,
      numReviews: 2,
      reviews: [
        {
          name: "John Doe",
          rating: 5,
          comment: "Excellent performance and battery life!",
          user: john._id,
        },
        {
          name: "Jane Smith",
          rating: 4,
          comment: "Great laptop but a bit expensive",
          user: jane._id,
        },
      ],
    });

    const phone = await Product.create({
      name: "iPhone 14",
      image: "/images/iphone.jpg",
      brand: "Apple",
      description: "Latest iPhone with Pro camera system",
      price: 999.99,
      quantity: 20,
      category: electronics._id,
      countInStock: 20,
      rating: 4.8,
      numReviews: 1,
      reviews: [
        {
          name: "John Doe",
          rating: 4.8,
          comment: "Amazing camera quality!",
          user: john._id,
        },
      ],
    });

    const jeans = await Product.create({
      name: "Slim Fit Jeans",
      image: "/images/jeans.jpg",
      brand: "Levi's",
      description: "Classic blue slim fit jeans",
      price: 49.99,
      quantity: 30,
      category: clothing._id,
      countInStock: 30,
      rating: 4.2,
      numReviews: 2,
      reviews: [
        {
          name: "Jane Smith",
          rating: 4,
          comment: "Good fit and comfortable",
          user: jane._id,
        },
        {
          name: "John Doe",
          rating: 4.5,
          comment: "Great quality denim",
          user: john._id,
        },
      ],
    });

    const novel = await Product.create({
      name: "The Great Gatsby",
      image: "/images/book.jpg",
      brand: "Penguin Classics",
      description: "F. Scott Fitzgerald's classic novel",
      price: 15.99,
      quantity: 50,
      category: books._id,
      countInStock: 50,
      rating: 4.7,
      numReviews: 1,
      reviews: [
        {
          name: "Jane Smith",
          rating: 4.7,
          comment: "A timeless classic!",
          user: jane._id,
        },
      ],
    });

    const lamp = await Product.create({
      name: "Modern Table Lamp",
      image: "/images/lamp.jpg",
      brand: "Lumina",
      description: "Stylish table lamp with adjustable brightness",
      price: 39.99,
      quantity: 25,
      category: homeDecor._id,
      countInStock: 25,
      rating: 4.0,
      numReviews: 0,
      reviews: [],
    });

    console.log("Sample products created");

    // ---------- ORDERS ----------
    const order1 = await Order.create({
      user: john._id,
      orderItems: [
        {
          name: laptop.name,
          qty: 1,
          image: laptop.image,
          price: laptop.price,
          product: laptop._id,
        },
        {
          name: jeans.name,
          qty: 2,
          image: jeans.image,
          price: jeans.price,
          product: jeans._id,
        },
      ],
      shippingAddress: {
        address: "123 Main St",
        city: "Boston",
        postalCode: "02108",
        country: "USA",
      },
      paymentMethod: "PayPal",
      paymentResult: {
        id: "PAY-1234567890",
        status: "COMPLETED",
        update_time: new Date().toISOString(),
        email_address: john.email,
      },
      itemsPrice: laptop.price + jeans.price * 2,
      taxPrice: 139.99,
      shippingPrice: 10.0,
      totalPrice: laptop.price + jeans.price * 2 + 139.99 + 10.0,
      isPaid: true,
      paidAt: new Date(),
      isDelivered: false,
    });

    const order2 = await Order.create({
      user: jane._id,
      orderItems: [
        {
          name: phone.name,
          qty: 1,
          image: phone.image,
          price: phone.price,
          product: phone._id,
        },
        {
          name: novel.name,
          qty: 3,
          image: novel.image,
          price: novel.price,
          product: novel._id,
        },
      ],
      shippingAddress: {
        address: "456 Oak Ave",
        city: "San Francisco",
        postalCode: "94107",
        country: "USA",
      },
      paymentMethod: "Credit Card",
      itemsPrice: phone.price + novel.price * 3,
      taxPrice: 104.8,
      shippingPrice: 15.0,
      totalPrice: phone.price + novel.price * 3 + 104.8 + 15.0,
      isPaid: false,
      isDelivered: false,
    });

    console.log("Sample orders created");
    console.log("All test data created successfully!");

    // Return created data for reference
    return {
      users: { admin, john, jane },
      categories: { electronics, clothing, books, homeDecor },
      products: { laptop, phone, jeans, novel, lamp },
      orders: { order1, order2 },
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
  console.log("Electronics Category ID:", data.categories.electronics._id);
  console.log("MacBook Pro ID:", data.products.laptop._id);
  console.log("John's Order ID:", data.orders.order1._id);

  // Disconnect from MongoDB
  mongoose.disconnect();
})();
