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
                  <img src={`https://portal.remasgallery.com/Images/Contents/${product.ImageUrl}`} alt={product.ProductName} />
                </a>
                <div className="information">
                  <a href="#">{product.CategoryTitle}</a>
                  <p>{product.ProductName}</p>
                  <p>{product.SumSubProductPrice}</p>
                  <span id="logo">
                    <FontAwesomeIcon icon={faPercent} />
                  </span>
                  <p id="id">{product.Product_Id}</p>
                  <p>{product.InStock}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

// https://portal.remasgallery.com/Images/Contents