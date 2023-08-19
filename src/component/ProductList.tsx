import { useEffect, useState } from "react";

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
        <div className="row-container">
          {data &&
            data.Content.GetAllSubProducts.map((product) => (
              <div className="item-content">
                <img src={product.ImageUrl} alt="" />
                <div className="information">
                  <p>{product.CategoryTitle}</p>
                  <p>{product.ProductName}</p>
                  <p>{product.SumSubProductPrice}</p>
                  <p>{product.InStock}</p>
                </div>
              </div>
            ))}
          {/* <a href="#">
              <img
                src="https://st2.depositphotos.com/5906102/12446/v/950/depositphotos_124469958-stock-illustration-realistic-shining-green-emerald-jewel.jpg"
                alt=""
              />
              <div className="information">
                <p>category</p>
                <p>name</p>
                <p>price</p>
                <p>mojodi</p>
                <p id="id">id</p>
                <p id="logo">log</p>
              </div>
            </a> */}
        </div>
      </div>
    </>
  );
}
