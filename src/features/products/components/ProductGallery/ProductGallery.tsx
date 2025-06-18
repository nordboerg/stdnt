import { useMemo } from "react";
import { ProductGalleryItem } from "../ProductGalleryItem/ProductGalleryItem.tsx";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts, Product } from "../../../../services/products.service.ts";
import { VirtuosoGrid } from "react-virtuoso";

const LIMIT = 10;
const SKIP = 10;

export const ProductGallery = () => {
  const { data, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialPageParam: { limit: LIMIT, skip: 0 },
    getNextPageParam: (lastPage) => ({
      limit: LIMIT,
      skip: lastPage.skip + SKIP,
    }),
  });

  const productData = useMemo(() => {
    return (
      data?.pages.reduce<Product[]>(
        (products, page) => products.concat(page.products),
        [],
      ) ?? []
    );
  }, [data]);

  const totalCount = useMemo(() => data?.pages[0]?.total, [data]);

  return (
    <VirtuosoGrid
      style={{
        height: "calc(100vh - 272px)",
        width: "100vw",
        maxWidth: "1280px",
      }}
      listClassName="grid gap-4 md:grid-cols-3 sm:grid-cols-2 justify-center max-w-screen-xl"
      data={productData}
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
