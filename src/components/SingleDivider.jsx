import { logoSymbol } from "../assets";

const SingleDivider = () => {
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
      <div className="overflow-hidden">
        <div className="overflow-x-hidden bg-gray-300 wrapper second ">
          <div className="flex gap-3 w-fit">{myArray}</div>
        </div>
      </div>
    </section>
  );
};

export default SingleDivider;
