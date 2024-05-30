import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/variants";
import { TbJewishStar } from "react-icons/tb";
import axios from "axios";

const Card = ({ dataCardJob }) => {
  // console.log('from card', dataCardJob);
  const handleWishlist = (cardData) => {
    console.log("alhamdulillah dataCard job is", cardData);
    axios
      .post(
        "https://my-assignment-11-server-bice.vercel.app/postwish",
        cardData
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="max-w-2xl px-8 py-4    shadow-lg rounded-lg border "
      >
        <div className="flex items-center justify-between"></div>

        <div className="mt-2 min-h-11">
          <div className="flex justify-between">
            <div>
              <a
                href="#"
                className="text-md font-medium  dark:text-white hover:text-gray-600 hover:underline"
                tabindex="0"
                role="link"
              >
                {dataCardJob?.jobTitle}
              </a>
            </div>
            <div>
              <button onClick={() => handleWishlist(dataCardJob)}>
                <TbJewishStar />
              </button>
            </div>
          </div>

          <br />
        </div>
        <span className="text-sm font-lig  ">
          <span className="font-medium">Post Time </span>
          {dataCardJob?.postDate}
        </span>
        <br />

        <span className="text-sm font-lig  ">
          <span className="font-medium">Application Deadline </span>
          {dataCardJob?.applicationDeadline}
        </span>
        <br />

        <span className="text-sm font-lig  ">
          <span className="font-medium">Salary Range </span>
          {`  $${dataCardJob?.minPrice} - $${dataCardJob?.maxPrice}`}
        </span>
        <br />
        <span className="text-sm font-lig  ">
          <span className="font-medium">Total Applications Number </span>
          {dataCardJob?.applicantsNumber}
        </span>
        <br />

        <div className="flex items-center justify-between mt-4">
          <div>
            <Link to={`/job/${dataCardJob?._id}`}>
              <button className="font-medium px-3 py-2 rounded-lg ">
                View Details
              </button>
            </Link>
          </div>

          <div className="flex items-center">
            <img src="" alt="" />

            <a
              className="font-normal  cursor-pointer "
              tabindex="0"
              role="link"
            >
              <span className="font-medium"> Author : </span>
              {dataCardJob?.userName}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
