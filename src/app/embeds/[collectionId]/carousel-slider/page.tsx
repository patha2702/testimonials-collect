"use client";
import Widget from "@/components/wall-of-fame-widgets/widget";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { LoaderPinwheel } from "lucide-react";

const WallOfFame = () => {
  const { collectionId } = useParams();
  const [testimonials, setTestimonials] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/testimonial?collection-id=${collectionId}&loved=true`
        );
        const data = await res.json();
        setTestimonials(data.testimonials);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        setErrorMessage("Failed to fetch testimonials");
      }
    };
    fetchTestimonials();
  }, []);
  if (errorMessage !== "") {
    return (
      <p className="text-red font-semibold">Failed to fetch testimonials</p>
    );
  }
  if (loading) {
    return (
      <p className="text-xl font-semibold text-center">
        Loading testimonials <LoaderPinwheel className="animate-spin mx-auto" />
      </p>
    );
  }

  return <Widget type="carousel-slider" testimonials={testimonials} />;
};

export default WallOfFame;
