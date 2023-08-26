import { Response } from "./ProductList";

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
                  {product.InStock === true ? "موجود می باشد" : "اتمام موجودی"}
                </p>
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
