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
  const [data, setData] = useState<Response | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.remasgallery.com/Product/GetProductByFilter"
      );
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="items-container">
        <h1>محصولات</h1>
        <ProductCart data={data} />
      </div>
    </>
  );
}
