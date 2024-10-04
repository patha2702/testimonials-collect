import { TextTestimonialFormValues } from "@/schemas";

interface TestimonialCardProps {
  id: number;
  name: string;
  email: string;
  text: string | null;
  videoUrl: string | null;
  rating: number;
  loved: boolean;
  projectId: string;
  createAt: Date;
}

interface WidgetProps {
  testimonials: TestimonialCardProps[];
}

export default function Widget({ testimonials }: WidgetProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialCardProps;
}) => (
  <div className="p-4 rounded-lg border shadow-lg border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
    <div className="flex items-center gap-2 mb-2">
      <div className="rounded-full w-8 h-8 bg-gray-300 text-gray-700 dark:text-gray-700 dark:bg-gray-700 flex justify-center items-center">
        {testimonial.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase())
          .join("")}
      </div>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
        {testimonial.name}
      </h3>
    </div>
    <div className="mb-2">Rating: {testimonial.rating}</div>
    <p className="text-gray-600 dark:text-gray-300">{testimonial.text}</p>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      <span>Moment of Truth: </span>
      <span>{testimonial.createAt.toDateString()}</span>
    </div>
  </div>
);
