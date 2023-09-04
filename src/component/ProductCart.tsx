import { GetAllSubProduct } from "../types/listType";
import { Link } from "react-router-dom";



type Props = {
  list: Response | null;
};

export const imgUrl = "https://portal.remasgallery.com/Images/Contents/";

export default function ProductCart({ list }: Props) {
  return (
    <>
      <div className="row-container">
        {list &&
          list.Content.GetAllSubProducts.map(
            (product: GetAllSubProduct, index: number) => (
              <div key={index} className="items-content">
                <Link to={`ProductDetails/${product.Product_Id}`}>
                  <img
                    src={imgUrl + `${product.ImageUrl}`}
                    alt={product.ProductName}
                  />
                </Link>
                <div className="information">
                  <a href="#">{product.CategoryTitle}</a>
                  <p>{product.ProductName}</p>
                  <p>{product.SumSubProductPrice} تومان</p>
                  <p
                    className={
                      product.IsDiscounted === true
                        ? "discount-show"
                        : "remove-discount"
                    }
                  >
                    {product.IsDiscounted === true ? "%" : ""}
                  </p>
                  <p id="id">{product.Product_Id}</p>
                  <p
                    className={
                      product.InStock === true
                        ? "available-inStock"
                        : "not-available-inStock"
                    }
                  >
                    {product.InStock === true
                      ? "موجود می باشد"
                      : "اتمام موجودی"}
                  </p>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
}

