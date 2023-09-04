import ProductCart from "./ProductCart";
import { useLoaderData } from "react-router-dom";
import { getProductList } from "../api";
import { GetAllSubProduct } from "../types/listType";

type ListType = unknown | any;

export const listLoader = async () => {
  const list = await getProductList();
  return { list };
};

export default function ProductList() {
  const { list }: ListType = useLoaderData();

  const cloneProducts = list.Content.GetAllSubProducts.map(
    (item: GetAllSubProduct, index: number) => {
      index % 2 === 0 ? (item.InStock = false) : (item.InStock = true);
      item.InStock === true
        ? (item.IsDiscounted = true)
        : (item.IsDiscounted = false);
      return item;
    }
  );
  console.log(cloneProducts);

  return (
    <>
      <div className="items-container">
        <h1>محصولات</h1>
        <ProductCart list={list} />
      </div>
    </>
  );
}
