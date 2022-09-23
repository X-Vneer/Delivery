import { BACFeaturesText } from "../constants";

const BACFeatures = ({ setIndex, lang }) => {
  return (
    <div>
      {lang === "En" && (
        <>
          <h1 className="text-[36px] uppercase mb-7  ">
            {BACFeaturesText.title}
          </h1>
          <ul>
            <li
              data-index={1}
              onClick={() => {
                setIndex(1);
              }}
              className="features-item "
            >
              <span className="text-gray-300 text-sm">01</span>
              {BACFeaturesText.feature1}
            </li>
            <li
              data-index={2}
              onClick={() => {
                setIndex(2);
              }}
              className="features-item"
            >
              <span className="text-gray-300 text-sm">02</span>
              {BACFeaturesText.feature2}
            </li>
            <li
              data-index={3}
              onClick={() => {
                setIndex(3);
              }}
              className="features-item"
            >
              <span className="text-gray-300 text-sm">03</span>
              {BACFeaturesText.feature3}
            </li>
            <li
              data-index={4}
              onClick={() => {
                setIndex(4);
              }}
              className="features-item"
            >
              <span className="text-gray-300 text-sm">04</span>
              {BACFeaturesText.feature4}
            </li>
          </ul>
        </>
      )}
      {lang === "Ar" && (
        <>
          <h1 className="text-[36px] uppercase mb-7  ">
            {BACFeaturesText.titleAR}
          </h1>
          <ul>
            <li
              data-index={1}
              onClick={() => {
                setIndex(1);
              }}
              className="features-item "
            >
              <span className="text-gray-300 text-sm">01</span>
              {BACFeaturesText.feature1AR}
            </li>
            <li
              data-index={2}
              onClick={() => {
                setIndex(2);
              }}
              className="features-item"
            >
              <span className="text-gray-300 text-sm">02</span>
              {BACFeaturesText.feature2AR}
            </li>
            <li
              data-index={3}
              onClick={() => {
                setIndex(3);
              }}
              className="features-item"
            >
              <span className="text-gray-300 text-sm">03</span>
              {BACFeaturesText.feature3AR}
            </li>
            <li
              data-index={4}
              onClick={() => {
                setIndex(4);
              }}
              className="features-item"
            >
              <span className="text-gray-300 text-sm">04</span>
              {BACFeaturesText.feature4AR}
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default BACFeatures;
