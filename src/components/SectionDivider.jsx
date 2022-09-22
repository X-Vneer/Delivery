import { logoSymbol } from "../assets";

const SectionDivider = () => {
  let myArray = [];
  for (let i = 0; i < 25; i++) {
    const ele = (
      <div
        key={i}
        className="cursor-default flex gap-4 items-center w-[150px] py-2 lg:py-3"
      >
        <p className="text-white font-bold text-lg">Delivery</p>
        <img src={logoSymbol} className="h-10" alt="logosymbol" />
      </div>
    );
    myArray.push(ele);
  }

  return (
    <section>
      <div className="py-20 overflow-hidden">
        <div className="overflow-x-hidden bg-secondry rotate-[4deg] md:rotate-3 lg:rotate-2  wrapper ">
          <div className="flex gap-3 w-fit">{myArray}</div>
        </div>
        <div className="overflow-x-hidden bg-main -mt-[55px] -rotate-[4deg] md:-rotate-3 lg:-rotate-2 wrapper second ">
          <div className="flex gap-3 w-fit">{myArray}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionDivider;
