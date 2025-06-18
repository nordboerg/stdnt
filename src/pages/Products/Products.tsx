import { ProductGallery } from "../../features/products/components/ProductGallery/ProductGallery.tsx";

export const Products = () => (
  <section className="h-full w-screen-xl">
    <div className="text-5xl font-extralight text-black mb-20">
      <span>Home Office</span>
      <p>Essentials.</p>
    </div>

    <ProductGallery />
  </section>
);
