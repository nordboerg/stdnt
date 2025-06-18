import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts, Product } from "../../../services/products.service.ts";
import { useMemo } from "react";

export const useProductsQueryData = (limit: number, skip: number) => {
  const { data, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialPageParam: { limit, skip: 0 },
    getNextPageParam: (lastPage) => ({
      limit,
      skip: lastPage.skip + skip,
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

  return {
    data: productData,
    totalCount,
    isFetching,
    fetchNextPage,
  };
};
