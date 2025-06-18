import { useMemo } from "react";
import { ProductGalleryItem } from "../ProductGalleryItem/ProductGalleryItem.tsx";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts, Product } from "../../../../services/products.service.ts";
import { VirtuosoGrid } from "react-virtuoso";
import { useProductsQueryData } from "../../hooks/useProductsQueryData.tsx";

const LIMIT = 10;
const SKIP = 10;

export const ProductGallery = () => {
  const { data, isFetching, totalCount, fetchNextPage } = useProductsQueryData(
    LIMIT,
    SKIP,
  );

  return (
    <VirtuosoGrid
      style={{
        height: "calc(100vh - 272px)",
        width: "100vw",
        maxWidth: "1280px",
      }}
      listClassName="grid gap-4 md:grid-cols-3 sm:grid-cols-2 justify-center max-w-screen-xl"
      data={data}
      totalCount={totalCount}
      endReached={() => fetchNextPage()}
      increaseViewportBy={200}
      itemContent={(_, product) => <ProductGalleryItem product={product} />}
      components={{
        Footer: () =>
          isFetching ? (
            <div className="flex justify-center p-8 ">Loading...</div>
          ) : null,
      }}
    />
  );
};
