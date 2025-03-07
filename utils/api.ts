import { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  return [
    {
      id: "1",
      name: "Bookshelf",
      rating: 3,
      price: 1537,
      description: "A luxurious and spacious modern sofa.",
      category: "Living Room",
      feature: { color: "Black", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "2",
      name: "Modern Sofa",
      rating: 3,
      price: 816,
      description: "A spacious and well-organized wardrobe.",
      category: "Outdoor",
      feature: { color: "Walnut", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/919602/pexels-photo-919602.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "3",
      name: "Modern Sofa",
      rating: 3,
      price: 1470,
      description: "A spacious and well-organized wardrobe.",
      category: "Living Room",
      feature: { color: "Walnut", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "4",
      name: "Wardrobe",
      rating: 3,
      price: 1317,
      description: "A spacious and well-organized wardrobe.",
      category: "Living Room",
      feature: { color: "Black", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "5",
      name: "Modern Sofa",
      rating: 3,
      price: 1004,
      description: "A set of two stylish bar stools with adjustable height.",
      category: "Study Room",
      feature: { color: "Beige", size: "Large" },
      image:
        "https://images.pexels.com/photos/1031030/pexels-photo-1031030.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "6",
      name: "Patio Set",
      rating: 3,
      price: 1095,
      description: "A set of two stylish bar stools with adjustable height.",
      category: "Bedroom",
      feature: { color: "Oak", size: "Medium" },
      image:
        "https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "7",
      name: "Modern Sofa",
      rating: 3,
      price: 401,
      description: "A weather-resistant patio set with seating for four.",
      category: "Kitchen",
      feature: { color: "Black", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "8",
      name: "Bar Stool Set",
      rating: 3,
      price: 501,
      description: "A spacious and well-organized wardrobe.",
      category: "Study Room",
      feature: { color: "Grey", size: "Large" },
      image:
        "https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "9",
      name: "Modern Sofa",
      rating: 3,
      price: 1191,
      description: "A luxurious and spacious modern sofa.",
      category: "Study Room",
      feature: { color: "Walnut", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/919602/pexels-photo-919602.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "10",
      name: "Modern Sofa",
      rating: 3,
      price: 277,
      description: "A contemporary TV stand with multiple storage sections.",
      category: "Dining Room",
      feature: { color: "Brown", size: "Medium" },
      image:
        "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "11",
      name: "Recliner Chair",
      rating: 3,
      price: 1283,
      description: "A comfortable recliner chair with plush cushions.",
      category: "Bedroom",
      feature: { color: "Cherry", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/919602/pexels-photo-919602.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "12",
      name: "Recliner Chair",
      rating: 3,
      price: 630,
      description: "A tall and spacious wooden bookshelf.",
      category: "Living Room",
      feature: { color: "Walnut", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "13",
      name: "Modern Sofa",
      rating: 3,
      price: 1385,
      description: "A classic dining table with six matching chairs.",
      category: "Outdoor",
      feature: { color: "Brown", size: "Medium" },
      image:
        "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "14",
      name: "Modern Sofa",
      rating: 3,
      price: 528,
      description: "A weather-resistant patio set with seating for four.",
      category: "Kitchen",
      feature: { color: "Cherry", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "15",
      name: "Recliner Chair",
      rating: 3,
      price: 1247,
      description: "A tall and spacious wooden bookshelf.",
      category: "Living Room",
      feature: { color: "Walnut", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "16",
      name: "Dining Table Set",
      rating: 3,
      price: 1192,
      description: "A spacious and well-organized wardrobe.",
      category: "Bedroom",
      feature: { color: "Black", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "17",
      name: "Bed Frame",
      rating: 3,
      price: 1231,
      description: "A weather-resistant patio set with seating for four.",
      category: "Living Room",
      feature: { color: "Walnut", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "18",
      name: "Wardrobe",
      rating: 3,
      price: 1029,
      description: "A comfortable recliner chair with plush cushions.",
      category: "Living Room",
      feature: { color: "Cherry", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "19",
      name: "Recliner Chair",
      rating: 3,
      price: 1466,
      description: "A classic dining table with six matching chairs.",
      category: "Dining Room",
      feature: { color: "Brown", size: "Medium" },
      image:
        "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "20",
      name: "Bookshelf",
      rating: 3,
      price: 1589,
      description: "A contemporary TV stand with multiple storage sections.",
      category: "Living Room",
      feature: { color: "White", size: "Medium" },
      image:
        "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "21",
      name: "Bookshelf",
      rating: 3,
      price: 1415,
      description: "A tall and spacious wooden bookshelf.",
      category: "Outdoor",
      feature: { color: "Mahogany", size: "Large" },
      image:
        "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "22",
      name: "Wardrobe",
      rating: 3,
      price: 436,
      description: "A sturdy and ergonomic office desk.",
      category: "Dining Room",
      feature: { color: "Black", size: "Small" },
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "23",
      name: "Dining Table Set",
      rating: 3,
      price: 167,
      description: "A weather-resistant patio set with seating for four.",
      category: "Outdoor",
      feature: { color: "Beige", size: "Large" },
      image:
        "https://images.pexels.com/photos/1031030/pexels-photo-1031030.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "24",
      name: "Office Desk",
      rating: 3,
      price: 819,
      description: "A weather-resistant patio set with seating for four.",
      category: "Study Room",
      feature: { color: "White", size: "Medium" },
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "25",
      name: "Recliner Chair",
      rating: 3,
      price: 393,
      description: "A weather-resistant patio set with seating for four.",
      category: "Living Room",
      feature: { color: "Black", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "26",
      name: "Bookshelf",
      rating: 3,
      price: 1488,
      description: "A tall and spacious wooden bookshelf.",
      category: "Study Room",
      feature: { color: "Oak", size: "Medium" },
      image:
        "https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "27",
      name: "Bar Stool Set",
      rating: 3,
      price: 407,
      description: "A contemporary TV stand with multiple storage sections.",
      category: "Office",
      feature: { color: "Grey", size: "Large" },
      image:
        "https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "28",
      name: "Recliner Chair",
      rating: 3,
      price: 685,
      description: "A contemporary TV stand with multiple storage sections.",
      category: "Living Room",
      feature: { color: "Brown", size: "Medium" },
      image:
        "https://images.pexels.com/photos/919602/pexels-photo-919602.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "29",
      name: "Wardrobe",
      rating: 3,
      price: 259,
      description: "A set of two stylish bar stools with adjustable height.",
      category: "Office",
      feature: { color: "Grey", size: "Large" },
      image:
        "https://images.pexels.com/photos/1031030/pexels-photo-1031030.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "30",
      name: "Dining Table Set",
      rating: 3,
      price: 1513,
      description: "A weather-resistant patio set with seating for four.",
      category: "Kitchen",
      feature: { color: "Grey", size: "Large" },
      image:
        "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "31",
      name: "Office Desk",
      rating: 3,
      price: 538,
      description: "A spacious and well-organized wardrobe.",
      category: "Office",
      feature: { color: "Black", size: "Small" },
      image:
        "https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "32",
      name: "Recliner Chair",
      rating: 3,
      price: 1008,
      description: "A set of two stylish bar stools with adjustable height.",
      category: "Bedroom",
      feature: { color: "Walnut", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "33",
      name: "Recliner Chair",
      rating: 3,
      price: 660,
      description: "A sturdy and ergonomic office desk.",
      category: "Outdoor",
      feature: { color: "Beige", size: "Large" },
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "34",
      name: "Bookshelf",
      rating: 3,
      price: 638,
      description: "A sturdy and ergonomic office desk.",
      category: "Dining Room",
      feature: { color: "Mahogany", size: "Large" },
      image:
        "https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "35",
      name: "Wardrobe",
      rating: 3,
      price: 241,
      description: "A spacious and well-organized wardrobe.",
      category: "Kitchen",
      feature: { color: "Grey", size: "Large" },
      image:
        "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "36",
      name: "Wardrobe",
      rating: 3,
      price: 1028,
      description: "A tall and spacious wooden bookshelf.",
      category: "Kitchen",
      feature: { color: "Black", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "37",
      name: "Patio Set",
      rating: 3,
      price: 103,
      description: "A classic dining table with six matching chairs.",
      category: "Office",
      feature: { color: "Black", size: "Extra Large" },
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "38",
      name: "Office Desk",
      rating: 3,
      price: 1222,
      description: "A classic dining table with six matching chairs.",
      category: "Bedroom",
      feature: { color: "Mahogany", size: "Large" },
      image:
        "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "39",
      name: "Recliner Chair",
      rating: 3,
      price: 858,
      description: "A contemporary TV stand with multiple storage sections.",
      category: "Bedroom",
      feature: { color: "Mahogany", size: "Large" },
      image:
        "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "40",
      name: "Modern Sofa",
      rating: 3,
      price: 370,
      description: "A weather-resistant patio set with seating for four.",
      category: "Study Room",
      feature: { color: "Oak", size: "Medium" },
      image:
        "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  // const response = await fetch("https://www.fakeproducts.com");
  // const data = await response.json();
  // return data.products;
};

export const getProductByID = async (
  id: string
): Promise<Product | undefined> => {
  try {
    const products = await getProducts();
    const product = products.find(
      (product: { id: string }) => product.id === id || null
    );
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return undefined; // Return undefined if an error occurs
  }
};

export const getTestimonials = async () => {
  // const response = await fetch("https://www.fakeproducts.com");
  // const data = await response.json();
  // return data.testimonials;
  return [
    {
      id: "1",
      name: "John Doe",
      testimonial: "I love this product! It's amazing.",
      image: "https://example.com/image1.jpg",
      review:
        "Javascript has a <. length> property that returns the size of an array as a number(integer). In the above code, a variable with the name numbers stores an array of numbers, while the variable numberSize stores the number of elements present in the array by using the method . length ",
      rating: 5,
    },
    {
      id: "2",
      name: "Mark Doe",
      testimonial: "I love this product! It's amazing.",
      image: "https://example.com/image1.jpg",
      review:
        "Javascript has a <. length> property that returns the size of an array as a number(integer). In the above code, a variable with the name numbers stores an array of numbers, while the variable numberSize stores the number of elements present in the array by using the method . length ",
      rating: 4,
    },
    {
      id: "3",
      name: "Jack Doe",
      testimonial: "I love this product! It's amazing.",
      image: "https://example.com/image1.jpg",
      review:
        "Javascript has a <. length> property that returns the size of an array as a number(integer). In the above code, a variable with the name numbers stores an array of numbers, while the variable numberSize stores the number of elements present in the array by using the method . length ",
      rating: 3,
    },
    {
      id: "4",
      name: "Slough Doe",
      testimonial: "I love this product! It's amazing.",
      image: "https://example.com/image1.jpg",
      review:
        "Javascript has a <. length> property that returns the size of an array as a number(integer). In the above code, a variable with the name numbers stores an array of numbers, while the variable numberSize stores the number of elements present in the array by using the method . length ",
      rating: 4,
    },
    {
      id: "5",
      name: "Henry Doe",
      testimonial: "I love this product! It's amazing.",
      image: "https://example.com/image1.jpg",
      review:
        "Javascript has a <. length> property that returns the size of an array as a number(integer). In the above code, a variable with the name numbers stores an array of numbers, while the variable numberSize stores the number of elements present in the array by using the method . length ",
      rating: 5,
    },
  ];
};

// const product_names = [
//   "Modern Sofa",
//   "Dining Table Set",
//   "Office Desk",
//   "Bookshelf",
//   "Bed Frame",
//   "TV Stand",
//   "Patio Set",
//   "Recliner Chair",
//   "Bar Stool Set",
//   "Wardrobe",
// ];

// const descriptions = [
//   "A luxurious and spacious modern sofa.",
//   "A classic dining table with six matching chairs.",
//   "A sturdy and ergonomic office desk.",
//   "A tall and spacious wooden bookshelf.",
//   "A king-sized bed frame with a modern design.",
//   "A contemporary TV stand with multiple storage sections.",
//   "A weather-resistant patio set with seating for four.",
//   "A comfortable recliner chair with plush cushions.",
//   "A set of two stylish bar stools with adjustable height.",
//   "A spacious and well-organized wardrobe.",
// ];

// const categories = [
//   "Living Room",
//   "Dining Room",
//   "Office",
//   "Study Room",
//   "Bedroom",
//   "Outdoor",
//   "Kitchen",
// ];

// const features = [
//   { color: "Grey", size: "Large" },
//   { color: "Walnut", size: "Extra Large" },
//   { color: "Oak", size: "Medium" },
//   { color: "Mahogany", size: "Large" },
//   { color: "Black", size: "Extra Large" },
//   { color: "White", size: "Medium" },
//   { color: "Beige", size: "Large" },
//   { color: "Brown", size: "Medium" },
//   { color: "Black", size: "Small" },
//   { color: "Cherry", size: "Extra Large" },
// ];

// const image_links = [
//   "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/1031030/pexels-photo-1031030.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/919602/pexels-photo-919602.jpeg?auto=compress&cs=tinysrgb&w=600",
// ];

export const category = [
  "All",
  "Modern Sofa",
  "Outdoor",
  "Bedroom",
  "Bathroom",
  "Living Room",
];

export const priceRanges = [
  { label: "All", range: [0,0] },
  { label: "$500 - $1000", range: [500, 1000] },
  { label: "$1000 - $1500", range: [1000, 1500] },
  { label: "$1500 - $2000", range: [1500, 2000] },
  { label: "$2000 - $10000", range: [2000, 10000] },
  { label: "$1000 - $50000", range: [10000, 50000] },
];
