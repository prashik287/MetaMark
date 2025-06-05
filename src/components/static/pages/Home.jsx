import React from "react";

function Home() {
  return (
    <div
      className="relative flex flex-col bg-[#162013] dark overflow-y-scroll font-[Manrope,_'Noto_Sans',_sans-serif] min-h-screen mt-[30vh] md:mt-[8vh] md:w-screen"
      style={{ WebkitOverflowScrolling: "touch", height: "100vh" }} // smooth scroll on iOS/Android
    >
      <div className="layout-container flex flex-col grow min-h-full">
        <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div>
              <div className="flex flex-col gap-6 px-4 py-10 sm:gap-8 md:flex-row">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl md:h-auto md:min-w-[400px] lg:w-full"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAe7-Q6z9aJKvNbeUeApJ21ppUU9fGxkrSh81JbkiPeqtVID0oW906mynlUNpYDPKv9SToyr93FPBzbRPfkRl17d9aYmY_7L2ZqQRK9dGZBJDMSVE61ptBhDHkFMhN24IVBOHv6GAJvbCER60_hWqc4c2i23irgiMSRkhD7_6rMporcXmmh3gXKt7CS5uqp2WaEu3rn6QA17mj8-8Ksl3Rn-U2NPaU8m8kci1ot1YuOl6pY_ZfEOLa72oiIYbxJj0Pj-LpDO_11PY4")`,
                  }}
                ></div>

                <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 lg:justify-center">
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                      Verify Product Authenticity with MetaMark
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal md:text-base">
                      Scan barcodes to instantly check if a product is genuine using blockchain technology. Protect yourself from counterfeits and ensure you're getting the real
                      deal.
                    </h2>
                  </div>

                  <button className="flex min-w-[84px] max-w-[480px]  cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#53d22c] text-[#162013] text-sm font-bold md:text-base" style={{ textDecoration:"none",color:'inherit'}}>
                    <span className="truncate ">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
