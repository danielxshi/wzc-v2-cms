// import { ImLinkedin2 } from "react-icons/im";
// import { FaFacebookF } from "react-icons/fa";
import NavLogo from "../public/images/logos/nav-logo.png";
import QR from "../public/images/qr.webp";
import QRfb from "../public/images/qr.webp";
// import ArticleListImage from "../../public/images/article/articlelist1.png";

const Logo = NavLogo;
const QRCode = QR;
const QRFallBack = QRfb;
const CompanyNameEN = "Wenzhou Friendship Society";
const CompanyNameCH = "加拿大温州同乡总会";
const FooterC1Title = "同乡会介绍";
const FooterC2Title = "信息咨询";
const FooterC3Title = "文化园地";
const FooterC4Title = "活动分享";
const FooterC5Title = "关注我们";
const FooterC6Title = "联系我们";
const BusinessHours = "营业时间: 周一至周五 9:00 - 18:00";
const PhoneNumber = "604-379-9888";
const FooterPhone = "服务热线: " + PhoneNumber;

const FooterC1MenuItems = [
  {
    Item: "同乡会简介",
    Link: "/about",
  },
];

const FooterC2MenuItems = [
  {
    Item: "家乡协会",
    Link: "/info/association",
  },
  {
    Item: "加拿大新闻",
    Link: "/info/canada",
  },
  {
    Item: "中国新闻",
    Link: "/info/china",
  },
  {
    Item: "当地生活信息",
    Link: "/info/local",
  },
];

const FooterC3MenuItems = [
  {
    Item: "同乡文艺",
    Link: "/culture/art",
  },
  {
    Item: "故乡温州",
    Link: "/culture/wenzhou",
  },
];

const FooterC4MenuItems = [
  {
    Item: "2024年活动",
    Link: "/events/events2024",
  },
  {
    Item: "2023年活动",
    Link: "/events/events2023",
  },
  {
    Item: "2022年活动",
    Link: "/events/events2022",
  },
  {
    Item: "2021年活动",
    Link: "/events/events2021",
  },
  {
    Item: "2020年活动",
    Link: "/events/events2020",
  },
  {
    Item: "2019年活动",
    Link: "/events/events2019",
  },
];

/*---- Side Nav ----*/
const InfoSideNav = [
  {
    subtitle: "家乡协会",
    url: "/info/association",
  },
  {
    subtitle: "加拿大新闻",
    url: "/info/canada",
  },
  {
    subtitle: "中国新闻",
    url: "/info/china",
  },

  {
    subtitle: "当地生活信息",
    url: "/info/local",
  },
];

const EventSideNav = [
  {
    Item: "2024年活动",
    Link: "/events/events2024",
  },
  {
    subtitle: "2023年活动",
    url: "/events/events2023",
  },
  {
    subtitle: "2022年活动",
    url: "/events/events2022",
  },
  {
    subtitle: "2021年活动",
    url: "/events/events2021",
  },
  {
    subtitle: "2020年活动",
    url: "/events/events2020",
  },

  {
    subtitle: "2019年活动",
    url: "/events/events2019",
  },
  // {
  // subtitle:"2018年之前活动"
  // url:  "/events/pastevents",
  // }
];

const CultureSideNav = [
  {
    subtitle: "家乡的艺术和文化",
    url: "/culture/art",
  },
  {
    subtitle: "家乡温州",
    url: "/culture/wenzhou",
  },
];

