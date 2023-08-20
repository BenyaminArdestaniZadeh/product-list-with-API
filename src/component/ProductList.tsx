import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";

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
              <div className="items-content">
                <a href="">
                  <img
                    src={`https://portal.remasgallery.com/Images/Contents/${product.ImageUrl}`}
                    alt={product.ProductName}
                  />
                </a>
                <ul className="information">
                  <li>
                    <a href="#">{product.CategoryTitle}</a>
                  </li>
                  <li>{product.ProductName}</li>
                  <li>{product.SumSubProductPrice} تومان</li>
                  <li id="logo">
                    <FontAwesomeIcon icon={faPercent} />
                  </li>
                  <li id="id">{product.Product_Id}</li>
                  <li>{product.InStock}</li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

// https://portal.remasgallery.com/Images/Contents
