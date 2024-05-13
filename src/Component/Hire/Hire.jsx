import { FaCaretRight } from "react-icons/fa";

 

const Hire = () => {
    return (
        <div className="my-24">
            <div className="w-9/12 mx-auto  grid grid-cols-2 gap-20  items-center ">
                <div>
                       <img src="https://i.ibb.co/JrMxnjF/cardsTwo.jpg" alt="" />
                </div>
                <div>
                       <p className="text-2xl font-semibold ">Hire The Best Freelancers For Any Job, Online</p>
                       <ul className="space-y-3">
                        <li className="w-9/12 flex gap-2 items-start "><span className="text-green-500"><FaCaretRight /></span>Find professionals you can trust by browsing their experience and skills</li>
                        <li className="w-9/12 flex gap-2 items-start "><span className="text-green-500"><FaCaretRight /></span>Find professionals you can trust by browsing their experience and skills</li>
                        <li className="w-9/12 flex gap-2 items-start "><span className="text-green-500"><FaCaretRight /></span>Find professionals you can trust by browsing their experience and skills</li>
 
                       </ul>
                       <button className=" text-whie px-3 py-2 my-3 text-white   cursor-pointer bg-green-500 ">View Now</button>
                </div>
                           
            </div>
        </div>
    );
};

export default Hire;