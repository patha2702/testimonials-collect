import { getUserSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";
import SignIn from "@/components/SignIn";
import {
  BookType,
  BrickWall,
  Facebook,
  FolderOpenDot,
  Instagram,
  Linkedin,
  Quote,
  Twitter,
} from "lucide-react";

export default async function Home() {
  const user = await getUserSession();
  if (user) {
    redirect("/home");
  }
  return (
    <main className="min-h-screen w-full relative">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b border-black/20 bg-white">
      <div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
        <Logo />
        <nav className="flex justify-start items-center gap-6 text-lg max-sm:hidden">
          <Link href={"/examples"} className="font-medium hover:text-gray-700">
            Examples
          </Link>
          <Link href={"/pricing"} className="font-medium hover:text-gray-700">
            Pricing
          </Link>
        </nav>
        <div className="max-sm:mr-2">
          <SignIn>Collect</SignIn>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mt-4 flex flex-col justify-center items-center p-2">
        <h1 className="text-5xl max-sm:text-4xl max-sm:leading-tight font-bold text-center mb-4 max-sm:mb-2">
          Collect and showcase your <br className="max-sm:hidden" />{" "}
          testimonials with Ease
        </h1>
        <h2 className="text-2xl max-sm:text-xl max-sm:mb-2 font-semibold text-center leading-tight text-black/80 mb-1">
          Effortlessly gather authentic customer testimonials and display them
          beautifully on your site with a simple embed code.
        </h2>
        <p className="text-lg max-sm:text-lg max-sm:mb-2 font-medium text-center text-black/75">
          Give your visitors the social proof they need to trust your brand.{" "}
          <br /> No technical skills required.
        </p>
        <div className="my-2">
          <SignIn>Collect you Testimonials</SignIn>
        </div>
        <div className="mt-4">
          <span className="text-xl font-medium flex justify-center items-center gap-2">
            <Quote
              width={15}
              fill="black"
              height={15}
              className="max-sm:h-12 max-sm:w-12"
            />{" "}
            <p className="max-sm:text-lg max-sm:leading-tight">
              Websites with testimonials see a 34% increase in conversions{" "}
            </p>
            <Quote
              width={15}
              height={15}
              fill="black"
              className="max-sm:h-12 max-sm:w-12"
            />
          </span>
          <p className="text-base font-medium text-center max-sm:mt-2">
            - BrightLocal Consumer Review Survey 2023
          </p>
        </div>
        <Banner />
      </div>
    </section>
  );
};

const Banner = () => {
  return (
    <div className="max-md:hidden w-full mt-8 shadow-xl shadow-blue-600/40 flex justify-between items-center p-4 rounded-xl">
      <div className="flex justify-start items-center gap-2">
        <div className="w-16 h-16 border border-blue-600/40 rounded-lg flex justify-end items-center">
          <FolderOpenDot
            width={40}
            height={40}
            strokeWidth={2}
            className="m-auto text-blue-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg leading-none">Step 1: </span>
          <span className="text-lg leading-none">Create collection</span>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2">
        <div className="w-16 h-16 border border-blue-600/40 rounded-lg flex justify-end items-center">
          <BookType
            width={40}
            height={40}
            strokeWidth={2}
            className="m-auto text-blue-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg leading-none">Step 2: </span>
          <span className="text-lg leading-none">Collect testimonials</span>
        </div>
      </div>
      <div className="flex justify-start items-center gap-2">
        <div className="w-16 h-16 border border-blue-600/40 rounded-lg flex justify-end items-center">
          <BrickWall
            width={40}
            height={40}
            strokeWidth={2}
            className="m-auto text-blue-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg leading-none">Step 3: </span>
          <span className="text-lg leading-none">
            Display them on your site
          </span>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/assets/images/testimonials-collect.png"
              alt="TestiCollect Logo"
              width={50}
              height={50}
            />
            <h3 className="text-xl font-bold">Testimonials Collect</h3>
            <p className="text-gray-400">
              Collect and showcase your testimonials with ease.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-white transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} TestimonialsCollect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
