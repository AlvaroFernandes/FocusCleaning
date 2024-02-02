import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ModalFormQuote = () => {
  const [bed, setBed] = useState("");
  const [bathOptions, setBathOptions] = useState([]);
  const [bath, setBath] = useState("");

  const handleBedNum = (e) => {
    const bedNum = e.target.value;
    setBed(bedNum);

    // Update options for the second select based on the selected value of the first select
    if (bedNum === "1") {
      setBathOptions(["1"]);
      setBath("");
    } else if (bedNum === "2") {
      setBathOptions(["1", "2"]);
      setBath("");
    } else if (bedNum === "3") {
      setBathOptions(["1", "2"]);
      setBath("");
    } else if (bedNum === "4") {
      setBathOptions(["2", "3"]);
      setBath("");
    } else if (bedNum === "5") {
      setBathOptions(["3", "4"]);
      setBath("");
    } else {
      setBathOptions([]);
      setBath("");
    }
  };

  const handleBathNum = (e) => {
    const bathNum = e.target.value;
    setBath(bathNum);
  };

  const renderBathSelect = () => {
    if (bed) {
      return (
        <div className="col-md-6 col-12">
          <label>Number of Bathrooms</label>
          <select value={bath} onChange={handleBathNum}>
            <option value="">Select...</option>
            {bathOptions.map((option, index) => {
              console.log(option);
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      );
    } else return null;
  };

  const getPrice = () => {
    if (bed === "1" && bath === "1") {
      return "121.00";
    } else if (bed === "2" && bath === "1") {
      return "151.25";
    } else if (bed === "2" && bath === "2") {
      return "165.00";
    } else if (bed === "3" && bath === "1") {
      return "181.50";
    } else if (bed === "3" && bath === "2") {
      return "192.50";
    } else if (bed === "4" && bath === "2") {
      return "220.00";
    } else if (bed === "4" && bath === "3") {
      return "242.00";
    } else if (bed === "5" && bath === "3") {
      return "275";
    } else if (bed === "5" && bath === "4") {
      return "302.50";
    } else return "0";
  };
  const handleSubmit = (data) => console.log(data);
  return (
    <div className="quote-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={() => handleSubmit()}>
              <div className="row">
                <div className="col-md-6 col-12">
                  <label>Number of Bedrooms</label>
                  <select value={bed} onChange={handleBedNum}>
                    <option value="">Select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                {renderBathSelect()}
              </div>
            </form>
            <div className="row price">
              <p>
                The estimated price for a basic cleaing will be{" "}
                <b>${getPrice()}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFormQuote;
