import { client1, client2, client3, client4, client5 } from "@/public/images";

export const CLIENTS = [
  { alt: "client1", logo: client1 },
  { alt: "client2", logo: client2 },
  { alt: "client3", logo: client3 },
  { alt: "client4", logo: client4 },
  { alt: "client5", logo: client5 },
];

export const USERS = [
  {
    name: "Raj",
    title: "Raj bhai",
    quote:
      "Cypress has been a game-changer for our team. With its reliable end-to-end testing, we catch bugs early, leading to faster development cycles and improved collaboration.",
  },
  {
    name: "Dhiren",
    title: "Dhiren bhiya",
    quote:
      "I am a very strict guy and I love Cypress. I've been using it for a long time, but Cypress simplified everything. Now, I'm more productive, and my colleagues can trust our code thanks to Cypress.",
  },
  {
    name: "Charlie",
    title: "Charlie bhai",
    quote:
      "Cypress has transformed the way we work. Our QA and development teams are on the same page, and our productivity has skyrocketed. It's a must-have tool.",
  },
  {
    name: "Raj Bidu",
    title: "Raj Bidu",
    quote:
      "Mereko bhai bahoooooooooooooooooot acha laga ye tool, Cypress. this is the best.",
  },
  {
    name: "Aditi",
    title: "Aditi bhai",
    quote:
      "Cypress has made our testing process smoother. Our team has improved our productivity and collaboration. It's a must-have tool.",
  },
  {
    name: "Frank",
    title: "Frank bhai",
    quote:
      "Thanks to Cypress, we've eliminated testing bottlenecks. Our developers and testers collaborate effortlessly, resulting in quicker releases.",
  },
  {
    name: "Grace",
    title: "Grace bhai",
    quote:
      "Cypress has improved our development process significantly. We now have more time for innovation, and our products are of higher quality.",
  },
];

export const PRICING_CARDS = [
  {
    planType: "Free Plan",
    price: "0",
    description: "Limited block trials  for teams",
    highlightFeature: "",
    freatures: [
      "Unlimited blocks for teams",
      "Unlimited file uploads",
      "30 day page history",
      "Invite 2 guests",
    ],
  },
  {
    planType: "Pro Plan",
    price: "12.99",
    description: "Billed annually. $17 billed monthly",
    highlightFeature: "Everything in free +",
    freatures: [
      "Unlimited blocks for teams",
      "Unlimited file uploads",
      "1 year day page history",
      "Invite 10 guests",
    ],
  },
];

export const PRICING_PLANS = { proplan: "Pro Plan", freeplan: "Free Plan" };

export const MAX_FOLDERS_FREE_PLAN = 3;
