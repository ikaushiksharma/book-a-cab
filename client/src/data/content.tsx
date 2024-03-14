import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export const navLinks = [
  {
    id: "suka33",
    href: "/",
    name: "Home",
  },
  {
    id: "hjv44",
    href: "/booking",
    name: "Bookings",
  },
  {
    id: "bdf00",
    href: "/cab",
    name: "Cabs",
  },
];

export const headingData = {
  description: "The Most Reliable Cab Booking App",
  spanText: "Cab Booking App",
  title: "Your On Demand",
  subtext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
};

export const aboutUsData = {
  headingStart: "About",
  spanText: "Our Cab Booking",
  headingEnd: "App",
  description: "About Us",
  downloadHref: "/booking/create",
  list: [
    "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et",
    "Adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur",
    "incididunt ut labore et dolore magna aliqua em ipsum dolor sit ame",
    "Lorem ipsum dolor sit amet, consectetur ut labore et dolore",
  ],
};

export const countries = ["A Point", "B Point", "C Point", "D Point", "E Point", "F Point"];

const contactLinks = [
  {
    id: "something",
    href: "tel:+1(234)567-890",
    name: "+1(234)567-890",
  },
  {
    id: "something",
    href: "mailto:cabbooking@email.com",
    name: "cabbooking@email.com",
  },
];

export const footerData = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  footerLinks: [
    {
      title: "Contact",
      links: contactLinks,
    },
  ],
};

export const socials = [
  <BsTwitter key="twitter" className="text-lg" />,
  <BsLinkedin key="linkedIn" className="text-lg" />,
  <BsFacebook key="facebook" className="text-lg" />,
  <FaTelegramPlane key="telegram" className="text-lg" />,
  <BsYoutube key="youtube" className="text-lg" />,
];
