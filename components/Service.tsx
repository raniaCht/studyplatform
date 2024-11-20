import { serviceType } from "@/lib/types";

function Service(props: serviceType) {
  return (
    <div className="flex flex-col items-center gap-4">
      {props.icon}
      <h3 className="text-black text-xl">{props.title}</h3>
      <p className="text-gray-400 text-center">{props.description}</p>
    </div>
  );
}

export default Service;
