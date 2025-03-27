import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Star,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      {/* Header/Navigation */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">
                  F
                </span>
              </div>
              <span className="font-heading font-bold text-xl text-primary-900">
                FastBreak
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#about"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                How It Works
              </Link>
              <Link
                href="#menu"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                Menu
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                Contact
              </Link>
            </nav>
            <div className="hidden md:block">
              <button className="btn-primary">Order Now</button>
            </div>
            <button className="md:hidden text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1533089860892-a9c9f5aa2b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Breakfast pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container-custom relative z-10 min-h-[90vh] flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 py-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Breakfast Delivered{" "}
                <span className="text-primary-200">Right to Your Campus</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg">
                FastBreak delivers fresh, delicious breakfast and snacks to
                university students. Skip the lines, save time, and fuel your
                day with nutritious options.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn-primary bg-primary-300 hover:bg-primary-400 text-primary-900">
                  Order Now
                </button>
                <button className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                  View Menu
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${i}`}
                        alt="User"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary-200 text-primary-200"
                      />
                    ))}
                  </div>
                  <p className="text-sm">Trusted by 1000+ students</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1533089860892-a9c9f5aa2b42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Breakfast spread"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">
                      Average Delivery Time
                    </p>
                    <p className="text-gray-900 font-bold">15-20 minutes</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Campus Coverage</p>
                    <p className="text-gray-900 font-bold">100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About FastBreak
            </h2>
            <p className="text-gray-600 text-lg">
              We're on a mission to make healthy, delicious breakfast accessible
              to busy university students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Team preparing food"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-500 p-6 rounded-lg shadow-lg">
                <p className="text-white font-heading font-bold text-5xl">5+</p>
                <p className="text-white">Years Experience</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-900">
                Our Story
              </h3>
              <p className="text-gray-600">
                FastBreak was founded in 2018 by a group of university students
                who were frustrated with the lack of healthy, quick breakfast
                options on campus. We started with a simple idea: deliver
                nutritious breakfast to students who are rushing to morning
                classes.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of students across multiple campuses,
                providing them with the fuel they need to excel in their studies
                and activities.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-1">Fresh Ingredients</h4>
                  <p className="text-gray-600 text-sm">
                    We source locally and prepare daily
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-1">Quick Delivery</h4>
                  <p className="text-gray-600 text-sm">
                    15-20 minute delivery time
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-1">Affordable</h4>
                  <p className="text-gray-600 text-sm">
                    Student-friendly pricing
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-lg mb-1">Customizable</h4>
                  <p className="text-gray-600 text-sm">
                    Dietary preferences respected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How FastBreak Works
            </h2>
            <p className="text-gray-600 text-lg">
              Getting your breakfast delivered is as easy as 1-2-3. Here's how
              our service works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 left-8">
                1
              </div>
              <div className="pt-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Order via App</h3>
                <p className="text-gray-600">
                  Download our app, browse the menu, and place your order with
                  just a few taps.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 left-8">
                2
              </div>
              <div className="pt-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">We Prepare</h3>
                <p className="text-gray-600">
                  Our team prepares your order fresh with high-quality
                  ingredients.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 left-8">
                3
              </div>
              <div className="pt-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  Our delivery team brings your order to your specified campus
                  location.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="btn-primary inline-flex items-center gap-2">
              Download Our App
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Popular Menu
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our most popular breakfast and snack options loved by
              students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Avocado Toast",
                description:
                  "Smashed avocado on whole grain toast with cherry tomatoes and microgreens",
                price: "$6.99",
                image:
                  "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                tags: ["Vegetarian", "Protein"],
              },
              {
                name: "Breakfast Burrito",
                description:
                  "Scrambled eggs, black beans, cheese, and salsa wrapped in a whole wheat tortilla",
                price: "$7.99",
                image:
                  "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                tags: ["High Protein", "Filling"],
              },
              {
                name: "Greek Yogurt Bowl",
                description:
                  "Greek yogurt topped with granola, fresh berries, and honey",
                price: "$5.99",
                image:
                  "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                tags: ["Protein", "Low Sugar"],
              },
              {
                name: "Smoothie Bowl",
                description:
                  "Blended açai, banana, and berries topped with granola and fresh fruit",
                price: "$8.99",
                image:
                  "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                tags: ["Vegan", "Antioxidants"],
              },
              {
                name: "Egg & Cheese Sandwich",
                description:
                  "Fried egg with cheddar cheese on a toasted English muffin",
                price: "$5.49",
                image:
                  "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                tags: ["Classic", "Quick"],
              },
              {
                name: "Fruit & Nut Mix",
                description:
                  "Assorted dried fruits, nuts, and dark chocolate pieces",
                price: "$4.49",
                image:
                  "https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                tags: ["Snack", "Energy Boost"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="bg-primary-200 text-primary-900 px-3 py-1 rounded-full text-sm font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full btn-primary bg-primary-500 text-white py-2">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800"
            >
              View Full Menu
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="section-padding bg-primary-900 text-white"
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Students Say
            </h2>
            <p className="text-white/80 text-lg">
              Don't just take our word for it. Here's what students on campus
              are saying about FastBreak.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Engineering Student",
                quote:
                  "FastBreak has been a lifesaver during my 8 AM classes. I can order on my way and have breakfast waiting for me when I arrive.",
                avatar: "/placeholder.svg?height=80&width=80&text=AJ",
              },
              {
                name: "Sophia Chen",
                role: "Business Major",
                quote:
                  "The quality and variety of options is impressive. I love that I can customize my order to fit my dietary preferences.",
                avatar: "/placeholder.svg?height=80&width=80&text=SC",
              },
              {
                name: "Marcus Williams",
                role: "Computer Science Student",
                quote:
                  "Fast delivery, great food, and excellent customer service. FastBreak has become part of my daily routine.",
                avatar: "/placeholder.svg?height=80&width=80&text=MW",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-800 p-8 rounded-xl relative"
              >
                <div className="absolute -top-5 left-8">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-11.983 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
                <div className="pt-6">
                  <p className="text-white/90 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-white/70 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary-200 text-primary-200"
                  />
                ))}
              </div>
              <span className="font-medium">
                4.9 out of 5 based on 200+ reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-400 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Fuel Your Day?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Download the FastBreak app now and get your first delivery free.
                Use code WELCOME at checkout.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary-700 font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.707 10.708L16.293 9.294l-2.293 2.293-2.293-2.293-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414-2.293-2.293 2.293-2.293zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                  </svg>
                  App Store
                </button>
                <button className="bg-white text-primary-700 font-medium py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.293-.707V2.521c0-.265.106-.52.293-.707zM14.5 12.707l2.302 2.302-8.3 4.964 5.998-7.266zm0-1.414l-5.998-7.266 8.3 4.964-2.302 2.302zM16.803 16.491L20.299 12l-3.496-4.491A1 1 0 0 1 17 6.58v10.84a1 1 0 0 1-.197.93z" />
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary-300 rounded-full opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary-600 rounded-full opacity-30"></div>
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=400&text=App+Screenshot"
                  alt="FastBreak App"
                  width={400}
                  height={600}
                  className="rounded-3xl shadow-2xl border-8 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions or feedback? We'd love to hear from you. Reach
                out to our team.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 University Ave, Campus Center, Suite 101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600">hello@fastbreak.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Operating Hours</h3>
                    <p className="text-gray-600">
                      Monday-Friday: 7:00 AM - 3:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday-Sunday: 8:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="font-bold text-xl mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-xl">
                    F
                  </span>
                </div>
                <span className="font-heading font-bold text-xl text-white">
                  FastBreak
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Delivering fresh, delicious breakfast and snacks to university
                students on campus.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#menu"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Delivery Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for promotions and updates.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                  placeholder="Your email address"
                />
                <button
                  type="submit"
                  className="btn-primary w-full bg-primary-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} FastBreak. All rights
                reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
