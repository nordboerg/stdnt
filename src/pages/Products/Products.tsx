import { ProductGallery } from "../../features/products/components/ProductGallery/ProductGallery.tsx";

export const Products = () => (
  <section className="h-full max-w-screen-xl">
    <div className="text-5xl font-extralight text-black mb-20">
      <span>Home Office</span>
      <p>Essentials.</p>
    </div>

    <ProductGallery />

    <p className="text-4xl font-light mb-4">See more produce</p>
    <button className="bg-gray-200 px-8 py-2 rounded-full">
      <img
        src="/arrow-right.svg"
        alt="Arrow right icon"
        width={24}
        height={24}
      />
    </button>
  </section>
);
