import React from "react";
import Service from "./Service";
import { BookMarked, Building, Euro, GraduationCap } from "lucide-react";
import { serviceType } from "@/lib/types";

const services: serviceType[] = [
  {
    icon: <Euro className="text-gray-400" />,
    title: "Low subscription costs",
    description:
      "The subscription costs are very low compared to the features provided",
  },
  {
    icon: <GraduationCap className="text-gray-400" />,
    title: "University scholarships",
    description:
      "Providing university scholarships in partnership with universities around the world",
  },
  {
    icon: <Building className="text-gray-400" />,
    title: "Employment opportunity",
    description:
      "The subscription costs are very low compared to the features provided",
  },
  {
    icon: <BookMarked className="text-gray-400" />,
    title: "Educational courses",
    description:
      "The subscription costs are very low compared to the features provided",
  },
];

function Services() {
  return (
    <div className="bg-services bg-white bg-no-repeat bg-cover py-16">
      <div className="container mx-auto flex flex-wrap items-center w-full justify-between">
        {services.map((service) => (
          <Service
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
