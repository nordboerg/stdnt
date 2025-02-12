import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className="grow h-screen max-h-screen px-20 py-12 bg-gray-100">
        <section className="h-full">
          <div className="text-5xl font-extralight text-black mb-20">
            <span>Home Office</span>
            <p>Essentials.</p>
          </div>
          <div className="mb-32 flex gap-4">
            <div className="bg-gray-200 p-4 flex flex-col gap-4 w-fit">
              <div className="flex items-center justify-between">
                <span className="text-sm bg-orange-100/60 px-4 py-1 rounded-full">
                  Some badge
                </span>
                <button className="text-sm bg-white/60 px-4 py-1 rounded-full">
                  Customize
                </button>
              </div>
              <Image
                src="https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-modern-wooden-desk-desk-png-image_10294080.png"
                alt="Desk image"
                width={400}
                height={400}
              />
              <div className="bg-white p-3 gap-3 flex items-center">
                <div>
                  <p className="font-medium">Standing Desk</p>
                  <p className="text-sm text-gray-400">From $990.00</p>
                </div>
                <div className="w-px self-stretch bg-gray-400 ml-auto" />
                <Image
                  src="/shopping-cart.svg"
                  alt="Shopping cart icon"
                  className="mr-2 ml-1"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="bg-gray-200 p-4 flex flex-col gap-4 w-fit">
              <div className="flex items-center justify-between">
                <span className="text-sm bg-orange-100/60 px-4 py-1 rounded-full">
                  Some badge
                </span>
                <button className="text-sm bg-white/60 px-4 py-1 rounded-full">
                  Customize
                </button>
              </div>
              <Image
                src="https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-modern-wooden-desk-desk-png-image_10294080.png"
                alt="Desk image"
                width={400}
                height={400}
              />
              <div className="bg-white p-3 gap-3 flex items-center">
                <div>
                  <p className="font-medium">Standing Desk</p>
                  <p className="text-sm text-gray-400">From $990.00</p>
                </div>
                <div className="w-px self-stretch bg-gray-400 ml-auto" />
                <Image
                  src="/shopping-cart.svg"
                  alt="Shopping cart icon"
                  className="mr-2 ml-1"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="bg-gray-200 p-4 flex flex-col gap-4 w-fit">
              <div className="flex items-center justify-between">
                <span className="text-sm bg-orange-100/60 px-4 py-1 rounded-full">
                  Some badge
                </span>
                <button className="text-sm bg-white/60 px-4 py-1 rounded-full">
                  Customize
                </button>
              </div>
              <Image
                src="https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-modern-wooden-desk-desk-png-image_10294080.png"
                alt="Desk image"
                width={400}
                height={400}
              />
              <div className="bg-white p-3 gap-3 flex items-center">
                <div>
                  <p className="font-medium">Standing Desk</p>
                  <p className="text-sm text-gray-400">From $990.00</p>
                </div>
                <div className="w-px self-stretch bg-gray-400 ml-auto" />
                <Image
                  src="/shopping-cart.svg"
                  alt="Shopping cart icon"
                  className="mr-2 ml-1"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <p className="text-4xl font-light mb-4">See more produce</p>
          <button className="bg-gray-200 px-8 py-2 rounded-full">
            <Image
              src="/arrow-right.svg"
              alt="Arrow right icon"
              width={24}
              height={24}
            />
          </button>
        </section>
      </main>
    </>
  );
}
