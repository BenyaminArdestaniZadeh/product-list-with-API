import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

export interface Response {
  Message: null;
  Success: boolean;
  Content: Content;
}

export interface Content {
  GetAllSubProducts: GetAllSubProduct[];
  PageNumber: number;
  TotalCount: number;
}

export interface GetAllSubProduct {
  Product_Id: number;
  ProductName: string;
  SumSubProductWeight: number;
  SumSubProductPrice: number;
  ImageUrl: string;
  InStock: boolean;
  IsLowPrice: boolean;
  IsDiscounted: boolean;
  MaxCustomMade: number;
  CategoryID: number;
  CategoryTitle: string;
}

export default function ProductList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.remasgallery.com/Product/GetProductByFilter"
      );
      const jsonData = await response.json();
      setData(jsonData);

      const cloneProducts = jsonData.Content.GetAllSubProducts.map(
        (item: GetAllSubProduct, index: number) => {
          index % 2 === 0 ? (item.InStock = false) : (item.InStock = true);
          item.InStock === true
            ? (item.IsDiscounted = true)
            : (item.IsDiscounted = false);
          return item;
        }
      );
      console.log(cloneProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="items-container">
        <h1>محصولات</h1>
        <ProductCart data={data} />
      </div>
    </>
  );
}
