// import test from "@/app/public/images"
const MenuItems = [
  {
    title: "加拿大温州同乡总会介绍   ",
    src: "/images/wzc4-mob-nav1.webp",
    alt: "",
    link: "/home",
  },
  {
    title: "信息资讯   ",
    src: "/images/wzc4-mob-nav5.webp",
    alt: "",
    link: "/about/council",
  },
  {
    title: "活动分享   ",
    src: "/images/wzc4-mob-nav4.webp",
    alt: "",
    link: "/events/events",
  },
  {
    title: "文化园地   ",
    src: "/images/wzc4-mob-nav3.webp",
    alt: "",
    link: "/culture/CulturalPark",
  },
  {
    title: "联系   ",
    src: "/images/wzc4-mob-nav2.webp",
    alt: "",
    link: "/contact",
  },
];

const LandingCarousel = [
  {
    src: "/images/pexels-james-wheeler-2782485.webp",
    fallback: "/images/pexels-james-wheeler-2782485.webp",
    alt: "Slide",
  },
  {
    src: "/images/pexels-onur-kurtic-205377.webp",
    fallback: "/images/pexels-onur-kurtic-205377.webp",
    alt: "Slide",
  },
  {
    src: "/images/pexels-jeremy-lee-11424500.webp",
    fallback: "/images/pexels-jeremy-lee-11424500.webp",
    alt: "Slide",
  },
];

const LandingTopBar = [
  {
    title: "同乡总会热线",
    item: "604-379-9888",
  },
  {
    title: "地址",
    item: "4266 Hazelbridge Way",
    item2: "Richmond, BC V6X 0J5",
  },
];

const LandingMenuItems = {
  LandingCarousel: LandingCarousel,
  LandingTopBar: LandingTopBar,
  MenuItems: MenuItems,
};

export default LandingMenuItems;
