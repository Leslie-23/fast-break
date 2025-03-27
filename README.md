# **Food Delivery App API Documentation**

## **1. Authentication & User Roles (JWT-based)**

- `POST /api/auth/register` → Register as a **buyer** or **seller**.
- `POST /api/auth/login` → Authenticate and return JWT.
- `POST /api/auth/logout` → Invalidate JWT token.
- `GET /api/auth/profile` → Fetch user profile.
- `PUT /api/auth/update-profile` → Update profile details.
- `GET /api/auth/users` → (Admin) Fetch all users.

---

## **2. Seller (Shops/Restaurants) Management**

- `POST /api/sellers/register` → Register a **new seller account** (restaurant/shop).
- `GET /api/sellers` → Retrieve all **registered sellers**.
- `GET /api/sellers/:id` → Fetch details of a specific seller.
- `PUT /api/sellers/:id` → Update seller profile.
- `DELETE /api/sellers/:id` → Remove seller (admin action).

---

## **3. Menu & Food Management (Seller Controls Own Menu)**

- `POST /api/sellers/:sellerId/menu` → **Seller creates a menu item**.
- `GET /api/sellers/:sellerId/menu` → Fetch **all menu items** of a seller.
- `GET /api/menu/:itemId` → Fetch **details of a specific food item**.
- `PUT /api/menu/:itemId` → **Seller updates their menu item**.
- `DELETE /api/menu/:itemId` → **Seller deletes a menu item**.

---

## **4. Orders & Buyer Checkout**

- `POST /api/orders` → Buyer places an order.
- `GET /api/orders/user/:userId` → Fetch **order history** of a buyer.
- `GET /api/orders/seller/:sellerId` → Fetch **all orders for a seller’s shop**.
- `GET /api/orders/:orderId` → Fetch a specific order’s details.
- `PUT /api/orders/:orderId/cancel` → Buyer **cancels** an order (if not processed).
- `PUT /api/orders/:orderId/status` → Seller updates order status (**Pending → In Progress → Ready → Delivered**).

---

## **5. Payments (Flutterwave Integration)**

- `POST /api/payments/initialize` → Generate payment link.
- `POST /api/payments/verify` → Confirm payment and update order status.
- `GET /api/payments/user/:userId` → Fetch **payment history** of a buyer.
- `GET /api/payments/seller/:sellerId` → Fetch **seller’s earnings**.

---

## **6. Notifications (Socket.IO & Nodemailer)**

- `POST /api/notifications/send` → Send **email/SMS alerts** (for new orders, status updates).
- `GET /api/notifications` → Fetch user notifications.
- `DELETE /api/notifications/:id` → Remove a notification.
- **(WebSockets)** `ws://api/notifications` → **Real-time updates for orders & deliveries**.

---

## **7. Delivery Management**

- `GET /api/delivery/available-riders` → Fetch active **delivery personnel**.
- `POST /api/delivery/assign` → Assign a **rider to an order**.
- `GET /api/delivery/orders/:riderId` → Fetch **orders assigned to a rider**.
- `PUT /api/delivery/update/:orderId` → Update **delivery status**.

---

## **8. Admin Dashboard Controls**

- `GET /api/admin/overview` → Fetch **sales, orders, and analytics**.
- `GET /api/admin/users` → List all **registered users**.
- `DELETE /api/admin/user/:id` → Remove a **user or seller** (if necessary).

---

### **Key Changes & Benefits**:

✅ **Sellers (restaurants) manage their own menus** → No centralized menu control.  
✅ **Buyers (persons) can place orders** from multiple sellers.  
✅ **Sellers handle order processing & fulfillment**.  
✅ **Real-time notifications for order tracking** (WebSockets).  
✅ **Secure payment & transaction tracking** for buyers and sellers.

`Details`->`https://chatgpt.com/share/67e385d0-cef4-8001-8481-80d1f8679dc4`
