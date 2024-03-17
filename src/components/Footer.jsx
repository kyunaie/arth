import React from "react";
import { Link } from "react-router-dom";
import Logo from "./shared/Logo";
import SocialIcons from "./shared/SocialIcons";
import NewsletterForm from "./shared/NewsletterForm";
const menuItems = [
  { item: "About Us", link: "/about" },
  { item: "Foundation", link: "/foundation" },
  { item: "Franchise", link: "/franchise" },
  { item: "Subscriptions", link: "/subscriptions" },
  { item: "Frequently Asked Questions", link: "/faq" },
  { item: "Jobs", link: "/jobs" },
  { item: "Wholesale", link: "/wholesale" },
  { item: "Contact Us", link: "/contact" },
  { item: "Terms of Service", link: "/terms" },
  { item: "Privacy Policy", link: "/privacy" },
  { item: "Refund Policy", link: "/refund" },
];
const categories = [
  { id: 1, name: 'Single-Origin Coffees' },
  { id: 2, name: 'Blended Coffees' },
  { id: 3, name: 'Espresso Blends' },
  { id: 4, name: 'Decaffeinated Coffees' },
  { id: 5, name: 'Organic Coffees' },
  { id: 6, name: 'Fair Trade Coffees' },
  { id: 7, name: 'Coffee Accessories' },
];


const Footer = () => {
  return (
    <footer className="grid grid-cols-4 max-sm:grid-cols-1 bg-slate-950 p-10 text-slate-50">
      <div className="flex flex-col items-center">
        <Logo color="white"/>
        <div className="m-10">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>123 Company Address</p>
            <p>City, State, Zip Code</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        <SocialIcons/>
      </div>
      <div className="flex flex-col">
      <h1 className="text-md font-semibold pb-2">SHOP</h1>
        {categories.map((item) => (
          <Link
            className="text-white text-sm font-thin p-0.5 hover:text-orange-200"
            key={item.id}
            to={item.link}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
      <h1 className="text-md font-semibold text-slate-50 pb-2">SHOP</h1>
        {menuItems.map((item) => (
          <Link
            className="text-white text-sm font-thin p-0.5 hover:text-orange-200"
            key={item.item}
            to={item.link}
          >
            {item.item}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
          <NewsletterForm/>
      </div>
    </footer>
  );
};

export default Footer;
