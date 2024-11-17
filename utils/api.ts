export const getProducts = async () => {
  return [
    {
      id: "1",
      name: "Product A",
      price: 50,
      description: "A stylish and comfortable chair.",
      category: "Furniture",
      feature: {
        color: "Red",
        size: "Medium",
      },
    },
    {
      id: "2",
      name: "Product B",
      price: 75,
      description: "A durable and spacious table.",
      category: "Furniture",
      feature: {
        color: "Brown",
        size: "Large",
      },
    },
    {
      id: "3",
      name: "Product C",
      price: 100,
      description: "A sleek and modern lamp.",
      category: "Decor",
      feature: {
        color: "White",
        size: "Small",
      },
    },
    {
      id: "4",
      name: "Product D",
      price: 150,
      description: "A versatile and portable bookshelf.",
      category: "Furniture",
      feature: {
        color: "Black",
        size: "Medium",
      },
    },
    {
      id: "5",
      name: "Product E",
      price: 200,
      description: "A premium-quality recliner sofa.",
      category: "Furniture",
      feature: {
        color: "Blue",
        size: "Large",
      },
    },
  ];
  // const response = await fetch("https://www.fakeproducts.com");
  // const data = await response.json();
  // return data.products;
};

export const getProductByID = async (id: string) => {
  const products = await getProducts();
  const product = products.find(
    (product: { id: string }) => product.id === id || null
  );
  return product;
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
