export const getProductList = async () => {
  const responce = await fetch(`
  https://api.remasgallery.com/Product/GetProductByFilter  
  `);
  return await responce.json();
};

export const getProductDetails = async (detailsId: number) => {
  const responce = await fetch(
    `https://api.remasgallery.com/Product/ProductDetail?id=${detailsId}`
  );
  return await responce.json();
};
