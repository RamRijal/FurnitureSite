export const getProducts = async () => {
  // const response = await fetch("https://www.fakeproducts.com");
  // const data = await response.json();
  // return data.data;
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
};

export const getProductByID = async (id: string) => {
  const products = await getProducts();
  const product = products.find(
    (product: { id: string }) => product.id === id || null
  );
  return product;
};
