import { serviceType } from "@/lib/types";

function Service(props: serviceType) {
  return (
    <div className="flex px-5 lg:w-1/4 w-full md:w-1/2 flex-col items-center gap-4">
      {props.icon}
      <h3 className="text-black text-xl">{props.title}</h3>
      <p className="text-gray-400 text-center">{props.description}</p>
    </div>
  );
}

export default Service;
