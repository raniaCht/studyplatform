"use client";
import { reviewType } from "@/lib/types";
import React from "react";
import Review from "./Review";
import Masonry from "react-masonry-css";
import ButtonWithShadow from "./ButtonWithShadow";
import { MoveRight } from "lucide-react";
import ReviewCount from "./ReviewCount";

const reviews: reviewType[] = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+1",
    date: "18.03.2019",
  },

  {
    text: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there ",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+6",
    date: "24.03.2024",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+5",
    date: "22.03.2022",
  },
  {
    text: " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+3",
    date: "11.12.2021",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  combined with a handful of model sentence structures, to generate Lorem Ipsum whi  combined with a handful of model sentence structures, to generate Lorem Ipsum whi Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+7",
    date: "22.03.2021",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+9",
    date: "20.03.2020",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+8",
    date: "22.08.2021",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+41",
    date: "02.03.2021",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+2",
    date: "15.03.2021",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+8",
    date: "22.08.2021",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+41",
    date: "02.03.2021",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ownerName: "Cicero sisi",
    ownerUsername: "Cicero ",
    image: "https://placehold.co/600x600.png?text=p+2",
    date: "15.03.2021",
  },
];

function Reviews() {
  return (
    <div className="bg-white mb-20">
      <div className="container mx-auto flex flex-col items-center py-10">
        <h1 className="text-black text-3xl mb-10 text-center">
          StudyPlatform card is the most recommended <br /> check yourself.
        </h1>
        <Masonry
          breakpointCols={{
            default: 3,
            900: 2,
            600: 1,
          }}
          className="flex gap-14 shadow-review h-[1000px] overflow-hidden mb-5 px-4"
          columnClassName="my-masonry-grid_column"
        >
          {reviews.map((review) => (
            <Review review={review} />
          ))}
        </Masonry>
        <ButtonWithShadow icon={<MoveRight />} text="Order your card" />
        <div className="mt-20 self-center lg:self-start">
          <ReviewCount />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
