

const Find = () => {
    return (
        <div className="  mx-auto  py-48 p-5 text-center">
            <div className="py-5 space-y-3 flex flex-col justify-center items-center mb-10">
            <h1 className="text-2xl font-medium">How It Works?</h1>
            <p>Source the best providers at your own pace</p>

            </div>
  
            <div className="w-9/12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-auto">
            <div className="px-5 py-11 space-y-5 shadow-xl">
                <p className="font-medium text-2xl">Find Job</p>
                <h1>Discovering talent doesn't need to be a hassle. Either post a job or let us handle the search for you!</h1>
                <button className="  p-5">Submit Now</button>
            </div>
            <div className=" px-5 py-11 space-y-5 shadow-xl">
                <p className="font-medium text-2xl">Work job</p>
                <h1>Dynamically deliver world-class testing procedures rather than adaptive supply chains.   </h1>
                <button className="  p-5">Submit Now</button>
            </div>
            <div className=" px-5 py-11 space-y-5 shadow-xl">
                <p className="font-medium text-2xl">Grow Skill</p>
                <h1>Show  talent doesn't need to be a hassle. Either post a job or let us handle the search for you!</h1>
                <button className="  p-5 ">Submit Now</button>
            </div>
            </div>

        </div>
    );
};

export default Find;