import React from "react";
import logo from "../assets/logo.svg";

const Artist: React.FC<{}> = () => {
  return (
    <section className="w-full lg:w-1/2 p-3 lg:overflow-auto h-full">
      <header className="flex items-center justify-start">
        <img src={logo} alt="Medici" className="fixed top-3 left-3" />
        <span className="flex-1 text-center">Drop No 1</span>
      </header>
      <div>
        <h1 className="text-5xl py-8">Speculations</h1>
        <div className="flex justify-between border-b border-slate-300/25 pb-4">
          <h4 className="text-xl w-1/3">
            BY <br className="lg:hidden" /> SARAH MEYOHAS
          </h4>
          <h4 className="text-xl flex-1">An artist cutting a path through</h4>
        </div>
        <div className="font-[lora] py-4 text-xl">
          <p>
            "This series was initially conceived for BitchCoin, a cryptocurrency
            as an artwork that playfully constructed value. The coin needed to
            be backed by a photograph, and this photograph needed to create
            value visually, deliberately, and perhaps with an illusory expansion
            of space to reference “mining” and the idea of gold.
          </p>

          <p>
            This series of photographs is ongoing. After all, these images
            literally never end. And while the themes of infinity, reflection,
            and illusion are conceptually vast, it is also the act of
            photographing — to look at a mirror and instead of seeing myself,
            seeing a void — that is metaphysical."
          </p>
        </div>
      </div>
      <div className="py-4 flex flex-col items-center w-1/2 lg:w-full mx-auto">
        <img src="https://artlogic-res.cloudinary.com/w_750,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0280/usr/exhibitions/images/feature_panels/59/blue_smoke_web.jpeg" />
        <div className="p-2">
          <p>
            The analogy that created the endless loop: reflection is a metaphor
            for value.
          </p>
          <p>
            Value is created through replacement. In an exchange, one is in the
            place of the other. As a result, the metaphor of reflection goes
            both ways. For Plato, the material reality is the reflection of the
            ideal form, while for Marx, the price is the reflection of the
            commodity. The light is caught bouncing between mirrors in an
            endless exchange — a specular relation. The photographs are titled
            Speculations.
          </p>
        </div>
      </div>
      <div className="border-t border-b border-slate-300/25 py-3">
        <h3 className="text-3xl italic font-[lora]">Details</h3>
        <p className="pt-8 text-sm">The recipient of this NFT will receive:</p>
        <ul className="list-disc list-inside leading-10 text-sm">
          <li>NFT</li>
          <li>NFT</li>
          <li>NFT</li>
        </ul>
        <div className="font-bold underline underline-offset-2 after:content-['→'] after:hover:translate-x-2 after:transition-transform after:inline-block after:duration-500">
          ETHERSCAN TX{" "}
        </div>
        <div className="font-bold underline underline-offset-2 after:content-['→'] after:hover:translate-x-2 after:transition-transform after:inline-block after:duration-500">
          IPFS{" "}
        </div>
      </div>
      <button className="block mt-8 mx-auto rounded-full text-3xl uppercase bg-zinc-700 h-16 w-80">
        Mint
      </button>
      <div className="mx-auto py-2 text-center">Price: 1 ETH</div>
    </section>
  );
};

export default Artist;
