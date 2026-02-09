import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

const workCounterData = [
  {
    work: 16,
    name: "Completed Class",
    description:
      "We always provide people complete solution upon focused of any business",
  },
  {
    work: 11,
    name: "Our Office",
    description:
      "We always provide people complete solution upon focused of any business",
  },
  {
    work: 56,
    name: "Skilled People",
    description:
      "We always provide people complete solution upon focused of any business",
  },
  {
    work: 18,
    name: "Happy Client",
    description:
      "We always provide people complete solution upon focused of any business",
  },
];

const WorkCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="w-11/12 mx-auto py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {workCounterData.map((item, index) => (
          <div
            key={index}
            className="  shadow-lg rounded-xl p-6 text-center hover:scale-105 transition"
          >
            <h2 className="text-4xl font-bold text-blue-600">
              {inView && <CountUp end={item.work} duration={2} />}+
            </h2>
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCounter;
