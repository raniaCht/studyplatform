import { ReactNode } from "react";

export type serviceType = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type contryType = {
  image: string;
  name: string;
  offerNumber: string;
};

export type reviewType = {
  text: string;
  ownerName: string;
  ownerUsername: string;
  image: string;
  date: string;
};
