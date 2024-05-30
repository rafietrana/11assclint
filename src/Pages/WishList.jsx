import { useEffect, useState } from "react";
import NabBarAll from "../Shyred/NabBarAll/NabBarAll";
import axios from "axios";
 
import CardWish from "../Component/CardWish";

const WishList = () => {
  const [wishData, setWishData] = useState([]);

  useEffect(() => {
    axios("https://my-assignment-11-server-bice.vercel.app/getwish").then(
      (res) => {
        console.log("wish data is", res.data);
        setWishData(res?.data);
      }
    );
  });
  return (
    <div>
      <NabBarAll></NabBarAll>
      <div className="w-9/12 mx-auto my-7">
        {wishData.map((dataWish) => (
          <CardWish dataWish={dataWish}></CardWish>
        ))}
      </div>
    </div>
  );
};

export default WishList;
