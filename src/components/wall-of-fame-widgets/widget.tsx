import Image from "next/image";

export default function Widget({ testimonials }) {
  console.log(testimonials);
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  );
}

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col">
    <div className="flex items-center mb-4">
      <Image
        src={testimonial.image}
        width={50}
        height={50}
        alt={`${testimonial.name}'s avatar`}
        className="rounded-full"
      />
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">
          {testimonial.name}
        </h3>
        <p className="text-gray-500">{testimonial.email}</p>
      </div>
    </div>
    <p className="text-gray-600 flex-grow">{testimonial.text}</p>
  </div>
);
