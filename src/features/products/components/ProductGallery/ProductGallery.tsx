import { Fragment } from "react";
import { ProductGalleryItem } from "../ProductGalleryItem/ProductGalleryItem.tsx";

export const ProductGallery = () => (
  <div className="mb-32 grid gap-4 grid-cols-3">
    {Array(10)
      .fill(0)
      .map((_, i) => (
        <Fragment key={i}>
          <ProductGalleryItem />
        </Fragment>
      ))}
  </div>
);
