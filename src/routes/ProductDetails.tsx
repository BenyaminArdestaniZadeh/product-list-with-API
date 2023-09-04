import { useLoaderData } from "react-router-dom";
import { imgUrl } from "../component/ProductCart";
import { getProductDetails } from "../api";
import "./detailsStyle.css";
import { DetailsResponse } from "../types/detailsType";

export const detailsLoader = async ({ params }) => {
  const detailsId = params.detailsId;
  const detail = await getProductDetails(detailsId);
  return { detail };
};

export default function ProductDetails() {
  const { detail }: DetailsResponse = useLoaderData();
  console.log(detail);

  return (
    <>
      <div className="details-container">
        <div className="img-container">
          <img
            src={imgUrl + detail.Content.ImageUrl}
            alt={detail.Content.ProductName}
          />
        </div>
        <div className="detail-informaition">
          <h1>
            {detail.Content.Name} <span>کد {detail.Content.ID}</span>
          </h1>
          <div className="details-content">
            <span className="dynamic-data-key">وزن </span>{" "}
            <span className="dynamic-data-value">
              {detail.Content.SumSubProductWeight} گرم
            </span>
          </div>
          <div className="details-content">
            <span className="dynamic-data-key">اجرت</span>
            <span className="dynamic-data-value">
              {detail.Content.CustomMade}
            </span>
          </div>
          <p className="price">{detail.Content.SumSubProductPrice} تومان</p>
        </div>
      </div>
    </>
  );
}
