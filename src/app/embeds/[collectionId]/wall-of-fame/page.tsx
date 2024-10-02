import Widget from "@/components/wall-of-fame-widgets/widget";
import prisma from "@/lib/db";
import React from "react";

const data = [
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Rajendra",
    email: "rajendra@gmail.com",
    image: "/assets/images/user.jpg",
    text: "lorem Hey I Loved your product, it was very intuitive to use and very helpful for collecting and  managing testimonials all in one place",
    date: "12/12/2023",
  },
  {
    name: "Raju",
    email: "arj",
    image: "/assets/images/user.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit recusandae unde ut quo, delectus officia dicta culpa neque iure deleniti aliquid tempora veritatis necessitatibus, porro assumenda magnam soluta, magni corporis vitae nulla consequuntur id! Esse doloribus neque atque inventore, mollitia, odio dolorum explicabo, error est quas sint eum laudantium veniam maxime nihil dignissimos totam quis assumenda id natus reiciendis reprehenderit ex quidem excepturi? Sapiente sit est dolores consectetur voluptatum eum reprehenderit! Quos suscipit ea sunt omnis dicta impedit, commodi dolores! Illum quia maxime reiciendis sint culpa eius autem delectus fuga veritatis libero! Ullam numquam architecto sed perferendis ducimus, recusandae illo.",
    data: "1/12/13",
  },
];

const WallOfFame = async ({ params }: { params: { collectionId: string } }) => {
  const collectionId = params.collectionId || ""
  const testimonials = await prisma.testimonial.findMany({
    where: {
      projectId: collectionId,
      loved: true
    },
  });
  return <Widget testimonials={testimonials} />;
};

export default WallOfFame;
