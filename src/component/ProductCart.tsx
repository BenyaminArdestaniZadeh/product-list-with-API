import { Response } from "./ProductList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";

type Props = {
  data: Response | null;
};

export default function ProductCart({ data }: Props) {
  return (
    <>
      <div className="row-container">
        {data &&
          data.Content.GetAllSubProducts.map((product, index) => (
            <div key={index} className="items-content">
              <a href="">
                <img
                  src={`https://portal.remasgallery.com/Images/Contents/${product.ImageUrl}`}
                  alt={product.ProductName}
                />
              </a>
              <div className="information">
                <a href="#">{product.CategoryTitle}</a>
                <p>{product.ProductName}</p>
                <p>{product.SumSubProductPrice} تومان</p>
                <p id="logo">
                  <FontAwesomeIcon icon={faPercent} />
                </p>
                <p id="id">{product.Product_Id}</p>
                <p>{product.InStock}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

{
  /* <FontAwesomeIcon icon={faPercent} /> */
}