// Cultural Park side nav
const SideNavMenuItems = [
  {
    culture: [
      {
        subtitle: "家乡的艺术和文化",
        url: "/culture/art",
      },
      {
        subtitle: "家乡温州",
        url: "/culture/wenzhou",
      },
    ],
  },
  {
    events: [
      {
        subtitle: "2024年活动",
        url: "/events/events2024",
      },
      {
        subtitle: "2023年活动",
        url: "/events/events2023",
      },
      {
        subtitle: "2022年活动",
        url: "/events/events2022",
      },
      {
        subtitle: "2021年活动",
        url: "/events/events2021",
      },
      {
        subtitle: "2020年活动",
        url: "/events/events2020",
      },

      {
        subtitle: "2019年活动",
        url: "/events/events2019",
      },
    ],
  },
  {
    info: [
      {
        subtitle: "家乡协会",
        url: "/info/association",
      },
      {
        subtitle: "加拿大新闻",
        url: "/info/canada",
      },
      {
        subtitle: "中国新闻",
        url: "/info/china",
      },

      {
        subtitle: "当地生活信息",
        url: "/info/local",
      },
    ],
  },
];

// Desktop menu
const NavMenuItems2 = [
  {
    menu: [
      {
        title: "会长致辞",
        url: "/home",
        id: 1,
        submenu: [],
      },
      {
        title: "同乡会介绍",
        url: "/about",
        submenu: [],
      },
      {
        title: "信息咨询",
        id: 2,
        url: "/info",
        p1: "/info/association",
        p2: "/info/canada",
        p3: "/info/china",
        p4: "/info/local",
        submenu: [
          {
            subtitle: "家乡协会",
            url: "/info/association",
          },
          {
            subtitle: "加拿大新闻",
            url: "/info/canada",
          },
          {
            subtitle: "中国新闻",
            url: "/info/china",
          },

          {
            subtitle: "当地生活信息",
            url: "/info/local",
          },
        ],
      },
      {
        title: "活动分享",
        id: 3,
        url: "/events",
        p1: "/events/events2024",
        p2: "/events/events2023",
        p3: "/events/events2022",
        p4: "/events/events2021",
        p5: "/events/events2020",
        p6: "/events/events2019",
        submenu: [
          {
            subtitle: "2024年活动",
            url: "/events/events2024",
          },
          {
            subtitle: "2023年活动",
            url: "/events/events2023",
          },
          {
            subtitle: "2022年活动",
            url: "/events/events2022",
          },
          {
            subtitle: "2021年活动",
            url: "/events/events2021",
          },
          {
            subtitle: "2020年活动",
            url: "/events/events2020",
          },

          {
            subtitle: "2019年活动",
            url: "/events/events2019",
          },
        ],
      },
      {
        title: "文化园地",
        id: 4,
        url: "/culture",
        p1: "/culture/art",
        p2: "/culture/wenzhou",
        submenu: [
          {
            subtitle: "家乡的艺术和文化",
            url: "/culture/art",
          },
          {
            subtitle: "家乡温州",
            url: "/culture/wenzhou",
          },
        ],
      },
      {
        title: "联系我们",
        id: 5,
        url: "/contact",
        submenu: [],
      },
    ],
  },
];

const MenuItems = {
  FooterC1MenuItems: FooterC1MenuItems,
  FooterC2MenuItems: FooterC2MenuItems,
  FooterC3MenuItems: FooterC3MenuItems,
  FooterC4MenuItems: FooterC4MenuItems,

  NavMenuItems2: NavMenuItems2,

  SideNavMenuItems: SideNavMenuItems,
  InfoSideNav: InfoSideNav,
  EventSideNav: EventSideNav,
  CultureSideNav: CultureSideNav,
  QRCode: QRCode,
  QRFallBack: QRFallBack,
  Logo,
  Logo,

  CompanyNameCH: CompanyNameCH,
  CompanyNameEN: CompanyNameEN,

  PhoneNumber: PhoneNumber,
  BusinessHours: BusinessHours,
  FooterPhone: FooterPhone,
  FooterC1Title: FooterC1Title,
  FooterC2Title: FooterC2Title,
  FooterC3Title: FooterC3Title,
  FooterC4Title: FooterC4Title,
  FooterC5Title: FooterC5Title,
  FooterC6Title: FooterC6Title,
};

export default MenuItems;
