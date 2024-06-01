import NavLogo from "../public/images/logos/nav-logo.png";
import testImage from "../public/images/card1.webp";
import sponsorImage1 from "../public/images/sponsor1.webp";
import ArticleListImage1 from "../public/images/articlelist1.webp";

// Popular items
//id:1
const pid1Title = "粽情端午";
const pid1Date = "2022-05-15";
const pid1ImageURL = "/images/article/1652652011399501.jpg";
const pid1PreviewText =
  "端午临中夏，千载吉运长，良辰榴花美，丰福九天祥。加拿大温州同乡总会的各位会长、理事、会员大家好！端午佳节来临之际，加拿大温州同乡总会祝乡亲们———身体“粽”是健康，家庭“粽”是美满，爱情“粽”是如糖，...";
const pid1 = "1";

//id:2
const pid2Title = "北美新⽣代创业俱乐部⾸次⻅⾯会圆满举⾏";
const pid2Date = "2022-04-12";
const pid2ImageURL = "/images/article/1649739622433686.jpeg";
const pid2PreviewText =
  "北美新生代创业俱乐部首次⻅面会于 2022 年 4 月 9 日下午在加拿大温州同乡总会会所顺利举行。北美新生代创业俱乐部由温州同乡总会创立，是一个支持和帮助 新生代创业者交流发展的平台，秉承团结、互助、传承、发展…";
const pid2 = "2";

//id:3
const pid3Title = "“浙里有爱·四海迎春”新春慰侨活动 - 温哥华站启动仪式成功举办";
const pid3Date = "2022-01-18";
const pid3ImageURL = "/images/article/1642476618572741.jpeg";
const pid3PreviewText =
  "无论我们走到多远，也走不出祖国的挂牵，无论我们身在何处，都能体会到祖国母亲的温暖！2022年1月16日，由浙江省侨办、浙江省侨联、加拿大温州同乡总会联合举办的“浙里有爱·四海迎春”新春慰侨活动 - 温哥华站启动…";
const pid3 = "3";

//id:4
const pid4Title =
  "加拿大溫州同乡总会在社交媒体上发起了为卑诗省洪水灾民募捐活动";
const pid4Date = "2021-12-16";
const pid4ImageURL = "/images/article/1639682988684483.jpeg";
const pid4PreviewText =
  "【明報專訊】日前，加拿大溫州同鄉總會在社交媒體上發起了為卑詩省洪水災民募捐活動。短短48小時就募集到來自溫州同鄉的8000仟多元加币善款。這些捐款來自加拿大境內外不同城市的溫州人。溫州同鄉會會長朱建國指出，…";
const pid4 = "4";

//id:5
const pid5Title = "同乡会与中华会馆等社团交流";
const pid5Date = "2021-11-23";
const pid5ImageURL = "/images/article/1637649646295507.jpeg";
const pid5PreviewText =
  "11月21日，温州同乡总会在温哥华皇庭海鲜酒家举办了一个新老侨团的交流晚宴。邀请了列治文市议员欧泽光、国会议员Wilson Miao竞选团队的负责人Elsa Wong，以及近期合作过的一些社团领导参加，包括（排…";
const pid5 = "5";

// News Preview
//Item1 id:18
const pid6Title = "两会”侨声音 ———关键词：为侨服务";
const pid6Date = "2021-02-04";
const pid6ImageURL = "/images/article/1612409605802495.jpeg";
const pid6PreviewText =
  "温州市十三届人大六次会议于2021年2月2日召开；市政协十一届五次会议于2021年2月1日召开。今年侨界委员们都关注什么？他们又带来哪些提案？两会期间，温州侨联特推出《“两会”侨声音》聚焦两会内外热点，展示侨界委…";
const pid6 = "18";

//Item2 id:16
const pid7Title = "加拿大温州同乡总会2021年新春联谊会圆满结束";
const pid7Date = "2021-03-07";
const pid7ImageURL = "/images/article/1615099460831507.jpg";
const pid7PreviewText =
  "加拿大温州同乡总会在温州举行2021年新春酒会，酒会圆满成功！温州家乡领导温州市政府市委常委 统战部长 施艾珠、 原市政协主席 余梅生、市人大副主任 黄荣定、市人大副秘书长 林春霞、市人大民宗侨外委…";
const pid7 = "16";

//Item3 id:15
const pid8Title = "加拿大温州同乡总会的姐妹们，国际女神节快乐！";
const pid8Date = "2021-03-07";
const pid8ImageURL = "/images/article/1615099680983859.jpeg";
const pid8PreviewText =
  "加拿大温州同乡总会的姐妹们，国际女神节快乐！世界上若没有女人，这个世界至少要失去十分之五的真，十分之六的善，十分之七的美。 ———冰心三八妇女节，是国际上的惯用称呼，但在面对我们身边人的时候，我们…";
const pid8 = "15";

const NewsPreviewItems = [
  {
    id: pid6,
    title: pid6Title,
    caption: pid6PreviewText,
    src: pid6ImageURL,
  },
  {
    id: pid7,
    title: pid7Title,
    caption: pid7PreviewText,
    src: pid7ImageURL,
  },
  {
    id: pid8,
    title: pid8Title,
    caption: pid8PreviewText,
    src: pid8ImageURL,
  },
];

const ArticleListMessages = [
  {
    id: 100103,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",

    article: {
      title: "凝聚巾帼力量，绽放妇女风采。加拿大温州同乡总会举办 ‘三八’妇女节庆祝活动",
      date: "2024-03-09",
      imageURL: "/images/article-webp/A2-4.25.57.webp",
      content: [

        {
          paragraph: {
            text: "（本网讯）花香满三月，巾帼绽芳华。3月9日，加拿大温哥华迎来了一场别开生面的庆祝活动——‘三八’国际劳动妇女节，由加拿大温州同乡总会精心筹备并举办，旨在表达对女性同胞们的关怀和祝福。",
          },
        },
        {
          paragraph: {
            text: "活动在热烈的气氛中拉开帷幕，同乡总会的朱建国会长和吴登金副会长先后发表了热情洋溢的致辞，表达了对女性同胞们的美好祝愿和深深的关怀。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/A2-4.25.57.webp",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/A2-4.26.04.webp",
          },
        },


        {
          paragraph: {
            text: "当天，活动吸引了众多女性同胞的参与，特邀了专业化妆造型团队现场为参与者们打造精美妆容，专业摄影师捕捉着她们美丽的瞬间。此外，私厨团队更是现场制作了精致的食物和点心，让大家在愉快的氛围中共度美好时光。姐妹们围坐一堂，品味美食、欢歌笑语，分享着节日的快乐，现场洋溢着轻松愉快的气氛，温情融融。",
          },
        },




        {
          image: {
            imageSRC: "/images/article-webp/A2-4.26.11.webp",
          },
        },


        {
          image: {
            imageSRC: "/images/article-webp/A2-4.26.21.webp",
          },
        },


        {
          image: {
            imageSRC: "/images/article-webp/A2-4.26.28.webp",
          },
        },


        {
          image: {
            imageSRC: "/images/article-webp/A2-4.26.38.webp",
          },
        },


        {
          image: {
            imageSRC: "/images/article-webp/A2-4.26.47.webp",
          },
        },

        {
          paragraph: {
            text: "此时此刻，亿万妇女们正身处于大地万物复苏的季节，各行各业都有许多杰出的女性同胞，她们投身于社会的生产和建设之中，为梦想不懈奋斗，正是这个节日里最美的风景。在此，加拿大温州同乡总会向每一位在异国他乡勤奋生活、闪耀光芒的“她们”致以敬意和诚挚的节日问候！",
          },
        },

      ],
    },
  },

  {
    id: 100102,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",

    article: {
      title: "温哥华藤爸藤妈藤娃圣诞、新年大联欢",
      date: "2023-12-30",
      imageURL: "/images/article-webp/a1-3.40.39.webp",
      content: [
        {
          image: {
            imageSRC: "/images/article-webp/a1-3.40.39.webp",
          },
        },
        {
          paragraph: {
            text: "2023年12月30日，加拿大温哥华温州同乡总会会所灯火通明，热闹非凡。会所的大屏幕不断滚动着欢迎词，欢迎来自大温地区美国长春藤盟校的学子和他们的父母们。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-3.41.02.webp",
          },
        },
        {
          paragraph: {
            text: "120多名来自世界顶尖学府的学子和他们的父母聚集在会所，盛况空前。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-3.41.12.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-3.41.25.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-3.41.37.webp",
          },
        },

        {
          paragraph: {
            text: "温州同乡总会朱建国会长，百忙之中也现身会场和大家见面互动，并发表简单讲话。他对藤校同学和他们的父母的到来，表示热烈的欢迎。朱会长说，同学们凭自己的聪明和实力进入世界一流的大学，是华人的骄傲，是世界的未来。他祝愿同学们学习更上一层楼，学业事业双丰收。",
          },
        },

        {
          paragraph: {
            text: "这些同学来自哈佛，耶鲁，麻省理工，普林斯顿，宾夕法尼亚大学，斯坦福大学，哥伦比亚大学，康奈尔大学等等，全部是美国长春藤盟校的学生，其中不乏有一家之中兄妹、姐弟先后考上的，也有双胞胎同时考上的。",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/a1-3.41.45.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-3.41.51.webp",
          },
        },

        {
          paragraph: {
            text: "联欢会由温州老乡的女儿Linda（宾西法尼亚大学）和双胞胎姐妹Monica、Jessica（普林斯顿和宾西法尼亚大学)三人共同主持，其中双胞胎姐妹曾经出演过电影《北京遇上西雅图》。三位美女学霸联袂主持，为此次大联欢增色不少。",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/a1-3.42.00.webp",
          },
        },

        {
          paragraph: {
            text: "活动从中午12点开始，到下午3点结束。参加联欢的45个家庭都带来了自己的拿手好菜，美味佳肴摆满了长桌子。大家边品尝，边聆听着家长、同学们的分享，现场气氛热烈。",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/a1-3.43.04.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-3.43.21.webp",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/a1-3.43.30.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-3.43.46.webp",
          },
        },

        {
          paragraph: {
            text: "下午三点，大联欢在双胞胎两姐妹献唱的优美歌声中圆满结束。",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/a1-3.44.12.webp",
          },
        },
      ],
    },
  },
  {
    id: 100101,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",

    article: {
      title: "加拿大温州同乡总会祝全体侨胞中秋快乐",
      date: "2023-09-26",
      imageURL: "/images/article-webp/thumbnail_autumn2.webp",
      content: [
        {
          image: {
            imageSRC: "/images/article-webp/thumbnail_autumn2.webp",
          },
        },
        {
          paragraph: {
            text: "金秋时节，中秋将至，又是一年月圆时。古人把满月视为团圆的象征，因此 中秋节也是“团圆节”，在这个月圆的时刻，寄托着我们中国人团圆与家庭美 满的美好愿望。我们在加拿大的华侨华人，虽然身在他乡，心却时刻牵挂着 故乡。中秋圆月，寄托的是我们对家乡的思念，更是我们爱国爱家的家国情 怀。加拿大温州同乡总会在此祝福全体侨胞中秋快乐，月圆家圆人圆事圆， 团团圆圆，国和家和人和事和，和和美美！",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/thumbnail_autumn.webp",
          },
        },
      ],
    },
  },
  {
    id: 100100,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",

    article: {
      title: "特别的爱给特别的您——加拿大温州同乡总会三八国际妇女节花艺庆祝",
      date: "2023-03-08",
      imageURL: "/images/article-webp/2023-03-08-1.webp",
      content: [
        {
          image: {
            imageSRC: "/images/article-webp/2023-03-08-1.webp",
          },
        },
        {
          paragraph: {
            text: "（本网讯）为了庆祝三八国际妇女节，加拿大温州同乡总会于2023年3月8日下午在会所内为温州籍女性朋友们特别组织了一场别开生面的免费花艺活动。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/2023-03-08-2.webp",
          },
        },
        {
          paragraph: {
            text: "活动首先举行了简短的开班仪式。同乡会执行会长吴登金代表朱建国会长感谢了副会长邓春玲、秘书处胡蓉对于本次活动的精心策划，并宣布“向阳花开 ”花艺班正式开班。            ",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/2023-03-08-3.webp",
          },
        },
        {
          paragraph: {
            text: "现场专门聘请到专业的插花老师教学制作美丽的鲜花饰品。吸引了二十几位女性朋友们参与。大家带着绚烂的笑容，穿着五彩的服饰。会所外春光渐好，阳光明媚。会所内欢声笑语，花美人更俏！            ",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/2023-03-08-4.webp",
          },
        },
        {
          paragraph: {
            text: "本次活动举办得非常成功，现场气氛热烈，受到了广泛好评。大家纷纷表示度过了一个愉快和难忘的节日，也体现了温州时代女性美丽知性的巾帼风采！吴会长表示同乡会今后将继续开办类似的才艺兴趣班，如茶艺、烹饪、西餐礼仪等，以丰富会员们的业余生活。请关注我们，一起成长！            ",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/2023-03-08-5.webp",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/2023-03-08-6.webp",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/2023-03-08-7.webp",
          },
        },
      ],
    },
  },
  {
    id: 100099,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",

    article: {
      title: "温州同乡总会组织带领新生代成员前往温州极地海洋世界参观考察",
      date: "2023-02-26",
      imageURL: "/images/article-webp/20230301161918.webp",
      content: [
        {
          paragraph: {
            text: "（本网讯）2023年2月26日下午，正是春暖花开的时节，加拿大温州同乡总会会长朱建国先生，组织带领目前居住在温州的加拿大温州青年及他们的子女家人，于金平亮会长开设的温州极地海洋世界参观考察。",
          },
        },
        {
          paragraph: {
            text: "此次活动为了加深大家对生态的关切，了解人和动物的和谐共处，也旨在促进新生代成员之间的交流和联系，为加籍的温二代温三代青年和孩子们提供了一个沟通和互动的机会，体现了同乡总会一直以来秉承的‘加强同乡联谊，促进团结互助’的宗旨，吸引了超过70位新生代成员和他们的子女参加。",
          },
        },
        {
          paragraph: {
            text: "活动结束后，大家纷纷表示此次活动非常有意义，加深了新生代成员们之间的联系，在今后的生活中，加强沟通交流，共同进步。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/20230301161918.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/2023030116190.webp",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/20230301161853.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/20230301161836.webp",
          },
        },
      ],
    },
  },
  {
    id: 100098,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",

    article: {
      title:
        "The Wenzhou Friendship Society Canada’s Container for Turkey Earthquake Relief",
      date: "2023-02-19",
      imageURL: "/images/article-webp/turkey-relief13.webp",
      content: [
        {
          paragraph: {
            text: "After the 7.8-magnitude earthquake disaster in Turkey, the Wenzhou Friendship Society Canada extended a helping hand immediately, actively fundraising among its members for earthquake relief. On the afternoon of February 19, an executive President of the Wenzhou Friendship Society Canada, along with eight directors and members, went to the Turkish Community Earthquake Relief Center located at 580 Industrial Ave in Vancouver to donate a container for disaster relief materials to the earthquake-stricken areas in Turkey.            ",
          },
        },

        {
          paragraph: {
            text: "On behalf of the Society, Wu Dengjin, an executive President of the Wenzhou Friendship Society Canada, donated a check to Mr. Halil Ibrahim KOKLU who is in charge of the Turkish Community Earthquake Relief Center. Mr. Mehmet Taylan Tokmak, the Consul General of Turkey in Vancouver, personally greeted the Society and its members, updated everyone on the status of donations, and expressed sincere gratitude to the Wenzhou Friendship Society Canada for this kind act on behalf of the Turkish government! He stated that we urgently need to deliver the relief supplies from here to the victims in Turkey. The container donated by the Wenzhou Friendship Society Canada is a timely help and a showcase of solidarity, which fully embodies the spirit of mutual assistance between the diverse ethnic groups in Canada to unite and overcome challenges together.            ",
          },
        },

        {
          paragraph: {
            text: 'The representatives of the Wenzhou Friendship Society Canada and all the volunteers in the Turkish Community Earthquake Relief Center cheered "Go Turkey!". The spirit was warm and touching. The Wenzhou Friendship Society Canada expressed that they will continue to work hard to fundraise for disaster relief work in Turkey.            ',
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/turkey-relief13.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/turkey-relief12.webp",
          },
        },
      ],
    },
  },
  {
    id: 100097,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",

    article: {
      title: "加拿大温州同乡总会顺利换届 朱建国会长成功连任",
      date: "2023-02-19",
      imageURL: "/images/article-webp/a2-12.webp",
      content: [
        {
          paragraph: {
            text: "（本网讯）土耳其7.8级重大地震灾难发生后，加拿大温州同乡总会在第一时间伸出援助之手，积极发动筹款赈灾，向地震灾区捐款捐物。2月19日下午，同乡会执行会长吴登金等十几位理事、会员一起前往了位于温哥华580 Industrial Ave的土耳其地震赈灾捐赠中心捐赠集装箱运送救灾物资到土耳其灾区。            ",
          },
        },
        {
          paragraph: {
            text: "同乡会执行会长吴登金代表同乡会向赈灾中心负责人Halil ibrahim KOKLU先生捐赠了支票。土耳其驻温哥华总领事Mehmet Taylan Tokmak亲自接待了同乡会一行，向大家介绍了目前的物资收集情况，并代表土耳其政府向加拿大温州同乡总会的这一善举表示由衷地感谢！他说我们现在迫切需要把这里的救灾物资尽快运送到灾民的手里，温州同乡总会捐赠的集装箱真的是雪中送炭，充分体现了加拿大各族裔团结一心、共度难关的互助精神。            ",
          },
        },
        {
          paragraph: {
            text: "同乡会代表和赈灾捐赠中心所有义工们一起高呼“土耳其加油”！现场气氛热烈感人。同乡会表示将继续努力参与土耳其救灾工作。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a2-12.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a2-17.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a2-16.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a2-15.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a2-14.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a2-13.webp",
          },
        },
      ],
    },
  },
  {
    id: 100096,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",

    article: {
      title: "加拿大温州同乡总会顺利换届 朱建国会长成功连任",
      date: "2023-01-30",
      imageURL: "/images/article-webp/a1-12.webp",
      content: [
        {
          paragraph: {
            text: "（本网讯）2023年1月30日下午，加拿大温州同乡总会在列治文的会所内举行了全体理事会议，讨论近期会务，举行换届选举。参加会议的有会长朱建国、执行会长吴登金、余海洁、苏华伟，创会会长张进云、前任会长潘妙飞，常务副会长瞿益顺、徐新荣、周敏弟、陈森、陈默涵，陈瑞国以及副会长和理事吴光通、杨晓东、陈德龙、王国光、金涛、陈飞舟、秦锋、鲍承番、刘晓天、韩惠、姜凌，胡蓉。",
          },
        },
        {
          paragraph: {
            text: "理事会充分肯定了朱建国会长及其执行团队在过去三年所做的工作。虽然有疫情肆虐，但在朱会长的带领下，同乡会克服困难举办了一系列高质量有意义的活动，包括科普加拿大选举制度、中秋节和端午节的慰问活动、庆祝加拿大国庆、2022年成功举办“浙里有爱 四海迎春”活动、兔年春节联欢晚会、为食物银行捐款、为BC省洪灾地区捐款送温暖等活动，同时还颁发了英才奖学金、创办了北美新生代创业俱乐部等等。活动照顾到各个年龄段的温州老乡的需求，也吸引了各个层面的老乡参与同乡会的各类活动，真正体现了同乡会的宗旨：团结互助，携手共进！",
          },
        },
        {
          paragraph: {
            text: "在会议的换届环节中，到会的三位执行会长和常务副会长、副会长、理事等全票通过了朱建国会长连任加拿大温州同乡总会第八届会长。同乡会法律顾问Daniel Henderson 以及Cameron Lee也参加了会议，并在会上详细解释了新制定的会员行为守则。相信在朱会长的领导下，温州同乡总会将再创新高，更好地为老乡服务，为华人争光！            ",
          },
        },
        {
          paragraph: {
            text: "再次当选的朱建国会长说，同乡总会的职责就是尽我们所能服务温州老乡，让居住在加拿大的温州人在有需要、有困难的时候能获得来自同乡的关怀和互助。所以，同乡会是老乡们在加拿大的娘家。希望大家多回娘家，多参与各种活动。加拿大温州同乡总会已经走过22个春秋，在历任会长、副会长、理事和老乡的共同努力下，不断发展壮大。我们积极参与本地活动，融入主流社会，同时为加中友谊牵线搭桥。我们也将会运用法律手段，坚决捍卫我们的合法权益，反击任何针对华人的不实和不公平的歧视行为！            ",
          },
        },
        {
          paragraph: {
            text: "加拿大温州同乡总会于2001年12月注册成立，总部设在加拿大温哥华，会员来自原籍温州地区现居加拿大的各界人士和家属，成员遍及加拿大东西部各大城市。其宗旨是加强联谊，团结互助；凝聚力量，互通商机；共谋福利，参与公益。温州同乡总会是居住在加拿大的温州人温馨的家，也是连接加拿大和温州家乡的纽带桥梁。同乡总会致力于和加拿大各新老侨团增进沟通，加强合作，相互尊重，共同发展；连系加国政府，传递华人心声，融入当地社会，丰富多元文化；联合本地商界社团，组织商务、文化交流活动，协助华人安家创业，促进加中经贸往来和科技、文化交流。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-13.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-17.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-16.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-15.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-14.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/a1-13.webp",
          },
        },
      ],
    },
  },
  {
    id: 100095,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",

    article: {
      title: "加拿大温州同乡总会鸿兔大展盛宴迎春 ",
      date: "2023-01-15",
      imageURL: "/images/preview/640.webp",
      content: [
        {
          image: {
            imageSRC: "/images/preview/640.webp",
          },
        },
        {
          paragraph: {
            text: "（本网讯）2023年1月15日晚，癸卯玉兔向我们奔跑而来，居住在大温哥华地区的温州籍乡亲们在皇廷酒家齐聚一堂共迎新春，加拿大温州同乡总会“瑞兔迎新春 温情遍加国”春节联欢晚宴在喜气洋洋的欢乐声中盛大举行。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/641.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/642.webp",
          },
        },
        {
          paragraph: {
            text: "富丽堂皇的宴会厅里，红红火火，暖气袭人。晚会开始，全场起立齐唱加中两国国歌，主持人Amanda和Jack介绍到场嘉宾：中国驻温哥华侨务领事杨光、副领事丁天和温哥华中华会馆理事长钱华、加拿大华人社团联席会执行主席薛晓梅、联席会荣誉主席王典奇、加拿大华人妇女联合会会长徐凌、武汉温州商会会长陈定开、加拿大浙江同乡联合会主席潘妙飞、瑞邦金融资产管理有限公司公司董事长李洪、总经理理廖子蔚等社区领袖、商界精英和温州籍乡亲三百多人出席晚会。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/643.webp",
          },
        },
        {
          paragraph: {
            text: "加拿大温州同乡总会会长朱建国首先致词热烈欢迎嘉宾和乡亲们的到来，他说，今天，我们在温哥华欢聚一堂，喜迎2023年新春佳节。春节是我们中华民族最重要的传统节日，喜庆团圆的春节文化更是把我们身在大洋彼岸的炎黄子孙团聚在一起。加拿大是我们的第二故乡。我们同乡总会的职责就是尽我们所能服务同乡，让身居加拿大的温州人在有需要、有困难的时候有来自同乡的关怀和互助。所以，同乡会是同乡们在异国他乡的娘家。希望大家多回家坐坐，多参与各种活动。今天大家欢聚一堂，共度新春，共叙乡情，我心里感到格外的高兴和温暖。加拿大温州同乡总会已经走过22个春秋，在历任会长、副会长、理事和老乡的共同努力下，不断发展壮大。积极参与当地活动，融入主流社会，同时为加中友谊牵线搭桥。虽然近期有个别媒体为了博眼球，恶意绯谤传播包括同乡会在内的华人社团的不实信息，造成一定的负面影响。但是，我相信这些都只是我们发展历程中的小小水花，只会激励我们变得更加强大。我们将会采取法律手段，坚决捍卫我们的合法权益，反击任何对华人不实和不公平的行为！朱会长最后说，瑞兔迎新辞旧，温情天长地久，一元复始，万象更新！祝愿中加两国百业兴旺，经济腾飞，友谊长存！",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/644.webp",
          },
        },
        {
          paragraph: {
            text: "中国驻温哥华侨务领事杨光在热烈的掌声中致词，他代表中领馆向在场嘉宾、温州籍乡亲和华侨华人致以新春的祝福，他说，加拿大温州同乡总会是团结友爱的团体，长期以来温州同乡总会团结温州籍乡亲，积极融入当地社会，和本地各族裔人民一起致力于建设加拿大的多元文化，中国总领馆对温州同乡总会致力于中加两国人民的友谊，致力于传播中华传统文化所做出的努力给予充分肯定。前不久，中国政府因时因势科学精准的调整和优化了相关的防疫政策，国内人民的生活也逐步回归正常，经济逐步恢复，中外人民往来更加便捷。欢迎温州籍乡亲有时间回国去走走看看，谈谈生意，发展新的商机。希望在新的一年，大家继续支持中加友好交流，促进中加友好合作。祝愿温州同乡总会会务蒸蒸日上，祝愿温州乡亲们新春快乐，身体健康，阖家幸福，万事如意！",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/645.webp",
          },
        },

        {
          paragraph: {
            text: "温哥华中华会馆理事长钱华、加拿大华人社团联席会执行主席薛晓梅、联席会荣誉主席王典奇、加拿大华人妇女联合会会长徐凌、加拿大浙江同乡联合会主席潘妙飞、瑞邦金融资产管理有限公司公司总经理理廖子蔚代表大温华社分别发表了热情的致词，薛晓梅主席借此机会对一直以来帮助和支持联席会的温州老乡和各界精英表达深切谢意。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/646.webp",
          },
        },

        {
          paragraph: {
            text: "余海洁、吴登金、苏华炜三位温州同乡总会执行会长也一起登台发表热情的祝福，祝愿乡亲们在新的一年和和美美，平平安安，祝愿大家事业有成，万事如意！",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/647.webp",
          },
        },

        {
          paragraph: {
            text: "接着，李朝晖、胡丕峰送上墨写的对联，衷心祝福乡亲们新春愉快。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/648.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/649.webp",
          },
        },

        {
          paragraph: {
            text: "嘉宾讲话后，主持人邀请现场嘉宾拍合影，现场嘉宾和温州同乡会理事以及温州同乡会理事分别合影留念。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/650.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/651.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/652.webp",
          },
        },
        {
          paragraph: {
            text: "然后，主持人宣布晚宴开始，一道道精美菜肴陆续上桌，一杯杯嘉酿美酒飘香四座，乡亲们举杯邀友，互致问候，品尝美食，畅叙友情，全场充满欢声笑语，席间弥漫浓郁年味。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/653.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/654.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/655.webp",
          },
        },

        {
          image: {
            imageSRC: "/images/article-webp/655-1.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/656.webp",
          },
        },
        {
          paragraph: {
            text: "著名歌唱家王大宝一曲“好日子”为晚会的文艺演出开场，接着就是舞蹈“玫瑰玫瑰我爱你”，越剧“十八相送”，温州同乡会的成员表演了合唱“我和我的祖国”，小朋友们表演舞蹈“恭喜恭喜”，温州同乡瞿益顺表演萨克斯管“望春风”，一曲之后，观众反映热烈，他就再加一曲“我爱你，中国”，接着潘心和表演女高音独唱“风吹麦浪”，陈茹琵琶独奏“步步高、友谊天长地久”，执行副会长苏华炜执和郑捷演唱歌曲“念亲恩”，最后，温哥华著名VYSO青少年乐团团员Lucas Wu演奏小提琴“巴赫第二协奏曲第二乐章片段”。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/657.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/658.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/659.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/660.webp",
          },
        },
        {
          paragraph: {
            text: "表演精彩节目的间隙，展开了九轮大抽奖。奖品包括IFAMILOVE HOME LTD提供的价值51000加币的礼品和代金劵，饭团外卖提供的价值3500加币代金劵和一个月会员费，瑞邦金融资产管理有限公司提供的2000加币红包，潘妙飞会长提供的2000加币红包，以及温州老乡、世界著名水彩画家珊瑚捐赠的画。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/661.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/662.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/664.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/665.webp",
          },
        },
        {
          paragraph: {
            text: "节目精彩，会场掌声不断，奖品丰富，个个笑逐颜开。人们尝佳肴，品美酒，传信息，致问候，回味虎年，期盼兔年，对未来充满希望……",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/666.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/667.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/668.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/669.webp",
          },
        },
        {
          paragraph: {
            text: "出席晚宴的嘉宾还有北美艺术家协会会长沈振敏、大华商报社长马在新、加拿大四川同乡总会会长杨莎、加拿大安徵同乡总会会长赵完全、加拿大河北同乡总会会长刘书梅、加拿大华人摄影家协会会长贺朋令、加拿大华人联合总会副会长傅宾清、浙江台州商会会长蔡成杰、浙江嘉兴温州商会名誉会长庄君新等。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/670.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/671.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/672.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/673.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/674.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/675.webp",
          },
        },
        {
          paragraph: {
            text: "出席晚宴的主办方代表还有温州同乡总会创始会长张进云、温州同乡总会执行会长余海洁、吴登金、苏华炜、常务副会长徐新荣、高光荣、陈默涵、邓春玲、副会长刘晓天、陈森、金涛、秦峰、陈德龙、理事杨晓东、夏燕、吴光通等。",
          },
        },
        {
          paragraph: {
            text: "加拿大温州同乡总会还收到国会议员缪宗晏、关慧贞，省议员李耀华，列治文市长马保定发来的贺信，也收到温哥华中华会馆理事长、加拿大华人社团联席会、加拿大华人联合总会、加拿大华人妇女联合会发来的贺信。",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/676.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/677.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/678.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/679.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/680.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/681.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/682.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/683.webp",
          },
        },
      ],
    },
  },
  {
    id: 100094,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",
    subnav: [
      {
        subtitle: "temp1",
      },
    ],
    article: {
      title:
        "2022年7月2日温州同乡总会对老乡的孩子们考入全球排名50名内给予奖金，以资鼓励",
      date: "2022-07-02",
      content: [
        {
          image: {
            imageSRC: "/images/preview/still001.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173207.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173214.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173221.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173231.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173240.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173256.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173304.webp",
          },
        },
      ],
    },
  },
  {
    id: 100093,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",
    subnav: [
      {
        subtitle: "temp1",
      },
    ],
    article: {
      title: "2022年7月2日加拿大国庆纪念活动",
      date: "2022-07-02",
      content: [
        {
          image: {
            imageSRC: "/images/preview/still003.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20220917160941.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173159.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173317.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173323.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173331.webp",
          },
        },
        {
          image: {
            imageSRC: "/images/article-webp/微信图片_20230104173346.webp",
          },
        },
      ],
    },
  },

  {
    id: 100092,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",
    subnav: [
      {
        subtitle: "temp1",
      },
    ],
    article: {
      title: "2022年10月9日加拿大工程院院士刘江川访谈录",
      date: "2022-10-09",
      imageURL: "/images/article/still002.jpg",
      content: [
        {
          video: {
            videoURL: "/images/article/20221008WZFA.mp4",
          },
        },
      ],
    },
  },
  {
    id: 12241,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",
    article: {
      title: "瑞兔迎新春，温暖加国情。加拿大温州同乡总会向温州父老乡亲拜年",
      date: "2022-12-17",
      content: [
        {
          video: {
            videoURL: "/images/article/温州同乡会 拜年视频.mp4",
          },
        },
      ],
    },
  },
  {
    id: pid1,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "info/association",
    subnav: [
      {
        subtitle: "temp1",
      },
    ],
    article: {
      title: pid1Title,
      date: pid1Date,
      imageURL: pid1ImageURL,
      previewText: pid1PreviewText,
      content: [
        {
          paragraph: {
            text: "端午临中夏，",
          },
        },
        {
          paragraph: {
            text: "千载吉运长，",
          },
        },
        {
          paragraph: {
            text: "良辰榴花美，",
          },
        },
        {
          paragraph: {
            text: "丰福九天祥。",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "加拿大温州同乡总会的各位会长、理事、会员大家好！",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "端午佳节来临之际，加拿大温州同乡总会祝乡亲们———            ",
          },
        },
        {
          paragraph: {
            text: "身体“粽”是健康，            ",
          },
        },
        {
          paragraph: {
            text: "家庭“粽”是美满，            ",
          },
        },
        {
          paragraph: {
            text: "爱情“粽”是如糖，            ",
          },
        },
        {
          paragraph: {
            text: "事业的龙舟“粽”是快进，            ",
          },
        },
        {
          paragraph: {
            text: "手里的股票“粽”是上涨！            ",
          },
        },
        {
          paragraph: {
            text: "一年365天“粽”是快乐！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1652652011399501.jpg",
          },
        },
        {
          video: {
            videoURL: "/images/article/1653975356535117.mp4",
          },
        },
        {
          paragraph: {
            text: "为寥乡亲们的思乡之情，同乡总会特别准备了（粽子一蛋）。祝温州乡亲们端午节日快乐！            ",
          },
        },
        {
          paragraph: {
            text: "粽子是煮熟真空包装，因保存原因领取时间：            ",
          },
        },
        {
          paragraph: {
            text: "2022年5月20日（星期五）至22日（星期日）下午1点至5点            ",
          },
        },
        {
          paragraph: {
            text: "领取地址：加拿大温州同乡总会会所            ",
          },
        },
        {
          paragraph: {
            text: "地址：4266 Hazelbridge Way，Richmond              ",
          },
        },
        {
          paragraph: {
            text: "电话：6043799888            ",
          },
        },
      ],
    },
  },
  {
    id: pid2,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: pid2Title,
      date: pid2Date,
      imageURL: pid2ImageURL,
      previewText: pid2PreviewText,
      content: [
        {
          paragraph: {
            text: "北美新生代创业俱乐部首次⻅面会于 2022 年 4 月 9 日下午在加拿大温州同乡总会会所顺利举行。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739622433686.jpg",
          },
        },
        {
          paragraph: {
            text: "北美新生代创业俱乐部由温州同乡总会创立，是一个支持和帮助 新生代创业者交流发展的平台，秉承团结、互助、传承、发展和奉献的 宗旨，希望把正在北美创业和有创业梦想的年轻人们聚集在一起，交流 互助，共同发展。同时，也希望传承温州人的创业精神，以及加强对年轻人社会责任感的培养。 ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739722562516.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739759527218.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739797343628.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739797511626.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739798516486.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739798100661.jpg",
          },
        },
        {
          paragraph: {
            text: "⻅面会吸引了三十几位温州同乡会内新老企业家、近期内有创业计划的年轻人到场参加。新生代创业者们首先介绍了各自创办的企业， 涉及领域包括房屋建造和维护、餐饮、地产开发、⺠宿 Airbnb、宠 物、早教、家具、国际贸易等传统行业，还有自媒体、电商等年轻人喜欢涉足的热⻔行业，以及清洁能源、数字化软件等高科技产业。 ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739841822887.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739841306058.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739841654312.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739842940358.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739842631775.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649739842796780.jpg",
          },
        },
        {
          paragraph: {
            text: "创业俱乐部在会上宣布成立由成功企业家组成顾问团。常务副会 ⻓金平亮、余海洁、徐新荣、副会⻓苏华炜、理事林万山等顾问们除了为年轻人在北美的创业提供思路和勉励之外，还针对新生代创业者的发 言做了现场反馈、点评和指导。并针对几个有兴趣的创业方向探讨了初步的投资意向。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740048257113.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740048851316.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740048407977.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740048518784.jpg",
          },
        },
        {
          paragraph: {
            text: "创业俱乐部接下来将成立由新生代创业者组成的案例分析 case study 小组，每月轮流到小组内各创业实体进行实地考察，相互为组员在经营过程中遇到的实际困难和瓶颈进行分析，提供解决方案，并跟踪 结果。顾问团也会随同给予宝贵建议。             ",
          },
        },
        {
          paragraph: {
            text: "除此之外，创业俱乐部还计划不定期在同乡会会所举办周末创业沙⻰，邀请各行各业的成功企业家做商业专题分享讲座和交流会。并举办慈善活动，献出爱心，回馈社会。            ",
          },
        },
        {
          paragraph: {
            text: "加拿大温州同乡总会会⻓朱建国、创会会⻓张近云和执行会⻓吴登金对大家进行了勉励。             ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740119320969.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740119842848.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740119409832.jpg",
          },
        },
        {
          paragraph: {
            text: "朱建国会⻓强调对于温州新生代的培养是同乡会的主要工作，同乡会将 为创业者在北美的发展持续助力!同乡会将充分发挥平台优势，推广宣传创业俱乐部的会员企业，并利用国内和国际上的资源优势，为需要的 企业牵线搭桥。温州人最大的优势是团结。希望通过创业俱乐部可以改 变之前创业者单打独斗的局面。同乡会将整合各类资源，在经验、人脉、信息、资金等多个维度为新生代成功创业保驾护航，扶植出更多扎 根海外的成功企业!同时，同乡会也将努力回馈家乡，为帮助温州企业 拓展北美市场或寻找海外合作伙伴作出积极贡献!             ",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "会议在相互交流的热烈气氛中圆满结束。参加会议的年轻人纷纷 表示不虚此行、收获良多，太欢迎这样有深度有内容的活动了，感谢温州同乡会对新生代的关爱和对创业者的支持!             ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740180589205.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740180380695.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740180221982.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1649740180388913.jpg",
          },
        },
      ],
    },
  },
  // {
  //   id: pid3,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "家乡协会",
  //   subDirectory: "/info/association",
  //   article: {
  //     title: pid3Title,
  //     date: pid3Date,
  //     imageURL: pid3ImageURL,
  //     previewText: pid3PreviewText,
  //     content: [
  //       {
  //         iframe: {
  //           videoURL: "/images/article/1643090189871700.mp4",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "无论我们走到多远，也走不出祖国的挂牵，无论我们身在何处，都能体会到祖国母亲的温暖！            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1642476607326710.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "2022年1月16日，由浙江省侨办、浙江省侨联、加拿大温州同乡总会联合举办的“浙里有爱·四海迎春”新春慰侨活动 - 温哥华站启动仪式”在加拿大温州同乡总会温哥华会所正式拉开序幕。加拿大温州同乡总会、加拿大华人社团联席会、加拿大浙江同乡联合会、北美浙江台州总商会、加拿大温州青年会、加拿大温州商会，加拿大温州妇女会、加拿大温州高尔夫联谊会等协会的代表出席了本次启动仪式。当地主要媒体大华商报马在新社长也应邀出席。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1642476618572741.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "加拿大温州同乡总会朱建国会长首先代表浙江省侨办和侨联向广大旅加侨胞致以新春佳节最诚挚的问候和祝福，并宣读了侨办侨联“致海外侨胞的壬寅家书”。他说，两年多来，加拿大侨界积极引导广大侨胞，采取各种有效措施，齐心协力，抗击疫情，成绩斐然。当前，正值新春佳节，但新冠疫情尚未结束，身在海外的侨胞很难回国与家人团聚。浙江省侨办、浙江省侨联发起的“浙里有爱·四海迎春”活动温暖了每一位身在海外的浙江人。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1642476645414297.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "加拿大华人社团联席会魏仁民主席代表加拿大华人侨团和广大侨民致辞。他表示，很高兴看到浙江省侨办和侨联和加拿大温州同乡总会可以举办“浙里有爱·四海迎春”那么好的暖侨活动。在祖国和居住国需要华人协会做出贡献的时候，总能看到温州人的身影，且温州人这股团结的力量非常强大。在这次加拿大卑诗省百年一遇的洪灾救灾中，温州人以最快的速度集结，只用了两天时间就为加拿大红十字协会筹集赈灾款14000加币，为海外华人和华裔社团做出了榜样！            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1642476698361344.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "加拿大浙江同乡联合会会长、加拿大温州同乡总会的前任会长潘妙飞先生代表浙籍侨胞们为大家送上了新年的祝福，并预祝北京冬奥会圆满成功！            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1642476674322025.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "在启动仪式上，加拿大温州同乡总会还为成绩优异，毕业于世界前五十位名校的三名同学颁发了“英才计划”奖学金，以鼓励青年人努力学习报效祖国和社会。同时，对多名义工进行了表彰和嘉奖。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1642476718533216.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "据了解，此次“浙里有爱·四海迎春”暖侨活动，加拿大温州同乡总会为乡亲们准备的新年礼物也是颇费一番心思。在部分航运中断，加拿大市场货品单一的情况下，义工团队跑遍各个超市采购代表浙江口味的年货，有家乡特产的年糕、绍兴花雕、腊肠等，还在礼盒里贴心地放上了从国内运来的KN95口罩，就是为了让老乡真真切切的感受到“浙里有爱·四海迎春”！            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1642476728192786.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "本次“浙里有爱、四海迎春”新春慰侨活动温哥华站启动仪式，最后在发送年货的热闹氛围中圆满结束。虽然现在加拿大疫情还十分严重，但是“浙里有爱”让所有旅居的华侨华人感受到了暖心和安心。拿着盛满家乡味儿新年礼盒，老乡们感慨道，祖国家乡无时无刻不在关心着我们海外侨胞，浙江省侨办侨联更是我们浙江籍侨胞最亲切的“娘家”。            ",
  //         },
  //       },
  //       {
  //         space: {},
  //       },
  //       {
  //         paragraph: {
  //           text: "加拿大温州同乡总会            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "2022年1月17日            ",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: pid4,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: pid4Title,
      date: pid4Date,
      imageURL: pid4ImageURL,
      previewText: pid4PreviewText,
      content: [
        {
          paragraph: {
            text: "【明報專訊】日前，加拿大溫州同鄉總會在社交媒體上發起了為卑詩省洪水災民募捐活動。短短48小時就募集到來自溫州同鄉的8000仟多元加币善款。這些捐款來自加拿大境內外不同城市的溫州人。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1639682959345627.jpeg",
          },
        },
        {
          paragraph: {
            text: "溫州同鄉會會長朱建國指出，獻愛心，不分年齡；捐善款，不論多少。在加拿大生活的每一位華人都是這個國家的一份子，華人社團組織有義務、有責任在加拿大社會需要的時候站出來。            ",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "溫州同鄉會新生代會員蔣凌表示，加拿大首名華裔省督林思齊是華裔移民學習的榜樣，他給新移民的金句是，「接受Acceptance）、歸屬（Belonging）和貢獻（Contribution）」，為卑詩省洪水災民捐款，就是貢獻。華裔社區從來不缺少奉獻精神。只是，華人一直信奉，做好事不留名，不喜歡張揚，造成一些人對華人有誤解。新一代移民要積極投入到加拿大社會的建設中。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1639682967449456.jpeg",
          },
        },
        {
          paragraph: {
            text: "在加拿大出生的林瑜涵小朋友今年10岁，目前在中國學習中文。她將20元壓歲錢拿出來，捐給災區小朋友。她叮囑說，這個錢是指定給災區小朋友的，千萬別給錯了！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1639682979515597.jpeg",
          },
        },
        {
          paragraph: {
            text: "為了將捐款在最短的時間內送到卑詩省洪水災民手裡，節省不必要的捐款程序，溫州同鄉總會聽聞加拿大紅十字會的代表將出席另一場華人社團的捐款儀式，就直接帶著善款趕赴現場，將支票交給紅十字協會代表Jennifer Wong。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1639682988684483.jpeg",
          },
        },
        {
          paragraph: {
            text: "朱建國會長表示，加拿大温州同鄉總會的募捐活動還在繼續中，收到的善款來自加拿大不同城市的溫州人，很多溫州老鄉從沒有來過溫哥華，也积极為卑詩省水災捐款，這是出乎意料的，很讓人感動。特別是聽聞，政府會為水災籌款做等額匹配，就更積極了！温州同乡会很快會將第二笔募款再交給加拿大紅十字協會。            ",
          },
        },
      ],
    },
  },
  {
    id: pid5,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: pid5Title,
      date: pid5Date,
      imageURL: pid5ImageURL,
      previewText: pid5PreviewText,
      content: [
        {
          paragraph: {
            text: "    11月21日，温州同乡总会在温哥华皇庭海鲜酒家举办了一个新老侨团的交流晚宴。邀请了列治文市议员欧泽光、国会议员Wilson Miao竞选团队的负责人Elsa Wong，以及近期合作过的一些社团领导参加，包括（排名不分先后）：中华会馆郭英华理事长、梁伟儒副理事长、许绍俊副理事长、颜启星理事、黄氏宗亲会 - 汉升体育会黄碧海会长、加拿大澳门商会周炳康副会长、大华商报马在新社长、华联会牛华会长和王岩执行会长、河北同乡会刘书梅会长、加中城市友好协会吴家明会长、加拿大华裔投票处进会的创始人鲍道平、白巍和王立、联合国维合部中国事务张龙柄秘书长、中医协会卓同年会长。温州同乡会的多名常务副会长、副会长，以及秘书长和理事们均参加了此次活动。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1637649687948611.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1637649707790508.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1637649646295507.jpeg",
          },
        },
        {
          paragraph: {
            text: "    活动开始时，温州同乡会的朱建国会长代表同乡会向所有嘉宾表示了热烈的欢迎，同时对于近期大家对温州同乡会的关心和支持表示感谢，欧议员、马社长和很多嘉宾纷纷在宴席上发言。大家对于温州同乡会在华人社区的努力和贡献都予以了高度的评价，并表示当地的华人虽然身处海外但是心系祖国。随着疫情的逐渐好转，各个社团要进一步加强交流和沟通，团结互助，共同发展，努力提高华人的地位！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1637649666575997.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1637649721805008.jpeg",
          },
        },
      ],
    },
  },
  {
    id: 6,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "加拿大華裔投票促進會「就差你一票」街頭促票活動",
      date: "2021-09-24",
      imageURL: "/images/article/1632512090782665.jpeg",
      previewText:
        "【明報專訊】加拿大華裔投票促進會（CCGTV）舉辦的全加聯動「就差你一票」街頭促票活動，今天下午2點，在包括溫哥華、本那比、列治文、素里、高貴林、卡爾加裏、多倫多等數個城市同時舉行。這次活動的目的是，提升華…",
      content: [
        {
          paragraph: {
            text: "【明報專訊】加拿大華裔投票促進會（CCGTV）舉辦的全加聯動「就差你一票」街頭促票活動，今天下午2點，在包括溫哥華、本那比、列治文、素里、高貴林、卡爾加裏、多倫多等數個城市同時舉行。這次活動的目的是，提升華裔加拿大人的社會參與度、增強對話、更好地融入選舉文化。            ",
          },
        },
        {
          paragraph: {
            text: "活動現場，不同城市上百名志願者們，身著印有「就差你一票」（Your Vote Matters）的T恤、佩戴印有同樣標語的N95口罩、揮動著印有同樣標語的手牌，在各城市繁華地段，向過路民眾、車輛宣傳投票的理念，提醒選民們不要忘記在9月20日投票。            ",
          },
        },
        {
          paragraph: {
            text: "在華埠街頭促票點，來自加拿大溫州同鄉會總會的志願者瞿豪表示，華社組織的這項活動太有意義了。他說，作為華人青年移民，雖然在生活上很快融入了加拿大社會，但是，在政治生活上還是需要了解和學習北美投票文化的。華社舉辦的這項活動，讓華裔民眾更清楚了投票對華裔生存權利的重要性。他還說，以前，還真沒想那麼多。通過這次線上、線下的活動，也對加拿大各個政黨和候選人更加了解了。昨天，已經將選票郵寄出去了。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1632512090782665.jpeg",
          },
        },
      ],
    },
  },
  {
    id: 7,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "加拿大大選在即 志願者上街促華裔投票 视频",
      date: "2021-09-24",
      imageURL: "/images/article/1632512090782665.jpeg",
      previewText: "",
      content: [
        // {
        //   video: {
        //     videoURL: "/images/article/1632511842440297.mp4",
        //   },
        // },
        {
          iframe: {
            videoURL:
              "https://www.wenzhouren.ca/uploads/video/20210925/1632511842440297.mp4",
          },
        },
      ],
    },
  },
  {
    id: 8,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "温州同乡会线上投票科普动员会-投票指南",
      date: "2021-09-10",
      imageURL: "/images/article/1631232292242990.png",
      previewText: "",
      content: [
        {
          iframe: {
            videoURL:
              "https://www.wenzhouren.ca/uploads/video/20210910/1631232918227250.mp4",
          },
        },
      ],
    },
  },
  {
    id: 9,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "温州同乡会线上投票科普动员会-朱会长发言和联邦大选简介",
      date: "2021-09-09",
      imageURL: "/images/article/1631232292242990.png",
      previewText: "",
      content: [
        {
          iframe: {
            videoURL:
              "https://www.wenzhouren.ca/uploads/video/20210910/1631228769237803.mp4",
          },
        },
      ],
    },
  },
  {
    id: 10,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "联邦大选即将来临，华人如何积极参与",
      date: "2021-08-18",
      imageURL: "/images/article/1629265337259915.jpeg",
      previewText:
        "8月15日，加拿大总理特鲁多正式宣布，于2021年9月20日举行提前大选。根据加拿大法律，联邦大选每四年举行一次，而上一次的大选是在2019年10月，距今只有两年不到，为什么就要提前大选了？而且还只有短短36天的竞选期…",
      content: [
        {
          paragraph: {
            text: "8月15日，加拿大总理特鲁多正式宣布，于2021年9月20日举行提前大选。根据加拿大法律，联邦大选每四年举行一次，而上一次的大选是在2019年10月，距今只有两年不到，为什么就要提前大选了？而且还只有短短36天的竞选期呢？而且竞选要花费大量的人力和金钱，是什么原因促使总理下定决心发动这次“闪电大选”呢？             ",
          },
        },
        {
          paragraph: {
            text: "背后原因很简单，就是因为现在的自由党政府是”少数政府”。联邦下议院总共有338个议席。而执政党如果获得超过这个数字的一半以上，就会在议会中占有绝对的优势和控制权。而上次的大选，自由党虽然在选举中胜出，但只获得了155个席位，没有超过半数，因此只能成立少数党政府。这就像董事会里面，主席虽然是大股东，但是由于手里的股份不到50%，每次决策都要去拉拢其他小股东的支持。这肯定不是长久之计，还分分钟有被拉下台的危险，所以最好的办法就是购入更多的股份。而政党的办法则更为简单粗暴，直接推倒重选。             ",
          },
        },
        {
          paragraph: {
            text: "由于特鲁多领导的自由党在疫情期间推动的抗疫政策获得了大多数民众的认可，支持率稳步上升。根据CBC Poll Tracker最新的民调数据显示，联邦自由党的支持率为35.0%，持续领先于保守党的29.0%和新民主党的19.3%，有很大的机会获得超过170个席位的多数议席。因此，自由党发动此次大选的目的也就不难理解了。             ",
          },
        },
        {
          paragraph: {
            text: "虽然刚刚宣布大选，可是大家从最近各大媒体的政党广告就可以嗅出大选来临的气息了。而各大政党更是早早地就剑拔弩张，开始频繁联络支持者，并通过党内提名，推出了各自在每个选区的候选人。相比联邦自由党认为的天时地利人和，反对党们自然是不欢迎这突如其来的大选，纷纷批评这是自私的行为。             ",
          },
        },
        {
          paragraph: {
            text: "不管政党们各自处于怎样的立场，对于身处亚裔仇视漩涡中的加拿大华人来说，这次大选倒是一个提升社会地位的绝佳契机。大家都知道，出于各种各样的原因，近期西方社会对于海外华人的仇视现象甚至犯罪直线上升。而今年五月，温哥华更被彭博社冠以“ 北美仇视亚裔之都”。这些暴力事件不仅让旅居海外的华人们不再有安全感，而维权道路上的艰辛更让我们在这个第二故乡没了归属感。             ",
          },
        },
        {
          paragraph: {
            text: "为什么华人总是被忽略的一群人？这其实和我们的参政人数少有很大的关系。一方面在各级政府的选举中出来参选的华裔比率非常少，当选的就更是少之又少。以最多华人居住的列治文市举例，华人居民比率超过54%，而市议会中包括市长在内的9名成员中仅有一名华裔市议员。此届338个联邦议席中华裔议员也只占8席。反观印度裔，就占据了现任新民主党党领、现任联邦国防部长、BC省前任省长等重量级职位。在参选人数上更是碾压我们华裔。值得欣喜的是，上届华裔参选人数和之前相比已经有了很大的提高，华人议员伍凤仪更是被委任为联邦小型企业及出口促进部部长。可是总的来说，华裔的从政之路还是任重而道远。             ",
          },
        },
        {
          paragraph: {
            text: "另一方面，华人参加投票的积极性不高。其实每次大选后，加拿大选举局会对每次的投票状况作一个详细的分析，包括各族裔的投票率。而各党派也会参考这个数据制定今后的选举策略。据统计，华裔的投票率通常会比各族裔平均水平低10%。试想，在选票至上的政治体制中，这些政府官员、政党和议员们，会不会真正重视华人？会不会用心倾听华人的声音？甚至为华人发声呢？             ",
          },
        },
        {
          paragraph: {
            text: "因此，提高华人的投票率刻不容缓。这也是最容易做到的，大家都去参加投票，发出我们华人的声音。只有这样，我们才会被真正重视起来，提高我们的社会地位。这里是投票时所需要考虑到的一些因素，帮助你做出选择：             ",
          },
        },
        {
          paragraph: {
            text: "1）了解每个政党的竞选纲要。每个政党在竞选时都会推出他们的竞选纲要，就是一旦当选以后如何计划治理国家，解决民生大计。所以联邦大选大都是选政党。因为什么政党上台决定今后推行的政策。             ",
          },
        },
        {
          paragraph: {
            text: "2）了解每个政党的党领。看看谁比较和你的眼缘，毕竟是将来要做总理的，经常会在电视上看到不说，还代表加拿大的形象。特鲁多在15年就是凭借着帅气的外形斩获了很多选票。此外，还可以比较一下党领们的背景、领导能力、政治经验等等。             ",
          },
        },
        {
          paragraph: {
            text: "3）了解自己选区的候选人。你最终还是要投票给某个特定的候选人。所以他是否真的为人民服务，能力如何也是重要的参考因素之一。             ",
          },
        },
        {
          paragraph: {
            text: "可能有人会说，我不是公民，没有办法参与政治。其实除了投票之外，我们还可以通过其它很多的方式积极参政。有些方式如果不是公民也是可以做到的。下面就是几个建议：   ",
          },
        },
        {
          paragraph: {
            text: "1）加拿大永久居民和公民，年满特定年龄之后（每个政党不同，一般是14到16岁）都可以加入想要支持的政党，成为党员，参与党内的选举，甚至加入候选人的竞选小组。             ",
          },
        },
        {
          paragraph: {
            text: "2）参与政党的志愿工作。尤其是大选期间，每个候选人都需要大量的义工为自己拉票助阵。留学生也是欢迎加入的。             ",
          },
        },
        {
          paragraph: {
            text: "3）赞助自己所居住选区的候选人。加拿大对于政治捐款有着严格的规定，每位公民和永久居民最多可以“以个人的名义”，给每个政党捐款1650加币。如果你们家有好几个人，也可以多捐一些。候选人一定会很高兴地接受这笔“巨款”。             ",
          },
        },
        {
          paragraph: {
            text: "4）如果你家住house，也可以联系你心仪的候选人在家门口插上他/她的广告牌，替他/她造势助威。             ",
          },
        },
        {
          paragraph: {
            text: "另外，我们在平时也可以与所在选区的联邦、省、市三级议员接触，反映民意和提供政策建议。             ",
          },
        },
        {
          paragraph: {
            text: "相比大选的结果，华人参政热情和投票率的提高才是加拿大全体华人的真正胜利。让我们积极地迈出这一步！             ",
          },
        },
        {
          paragraph: {
            text: "",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "温州同乡会            ",
          },
        },
        {
          paragraph: {
            text: "2021年8月16日            ",
          },
        },
      ],
    },
  },
  // {
  //   id: 11,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "家乡协会",
  //   subDirectory: "/info/association",
  //   article: {
  //     title:
  //       "2021年世界温州人新生代国情研修班结业 加拿大温州同乡总会选送学员收获满满",
  //     date: "2021-07-20",
  //     imageURL: "/images/article/1626759522314649.jpg",
  //     previewText:
  //       "7月16日，2021年世界温州人新生代国情研修班结业仪式在世界温州人家园举行，来自海内外各行各业的50余名新生代温州人汇聚一堂，学习习近平总书记“七一”重要讲话精神，参观中共省一大会址，考察苏步青故居、山根音…",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "7月16日，2021年世界温州人新生代国情研修班结业仪式在世界温州人家园举行，来自海内外各行各业的50余名新生代温州人汇聚一堂，学习习近平总书记“七一”重要讲话精神，参观中共省一大会址，考察苏步青故居、山根音乐艺术小村等乡土乡情，了解祖国发展和家乡变化，继而弘扬家国情怀，讲好温州故事。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1626759552361770.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "自2010年起，温州市委统战部开设了世界温州人新生代国情研修班，至今已举办十二期，共有650余名新生代参加。优秀的新生代世界温州人通过研修班了解国情、了解家乡、联络情谊、交流合作、传承文化……这里留下了他们不断思考、开拓进取的印迹，让世界温州人情谊永续。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1626759572888137.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "结业不是结束，更是开始。活动上，学员们分享学习收获、展望未来，拥抱新时代，担当新使命——“让我们成为温州新名片”            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "加拿大温州同乡总会选送的学员阿迪表示：“回来是一份情怀，更是一份责任。作为先回来的我们，要努力开辟出一条能让国际化视野在这片土地开出美丽花朵的实践，让更多外出求学的学子，回到温州，回到家乡，为家乡作贡献。”            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "徐晓倩说：“回到家乡，我觉得身上的担子更重了。我们在座的同学，大多是享受了比同龄人更多的社会资源和教育资源，可能是先富起来的人群，因此我们有责任去带头创新，打破思维的束缚，为温州带来改变，让我们自己成为温州的新名片。”            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "温州是民营经济的发源地，温州今天的辉煌成绩离不开海外闯荡的几代新老华侨的爱乡、建家情怀！温州海内外华人华侨要继续发扬中华民族的优良传统，努力在新时期、新世界局势下发挥作用，和家乡人民一道，将温州建设成民营经济的高地，在经济上、产业上多思考，打造更多的温州特色产业。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1626759600434919.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1626759600972177.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1626759601912666.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1626759601242128.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1626759603703486.jpg",
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 12,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "中国新闻",
  //   subDirectory: "/info/china",
  //   article: {
  //     title: "加拿大温州同乡总会 祝福祖国繁荣昌盛",
  //     date: "2021-07-01",
  //     imageURL: "/images/article/1625113727906659.jpg",
  //     previewText: "",
  //     content: [
  //       {
  //         video: {
  //           videoURL: "/images/article/1625114373824597.mp4",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1625113947935262.jpg",
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 13,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "家乡协会",
  //   subDirectory: "/info/association",
  //   article: {
  //     title:
  //       "浙江侨界“侨心向党再出发”初心之旅开幕式暨嘉兴站活动成功举行（报道之一）",
  //     date: "2021-05-20",
  //     imageURL: "/images/article/1621544652571877.jpeg",
  //     previewText:
  //       "浙江省人大常委会党组副书记、副主任李卫宁，中共浙江省委党史学习教育第九巡回指导组组长施利民，浙江省人大民族宗教华侨外事委员会主任委员宋建勋，浙江省侨联党组书记、主席连小敏，中国侨联文化交流部副部长邢砚…",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "浙江省人大常委会党组副书记、副主任李卫宁，中共浙江省委党史学习教育第九巡回指导组组长施利民，浙江省人大民族宗教华侨外事委员会主任委员宋建勋，浙江省侨联党组书记、主席连小敏，中国侨联文化交流部副部长邢砚庄，中国侨商会常务副会长、浙江省侨商会会长廖春荣，浙江日报报业集团党委委员、副总编辑王水明，中共嘉兴市委常委、统战部部长张仁贵，浙江省侨联副主席、省侨青联会长林东，浙江省侨联副主席、省侨商会常务副会长陈乃科，浙江省侨联副主席、宁波市侨商会监事长傅旭敏等相关领导和嘉宾出席开幕式。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544798211298.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "全球侨胞联动，致敬百年华诞            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544678488021.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544704332249.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544721918017.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "整场开幕式线上线下结合，海内海外联动。  ",
  //         },
  //       },
  //       {
  //         space: {},
  //       },
  //       {
  //         paragraph: {
  //           text: "祖国的变化和发展、与会领导对侨胞的鼓励和肯定都深深感动着每一位侨胞的赤子之心！            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "作为侨胞代表，加拿大温州同乡总会常务副会长  吴登金先生在活动现场深受感动，他不无感慨的表示，「我们每一位生活在国外的侨胞都是一张行走的中国名牌，我们为强大的母国感到自豪，也要代表中国人，树立好在加拿大的中国形象」。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544745797314.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544763723268.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544775696305.jpeg",
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 14,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "家乡协会",
  //   subDirectory: "/info/association",
  //   article: {
  //     title: "党有号召 侨有行动",
  //     date: "2021-05-20",
  //     imageURL: "/images/article/1621544441308810.jpeg",
  //     previewText:
  //       "—加拿大温州同乡总会常务副会长吴登金先生代表出席「一场初心之旅，献礼建党百年。」活动一场初心之旅，献礼建党百年。百侨三地，寻访红色初心活动由由浙江省侨联、浙江日报报业集团指导。浙江省侨商会、浙江省侨界…",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "—加拿大温州同乡总会常务副会长吴登金先生代表出席「一场初心之旅，献礼建党百年。」活动            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544484558547.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "一场初心之旅，献礼建党百年。百侨三地，寻访红色初心活动由由浙江省侨联、浙江日报报业集团指导。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "浙江省侨商会、浙江省侨界青年联合会、浙江省侨联妇女工作委员会、《浙商》杂志社主办，嘉兴市侨联、宁波市侨联、丽水市侨联、侨音融媒体中心承办。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "这场重走浙江革命之路的初心之旅正是侨胞在新时代逐梦伟大征程中的一次整装再出发。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544453807990.jpeg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "此次活动「加拿大温州同乡总会常务副会长吴登金先生代表出席。」            ",
  //         },
  //       },
  //       {
  //         space: {},
  //       },
  //       {
  //         paragraph: {
  //           text: "党有号召，侨有行动。此次初心之旅活动线上线下结合，开闭幕式将面向200多万浙籍侨胞全球直播，教育引领广大浙籍侨胞线上线下学史明理、学史增信、学史崇德、学史力行，在浙江这片红色土地上，扛起“五大历史使命”，在侨界中掀起一股学史悟思、铭记党恩、增信崇德、勇开新局的热潮，在“重要窗口 侨有担当”中贡献力量，以实际行动和优异成绩庆祝建党100周年。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1621544468341450.jpeg",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: pid8,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: pid8Title,
      date: pid8Date,
      imageURL: pid8ImageURL,
      previewText: pid8PreviewText,
      content: [
        {
          paragraph: {
            text: "加拿大温州同乡总会的姐妹们，国际女神节快乐！            ",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "世界上若没有女人，这个世界至少要失去十分之五的真，十分之六的善，十分之七的美。 ",
          },
        },
        {
          paragraph: {
            text: "———冰心",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1615099519244466.jpg",
          },
        },
        {
          paragraph: {
            text: "三八妇女节，是国际上的惯用称呼，但在面对我们身边人的时候，我们温州女人还是更愿意把这天叫成“三八女神节”。 ",
          },
        },
        {
          paragraph: {
            text: "每位女人都拥有多重身份，女儿、妻子、母亲、萌妹子、女汉子……无论哪一种身份，只要有一颗爱自己的心，那么你就是最美丽的女神。            ",
          },
        },
        {
          paragraph: {
            text: "不论你是全职妈妈，还是在职场冲锋陷阵的女强人，亦或是快乐的小仙女，在这春暖花开的日子里，请记得不负春光，来赴一场春天的约会！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1615099635421085.jpg",
          },
        },
        {
          paragraph: {
            text: "小知识：三八妇女节的由来            ",
          },
        },
        {
          paragraph: {
            text: "三八妇女节在每年的3月8日，全称是国际劳动妇女节，是全世界的妇女为了争取自己的权利、平等而来的节日。妇女们反抗旧社会的压迫和偏见，为了自己权益做了很多贡献和努力。            ",
          },
        },
        {
          paragraph: {
            text: " 1909年3月8日，妇女节因为工作环境恶劣，工资低，举行规模巨大的罢工和示威游行，要求实行8小时工作制、增加工资和获得选举权。            ",
          },
        },
        {
          paragraph: {
            text: " 活动由美国伊利诺斯州芝加哥市的女工以及全国纺织、服装业的工人参与，这也是历史上劳动妇女们举行的第一次有组织的群众斗争，充分显示了劳动妇女们的力量。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1615099601920249.jpg",
          },
        },
        {
          paragraph: {
            text: " 这次斗争获得了全国乃至其他国家妇女同胞热烈响应、支持，最后取得了胜利。            ",
          },
        },
        {
          paragraph: {
            text: " 1910年8月，世界大战前，战争的阴影笼罩着世界，在哥本哈根召开了《国际社会主义者第二次妇女代表大会》。            ",
          },
        },
        {
          paragraph: {
            text: " 有17个国家的代表出席会议，讨论反对帝国主义，保护世界和平，还讨论保护妇女儿童权利。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1615099595571456.jpg",
          },
        },
        {
          paragraph: {
            text: " 会议上提出以每年的3月8日作为全世界妇女的斗争日，得到与会代表的一致拥护。            ",
          },
        },
        {
          paragraph: {
            text: " 1911年的3月8日是历史上第一个国家劳动妇女节，中国在1922年开始纪念妇女节。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1615099553532891.jpg",
          },
        },
      ],
    },
  },
  // {
  //   id: pid7,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "家乡协会",
  //   subDirectory: "/info/association",
  //   article: {
  //     title: pid7Title,
  //     date: pid7Date,
  //     imageURL: pid7ImageURL,
  //     previewText: pid7PreviewText,
  //     content: [
  //       {
  //         paragraph: {
  //           text: "加拿大温州同乡总会在温州举行2021年新春酒会，酒会圆满成功！            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1615099293163695.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "市侨联副主席钟体琪等领导参加了联谊会并现场发言，给予加拿大温州同乡总会在2020年抗疫期间在为家乡及居住国做出的贡献给予了充分肯定和高度赞扬。            ",
  //         },
  //       },
  //       {
  //         space: {},
  //       },
  //       {
  //         paragraph: {
  //           text: "特别令人感动的是：温州市政府侨务部门用真心换真心，真正调动起了我们海外侨胞侨眷助力中国发展的积极性。在疫情期间加拿大温州同乡总会各位会长、理事带头捐款，会员们积极响应，在极短的时间里为支援家乡抗疫和居住国抗疫2次捐款！充分体现了理事们在协会中的巨大影响力和号召力！            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1615099380572085.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: " 加拿大温州同乡总会一直非常注重树立温州人在居住国的形象，我们时刻牢记每一个在国外的游子，背后有强大祖国和家乡政府的支持。同时，我们加拿大温州同乡总会不但在居住国，关爱团结温州家乡人，更是积极投入居住国的建设和发展，融入到居住国主流社会，发挥侨胞侨眷在居住国的独特作用！            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "      家乡政府特别赞扬了在疫情期间，加拿大温州同乡总会为加拿大医院、老人院等社会机构捐款捐物已成常态化。特别是为加拿大历史最悠久的慈善机构—食物银行捐款的义举。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "      加拿大温州同乡总会为居住国抗疫的贡献精神，被作为加拿大华人社团的典型事迹在加拿大媒体和美国媒体争相报道。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "       2020年4月20号到22号“美国全球新闻网”“雅虎财经网”“卑诗省商业网”“温哥华太阳报”“加拿大明报”“加拿大华语电视新闻”等中英文主流媒体都做了广泛的宣传报道。这也引起了家乡政府的关注和支持！            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1615099410500272.png",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "为了鼓励海外侨胞的义举，“温州市人民政府侨务办公室”和“温州回国华侨联合会”还特别为加拿大温州同乡总会举行了象征着荣誉“温州市海外示范侨团”挂牌仪式！            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "据悉，加拿大温州同乡总会是海内外侨团第一个荣获此光荣称号的侨团。            ",
  //         },
  //       },
  //       {
  //         space: {},
  //       },
  //       {
  //         paragraph: {
  //           text: "今后，加拿大温州同乡总会还将一如既往秉承同乡总会的办会理念：团结、互助、发展、前进。            ",
  //         },
  //       },
  //       {
  //         space: {},
  //       },
  //       {
  //         paragraph: {
  //           text: "协会的理事们、会员们也将继续并肩携手，画好海内外中华儿女的同心圆！为祖国的强盛、为中华民族的崛起更好地发出中国的声音、讲好中国故事！            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1615099426271089.png",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: 17,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "2021加拿大温州同乡总会给您拜年啦！",
      date: "2021-02-10",
      imageURL: "/images/article/1612997517693340.png",
      previewText:
        "尊敬的加拿大温州同乡总会的父老乡亲们，祝2021“牛”转乾坤、身体健康、合家欢乐、万事如意！2020年，是极不平凡的一年。面对突如其来的严重疫情，加拿大温州同乡总会团结在家乡温州的加拿大归侨侨眷和身在加拿大的…",
      content: [
        {
          paragraph: {
            text: "尊敬的加拿大温州同乡总会的父老乡亲们，祝2021“牛”转乾坤、身体健康、合家欢乐、万事如意！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1612997506584931.png",
          },
        },
        {
          paragraph: {
            text: "2020年，是极不平凡的一年。面对突如其来的严重疫情，加拿大温州同乡总会团结在家乡温州的加拿大归侨侨眷和身在加拿大的海外侨胞通过各种方式、各种渠道一边参与国内疫情防控，一边凝聚起生活在加拿大的温州侨胞，积极投身到在居住国抗击疫情、为居住国社会抗疫捐款、捐物资的活动中！            ",
          },
        },
        {
          paragraph: {
            text: "充分体现了加拿大温州同乡总会乡亲们的强大合力！彰显了新时代海外侨胞的责任担当，体现了中华儿女血浓于水、众志成城、同舟共济的精神力量。            ",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "加拿大温州同乡总会作为旅加侨界举足轻重的侨社创建20年来，一直以团结侨胞、互助合作、心系桑梓、同心协力、创业报国、维护同乡合法权益、加强两国民间公共外交、推进中加友好往来，积极支持参与各地的建设事业，为中国地方与加国进行多领域合作搭建平台和桥梁，为促进中加两国的经济、文化交流，加强侨团的自身建设为己任，努力起到了侨团带头作用。            ",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "新的一年，重要的侨团就要承载更大的责任、更多的希望！加拿大温州同乡总会在新的一年继续奋发图强，在促进和谐侨社建设、侨胞的生存和发展、中加关系的发展等方面再做出新贡献！携手创造更加辉煌的明天！            ",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "祝福加拿大温州同乡总会的乡亲们            ",
          },
        },
        {
          paragraph: {
            text: "岁岁常欢愉，年年皆胜意。岁岁年年，万喜万般宜            ",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "2021牛年大吉大利            ",
          },
        },
      ],
    },
  },
  // {
  //   id: pid6,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "家乡协会",
  //   subDirectory: "/info/association",
  //   article: {
  //     title: pid6Title,
  //     date: pid6Date,
  //     imageURL: pid6ImageURL,
  //     previewText: pid6PreviewText,
  //     content: [
  //       {
  //         paragraph: {
  //           text: "温州市十三届人大六次会议于2021年2月2日召开；市政协十一届五次会议于2021年2月1日召开。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "今年侨界委员们都关注什么？他们又带来哪些提案？两会期间，温州侨联特推出《“两会”侨声音》聚焦两会内外热点，展示侨界委员风采。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "加拿大温州同乡总会会长 朱建国先生代表加拿大华人华侨参加了在温州召开的此次盛会！            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1612409249547803.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1612409249696394.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1612409250351289.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1612409250340538.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1612409250195128.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1612409250894883.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1612409251761898.jpeg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1612409251371547.jpeg",
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 19,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "家乡协会",
  //   subDirectory: "/info/association",
  //   article: {
  //     title: "“侨连五洲•情满西湖” 特别报道之一",
  //     date: "2020-12-12",
  //     imageURL: "/images/article/1607742801271444.jpeg",
  //     previewText:
  //       "近日，在杭州召开的“侨连五洲•情满西湖”活动在圆满闭幕！       这次盛大的侨界活动是由中国侨联、浙江省人民政府主办，浙江省侨联、杭州市人民政府、嘉兴市人民…",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "       近日，在杭州召开的“侨连五洲•情满西湖”活动在圆满闭幕！  ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "       这次盛大的侨界活动是由中国侨联、浙江省人民政府主办，浙江省侨联、杭州市人民政府、嘉兴市人民政府、湖州市人民政府承办的。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1607742953418361.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "       这次活动是2020年收官之际侨界堪称规格高、活动内容接地气、活动形式多样、考察内容高科技含金量高的一次活动。来自全球五大洲60多个国家和地区的近300名海外侨胞出席了活动。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1607742974159185.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "       中国侨联副主席程学源，浙江省人民政府副省长朱从玖，浙江省人大常委会原副主任、浙江大学浙商发展研究院院长王永昌，中国企业评价协会会长，第十二届全国政协委员，国务院发展研究中心原副主任、研究员侯云春，外交部领事司司长崔爱民，中国侨联兼职副主席、江苏省侨联党组书记、主席周建农，中国侨联联谊联络部部长桑宝山、副部长、一级巡视员朱柳，权益保障部部长张岩，经济科技部副部长、一级巡视员夏付东，中国侨联公益事业管理服务中心主任何继宁，以及河南、广东、福建、上海、吉林、陕西、江西相关省市侨联负责同志，浙江省有关部门、地级市有关领导参加。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "       本次活动以“弘扬抗疫精神，汇聚侨界力量；深化合作发展，共创美好未来”为主题，共商侨社、侨商、侨青发展，凝聚侨心侨力，搭建合作共赢平台，助力高质量发展，加快构建新发展格局，为同圆共享中国梦和构建人类命运共同体贡献侨界力量。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "       由加拿大温州同乡总会会长 朱建国 先生率领的北美温州侨界代表团参加了此次活动。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "       代表团成员由旅居加拿大的温州企业家组成。他们分别是加拿大温州同乡总会名誉会长 藤 达先生、常务副会长 陈时满先生、常务副会长 瞿益顺先生、副会长吴登金先生。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1607742993963116.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "       活动中，中国侨联副主席程学源首先代表中国侨联和万立骏主席向海外侨胞表达了亲切问候和热切关怀。程学源说，“侨连五洲”是中国侨联与相关省级人民政府共同搭建的品牌平台，旨在聚焦侨胞发展、扩大沟通交流、推动合作共赢，更好发挥侨联组织和海外侨胞的独特优势，团结凝聚海内外侨胞为实现中华民族伟大复兴中国梦和构建人类命运共同体贡献力量。在抗击新冠肺炎疫情斗争中，包括海外侨胞在内的全体中华儿女风雨同舟、和衷共济，海外侨团和侨胞迅速反应、发挥作用，倾力驰援国内、奉献当地，再一次展现了华侨华人爱国爱乡爱家的赤子之心和积极回馈住在国的社会担当。            ",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "       会议特别回顾了前不久，习近平总书记在广东汕头考察时的重要讲话，充分肯定了侨的贡献，对广大侨胞参与新时代祖国建设寄予了期望，是对广大侨胞的巨大鼓舞和鞭策，也为中国侨联打好新时期“侨”牌，扎实做好侨务工作，提出了明确要求，指明了努力方向。            ",
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: 20,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "中国新闻",
  //   subDirectory: "/info/china",
  //   article: {
  //     title: "2020年温州公共外交研修班圆满落幕",
  //     date: "2020-12-01",
  //     imageURL: "/images/article/1606839874106658.png",
  //     previewText:
  //       "近日，由温州市政协港澳台侨和外事委、温州公共外交协会主办，平阳县政协、温州肯恩大学协办的“2020年温州公共关系外交研修班”在温州肯恩大学圆满完成了研修内容。研修班课程于2020年11月27日在温州肯恩大学展开。…",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "近日，由温州市政协港澳台侨和外事委、温州公共外交协会主办，平阳县政协、温州肯恩大学协办的“2020年温州公共关系外交研修班”在温州肯恩大学圆满完成了研修内容。研修班课程于2020年11月27日在温州肯恩大学展开。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1606839776376324.png",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "由原驻纽约总领馆总领事（大使衔）、驻爱尔兰特命全权大使、驻丹麦王国特命全权大使、现中国公共外交协会副会长刘碧伟带来关于公共外交和中美关系的主题报告会，现场还吸引了不少温肯师生前来听讲。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1606839787754856.png",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "当前，我国公共外交开展得有声有色，影响逐步扩大。除了国家政府级别的外交之外，民间组织在对外交往中也起到了至关重要的作用。",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1606839794807557.png",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "此次研讨会加拿大温州同乡总会副会长吴登金先生代表加拿大社团华侨参加了研讨活动。研讨会上，加拿大温州同乡总会副会长吴登金先生分享了在疫情期间生活在加拿大的温州人在加拿大温州同乡总会的组织协调和会长的带领下为祖国人民抗疫筹款，为加拿大居住国慈善机构捐款，为加拿大医院和老人院捐献抗疫物资，闪亮海外中国人形象的感人故事和感想。            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1606839800228260.png",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "吴登金副会长感慨万千，他特别提到“每一个走出国门的中国人都是中国的名片，都是中国开展公共外交的民间外交使节，代表了中国、中国人的形象。所以每个到外国的中国人，都是外国人认识中国的一个课本。文化是民族复兴、国家强盛的决定性因素。如何弘扬中华文化启发海外华人的公共外交意识，并用实际行动开展公共外交活动是海外华人社团的软实力的体现。一个国家、一个民族的伟大，绝不仅因为她的富足，更因为她的文化和为居住国社会做出的贡献！今后像加拿大温州同乡总会这样的海外华人社团要有意识的从海外温州人的角度来推动公共外交，从文化传播的角度来推动公共外交。”            ",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1606839811524501.png",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "据悉，参加本次研修班的主要为温州公共外交协会部分会员、各县市区政协专委会主任、海外侨团负责人、有关部门、高校及企业和社会团体负责人等60余人。            ",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: 21,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "丹桂飘香又一年，秋菊溢彩迎中秋",
      date: "2020-09-27",
      imageURL: "/images/article/1601177591804410.jpg",
      previewText:
        "旅居加拿大的温州相亲大家好！丹桂飘香又一年，秋菊溢彩迎中秋。值此2020年中秋佳节来临之际，加拿大温州同乡总会向生活在加拿大的各位温州乡亲致以最真挚的节日祝贺！2020年是一个国际局势紧张动荡，人类笼罩在疫情…",
      content: [
        {
          paragraph: {
            text: "旅居加拿大的温州相亲大家好！            ",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "丹桂飘香又一年，秋菊溢彩迎中秋。            ",
          },
        },
        {
          paragraph: {
            text: "值此2020年中秋佳节来临之际，加拿大温州同乡总会向生活在加拿大的各位温州乡亲致以最真挚的节日祝贺！            ",
          },
        },
        {
          paragraph: {
            text: "2020年是一个国际局势紧张动荡，人类笼罩在疫情的阴云中令人担惊受怕的一年！            ",
          },
        },
        {
          paragraph: {
            text: "对于我们侨居在国外的温州人来说每个人的生活都受到不同程度影响！            ",
          },
        },
        {
          paragraph: {
            text: "我们加拿大同乡总会在各位理事及会员的大力支持、鼓励和慷慨解囊下不辜负相亲的信任，勇敢面对疫情，担负起社会责任，充分发挥协会桥梁作用。各位理事和会员心系祖国，情系家乡，倾力支持国内疫情防控，捐款奉献，充分展现了海外华人华侨对祖国的爱对温州的情！            ",
          },
        },
        {
          paragraph: {
            text: "同时也积极投身到居住国的抗疫救灾中！为加拿大的医院、养老院、食物银行以及疫情中社会需要帮助的弱势群体提供了慷慨援助，让加拿大温州同乡总会在祖国和居住国都以正能量、健康向上的形象将各位理事和会员的爱心传递给社会！            ",
          },
        },
        {
          paragraph: {
            text: "唯一遗憾的是，由于疫情的强力爆发和传染性，我们加拿大同乡总会的乡亲们不能欢聚一堂共度节日！屈指算来乡亲们有将近半年的时间没有相聚了！            ",
          },
        },
        {
          paragraph: {
            text: "“天将今夜月，一遍洗寰瀛。暑退九霄净，秋澄万景清。”在这个秋阳朗照，丹桂飘香的季节，我们多么希望能像往年一样汇聚四面八方的欢歌笑语，齐集五湖四海的秋思乡情，同在加拿大温州同乡总会——我们的第二个家，共同吟唱秋之收获，秋之风情...........            ",
          },
        },
        {
          paragraph: {
            text: "鉴于疫情我们这个大家庭不能“齐聚”，但我们可以请月亮捎去真诚的祝福            ",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "月到中秋分外明，人到中秋更深情。今年中秋伴国庆，双重祝福送给您。祝您温州相亲月来越健康，月来越幸福，月来越快乐。明月皎皎，喜悦无限，乐乐乐不停！",
          },
        },
        {
          video: {
            videoURL:
              "https://www.wenzhouren.ca/uploads/video/20200927/1601177464575818.mp4",
          },
        },
        {
          paragraph: {
            text: "加拿大温州同乡总会            ",
          },
        },
        {
          paragraph: {
            text: "二0二0 中秋            ",
          },
        },
      ],
    },
  },
  {
    id: 22,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "加拿大考虑CERB后全民继续发钱 每人最高$4800！",
      date: "2020-07-08",
      imageURL: "/images/article/1588739462914484.jpg",
      previewText:
        "据消息，加拿大国会预算官员在一份报告中表示，从今年秋季开始，为几乎所有加拿大人提供6个月的基本收入，可能需要约980亿加元。由于无数加拿大人眼看自己的工作随着新冠疫情的持续发展而受到巨大影响，要求加拿大政…",
      content: [
        {
          paragraph: {
            text: "据消息，加拿大国会预算官员在一份报告中表示，从今年秋季开始，为几乎所有加拿大人提供6个月的基本收入，可能需要约980亿加元。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202007071319322geiY.png",
          },
        },
        {
          paragraph: {
            text: "由于无数加拿大人眼看自己的工作随着新冠疫情的持续发展而受到巨大影响，要求加拿大政府赶紧提供基本收入，以保障民众最低生活标准的呼声也越发受到欢迎。            ",
          },
        },
        {
          paragraph: {
            text: "而且，基本收入也确实不失为一种全民福利的选择。 ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_20200707131932347PX.png",
          },
        },
        {
          paragraph: {
            text: "本周二，财政部长比尔·莫诺（Bill Morneau）和其他高级内阁部长已经多次被参议员和国会议员问及这一概念。支持者认为，这只不过是在扩大800亿加元的紧急福利金CERB，以帮助那些收入大幅下降的加拿大人。            ",
          },
        },
        {
          paragraph: {
            text: "按照计划，CERB和450亿加元的工资补贴计划CEWS将于10月份到期，未来加拿大人如何获得政府补助，目前尚无任何详细计划。            ",
          },
        },
        {
          paragraph: {
            text: "据了解，从10月开始提供6个月的基本收入，可能需要475亿至981亿加元。            ",
          },
        },
        {
          paragraph: {
            text: "预算官员伊夫·吉鲁（Yves Giroux））的报告显示，如果发放基本收入，则18岁至64岁的加拿大人平均可领到4500加元到4800加元。            ",
          },
        },
        {
          paragraph: {
            text: "要求计算基本收入成本的参议员胡元豹（Yuen Pau Woo）表示，基本收入计划可以填补加拿大社会保障体系的缺口，目前加拿大各省管理自己的保障体系，还没有实现统一。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202007071319324DA9a.png",
          },
        },
        {
          paragraph: {
            text: "参议员胡元豹（Yuen Pau Woo）            ",
          },
        },
        {
          paragraph: {
            text: "“在全国范围内实行永久性的基本收入是一项巨大的事业。成本非常高，政治阻力也激烈的，在2020到2021年度，我们很可能要花费很多钱以实现收支平衡，”他说到。            ",
          },
        },
        {
          paragraph: {
            text: "“在我看来，问题是我们如何花钱，或者以什么形式花钱。”            ",
          },
        },
        {
          paragraph: {
            text: "基本收入对不同的人有不同的含义，但它通常被视为政府提供给公民的一种不附加任何条件的福利，而不是各种有针对性的社会福利。            ",
          },
        },
        {
          paragraph: {
            text: "基本收入也被称为最低收入保证，可以为全民发放，也可以作为一项经济状况调查的福利，随着受助人其他收入的增加而下降。            ",
          },
        },
        {
          paragraph: {
            text: "预算官员的报告称，政府可能会取消150亿加元的税收减免措施，以抵消基本收入的总成本。胡元豹还表示，为了避免重复，基本收入可能必须和现有的福利相结合。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202007071319325cmjn.png",
          },
        },
        {
          paragraph: {
            text: "基本收入计划的总成本可能比预算办公室估计的要高。预算官员的估算是基于加拿大的一些统计数据，其中不包括居住在北部地区或原住民地区的人，也不包括军人。            ",
          },
        },
        {
          paragraph: {
            text: "代表全国小企业的加拿大独立企业联合会（Canadian Federation of Independent Business）周二表示，在接受调查的会员中，约有三分之一的受访者说，公司员工已恢复到正常水平，但也暗示许多人认为，公司需要六个月的时间才能恢复正常的盈利能力。            ",
          },
        },
        {
          paragraph: {
            text: "加拿大统计局将于本周五7月10日发布6月份的就业报告。经济合作与发展组织OECD周二7月7日发布的预测估计，今年第二季度加拿大的失业率为11%。            ",
          },
        },
        {
          paragraph: {
            text: "6个月最高发$4800，“全民（almost all）基本收入”怎么听起来都香的很，啥事不用干就能拿钱不是美滋滋？            ",
          },
        },
      ],
    },
  },
  {
    id: 23,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "夏天临近 大温地区U-PICK采水果全攻略",
      date: "2020-07-07",
      imageURL: "/images/article/1594093971442568.jpg",
      previewText:
        "卑诗省今年异常暖春，使得果园的水果已经提前成熟，童鞋们，是时候和亲朋好友踏青采摘去啦!今天小编给大家介绍一下大温夏季水果采摘农场情况，有U-PICK草莓、蓝莓、覆盆子、樱桃、蜜桃、苹果、葡萄等等水果，自己的…",
      content: [
        {
          paragraph: {
            text: "卑诗省今年异常暖春，使得果园的水果已经提前成熟，童鞋们，是时候和亲朋好友踏青采摘去啦!今天小编给大家介绍一下大温夏季水果采摘农场情况，有U-PICK草莓、蓝莓、覆盆子、樱桃、蜜桃、苹果、葡萄等等水果，自己的劳动成果一定特别香甜!温馨提示，大家出发前最好先给农场打个电话确认一下开放时间，以免白跑一趟哦。            ",
          },
        },
        {
          paragraph: {
            text: "采摘各种水果的季节            ",
          },
        },
        {
          paragraph: {
            text: "3月至4月：Asparagus 芦笋            ",
          },
        },
        {
          paragraph: {
            text: "6月至7月：草莓、樱桃            ",
          },
        },
        {
          paragraph: {
            text: "6月至8月：蓝莓、黑莓            ",
          },
        },
        {
          paragraph: {
            text: "7月至9月：蜜桃，无花果，番茄, 四季豆            ",
          },
        },
        {
          paragraph: {
            text: "7月至10月：覆盆子            ",
          },
        },
        {
          paragraph: {
            text: "9月至10月：苹果、葡萄、南瓜            ",
          },
        },
        {
          paragraph: {
            text: "采摘水果准备            ",
          },
        },
        {
          paragraph: {
            text: "由于大多数农场并不设立网站，开放时间也并非固定。所以去农场之前最好先致电确认当天是否营业，某种水果是否已经成熟，是否允许自行采摘，以及营业时间等等信息。            ",
          },
        },
        {
          paragraph: {
            text: "建议带上背包，装点零食和饮料，以及装水果的容器和纸巾等。记得穿舒适耐脏的衣服，运动鞋，有条件可以带上防蚊喷雾。另外，如果日晒严重，一定记得防晒，带上宽边帽子和墨镜。也可带上相机与家人朋友合影留念。            ",
          },
        },
        {
          paragraph: {
            text: "除此以外，当您开始采摘之前，一定要注意农场的标语和采摘规定，比如有些区域尚未成熟不可采摘，或者提醒大家注意不要践踏植物等等。            ",
          },
        },
        {
          paragraph: {
            text: "U-Pick地点大总结            ",
          },
        },
        {
          paragraph: {
            text: "列治文            ",
          },
        },
        {
          paragraph: {
            text: "W&A Farms(草莓)            ",
          },
        },
        {
          paragraph: {
            text: "17771 Westminster Hwy, Richmond            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-278-5667            ",
          },
        },
        {
          paragraph: {
            text: "Birak Berry Farm(草莓)            ",
          },
        },
        {
          paragraph: {
            text: "4200 No 6 Road, Richmond            ",
          },
        },
        {
          paragraph: {
            text: "电话：604 339-9335            ",
          },
        },
        {
          paragraph: {
            text: "Bob Featherstone Farm(草莓)            ",
          },
        },
        {
          paragraph: {
            text: "#4 Road south of Steveston Hwy            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-594-9518            ",
          },
        },
        {
          paragraph: {
            text: "G.J. Farms(草莓)            ",
          },
        },
        {
          paragraph: {
            text: "11300 No.4 Road, Richmond            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-272-4033            ",
          },
        },
        {
          paragraph: {
            text: "Cherry Lane Farm(樱桃)            ",
          },
        },
        {
          paragraph: {
            text: "9571 Beckwith Road, Richmond            ",
          },
        },
        {
          paragraph: {
            text: "电话：778-833-3379            ",
          },
        },
        {
          paragraph: {
            text: "KNN Blueberry Farms(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "11590 Granville Ave. Richmond            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-781-9993            ",
          },
        },
        {
          paragraph: {
            text: "Birak Berry Farms(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "6311 No. 5 Rd. Richmond            ",
          },
        },
        {
          paragraph: {
            text: "3600 No. 6 Rd. Richmond            ",
          },
        },
        {
          paragraph: {
            text: "9111 No. 6 Rd. Richmond            ",
          },
        },
        {
          paragraph: {
            text: "No. 4 Rd & Francis            ",
          },
        },
        {
          paragraph: {
            text: "电话： 604-328-9269            ",
          },
        },
        {
          paragraph: {
            text: "DFG Blueberries(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "11071 Blundell Road, Richmond            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-273-5829            ",
          },
        },
        {
          paragraph: {
            text: "Andrea Farm(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "11260 Westminster Hwy            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-352-9993            ",
          },
        },
        {
          paragraph: {
            text: "素里            ",
          },
        },
        {
          paragraph: {
            text: "Blueberries U-Pick(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "18064-32 Ave, Surrey            ",
          },
        },
        {
          paragraph: {
            text: "电话：(604) 290-4081            ",
          },
        },
        {
          paragraph: {
            text: "Honeybee Centre(蜂蜜)            ",
          },
        },
        {
          paragraph: {
            text: "7480 – 176 Street, Surrey            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-575-2337，877-975-BEES (2337)            ",
          },
        },
        {
          paragraph: {
            text: "邮箱：info@honeybeecentre.com.            ",
          },
        },
        {
          paragraph: {
            text: "Rondriso Farms(南瓜)            ",
          },
        },
        {
          paragraph: {
            text: "8390 172nd Street, Surrey            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-574-5585            ",
          },
        },
        {
          paragraph: {
            text: "Surrey Farms( 南瓜，草莓，蓝莓，各种蔬菜)            ",
          },
        },
        {
          paragraph: {
            text: "5180 152 Street, Surrey            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-574-1390            ",
          },
        },
        {
          paragraph: {
            text: "兰里            ",
          },
        },
        {
          paragraph: {
            text: "A and J Farms(葡萄，李子，南瓜等)            ",
          },
        },
        {
          paragraph: {
            text: "26032 16th Avenue, Aldergrove            ",
          },
        },
        {
          paragraph: {
            text: "电话：6048564206            ",
          },
        },
        {
          paragraph: {
            text: "Aldor Acres Farm (苹果，圣诞树(自选自砍))            ",
          },
        },
        {
          paragraph: {
            text: "24990, 84 Avenue, Fort Langley            ",
          },
        },
        {
          paragraph: {
            text: "电话：(604) 888-0788            ",
          },
        },
        {
          paragraph: {
            text: "Clingan Blueberry Farm(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "24576 32 Avenue, Langley            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-534-7360            ",
          },
        },
        {
          paragraph: {
            text: "Driediger Farms(黑莓，蓝莓，草莓)            ",
          },
        },
        {
          paragraph: {
            text: "23823 – 72nd Avenue, Langley            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-888-1665            ",
          },
        },
        {
          paragraph: {
            text: "John & John’s farm(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "4015 244th street, Langley            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-803-9185            ",
          },
        },
        {
          paragraph: {
            text: "三角洲            ",
          },
        },
        {
          paragraph: {
            text: "Didar Berry(这家蓝莓好摘且味道好)            ",
          },
        },
        {
          paragraph: {
            text: "5570 104 St, Delta            ",
          },
        },
        {
          paragraph: {
            text: "电话：778-888-4399            ",
          },
        },
        {
          paragraph: {
            text: "Emma Lea Farms(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "4626 88th Street, Delta            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-946-1868            ",
          },
        },
        {
          paragraph: {
            text: "Wellbrook Winery(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "2727 Westham Island Rd, Delta            ",
          },
        },
        {
          paragraph: {
            text: "电话：604 946-8216            ",
          },
        },
        {
          paragraph: {
            text: "周边城市            ",
          },
        },
        {
          paragraph: {
            text: "Organic Blueberries Farm(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "325 Laurier Ave, Port Coquitlam            ",
          },
        },
        {
          paragraph: {
            text: "The Apple Farm(苹果，梨，李子)            ",
          },
        },
        {
          paragraph: {
            text: "4490 Boundary Road, Yarrow            ",
          },
        },
        {
          paragraph: {
            text: "电话：604- 823-4311            ",
          },
        },
        {
          paragraph: {
            text: "Krause Berry Farms(草莓，蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "6179-248th Street, Aldegrove            ",
          },
        },
        {
          paragraph: {
            text: "电话：604-856-5757            ",
          },
        },
        {
          paragraph: {
            text: "D&G Farm(蓝莓)            ",
          },
        },
        {
          paragraph: {
            text: "19658 Richardson Road , Pitt Meadows            ",
          },
        },
        {
          paragraph: {
            text: "电话：604 465-0279            ",
          },
        },
        {
          paragraph: {
            text: "Formosa Nursery(蓝莓)",
          },
        },

        {
          paragraph: {
            text: "12617 – 203 rd Street, Maple Ridge",
          },
        },

        {
          paragraph: {
            text: "电话：(604) 465-3359",
          },
        },

        {
          paragraph: {
            text: "邮箱：info@formosanursery.com",
          },
        },

        {
          paragraph: {
            text: "Willow View Farms(苹果，梨，南瓜，甜玉米，小动物园)",
          },
        },

        {
          paragraph: {
            text: "288 McCallum Rd, Abbotsford",
          },
        },

        {
          paragraph: {
            text: "邮箱：willowview@shaw.ca.",
          },
        },

        {
          paragraph: {
            text: "Bissett Farms(蓝莓，草莓，红莓)",
          },
        },

        {
          paragraph: {
            text: "2170 Westham Island Rd, Delta",
          },
        },

        {
          paragraph: {
            text: "电话：604-946-7139，604-946-7471",
          },
        },
        {
          paragraph: {
            text: "查看整个BC省的采摘农场，可进入英文网站：http://www.pickyourown.org/canadabc.htm",
          },
        },
      ],
    },
  },
  {
    id: 24,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "外国人利用“快捷通道”来华进入浙告知书",
      date: "2020-07-02",
      imageURL: "/images/article/1588829198366524.jpg",
      previewText:
        "疫情当前，世界各国应当携手合作，共同努力。感谢您为了再一次与浙江的合作交流，利用“快捷通道”来到浙江。浙江省政府为保障您和他人的生命健康安全，根据国家和浙江省疫情防控领导机构决定，特就对利用“快捷通道…",
      content: [
        {
          paragraph: {
            text: "疫情当前，世界各国应当携手合作，共同努力。感谢您为了再一次与浙江的合作交流，利用“快捷通道”来到浙江。浙江省政府为保障您和他人的生命健康安全，根据国家和浙江省疫情防控领导机构决定，特就对利用“快捷通道”来华入浙外国人有关签证申办要求和入境管控措施等事宜，告知如下：",
          },
        },

        {
          paragraph: {
            text: "　　一、申办来华签证时，请您持浙江省外办或浙江省商务厅签发的邀请函及相关申请材料向中国驻贵国使领馆申办签证，同时填报《签证申请健康承诺书》并提交贵国政府指定医疗机构出具的核酸检测阴性证明。",
          },
        },

        {
          paragraph: {
            text: "　　二、获得来华签证后，请您务必在来华前进行至少14天的自我健康监测，并申领浙江“国际版健康码”（下载“浙里办”App，登录“国际版健康码”）。临行来华前72小时内，须在贵国政府指定医疗机构进行至少1次核酸检测并取得检测结果阴性证明。",
          },
        },

        {
          paragraph: {
            text: "　　三、来华入境时，主动向海关提交邀请函、核酸检测阴性结果及海关健康申报等有效证明文件。原则上人员经“快捷通道”在第一入境地入境后，核酸、血清抗体检测结果呈阴性的，可由目的地所在设区市政府负责“点对点”接回。到达目的地后，询问健康状况、进行核酸和血清抗体检测，若阳性则送定点医院隔离治疗；若阴性则实行14天居家医学观察。居家医学观察期间，确因工作需要，经当地防控办同意，在做好个人防护、保持社交距离、“点对点”专人接送和闭环管理的前提下，允许按照“非必要不接触”的要求，边观察、边安排工作。从第13天时再次进行核酸检测，若阴性，第15天起可正常工作、生活，纳入常态化管理。",
          },
        },

        {
          paragraph: {
            text: "　　四、对入境时被确定为“四类人员（新冠确诊患者、疑似患者、不能排除感染可能的发热患者或确诊患者的密切接触者)”的外国人，由入境口岸所在地政府按照当地境外疫情输入防控相关规定稳妥处置。",
          },
        },

        {
          paragraph: {
            text: "　　五、相关外国人在我省医学观察期间，确定为疑似病例、确诊病例或无症状感染者的，不再适用以上措施，由邀请单位所在市政府按照现有疫情防控规定稳妥处置。",
          },
        },

        {
          paragraph: {
            text: "　　六、以上管控措施，将根据疫情变化情况，实行动态管理，适时进行调整并及时告知。如有疑问，请咨询当地外事部门。邀请单位也有责任为相关外国人做好咨询、联络和协调等工作。",
          },
        },

        {
          paragraph: {
            text: "在此期间给您的工作生活带来不便，敬请理解。感谢您的支持与配合！",
          },
        },

        {
          paragraph: {
            text: "                     浙江省人民政府外事办公室",
          },
        },

        {
          paragraph: {
            text: "                         2020年6月28日",
          },
        },
      ],
    },
  },
  {
    id: 25,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "始无前例的加拿大日线上庆典，演唱会，PNE，烟花秀",
      date: "2020-07-01",
      imageURL: "/images/article/1593644376476871.png",
      previewText:
        "2020年真的是见证历史的一年~明天我们即将见证加拿大的又一历史性时刻——加拿大国庆日（Canada Day）这将是加拿大庆祝的第153个生日，与往年举国同庆，热闹非凡的庆祝活动相比，今年的加拿大日的庆祝方式有所不同，…",
      content: [
        {
          paragraph: {
            text: "2020年真的是见证历史的一年~",
          },
        },

        {
          paragraph: {
            text: "明天我们即将见证加拿大的又一历史性时刻——加拿大国庆日（Canada Day）",
          },
        },

        {
          paragraph: {
            text: "这将是加拿大庆祝的第153个生日，",
          },
        },

        {
          paragraph: {
            text: "与往年举国同庆，热闹非凡的庆祝活动相比，",
          },
        },

        {
          paragraph: {
            text: "今年的加拿大日的庆祝方式有所不同，",
          },
        },

        {
          paragraph: {
            text: "几乎所有的活动都转向“线上”！",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202007010702312WVuf.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202007010702313Ml2a.jpg",
          },
        },
        {
          paragraph: {
            text: "虽然今年我们不能观看游行和烟火表演了，",
          },
        },
        {
          paragraph: {
            text: "但是今年的加拿大日我们依然可以过的很酷炫！",
          },
        },
        {
          paragraph: {
            text: "快来看看村长给大家整理的节日指南吧~",
          },
        },
        {
          paragraph: {
            text: "线上国庆演唱会",
          },
        },
        {
          paragraph: {
            text: "7月1日当天，",
          },
        },
        {
          paragraph: {
            text: "下午和晚上分别有两场线上演出，",
          },
        },
        {
          paragraph: {
            text: "加拿大全国各地都可免费观看！",
          },
        },
        {
          paragraph: {
            text: "这次参与演出的歌手都是重量级的巨星，例如：Paul Brandt, Marc Hervieux, Julie Nesrallah，Laurence Nerbonne等。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202007010702317kvhI.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202007010702318k1ef.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202007010702319i0Y2.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020070107023110SXsH.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020070107023111K7Lg.png",
          },
        },
        {
          paragraph: {
            text: "线上国庆烟花表演",
          },
        },

        {
          paragraph: {
            text: "烟花可是加拿大日的标配！",
          },
        },

        {
          paragraph: {
            text: "7月1日晚上，用手机访问由Tim Hortons开发的网站https://www.canadavirtualfireworks.ca/",
          },
        },

        {
          paragraph: {
            text: "只需将你的手机对着夜空，",
          },
        },

        {
          paragraph: {
            text: "就可以看到3分钟的3D烟花表演！",
          },
        },

        {
          paragraph: {
            text: "太酷炫啦~",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020070107023112LANB.png",
          },
        },
        {
          paragraph: {
            text: "由于疫情原因取消了所有大型聚会的活动，那么加拿大国庆日是否仍然存在？答案是肯定的，演出必须继续。今年庆祝加拿大的153周年生日将有所不同，尤其是取消了在加拿大广场举行的最大、最著名的加拿大国庆日庆祝活动。但是，针对这种特殊情况，我们为大家提供了许多虚拟的庆祝活动",
          },
        },
        {
          paragraph: {
            text: "日间节目“全国各地的加拿大国庆日”为大家提供了许多虚拟的庆祝活动。与主持人Serena   Ryder和Pierre-Yves Lord一起，发现来自Sudbury, Montreal, Quebec, Moncton, Winnipeg, Yellowknife 和 Calgary的才华横溢的艺术家。",
          },
        },
        {
          paragraph: {
            text: "庆祝我们国家的文化多样性，卓越的体育运动，土著文化和语言以及一线工人的精神。向“ O Canada”40周年致敬，许多惊喜等待着您。",
          },
        },
        {
          paragraph: {
            text: "加拿大国庆日线上烟花表演7月1日，无论您身在加拿大何处，都可以通过有趣而新颖的方式欣赏加拿大国庆日烟花。在您的移动设备或电脑上观看。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_20200701070231138GCV.png",
          },
        },
        {
          paragraph: {
            text: "正式的加拿大国庆日庆祝活动",
          },
        },
        {
          paragraph: {
            text: "联邦政府正在主持全国性的在线聚会。与全国人民共同庆祝，并在加拿大伟大的艺术家的陪伴下体验激动、迷人的时刻，在舒适的家中享受庆祝和惊喜。收看白天或晚上的节目，并为加拿大年度标志性庆祝活动的特别版本观看烟火表演。",
          },
        },
        {
          paragraph: {
            text: "时间：日间表演10:00 am //夜间表演5:00 pm//烟火7:00 pm",
          },
        },
        {
          paragraph: {
            text: "观看地点：facebook // CBC",
          },
        },
        {
          paragraph: {
            text: "ATaste of the PNE：加拿大国庆日版",
          },
        },
        {
          paragraph: {
            text: "“反向”进行加拿大国庆游行-在这里，您将参加游行。装饰您的汽车，然后开车穿过Pacific Coliseum和PNE Grounds，进行现场娱乐表演，例如Logger Sports 节目，以加拿大为主题的表演者和美食车，挑选一些最喜欢的食品，例如玉米热狗，热狗，薯条，棉花糖和柠檬水。始终保持您的车辆安全。",
          },
        },
        {
          paragraph: {
            text: "时间：上午10点至下午6点",
          },
        },
        {
          paragraph: {
            text: " 地点：PNE Fair Grounds, 2901 East Hastings Street",
          },
        },
        {
          paragraph: {
            text: "费用：$10",
          },
        },

        {
          paragraph: {
            text: "Canada Day at Big Splash",
          },
        },
        {
          paragraph: {
            text: "天气允许的情况下，在Big Splash 2020赛季的盛大开幕日庆祝加拿大国庆日。提前预订您的桌子，小屋和BYO-BBQ桌子，以及您的入场券，以保证入场名额。",
          },
        },

        {
          paragraph: {
            text: "时间：上午11点至下午6点",
          },
        },
        {
          paragraph: {
            text: "地点：Big Splash Water Slide Park, 4775 Nulelum Way, Tsawwassen",
          },
        },
      ],
    },
  },
  {
    id: 26,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "加拿大温州同乡总会会长朱建国先生祝乡亲们国庆快乐（视频）",
      date: "2020-07-01",
      imageURL: "/images/article/1593622009399566.png",
      previewText: "",
      content: [
        {
          video: {
            videoURL:
              "https://www.wenzhouren.ca/uploads/video/20200702/1593622793992451.mp4",
          },
        },
      ],
    },
  },
  {
    id: 27,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "温州大学瓯江学院2020年人才选聘公告",
      date: "2020-06-27",
      imageURL: "/images/article/1593280392140639.jpeg",
      previewText:
        "温州大学瓯江学院是一所应用技术型全日制普通本科独立学院，目前已经温州市政府同意拟申办转设为高水平应用型公办普通本科高校。　　温州大学瓯江学院秉承温州大学“厚培德本、深濬智源”的办学传统，致力于培养高层…",
      content: [
        {
          paragraph: {
            text: "温州大学瓯江学院是一所应用技术型全日制普通本科独立学院，目前已经温州市政府同意拟申办转设为高水平应用型公办普通本科高校。",
          },
        },
        {
          paragraph: {
            text: "　　温州大学瓯江学院秉承温州大学“厚培德本、深濬智源”的办学传统，致力于培养高层次应用技术型人才，是国家级创业教育人才培养模式创新试验区，浙江省应用型建设试点示范院校，创设浙江省普通高等学校示范性创业学院。学院现下设8个二级学院，共有45个本科专业；面向全国15个省市招生，现有全日制本科在校生8000余人。学院转设后在校生人数规模将达到10000人，校园占地面积901.8亩，校舍总建筑面积45.5万平方米。",
          },
        },
        {
          paragraph: {
            text: "一、用编性质",
          },
        },
        {
          paragraph: {
            text: "　　本次选聘的所有人员纳入公办高校报备员额管理，享受国家规定的工资、保险等福利待遇，在瓯江学院转设后人事编制管理及聘用关系将转入转设后的公办学校。",
          },
        },
        {
          paragraph: {
            text: "二、选聘计划",
          },
        },
        {
          paragraph: {
            text: "　　教学科研岗125名，辅导员岗15名，管理岗30名。具体岗位需求详见《温州大学瓯江学院2020年人才选聘岗位需求一览表》（附件1）。",
          },
        },
        {
          paragraph: {
            text: "三、选聘岗位基本条件",
          },
        },
        {
          paragraph: {
            text: "　　1、具有中华人民共和国国籍，政治素质好，拥护中国共产党的路线方针政策；",
          },
        },
        {
          paragraph: {
            text: "　　2、爱国敬业、遵纪守法、品行端正，具有招聘岗位所需的专业知识或技能；",
          },
        },
        {
          paragraph: {
            text: "　　3、具有适应岗位要求的身体条件。",
          },
        },
        {
          paragraph: {
            text: "四、选聘人才类型与条件",
          },
        },
        {
          paragraph: {
            text: "　　（一）领军人才",
          },
        },
        {
          paragraph: {
            text: "　　国家“万人计划”人选；“百千万人才工程”国家级人选；国家杰出青年基金获得者；国家优秀青年基金获得者；具有重大学术影响力（如国际权威机构认定的高被引科学家等）的学者；相当上述层次的海外高层次人才。",
          },
        },
        {
          paragraph: {
            text: "　　（二）学科（专业/社会服务）带头人",
          },
        },

        {
          paragraph: {
            text: "　　1、学科带头人",
          },
        },
        {
          paragraph: {
            text: "　　年龄一般不超过50周岁（业绩突出者可适当放宽）；具有正高职称，博士学位或博士生导师资格；一般应具有国内外著名大学学习或工作的经历，在国内外相关学科具有较高的学术声誉，具有很强的团结协作精神和学术组织管理能力，能统领现有学术队伍开展高层次的学科建设工作和学术活动。",
          },
        },
        {
          paragraph: {
            text: "　　2、专业带头人",
          },
        },
        {
          paragraph: {
            text: "　　年龄一般不超过50周岁（业绩突出者可适当放宽）；具有正高职称，硕士及以上学位；有在国内外大学同专业或相近专业担任负责人的工作经历，在本专业领域内具有较高的教学声誉或影响力，具有丰富的教学改革和管理经验，具有很强的团结协作精神，具有很强的教学研究与组织管理能力，能统领现有教学团队开展高水平的专业建设和人才培养工作。",
          },
        },
        {
          paragraph: {
            text: "　　3、社会服务带头人",
          },
        },
        {
          paragraph: {
            text: "　　年龄一般不超过50周岁；具有正高职称，硕士及以上学位（业绩突出者可适当放宽职称和学位条件）；研究成果具有显著经济和社会效益；有较强的创新能力和组织协调能力，能统领应用型本科专业的产教融合拓展工作。",
          },
        },
        {
          paragraph: {
            text: "(三)学术带头人",
          },
        },
        {
          paragraph: {
            text: "　　年龄一般不超过50周岁；具有博士学位，在国内外知名高校、科研院所具有副教授或相当专业技术职务的专家学者，具备担任学术带头人的能力与水平。",
          },
        },
        {
          paragraph: {
            text: "(四)博士研究生",
          },
        },
        {
          paragraph: {
            text: "　　年龄一般不超过45周岁；能够胜任本学科核心课程的讲授任务，有稳定的研究方向，具备专业教师的基本素质和科学研究的发展能力。",
          },
        },
        {
          paragraph: {
            text: "(五)高级专技人才",
          },
        },
        {
          paragraph: {
            text: "　　年龄一般不超过45周岁；具有副高及以上专业技术职务，硕士及以上学位；有良好的个人品质、严谨求实的作风；学术思想活跃，科研能力较强，有一定的创新精神，能在应用型人才培养中发挥积极作用。",
          },
        },
        {
          paragraph: {
            text: "(六)硕士研究生",
          },
        },
        {
          paragraph: {
            text: "　　1、教学科研岗（1）",
          },
        },
        {
          paragraph: {
            text: "　　全国“双一流”高校（见附件2）、923所国（境）外高校（见附件3）、浙江省重点建设本科院校（本专业综合成绩排名前30%，见附件4）毕业的全日制硕士研究生，年龄不超过35周岁（紧缺专业可放宽到40周岁），能够胜任本学科核心课程的讲授任务，有稳定的研究方向，具备专业教师的基本素质和科学研究的发展能力。",
          },
        },
        {
          paragraph: {
            text: "　　2、教学科研岗（2）",
          },
        },
        {
          paragraph: {
            text: "　　具有硕士研究生学历学位及以上，中国共产党党员（含预备党员），年龄不超过40周岁。能够胜任本学科核心课程的讲授任务，有稳定的研究方向，具备专业教师的基本素质和科学研究的发展能力。",
          },
        },
        {
          paragraph: {
            text: "　　3、辅导员岗",
          },
        },
        {
          paragraph: {
            text: "　　具有硕士研究生学历学位，中国共产党党员（含预备党员），年龄不超过35周岁。具有学生干部经历者优先。",
          },
        },
        {
          paragraph: {
            text: "　　4、管理岗",
          },
        },
        {
          paragraph: {
            text: "　　具有硕士研究生学历学位，年龄一般不超过35周岁。有较强的管理能力和执行能力，具有高校管理工作经历或相关工作经验者优先。",
          },
        },
        {
          paragraph: {
            text: "　　五、人才待遇",
          },
        },
        {
          paragraph: {
            text: "六、选聘程序",
          },
        },
        {
          paragraph: {
            text: "　　（一）发布公告",
          },
        },
        {
          paragraph: {
            text: "　　公告在温州市人才网、温州大学瓯江学院官网发布。",
          },
        },
        {
          paragraph: {
            text: "　　（二）报名",
          },
        },
        {
          paragraph: {
            text: "　　应聘人员填写《温州大学瓯江学院2020年人才选聘报名表》（附件5）、《温州大学瓯江学院2020年人才选聘人员信息表》（附件6），同时附相关佐证材料（本人身份证、学历学位证书、专业技术职务证书、党员证明、工作经历证明（附件7）、获奖证书、相关业绩材料等）的电子扫描件打包发送至ojrs@wzu.edu.cn（邮件名称：岗位名称+人才类别+姓名）；联系电话：0577-86680897、0577-86680881。",
          },
        },
        {
          paragraph: {
            text: "　　（三）资格审查",
          },
        },
        {
          paragraph: {
            text: "　　1、学院在收到应聘人员提交的资料后，7天内完成资格初审，并将初审结果以电子邮件的形式直接回复至应聘人员邮箱，请应聘人员及时登录邮箱查看初审回复结果。",
          },
        },
        {
          paragraph: {
            text: "　　2、通过资格初审的应聘人员，还须在指定时间内携带报名材料原件及复印件到指定地点进行资格复审。",
          },
        },
        {
          paragraph: {
            text: "　　3、2020年普通高校应届毕业生尚未取得毕业证书的，应提供学校核发的就业推荐表、教育部学生司制发的《全国普通高校毕业生就业协议书》（省外高校可持省级教育行政部门制发的《普通高校毕业生就业协议书》）、户口簿（或印有本人户口信息的户口簿页面）、身份证以及其他报考岗位所需的证件（证明）原件及复印件；因学校原因或单位签约盖章等原因无法提供就业协议书的，由本人提供书面说明。留学人员应提供教育部留学服务中心出具的境外学历、学位认证书原件及复印件；定向生、委培生须提供有关单位同意报考的证明。",
          },
        },
        {
          paragraph: {
            text: "　　4、应聘人员所提供的证件不全或所提供的证件与报考资格条件不相符者，或未按时参加资格复审的，视为自动放弃考试资格。",
          },
        },
        {
          paragraph: {
            text: "　　（四）考核",
          },
        },
        {
          paragraph: {
            text: "　　1、应聘教学科研岗的通过现场授课与面谈的方式进行，主要考核业务能力和综合素质。学院根据报名情况，不定期组织考核，具体考核时间和地点另行通知。",
          },
        },
        {
          paragraph: {
            text: "　　2、应聘辅导员岗和管理岗的通过结构化面试的方式进行，主要考核应聘人员的岗位匹配程度、解决实际问题能力和综合素质等。学院根据报名情况，一般每月集中组织一次考核，具体考核时间和地点另行通知。",
          },
        },
        {
          paragraph: {
            text: "　　（五）体检与考察",
          },
        },
        {
          paragraph: {
            text: "　　1、体检按公务员考录相关环节的办法执行。",
          },
        },
        {
          paragraph: {
            text: "　　2、考察着重了解应聘人员的思想道德素质、教学科研能力、遵纪守法情况、品质修养以及从业工作经历情况等。",
          },
        },
        {
          paragraph: {
            text: "　　（六）公示与聘用",
          },
        },
        {
          paragraph: {
            text: "　　1、经体检、考察均合格的人员，确定为拟聘用人员，并在温州市人才网与温州大学瓯江学院官网进行公示，公示时间为7个工作日。公示期满，对拟聘用人员没有异议或反映有问题经查实不影响聘用的，按规定程序办理进人和聘用手续。聘用人员纳入公办高校报备员额管理，实行聘用制。",
          },
        },
        {
          paragraph: {
            text: "　　2、拟聘用的2020年全日制普通高校应届毕业生须在2020年7月31日前取得学历学位证书（若教育部出台延期毕业相关规定，按新规定执行），凡不能在办理聘用手续前向用人单位提供报考岗位规定的学历学位等有关证件，不予聘用。 ",
          },
        },
        {
          paragraph: {
            text: "　　3、拟聘用人员具有专业技术职务的，入职后相关职务资格评聘根据我院职称评聘文件执行。",
          },
        },
        {
          paragraph: {
            text: "　　4、选聘岗位无合适人选，可以空缺。",
          },
        },
        {
          paragraph: {
            text: "七、其他事项说明",
          },
        },
        {
          paragraph: {
            text: "　　1、应聘人员所学专业名称与选聘岗位要求不一致，但所学方向相同或相近的，由学院参考高校学科、专业设置目录、应聘人员所学课程等综合认定是否符合要求。",
          },
        },
        {
          paragraph: {
            text: "　　2、应聘人员应对自己所填报和提交资料的真实性负责，诚实应聘。凡提供虚假信息和材料获取报考及聘用资格的，或有意隐瞒本人真实情况的，一经查实，即取消报考资格或聘用资格。对已聘人员，一经查实，即予解除聘用合同。因相应报考违规违纪行为被各级人事考试机构处罚且尚在禁考期内的人员，不得报考。",
          },
        },
        {
          paragraph: {
            text: "　　3、国外学历学位有关毕业时间及所学专业的认定，以教育部留学服务中心对其国（境）外学历、学位认证书为准。",
          },
        },
        {
          paragraph: {
            text: "　　4、聘用人员必须在规定时间内报到。逾期不能报到的，或在职人员在规定时间内与原单位协商不成，无法办理人事关系转移手续的，学院不予保留聘用资格。",
          },
        },
        {
          paragraph: {
            text: "　　5、学院纪检部门全程参与本次选聘工作并履行监督职责，纪委（监察审计部）联系电话：057-86680751。",
          },
        },

        {
          paragraph: {
            text: "　　6、本公告中涉及年龄计算的均截至2020年7月1日。",
          },
        },
        {
          paragraph: {
            text: "　　7、本次招聘工作根据《事业单位人事管理条例》（国务院令第652号）、《关于市属和市级机关所属事业单位选聘高层次紧缺人才工作的实施意见（试行）》（温人社发〔2018〕170号）等有关规定执行。由温州大学瓯江学院人事部具体组织实施，并负责解释招聘过程中有关事项。",
          },
        },
        {
          paragraph: {
            text: "八、联系方式",
          },
        },
        {
          paragraph: {
            text: "　　1、学院地址：温州茶山高教园区景观大道1号",
          },
        },
        {
          paragraph: {
            text: "　　2、联系电话：0577-86680897（丁老师）、0577-86680881（赵老师）",
          },
        },

        {
          paragraph: {
            text: "　　3、邮　　箱：ojrs@wzu.edu.cn",
          },
        },

        {
          paragraph: {
            text: "　　4、学院网址：www.ojc.zj.cn",
          },
        },
        {
          paragraph: {
            text: "温州大学瓯江学院",
          },
        },
        {
          paragraph: {
            text: "2020年6月26日",
          },
        },
        {
          paragraph: {
            text: "如有兴趣，请前往如下官方招聘页面下载附件表格填写：",
          },
        },
        {
          link: {
            linkURL:
              "https://www.ojc.zj.cn/UploadFile/202006/202006251129525456.docx",
            linkText:
              "https://www.ojc.zj.cn/UploadFile/202006/202006251129525456.docx",
          },
        },
      ],
    },
  },
  {
    id: 28,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "浙江高考有6项重大调整，2023年起，语文数学将使用全国卷",
      date: "2020-06-23",
      imageURL: "/images/article/1588829198366524.jpg",
      previewText:
        "进一步做好高考综合改革试点工作，今天下午浙江召开新闻通气会。会上表示，根据党中央、国务院的部署，自2014年起，我省作为全国首批试点省份，与上海市一道，承担国家高考综合改革试点任务。5年来，已经完成了三轮…",
      content: [
        {
          paragraph: {
            text: "进一步做好高考综合改革试点工作，今天下午浙江召开新闻通气会。",
          },
        },
        {
          paragraph: {
            text: "会上表示，根据党中央、国务院的部署，自2014年起，我省作为全国首批试点省份，与上海市一道，承担国家高考综合改革试点任务。5年来，已经完成了三轮高考招生录取。",
          },
        },
        {
          paragraph: {
            text: "高考综合改革是一项探索性改革，没有先例可循，因此需要先行先试、探索完善。",
          },
        },
        {
          paragraph: {
            text: "发现问题并不断调整完善改革方案，本身就是改革试点的价值所在。试点以来，我省和上海市都对高考改革试点方案进行了调整充实，为全国其他省份的改革试点提供了有效借鉴。",
          },
        },
        {
          paragraph: {
            text: "2018年底英语加权赋分事件之后，省委、省政府组织力量就高考综合改革试点工作开展全面的调研和评估，并在教育部指导下，针对存在的问题和矛盾，结合教育教学实际情况，再次研究了完善措施。日前，省政府正式发布《关于进一步做好高考综合改革试点工作的通知》（浙政发〔2020〕11号），对高考的部分政策进行调整。主要有六项措施：",
          },
        },
        {
          paragraph: {
            text: "一、高中学考按年级定时定科统一安排，同一年级统一科目统一时间开考，从2020年入学的高一学生开始实施。",
          },
        },
        {
          paragraph: {
            text: "二、外语和选考科目成绩从2年有效改为当年有效，从2021年1月考试起实施。",
          },
        },
        {
          paragraph: {
            text: "三、选考科目等级赋分的分差由3分改为1分，从2022年1月选考起实施。",
          },
        },
        {
          paragraph: {
            text: "四、录取分段由三段改为两段，从2021年招生录取起实施。",
          },
        },
        {
          paragraph: {
            text: "五、语文、数学和外语使用全国统一命题试卷，从2023年起实施。",
          },
        },
        {
          paragraph: {
            text: "六、职业技能操作考试作为合格性考试，由省统一标准、市县组织，考试合格作为报考条件，职业技能理论知识考试仍全省统一组织，从2022年招生录取起实施。",
          },
        },
        {
          paragraph: {
            text: "以上六项措施，因为适用的起始年级不同，所以实施时间有所区别。为确保高考综合改革的平稳实施，省政府要求各级党委、政府切实加强组织领导，统筹协调相关改革和保障措施的落实。同时要加强高考综合改革的条件保障，特别是充分考虑高考综合改革后高中教师工作量变化的实际情况，采取相应的激励措施，努力保障和提高高中教师的收入待遇。我们也呼吁全社会加快转变教育理念，纠正单纯以升学评价教育、学校和教师的片面教育观、人才观、质量观、政绩观，为高考综合改革营造良好的环境。  ",
          },
        },
        {
          paragraph: {
            text: "关于进一步做好高考综合改革试点工作",
          },
        },
        {
          paragraph: {
            text: "相关政策的解读 ",
          },
        },
        {
          paragraph: {
            text: "《浙江省人民政府关于进一步做好高考综合改革试点工作的通知》（简称《通知》）经省委常委会议、省政府常务会议审议通过，近日已经印发。现将《通知》制订背景及有关内容解读如下。",
          },
        },
        {
          paragraph: {
            text: "1.高考改革试点成效主要体现在哪些方面？",
          },
        },
        {
          paragraph: {
            text: "在全国首批启动高考综合改革试点，是党中央、国务院交给我省的重要任务。本轮高考改革，我省从有利于促进学生健康发展、科学选拔各类人才和维护社会公平出发，全面推进高考综合改革试点，初步构建了更加公平公正、科学高效和丰富多样的高考招生制度，取得了阶段性成果。",
          },
        },
        {
          paragraph: {
            text: "主要体现在：一是改革平稳落地。围绕“实现学生成长、国家选才、社会公平三者有机统一”要求，我省积极稳妥推进改革完善举措，现已顺利完成三轮高考招生录取；从历次调研及第三方独立评估看，对改革成效是有共识的。二是改革方向正确。坚持立德树人，统筹推进教育教学、考试、招生、管理等综合改革，建立了分类考试、综合评价、文理融通、多元录取的高考招生体系，促进学生全面发展，打破“一考定终身”，促进高中学校的课程改革和特色发展，撬动高校专业建设和育人模式改革。三是群众总体认可。据2019年1月第三方独立评估，新高考录取新生、高中学生对我省高考改革的满意度分别是81.7%、79.9%，表明“改革为了学生”的目的基本达到；高水平大学在招生上积极支持改革试点，广大考生对新高考改革的获得感进一步提升。",
          },
        },
        {
          paragraph: {
            text: "2.高考改革试点为什么要不断完善？",
          },
        },
        {
          paragraph: {
            text: "对高考改革试点方案的相关内容进行调整完善，有两方面原因：一是对国务院文件精神的贯彻落实。国务院《关于深化考试招生制度改革的实施意见》提出，有关改革试点省份要“及时研究解决改革中遇到的新情况新问题，不断总结经验、调整完善措施”。二是对改革试点客观规律的尊重。本轮高考综合改革试点，直面长期阻碍素质教育实施的“唯分数论”“一考定终身”“既严重偏科又个性缺失”等老大难问题，不等不推不绕，迎难而上，是1977年恢复高考以来链条最长、涉及面最广和力度最大的一次改革。作为先行试点省，没有现成的经验可以借鉴。五年的实践积累了经验，取得了成效，但在改革的系统性和协同性、条件保障和能力建设等方面还有待进一步加强。全省教育大会明确了高考改革“坚持改革不动摇、完善改革不停步”。我们一方面要坚定信心，坚持改革不动摇，一方面要立足现阶段实际，更好地处理科学选才和公平选才、理想目标和现实条件的关系，更好地克服功利应试惯性等因素的阻碍，循序渐进，行稳致远。",
          },
        },
        {
          paragraph: {
            text: "3.本次《通知》制订总体上是怎么考虑的？",
          },
        },
        {
          paragraph: {
            text: "主要考虑：坚持深化改革，努力实现积极推进和稳妥推进相统一、问题导向和效果导向相统一、促进公平和提升效率相统一。坚持立德树人，切实做到以生为本，把促进学生健康成长作为改革的出发点和落脚点。坚持协同推进，加强组织保障，进一步强化高校招生端的牵引作用、中学端的推动作用、社会端的助力作用，凝聚学生、家长、教师和社会的思想共识，为高考综合改革营造良好的环境和氛围。",
          },
        },
        {
          paragraph: {
            text: "4. 本次《通知》是怎样形成的？",
          },
        },
        {
          paragraph: {
            text: "高考综合改革试点举措全面落地后，我省边实践边探索，一直坚持做好进一步深化改革的一系列基础性工作。本次《通知》的形成，是全面调查、多轮评估和严格论证决策的过程。2018年年底，省政府成立高考综合改革试点工作领导小组，研究完善高考改革方案。2019年1月以来，省委、省政府、省政协等领导牵头深入基层广泛调研，面向社会、高校和中学听取意见建议，并多次主持召开专家咨询会。省教育厅组成三个调研组分别面向省内中学、高校、市县教育局、省内外教育和测量专家进行调研，共召开座谈会64场，访谈对象1100余人；线上调查回收有效问卷10万余份，在广泛调研基础上提出了完善高考改革试点的初步思路和方案。与此同时，我省专门聘请第三方开展高考综合改革试点的独立评估，并先后启动两个轮次的自我评估，分别形成评估报告。",
          },
        },
        {
          paragraph: {
            text: "在这一系列工作基础上，省政府多次专题研究讨论，经省政府常务会议和省委常委会决策同意，并按规定履行报审程序之后，最终形成并向社会公布本次《通知》。",
          },
        },
        {
          paragraph: {
            text: "5.学考为什么调整为按年级定科定时统一安排？",
          },
        },
        {
          paragraph: {
            text: "2014年启动改革试点时，学考一年提供两次机会，允许不同年级学生同时参加考试，是鉴于我省深化高中课改，实行弹性学制，允许学习能力较强的学生提前完成高中学业。五年的实践表明，这样的学生为数甚少。而在功利应试倾向较普遍存在的情况下，这样的安排反而给部分学校功利性“抢跑”提供了便利。为了杜绝功利性“抢跑”造成学生负担重、教学秩序受冲击的现象，《通知》对高中学考的安排作了适当调整。鉴于我省高中将从2020年入学的高一学生开始启用新课标，因此《通知》明确从这一级学生开始实施学考定时定科的调整，以有利于考试安排与教学安排调整保持同步。",
          },
        },
        {
          paragraph: {
            text: "6.外语和选考科目成绩调整为当年有效的原因是什么？",
          },
        },
        {
          paragraph: {
            text: "外语和选考科目成绩2年有效，是与高中课改学分制和弹性学制配套设计的，也与高二学生可参加选考有关。鉴于2017年省政府已下文将选考科目的2次考试集中在高三年级安排，同时为避免给部分学校功利性“抢跑”提供便利，避免不同年级学生之间的不平衡，《通知》将外语和选考科目成绩从2年有效改为当年有效，并明确从2021年1月考试起实施。",
          },
        },
        {
          paragraph: {
            text: "7.选考科目等级赋分怎样调整？",
          },
        },
        {
          paragraph: {
            text: "2014年我省启动新高考时，为了使不同选考科目的成绩可比，采用等级赋分，设21等级，分差为3分。这次《通知》规定，从2022年1月选考起，选考科目在原基础上进一步细化赋分，分差由3分改为1分。这是为了增强选考科目考试的区分性。",
          },
        },
        {
          paragraph: {
            text: "8.招生录取为什么分两段进行？",
          },
        },
        {
          paragraph: {
            text: "我省新高考招生录取办法制订时，为了使学生、家长和教师有一个适应期，对考生分三段录取，同时在录取办法的解读材料里明确条件成熟时逐步减少分段。迄今新高考招生录取已经平稳实施三年，考生、家长和高校均已适应新高考的评价和录取模式，减少招生录取分段的条件已经基本成熟。经广泛征求意见和综合利弊分析，《通知》改分三段录取为分两段录取，从2021年招生录取起实施。这样调整有利于扩大学生的选科和选专业的范围。",
          },
        },
        {
          paragraph: {
            text: "9.怎样进一步完善高校招生职业技能考试？",
          },
        },
        {
          paragraph: {
            text: "职业技能操作考试作为合格性考试，由省统一标准、市县组织实施，从2022年招生录取起使用；职业技能理论知识考试仍全省统一组织实施。这样做，一方面持续体现了高职院校对考生职业技能素养的要求，有利于中职学校推进教育教学改革；一方面也考虑到了全省统一组织操作考试的复杂程度，有利于高职院校更好地把握统一的衡量标准。此外，也与当前国家实施高职院校扩招的实际相吻合。",
          },
        },
        {
          paragraph: {
            text: "10.深化高考改革试点保障措施有哪些？",
          },
        },
        {
          paragraph: {
            text: "一是加强组织领导。落实地方党委、政府对高考综合改革的属地责任和主要负责人第一责任人职责，切实加强组织领导，统筹协调相关改革和保障措施的落实。要求各相关部门和单位切实履行职责，加强协调配合，形成改革合力，确保各项改革举措落实到位。二是凝聚思想共识。大力宣传深化高考综合改革的重要意义。分级分层分类开展培训，引导转变教育理念，积极投身高考改革。建立健全符合教育规律的评价机制，纠正单纯以升学率评价教育、学校和教师的片面教育观、人才观、质量观、政绩观。三是加强高考综合改革的条件保障。在现有中小学教职工编制总量内，适度增加普通高中的附加编制数量，用于配置普通高中专任教师。充 分考虑高考综合改革后高中教师工作量变化的实际，在绩效工资及年度考核奖分配时充分体现绩效和激励因素，向工作量增加较多的教师倾斜。提高普通高中学校生均公用经费，加快学科教室、创新实验室等教学场地建设。加强考试招生工作队伍专业化建设，建立入闱命题（制卷）专业人员工作保障机制，加快命题基地建设，提升命题和考试质量。",
          },
        },
      ],
    },
  },
  {
    id: 29,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "老爸老爸我爱你❤️儿女心里装着你",
      date: "2020-06-20",
      imageURL: "/images/article/1592632521475824.jpg",
      previewText:
        "父亲是我们背后的那座山他坚强 他包容 他宽厚父亲是我们依靠的那棵大榕树他给我们阴凉用润物细无声的爱看着我们成长........老爸，今天是您的节日我要告诉您我—-爱—-您您笑了羞答答地脸都羞红了我的眼睛湿润了....…",
      content: [
        {
          paragraph: {
            text: "父亲是我们背后的那座山",
          },
        },
        {
          paragraph: {
            text: "他坚强 他包容 他宽厚",
          },
        },

        {
          paragraph: {
            text: "父亲是我们依靠的那棵大榕树",
          },
        },
        {
          paragraph: {
            text: "他给我们阴凉",
          },
        },
        {
          paragraph: {
            text: "用润物细无声的爱",
          },
        },
        {
          paragraph: {
            text: "看着我们成长........",
          },
        },
        {
          paragraph: {
            text: "老爸，今天是您的节日",
          },
        },
        {
          paragraph: {
            text: "我要告诉您",
          },
        },
        {
          paragraph: {
            text: "我—-爱—-您",
          },
        },
        {
          paragraph: {
            text: "您笑了",
          },
        },
        {
          paragraph: {
            text: "羞答答地",
          },
        },
        {
          paragraph: {
            text: "脸都羞红了",
          },
        },
        {
          paragraph: {
            text: "我的眼睛湿润了.........",
          },
        },
        {
          paragraph: {
            text: "让我们一起来欣赏朱自清先生描写父亲的著名散文“背影”献给我们家里的顶梁柱——父亲",
          },
        },
        {
          paragraph: {
            text: "朱自清《背影》的原文及赏析",
          },
        },
        {
          paragraph: {
            text: "　　导语：朱自清是近现代著名的散文家文学家，以下是由应届毕业生文学网网小编为您整理的朱自清背影的原文及赏析，希望对您有所帮助!",
          },
        },
        {
          paragraph: {
            text: "　　背影",
          },
        },
        {
          paragraph: {
            text: "　　我与父亲不相见已二年余了，我最不能忘记的是他的背影。",
          },
        },
        {
          paragraph: {
            text: "　　那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子。我从北京到徐州打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说：“事已如此，不必难过，好在天无绝人之路!”",
          },
        },
        {
          paragraph: {
            text: "　　回家变卖典质，父亲还了亏空;又借钱办了丧事。这些日子，家中光景很是惨淡，一半因为丧事，一半因为父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。",
          },
        },
        {
          paragraph: {
            text: "　　到南京时，有朋友约去游逛，勾留了一日;第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖;颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有什么要紧的了。他踌躇了一会，终于决定还是自己送我去。我再三劝他不必去;他只说：“不要紧，他们去不好!”",
          },
        },
        {
          paragraph: {
            text: "　　我们过了江，进了车站。我买票，他忙着照看行李。行李太多了，得向脚夫行些小费才可过去。他便又忙着和他们讲价钱。我那时真是聪明过分，总觉他说话不大漂亮，非自己插嘴不可，但他终于讲定了价钱;就送我上车。他给我拣定了靠车门的一张椅子;我将他给我做的紫毛大衣铺好座位。他嘱我路上小心，夜里要警醒些，不要受凉。又嘱托茶房好好照应我。我心里暗笑他的迂;他们只认得钱，托他们只是白托!而且我这样大年纪的人，难道还不能料理自己么?唉，我我说道：“爸爸，你走吧。”他往车外看了看说：“我买几个橘子去。你就在此地，不要走动。”我看那边月台的栅栏外有几个卖东西的等着顾客。走到那边月台，须穿过铁道，须跳下去又爬上去。父亲是一个胖子，走过去自然要费事些。我本来要去的，他不肯，只好让他去。我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩;他肥胖的身子向左微倾，显出努力的样子，这时我看见他的背影，我的泪很快地流下来了。我赶紧拭干了泪。怕他看见，也怕别人看见。我再向外看时，他已抱了朱红的桔子往回走了。过铁道时，他先将桔子散放在地上，自己慢慢爬下，再抱起桔子走。到这边时，我赶紧去搀他。他和我走到车上，将桔子一股脑儿放在我的皮大衣上。于是扑扑衣上的泥土，心里很轻松似的。过一会儿说：“我走了，到那边来信!”我望着他走出去。他走了几步，回过头看见我，说：“进去吧，里边没人。”等他的背影混入来来往往的人里，再找不着了，我便进来坐下，我的眼泪又来了。",
          },
        },
        {
          paragraph: {
            text: "　　近几年来，父亲和我都是东奔西走，家中光景是一日不如一日。他少年出外谋生，独立支持，做了许多大事。哪知老境却如此颓唐!他触目伤怀，自然情不能自已。情郁于中，自然要发之于外;家庭琐屑便往往触他之怒。他待我渐渐不同往日。但最近两年不见，他终于忘却我的不好，只是惦记着我，惦记着我的儿子。我北来后，他写了一信给我，信中说道：“我身体平安，惟膀子疼痛厉害，举箸提笔，诸多不便，大约大去之期不远矣。”我读到此处，在晶莹的泪光中，又看见那肥胖的、青布棉袍黑布马褂的背影。唉!我不知何时再能与他相见!",
          },
        },
        {
          paragraph: {
            text: "　　欣赏",
          },
        },
        {
          paragraph: {
            text: "　　朱自清先生的《背影》与《悼亡妇》，被称为“天地间第一等至情文学”。他能够在淡淡的笔墨中，流露出一股深情，没有半点矫柔造作，而有动人心弦的力量，特别是《背影》，表达了作者对其父朱鸿钧的深情和丝丝的怀念，深深感动着每一位读者，并长期以来，一直作为现代经典散文被收录在中学、大学语文课本中。",
          },
        },

        {
          paragraph: {
            text: "　　但是，近来，有些人在网上对先生的这篇美文大加指责，并斥之为病态文学，叫嚣应当把斯文从中学、大学的语文课本中裁掉等等。看罢这些人在网上发布的文字，我心中不免有些凄惶，也有几番哀叹，眼前也不由得浮现出一群赤膊叉腰，张口唾沫四溅，闭嘴白沫满唇，翘足延颈，当街谩骂的泼妇形象来。如果按照这些人的说法去衡量，中国五千年来的璀璨文化艺术几乎无不是病态的文化艺术，都入不了他们的法眼了。而他们自己却又拿不出一篇，或者一件，他们自己的非病态的作品来供人们一饱眼福，这又是为什么呢 ?于是，我不仅联想起鲁迅先生“战士战死了的时候，苍蝇们所首先发见的是他的缺点和伤痕，嘬着，营营地叫着，以为得意，以为比死了的战士更英雄”(《战士和苍蝇》)的话来,并以此馈赠那些当街叫嚣的泼妇们。",
          },
        },
        {
          paragraph: {
            text: "　　一、写作背景：",
          },
        },
        {
          paragraph: {
            text: "　　《背影》一文，写于一九二五年。斯文乃追忆其八年前的一件往事。讲述作者在北京大学哲学系念书期间，得知祖母去世后，从北京赶到徐州与父亲一道回扬州老家奔丧。办完丧事后，其父到南京找工作，而作者则回北京念书，父子俩在今南京市浦口区惜别的情景。此文后来收在了开明书店出版的散文集《背影》中。它是自清先生早期一篇极为有名的文章，也是现代文学史上的散文杰作。作者仅以一千五百字描写了一个生活片断，却能感人至深，脍炙人口，自清先生的写作技巧，焉不敬服人哉!",
          },
        },
        {
          paragraph: {
            text: "　　二、思想主题：",
          },
        },
        {
          paragraph: {
            text: "　　通过对父亲在车站给儿子送行情景的描述，表现了父亲对儿子无微不至的热爱和儿子对父亲百般的怀念。",
          },
        },
        {
          paragraph: {
            text: "　　本文作于1925年，写的是1917年作者在北大读书时的一段经历。而在这一时期，中国的社会状况是：军阀割据，帝国主义势力明争暗斗，知识分子朝不保夕，广大劳动人民处在水深火热之中。作者当时虽未站到革命立场，投入反帝反封的斗争中，但作为一名正直、善良、敦厚的知识分子，必然会感到社会的压抑，产生一种落寞凄凉的情绪。作者以自己的家庭为例，讲述了其家庭因社会的黑暗而日趋窘迫，“光景很是惨淡”，“一日不如一日”，作者的父亲，先是“赋闲”，后为了找差事而“东奔西走”，乃至老境“颓唐”。这些都从一个侧面反映了当时知识分子奔波劳碌，前途渺茫，谋事艰难，境遇凄惨的现实。在他们心头笼罩一层不散的愁云，如同文章所表现的灰暗的基调。在这一背景下，作者写出了真挚、深沉，感人至深的父子之爱，不仅是符合我们民族伦理道德的一种传统的纯真而高尚的感情，而且父子互相体贴，特别是父亲在融汇了辛酸与悲凉情绪的父子之爱中，含有在厄运面前的挣扎和对人情淡薄的旧世道的抗争。虽然这只是怨而不怒式的反抗，但也会引起人们的同情、叹惋乃至强烈的共鸣。",
          },
        },
        {
          paragraph: {
            text: "　　三、文章分析",
          },
        },
        {
          paragraph: {
            text: "　　《背影》是记实散文。它描述了在家庭遭受变故的情况下，父亲送别远行儿子的经过。通过朴素真切的语言，表现了父亲的一片爱子之心和儿子对父亲的感念之情。它是中国现代散文史上的名篇。作者曾说：“我写《背影》，就因为文中所引的父亲的来信里的那句话。当时读了父亲的信，真的泪如泉涌。我父亲待我的许多好处，特别是《背影》里所叙的那一回，想起来跟在眼前一般无二。我这篇文只是写实……”这话道出了《背影》的写作缘由、描写重点和写作特点等，可以作为理解文章的钥匙。",
          },
        },
        {
          paragraph: {
            text: "　　全文分成三大部分：",
          },
        },
        {
          paragraph: {
            text: "　　第一部分：即第一自然段。乃开篇点题。思念父亲，最不能忘怀的是他的“背影”。",
          },
        },
        {
          paragraph: {
            text: "　　第二部分：即从“那年冬天”至“我的眼泪又来了”。以回忆往事，追述在车站与父亲离别的情景，表现父亲爱子的真挚感情。",
          },
        },
        {
          paragraph: {
            text: "　　然此部分又分三层：",
          },
        },
        {
          paragraph: {
            text: "　　第一层：从“那年冬天”到“我们便同行”。旨在为写“背影”渲染悲凉的气氛。其主要交代此次父子分别时的家庭情况。",
          },
        },
        {
          paragraph: {
            text: "　　第二层：自“从到南京时”到“……太聪明了”。写父亲送行前的细心关照，为写“背影”作铺垫。",
          },
        },
        {
          paragraph: {
            text: "　　第三层：始于“我说道”止于“……又来了”。描写父亲爬过铁道去买橘子的“背影”，抒发真挚的感情。",
          },
        },
        {
          paragraph: {
            text: "　　3.第三部分：即最后一自然段。写别后对父亲的思念。以在泪光中再现“背影”作结，直接抒发深切怀念之情。",
          },
        },
        {
          paragraph: {
            text: "　　三、艺术分析",
          },
        },
        {
          paragraph: {
            text: "　　《背影》记事颇简单，一个丢了差使的小吏送子北上读书，在火车站送别。在军阀统治的旧中国，这种事是极平常的事，在那黑暗的社会里，即使这种小康之家，也经不起天灾人祸的打击。文章记述了作者家庭的不幸和当时的灰暗世态，从一个侧面反映了当时的社会现实。这种社会虽早已不存在了，但其记述的情景，对我们来说依然有着历史的认识作用。",
          },
        },
        {
          paragraph: {
            text: "　　其写作特点：本文通过抓住人物形象的特征——“背影”的命题以立意，组织材料，在叙事中抒发父子深情。",
          },
        },
        {
          paragraph: {
            text: "　　“背影”在文中反复出现四次，然每次的情况都有所不同，而思想感情则是一脉相承。第一次，在文章开头，旨在开篇点题“背影”。营造出一种浓厚的感情气氛，以笼罩全文。第二次，在车站送别的场面中，作者对父亲的“背影”作了具体的描绘，此为写作重点。父亲胖胖的身躯，穿着黑布大马褂，深青布棉袍，步履艰难，蹒跚的爬过铁道为儿子买橘子。这个镜头表现了父亲爱儿子的深厚感情，使儿子感动得热泪盈眶。第三次，父亲和儿子告别后，儿子眼望着父亲的“背影”在人群中消逝，离情别绪，又催人泪下。第四次，在文章结尾，儿子读着父亲的来信，在泪光中再次浮现了父亲的“背影”，思念之情不能自己，与文章开头呼应。",
          },
        },
        {
          paragraph: {
            text: "　　本文把父子之间的真挚感情表现得淋漓尽致，然又不同于一般作品去描写人物肖像、神情、音容笑貌等，而是抓住人物形象的一个特征“背影”，不惜笔墨作具体细致的刻画。作者这样处理，主要同作者的家境和心境有着密切的关系。因为，一、父亲老境“颓唐”，饱经忧患，半生潦倒;二、父亲在家境惨淡、祖母逝世、奔走谋职之时，还不辞辛苦，不怕麻烦送儿子上北京，还艰难的爬过铁道为儿子买橘子，而且反复叮咛一路小心。三、当时父亲的心境不好，儿子的心境也不好。因此，作者抓住父亲这样一个“背影”集中描绘，抒发特定环境下的思想感情，自然取得强烈的艺术效果。也正因为作品写的是特定的家境、心境、慈父孝子之间相爱相怜，字里行间有淡淡的哀愁，显得更加真挚动人。",
          },
        },
        {
          paragraph: {
            text: "　　具体说来，",
          },
        },
        {
          paragraph: {
            text: "　　1.民族化。《背影》的语言非常忠实朴素，又非常典雅文质。这种高度民族化的语言，和《背影》所表现的民族的精神气质，和《背影》文章的完美结构，恰成和谐的统一。没有《背影》语言的明丽典雅、古朴质实，就没有《背影》的一切风采。",
          },
        },
        {
          paragraph: {
            text: "　　2.简洁。本文通体干净，没有多余的字眼，即使一个“的”字、一个“了”字，也是必须用才用。除了夹入了一些文言词语以外，没有华美的辞藻，生僻的词语，都是质朴自然的家常话，生活气息非常浓厚，提炼得非常简洁。",
          },
        },
        {
          paragraph: {
            text: "　　3.朴实。《背影》全用白描记叙事实，不作任何修饰、渲染。通篇写父亲多么关心爱护儿子，儿子又是多么感激思念父亲，但像“关心”、“爱护”、“感激”这一类的抽象现成的字眼，文章中却一个也没有用，更没有什么华丽的词藻。大朴正是大巧的表现。文中用词造句都经过认真考究，绝不随便。如送行那一段：“父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去，他再三嘱咐茶房，甚是仔细。”这里的“说定”，如果用“说过”似乎也通，但逊色多了。“说定”不送，后来终于还是送了，实际上是说而不定，很好地表现出父亲当时的矛盾心理。“熟识”一词，说明父亲嘱托的这个茶房该是靠得住的;“再三嘱咐”，表明嘱咐茶房遍数之多，不厌其烦，反复交代，唯恐茶房有半点疏漏;“甚是仔细”，表明嘱咐内容之详，把送行中应该注意的细微末节都提到了。这些用语，强调说明父亲已经为儿子上车作了极其精细、周密的考虑和安排，字眼虽然十分平常，但用得恰到好处，使父亲爱子之心跃然纸上。",
          },
        },
        {
          paragraph: {
            text: "　　4.感人。语言平实简洁，却能传达出无限深情是文章语言又一特色。全篇文字平平实实，但字里行间渗透着一种深切怀念之情，因而十分感人。话都是很平常的，没有什么特别，读者都有这种生活经验，因此也容易引起联想，由此发现人世间普遍平平常常而又最为珍贵的美好感情，给人以性情的陶冶，增进人们对天下父母心的理解。",
          },
        },
        {
          paragraph: {
            text: "　　5.文白夹杂。文中出现文言的原因：作者有很深的文言基础，当时的语体文中常有夹入文言词句的情况，这是一方面：另一方面，文章中使用文言词句，可能也与作者当时的思想感情有关，例如不说“失业”或“丢了差使”，而说“赋闲”，似乎“赋闲”不象“失业”那样刺耳和使人难堪，有失体面;最后一节既因父亲来信是文言，引用原句，更见真实，也因所表达的尽是家庭和父亲的困境和沧凉的心情与复杂的感受，所以也用了许多文言词句，这也笼上了一层时代赋予小资产阶级知识分子的特殊语言色彩。在写法上，《背影》的主要特点是白描，作者写父亲的背影，描写那买桔子时过铁道的场面，完全用白描的手法。所谓白描，照我的理解，就是不设喻，不加形容和修饰，用质朴的文字，把当时的情景如实地记写出来，给读者以身临目击之感。换句话说，白描是用叙述的方法进行描写，达到再现实景的艺术效果。",
          },
        },
        {
          paragraph: {
            text: "　　6、白描的技巧极高。如：“我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩;他肥胖的身子向左微倾，显出努力的样子。这时我看见他的背影，我的泪很快地流下来了。我赶紧拭干了泪，怕他看见，也怕别人看见。我再向他看时，他已抱了朱红的桔子望回走了。过铁道时，他先将桔子散放在地上，自己慢慢爬下，再抱起桔子走，到这边时，我赶紧去搀他。”父亲的背影，儿子是太熟悉了。但这次要描写的，却不是那常见的背影，而是在特定场合下，使他极为感动、终生难忘的那个背影!作者不施浓墨，不用重彩，而是白描。再如作者写父亲当时的穿着打扮体态动作，特别着重描绘了过铁道的情景。怎样走去，怎样探身下去，怎样爬上月台，攀上爬下，移脚倾身，都细细地如实写下，我们读后有身临其境之感，仿佛我们当时也在场，也看到了一位仁慈的父亲对儿子的关怀和体贴的情景。",
          },
        },
      ],
    },
  },
  {
    id: 30,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "加拿大人见美国车牌如见鬼！上前质问怎么来的？",
      date: "2020-06-20",
      imageURL: "/images/article/1592621457189077.jpg",
      previewText:
        "还记得前几天的那个新闻吗？大量美国游客以去阿拉斯加为理由，入境加拿大，在班夫公园不戴口罩不隔离，还去餐馆堂食，玩High了！本来美国的糟糕抗疫就让加拿大人对“隔壁兄弟”有所忌惮。这个事件发生后，加拿大人对…",
      content: [
        {
          paragraph: {
            text: "还记得前几天的那个新闻吗？大量美国游客以去阿拉斯加为理由，入境加拿大，在班夫公园不戴口罩不隔离，还去餐馆堂食，玩High了！",
          },
        },
        {
          paragraph: {
            text: "本来美国的糟糕抗疫就让加拿大人对“隔壁兄弟”有所忌惮。这个事件发生后，加拿大人对美国人的印象就更差了：明明边界封闭了，还非要来我们这，不是害人吗？",
          },
        },

        {
          paragraph: {
            text: "很显然，如今的加拿大人看到自己城市里出现美国牌照的车，都会想办法躲着走。而在多伦多，加拿大人并不是躲着走，而是上前质问美国司机“从哪来，怎么来的”，甚至言语威胁美国司机快回去。",
          },
        },
        {
          paragraph: {
            text: "加拿大和美国民众之间的矛盾，这下是真的难以调和了。来看看最新的状况吧，安大略省小城市Muskoka Lake的市长表示：",
          },
        },

        {
          paragraph: {
            text: "近期有不少美国司机在我们城市里遭到加拿大人的言语威胁、辱骂，因为加拿大人不希望这些美国牌照的车辆出现在加拿大，哪怕是“必要理由”，因为这对加拿大疫情防控很不利。",
          },
        },

        {
          paragraph: {
            text: "市长Phil Harding继续说道：“美国人已经感到恐惧，有的美国人确实是来我们这探亲的，但却被盯上，甚至被包围讨要说法。”",
          },
        },

        {
          paragraph: {
            text: "其中一名来自疫情严重的佛罗里达州的美国司机，在加油站加油时遭到加拿大人“群起而攻之”，被要求出示护照，并查阅出入境记录。这在加拿大是严重的侵犯隐私行为，但疫情期间迫于压力，这名美国人也照做了。",
          },
        },

        {
          paragraph: {
            text: "结果显示，他是长期居住在加拿大，拥有双国籍的美国人，每年6个月在佛罗里达6个月在安大略。事实上，在Muskoka Lake的很多美国车牌持有者，都是有2个家，而且很多是在疫情前就已经来到了Muskoka Lake。",
          },
        },

        {
          paragraph: {
            text: "显然，其中有太多冤假错案。所以市长Phil提醒在Muskoka Lake的美国民众“要锁好车、尽量少出门、在被质问时给出妥善的解释。”",
          },
        },

        {
          paragraph: {
            text: "多伦多的美国车牌，也被针对",
          },
        },

        {
          paragraph: {
            text: "美国车牌被针对，不止发生在安省小城Muskoka Lake，还发生在第一大城市多伦多。因为和纽约州近，而纽约州又是美国疫情第一严重的州，因此纽约州牌照的车在多伦多可想而知……",
          },
        },

        {
          paragraph: {
            text: "安省的居民理由很简单：就算美国人在加拿大也有家，但有必要在疫情期间来这个家吗，这个难道不算是非必要理由吗？",
          },
        },

        {
          paragraph: {
            text: "然而包括Phil Harding在内的不少安省官员都表示：“这不是我们希望看到的画面，加拿大人始终是友好的，这种不理智的行为，不是加拿大人的处事方式，我希望大家冷静对待。”",
          },
        },

        {
          paragraph: {
            text: "一方面是要保持加拿大人的克制和友善，一方面又要防范不老实的美国人违规入境，就像违规去班夫那样，加拿大人表示真的很心累！",
          },
        },

        {
          paragraph: {
            text: "加拿大人，本不应该对美国有偏见，无奈美国的所作所为，如何能让加拿大不紧张？作为邻国，疫情开始的时间差不多，3个多月过去了，看看加拿大和美国的疫情曲线吧：",
          },
        },

        {
          paragraph: {
            text: "四个字形容就是天壤之别 —— 加拿大疫情明显好转，甚至有可能在夏天结束第一波疫情；而美国呢？曲线甚至就没有往下走过。",
          },
        },

        {
          paragraph: {
            text: "作为优等生的加拿大，面临“不及格”学生的“骚扰”，然后想抱怨的时候又被班主任阻止。加拿大人能不心累吗？每年夏天，加拿大人很爱带孩子去美国迪士尼，但看看拥有迪士尼的两个州现在的状况吧。",
          },
        },

        {
          paragraph: {
            text: "日增3207例，佛罗里达把人吓哭了",
          },
        },

        {
          paragraph: {
            text: "佛罗里达州拥有世界上最大的奥兰多迪士尼乐园，原本NBA也打算在奥兰多复赛。然而，作为最早解封的州之一，佛罗里达州的疫情非但没有好转，还在急剧恶化。",
          },
        },
        {
          paragraph: {
            text: "单日新增3207例，打破单日新增记录！这个数字，简直能把人“吓哭”了。如今佛罗里达的总病例数已经超过85000，接近加拿大全国的病例数。看看每日疫情增长曲线：",
          },
        },
        {
          paragraph: {
            text: "NBA还能复赛吗？迪士尼还能去吗？但佛罗里达州的海滩还是一如既往地热闹，就像复活节时那样，大家依然沉醉在“幸福”的生活中，全然不顾疫情曲线。",
          },
        },

        {
          paragraph: {
            text: "日增4084例，加州同样破记录",
          },
        },

        {
          paragraph: {
            text: "另一个拥有迪士尼，而且大温居民还很爱去的加州也不甘示弱：6月17日新增4084例，又是疫情开始以来的记录！此前加州最多新增是5月30日的3705例。",
          },
        },
        {
          paragraph: {
            text: "值得一提的是，加州的人口和加拿大差不多，加拿大每天新增如今不过三四百例，而加州是三四千例。说的不好听一些，在温哥华看到加州牌照的车牌，有多少人能心情没有波动？",
          },
        },
        {
          paragraph: {
            text: "直到昨天，加州才呼吁民众“在离开啊的绝大多数情况下要戴着口罩”……好吧，早干嘛去了？",
          },
        },

        {
          paragraph: {
            text: "德克萨斯，同样刷爆记录",
          },
        },

        {
          paragraph: {
            text: "美国的另一大州德克萨斯，疫情确诊人数刚刚破了10万。在6月16日的时候，也刷爆了单日新增记录：4098例，比加州还多，而此前最多的一天，单日只有2504例。",
          },
        },
        {
          paragraph: {
            text: "在6月中旬，美国这几个大州曲线都突然上扬。别忘了，之前违规进入班夫的美国车辆，大多来自德克萨斯州。这……只能祈祷阿尔伯塔省平安吧。",
          },
        },

        {
          paragraph: {
            text: "纽约州，此时成了“清流”",
          },
        },

        {
          paragraph: {
            text: "其他人口大州一个比一个吓人，纽约州此时却成了一股“清流”。在4月24日单日确诊超过1万人后，纽约州的曲线一路下降，如今每天只有600左右的新增，已经是表现非常给力了。",
          },
        },
        {
          paragraph: {
            text: "纽约州在防疫期间，已经能算的上美国的标兵：率先宣布新常态概念、率先要求人们戴口罩、率先告诫人们要做好长期斗争的心理准备。一系列的重拳出击，让纽约州疫情终于得到控制。但无奈“队友不给力”，美国总体疫情仍然居高不下。",
          },
        },

        {
          paragraph: {
            text: "疫情最严重的魁北克，放到美国排名居然是……",
          },
        },

        {
          paragraph: {
            text: "魁北克是加拿大疫情最严重的省，截止到写稿时确诊已经是54550例，死亡病例则是5375例。加拿大超过一半的确诊病例和死亡病例来自魁北克，但魁北克的数据如果放到美国，那真的就不算什么了。",
          },
        },
        {
          paragraph: {
            text: "由图表可见，确诊人数比魁北克的多的美国州，有包括纽约、新泽西、加利福尼亚、伊利诺伊、马萨诸塞、德克萨斯在内的足足12个州。",
          },
        },
        {
          paragraph: {
            text: "至于BC省的2700多例，在美国只比缅因、西弗吉尼亚在内的5个州多。如此强烈的反差，如何让美国牌照不被恐慌？",
          },
        },
        {
          paragraph: {
            text: "美国的“作死”还在继续，尽管美加边境开放时间不断延后让加拿大人也算吃了定心丸。但如今加拿大人对美国人的惶恐情绪已在蔓延。在加拿大路上的美国牌照司机，这下真的是有苦难言了。",
          },
        },
      ],
    },
  },
  {
    id: 31,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "和平门公园关闭！温哥华机场禁止亲友送行！",
      date: "2020-06-20",
      imageURL: "/images/article/1591506591571545.jpg",
      previewText:
        "据报道，BC省公园局6月18日宣布将于当日晚间关闭位于美加边境的和平拱门公园，并表示5月公园内游客人数的“显著”增加已引起有关公共安全问题的担忧。和平拱门省级（州立）公园位于北纬49度美加边境线附近，为加拿大…",
      content: [
        {
          paragraph: {
            text: "据报道，BC省公园局6月18日宣布将于当日晚间关闭位于美加边境的和平拱门公园，并表示5月公园内游客人数的“显著”增加已引起有关公共安全问题的担忧。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006190659325387J.png",
          },
        },
        {
          paragraph: {
            text: "和平拱门省级（州立）公园位于北纬49度美加边境线附近，为加拿大和美国共有，其北半部分划归BC省管理。今年三月，加拿大宣布关闭美加边境并禁止游客从美国入境，但和平拱门公园却不受该政策影响，只要开放，便是分居美加两地家庭团聚的场所。            ",
          },
        },
        {
          paragraph: {
            text: "公园开放期间，访客即可从BC省素里市或华盛顿州布莱恩市进入公园。在今年4月初BC省关闭所有省级公园后，和平拱门公园于5月14日重新向公众开放。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_20200619065932633Kl.png",
          },
        },
        {
          paragraph: {
            text: "据BC省公园管理局介绍，自5月重开以后，到访公园人数比往年夏季增加超过一倍，导致停车场和附近一带道路拥挤异常，非法泊车现象严重。来自美国和加拿大的游客在此几乎毫无顾忌地牵手、拥抱甚至举行婚礼，并有不少夫妇称此地为“情侣的迪士尼乐园”。            ",
          },
        },
        {
          paragraph: {
            text: "公园管理人员曾采取过增加巡逻人员、张贴告示、减少停车时间等方式减少游客数量，并呼吁游客保持社交距离，但其效果始终不佳。            ",
          },
        },
        {
          paragraph: {
            text: "因此，BC省公园管理局6月18日表示，将于当日晚8点开始，暂时关闭和平拱门公园，重新开放时间将另行通知。但位于美国境内的公园南半部分仍正常开放。            ",
          },
        },
        {
          paragraph: {
            text: "温哥华国际机场采取措施鼓励旅行者乘坐航班            ",
          },
        },
        {
          paragraph: {
            text: "温哥华国际机场（YVR）6月18日宣布发起一项名为“机场保重” （YVR Take Care）的新运动，旨在让旅客在相关限制放宽后重拾乘机旅行的信心。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006190659327D2XE.png",
          },
        },
        {
          paragraph: {
            text: "自18日起，进入温哥华国际机场的所有旅客必须带上口罩，且除需要帮助的未成年人外，未持机票人员将一律禁止进入机场。            ",
          },
        },
        {
          paragraph: {
            text: "此外，机场内部所有柜台将安装有机玻璃隔板，且机场内消毒清洁工作的频次将提高，旅客也会在机场内部看到更多的洗手台和提示标识，并需要接受机场标准化的体温监测。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006190659328JKHe.png",
          },
        },
        {
          paragraph: {
            text: "温哥华机场管理局运营和维护副总裁Robyn McVicker表示，虽然机场并不知道何时全球旅行会恢复到正常水平，但目前加拿大境内旅行数量有所增加。            ",
          },
        },
        {
          paragraph: {
            text: "据机场官方数据统计，6月17日温哥华机场约接待了5,000名乘机旅客，但去年同期的日平均旅客数量约为75,000人。            ",
          },
        },
        {
          paragraph: {
            text: "Mcvicker表示，同比往年，温哥华国际机场的航班数量下降了约九成，且进入温哥华的国际航班大部分都是空的。            ",
          },
        },
        {
          paragraph: {
            text: "尽管损失惨重，McVicker称机场并不打算提高每名乘客需要交纳的机场建设费，发起“机场保重”运动的初衷也只有让旅客放心乘机而已。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006190659329iUOW.png",
          },
        },
        {
          paragraph: {
            text: "（YVR副总裁Robyn McVicker）            ",
          },
        },
        {
          paragraph: {
            text: "自今年4月10日起，温哥华国际机场已开始进行旅客筛查和检疫计划。当旅客通过国际航班到达机场时，他们需要填写自我隔离表格并被询问是否有可居住的地方，以及是否可能携带新冠病毒。未经过批准进行14天自我隔离的旅客，将被隔离在旅馆中。            ",
          },
        },
        {
          paragraph: {
            text: "截至6月18日下午3时，加拿大全国新增感染新冠病毒病例367例，累计感染人数达100,220人。BC省同日宣布新增确诊8例，累计确诊总数达2783例，死亡总人数达168人。            ",
          },
        },
      ],
    },
  },
  {
    id: 32,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "杜鲁多疫情发钱统计：每人最多可领1万2加币！",
      date: "2020-06-18",
      imageURL: "/images/article/1587578788826521.jpg",
      previewText:
        "疫情发生后，CERB成为最热门的关键词之一，毕竟这与千家万户的生活都是息息相关的。前些时NDP党魁喊话联邦政府延长CERB，笔者当时认为概率不大，但现在看来显然低估了政府的决心和信心。媒体报道，联邦总理杜鲁多表…",
      content: [
        {
          paragraph: {
            text: "疫情发生后，CERB成为最热门的关键词之一，毕竟这与千家万户的生活都是息息相关的。前些时NDP党魁喊话联邦政府延长CERB，笔者当时认为概率不大，但现在看来显然低估了政府的决心和信心。            ",
          },
        },
        {
          paragraph: {
            text: "媒体报道，联邦总理杜鲁多表示，联邦政府将正式延长加拿大紧急应对福利金（CERB）延长8个星期，直至9月初。换言之，原本最多可以领$8000的失业人士，现在可以领到$12,000元。杜鲁多说，那些因为COVID-19大流行而仍然无法复工的人士，可以每4周领到$2000元。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020061810053113YCj.png",
          },
        },
        {
          paragraph: {
            text: "他强调：“如果你已经领了CERB，但是由于找不到工作或根本无法工作，那么在接下来的几周中，你将继续每月获得2,000元。”就在昨日，杜鲁多表示政府正在考虑延长这一福利金。            ",
          },
        },
        {
          paragraph: {
            text: "CERB为因COVID-19大流行直接受影响的加拿大就业和自雇人士提供财务支持。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020061810053129bKs.png",
          },
        },
        {
          paragraph: {
            text: "符合条件的人士可以在4个星期内获得$2,000元，相当于每周$500元。联邦政府于4月6日起开放这个福利金计划。福利金从3月15日开始计算，最多16周结束。原本那些从3月份开始申领的人士，福利金将在7月初发放结束。            ",
          },
        },
        {
          paragraph: {
            text: "对此，本公众号在此前文章中已表明态度，对延长CERB的政策是肯定的。因为事态发展到现在，虽然加拿大疫情有明显趋缓现象，但周边地区特别是美国的疫情风险却持续上升，因此解封和复工根本不等同于万事大吉，风险系数仍然较高。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006181005313Eiu1.png",
          },
        },
        {
          paragraph: {
            text: "从复工情况来看，许多行业也是艰难度日，因为客流跟过去相比无法同日而语，而不少企业由于上下游供应链的缺失等因素，业绩也是大打折扣。            ",
          },
        },
        {
          paragraph: {
            text: "因此，政府在这个时候延长CERB，反应是比较快的。对于延缓经济衰退有相当的积极作用。            ",
          },
        },
        {
          paragraph: {
            text: "更重要的是，客观上对于维护社会稳定同样也是有效的。疫情发生后，加拿大至今没有成规模的社会动乱，跟美国相比可谓天渊之别，快速持续发钱和各方面福利的跟进也是一个重要因素。            ",
          },
        },
        {
          paragraph: {
            text: "另一方面来看，这也是形势所迫。对于一般民众而言，每月的开销再差也要1000多元，如果有房有车那么 2000元也打不住。所以一旦失业，很多人就等同于陷入财政困境。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006181005314F3Gx.jpg",
          },
        },
        {
          paragraph: {
            text: "这一点政府也心知肚明。一直说加拿大人负债高，债务/可支配收入比全球名列前茅，这也是严重的历史遗留问题。一旦由于“断炊”而形成系统性的财务危机，那么无论是商业、房地产业还是金融业都无法独善其身，一句话“问题大了”。            ",
          },
        },
        {
          paragraph: {
            text: "当然我们也要看到，发钱能延缓一些问题的发生，却无法从根本上解决问题。疫情发生后政府已经多次“撒钱”，频率之高前所未有。请看不完全统计：3月18日，杜鲁多宣布拨款820亿加元援助资金，帮助加拿大人在疫情期间购买基本生活用品、支付房租等。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006181005315GMoM.png",
          },
        },
        {
          paragraph: {
            text: " 4月1日， 杜鲁多宣布拨款20亿加元增购医疗物资。",
          },
        },
        {
          paragraph: {
            text: " 4月14日，杜鲁多宣布将分别向油气、汽车行业提供25亿和7.5亿加元贷款。",
          },
        },
        {
          paragraph: {
            text: " 4月17日，杜鲁多宣布拨款17亿加元帮助四省能源部门复苏。",
          },
        },
        {
          paragraph: {
            text: " 4月21日，杜鲁多宣布将投资3.5亿加元，通过慈善机构和非营利组织支持加拿大弱势群体。",
          },
        },
        {
          paragraph: {
            text: " 4月23日，杜鲁多宣布向大学生提供90亿加元紧急津贴。",
          },
        },
        {
          paragraph: {
            text: " 4月24日，杜鲁多宣布拨款11亿加元用于研制新冠疫苗。",
          },
        },
        {
          paragraph: {
            text: " 5月4日， 杜鲁多宣布向全球抗疫组织捐款8.5亿美元。",
          },
        },
        {
          paragraph: {
            text: " 5月5日， 杜鲁多宣布拨款2.5亿加元帮助农业和食品行业，另拨款4.7亿加元帮助海产行业应对疫情。",
          },
        },
        {
          paragraph: {
            text: " 5月8日， 杜鲁多宣布拨款40亿加元为重要、基本岗位上的一线工人加薪。",
          },
        },
        {
          paragraph: {
            text: " 6月1日， 杜鲁多宣布拨款42亿加元，用于资助全国基础设施建设。",
          },
        },
        {
          paragraph: {
            text: " 6月15日，杜鲁多宣布继续延长CERB福利时间，每人$2000。",
          },
        },
        {
          paragraph: {
            text: "如此巨大的支出给政府财政造成很大的压力，更关键的是由于很多人从3月下旬就开始失业到现在，由此推断明年政府在税收方面不会理想。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006181005316zZ6t.png",
          },
        },
        {
          paragraph: {
            text: "这么大的窟窿究竟该怎么补？没有人可以回答。            ",
          },
        },
        {
          paragraph: {
            text: "不过有一点是肯定的，明年各方面税费肯定要全面上调，可能中产阶层面临的压力不会比低收入者轻多少。            ",
          },
        },
      ],
    },
  },
  {
    id: 33,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "好消息！加拿大重开中国10个签证中心！",
      date: "2020-06-14",
      imageURL: "/images/article/1592159126761208.jpeg",
      previewText:
        "早前，由于疫情的影响，加拿大陆续关闭了世界各地的签证中心。据英文媒体CICNEWS今日（6月13日）报道，随着疫情的好转，联邦移民部决定于近日重开世界上23个签证中心。这意味着不在加拿大本地的人也将能够完成生物信…",
      content: [
        {
          paragraph: {
            text: "早前，由于疫情的影响，加拿大陆续关闭了世界各地的签证中心。据英文媒体CICNEWS今日（6月13日）报道，随着疫情的好转，联邦移民部决定于近日重开世界上23个签证中心。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1592153807418-1.jpg",
          },
        },
        {
          paragraph: {
            text: "这意味着不在加拿大本地的人也将能够完成生物信息采集，这对于他们申请学习签证、工作签证、旅游签证以及PR永久居留权至关重要！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1592153807418-2.jpg",
          },
        },
        {
          paragraph: {
            text: "其中，位于中国的10个城市已经确认重开签证中心（仅提供有限的服务），其中包括：北京、成都、重庆、广州、杭州、济南、昆明、南京、上海和沈阳 。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1592153807418-3.jpg",
          },
        },
        {
          paragraph: {
            text: "除此之外，重开签证中心的国家还包括奥地利、德国、希腊、日本、意大利、马来西亚、荷兰、以色列、伊拉克等国家。            ",
          },
        },
        {
          paragraph: {
            text: "加拿大移民部（IRCC）表示，他们正在采取措施，在签证中心重开后，也能保证工作人员和申请者的健康和安全。具体的措施包括，保持社交距离，呼吁大家注意手部卫生，并会限制签证中心的人数，增强清洁力度。            ",
          },
        },
        {
          paragraph: {
            text: "除此之外，还要求工作人员佩戴口罩、手套、面罩。工作人员和来访者都可能被要求接受提问检查，大楼里还会配备齐全的免洗洗手液。            ",
          },
        },
        {
          paragraph: {
            text: "旅行限制仍然有效！            ",
          },
        },
        {
          paragraph: {
            text: "按照原本的规定，加拿大的旅行限制将会一直持续至6月30日。目前，加拿大公民、永久居民及其直系亲属，即将在加拿大提供基本服务的工签持有者，以及3月18日前获得学习签证的学生均不受此措施的限制。除此之外，其他非加拿大居民的人，如果想要入境加拿大，必须要证明他们来加的必要原因。            ",
          },
        },
        {
          paragraph: {
            text: "所有前往加拿大的旅行者必须在抵达后隔离14天，并向加拿大边境服务局（CBSA）官员证明他们已经制定了非常充分且可行的隔离计划。            ",
          },
        },
        {
          paragraph: {
            text: "政府官网上显示，“尽管旅行限制依然存在，但在申请过程中完成进一步的步骤，例如在可能的情况下提供生物识别信息，将有助于加快出行限制的处理速度。”            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1592153807418-5.jpg",
          },
        },
        {
          paragraph: {
            text: "预计在旅行限制减少后，加拿大移民申请的激增会导致审理的延迟。            ",
          },
        },
        {
          paragraph: {
            text: "参考链接：https://www.cicnews.com/2020/06/visa-application-centres-starting-to-reopen-0614686.html#gs.7zejtr            ",
          },
        },
      ],
    },
  },
  {
    id: 34,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "解放须谨慎，卑诗家庭晚宴疫情！最少15人中招！",
      date: "2020-06-12",
      imageURL: "/images/article/1591942792177631.jpg",
      previewText:
        "就近日温哥华和维多利亚的反种族歧视示威活动，有数以千计的人参加，卑诗首席卫生官亨利（Bonnie Henry）指民众可以另一较安全的方法参与，她对于有大批民众聚集感失望。她并透露菲沙卫生区一家庭聚会的新冠病毒（CO…",
      content: [
        {
          paragraph: {
            text: "就近日温哥华和维多利亚的反种族歧视示威活动，有数以千计的人参加，卑诗首席卫生官亨利（Bonnie Henry）指民众可以另一较安全的方法参与，她对于有大批民众聚集感失望。她并透露菲沙卫生区一家庭聚会的新冠病毒（COVID-19）爆发，并呼吁以此为鉴。            ",
          },
        },
        {
          paragraph: {
            text: "就近期那些有大批民众聚集的示威，亨利说：“我很失望，因为我知道能以较少群众并非常有效方式去为这些重要的议题示威，我建议民众去寻找那些方法。”她表示一直与美国卫生当局联络，美国同样关注当地大型集会可引致新冠病毒感染数目激增。            ",
          },
        },
        {
          paragraph: {
            text: "她昨日并透露菲沙卫生区一宗爆发更多详情，望民众借鉴；那爆发是一个家庭晚宴的聚会，该家庭群组有约30人，但目前已最少有15人染疫，而该聚会的场地包括室内及户外。她说：“这是一个对我们所有人的警号。那不是有人故意地将它带到他们的社区或家人。”            ",
          },
        },
        {
          paragraph: {
            text: "卑诗暂没有出现与反种族示威有关的感染激增情况，但亨利说她也关注美国一些情况，如警察向示威人群发放催泪弹，这可能使病毒传播加剧。            ",
          },
        },
        {
          paragraph: {
            text: "卑诗50人限聚令仍生效，至于警察为何没有按令执法，亨利解释，对所有紧急状态下的令状，当局采取一贯以支援和教育的做法，她继续倡议以教育和民众合作的方式。亨利亦呼吁，筹划活动人士想办法以较小型的聚集去示威，从以减低传播风险。            ",
          },
        },
        {
          paragraph: {
            text: "亨利和卑诗卫生厅长狄德安（Adrian Dix）昨日亦发布疫情报告，指本省再出现9宗新确诊和一宗“有流行病学关连”病例，单日一共增加10例，卑诗病例迄今总数升至2669宗。            ",
          },
        },
        {
          paragraph: {
            text: "目前仍有183人尚未康复，当中16人需留医，包括4名患者留院深切治疗部。本省迄今痊愈的人数达2319人。            ",
          },
        },
        {
          paragraph: {
            text: "卑诗昨日没有新的染疫死亡个案，染疫死亡总数维持在167宗；本省已连续4天没有出现新死亡个案。            ",
          },
        },
        {
          paragraph: {
            text: "本省亦没有出现新的社区爆发或护理设施爆发；疫情尚未结束的长期护理院或支援生活设施数目为4间。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006101137217kB5V.jpg",
          },
        },
        {
          paragraph: {
            text: "卑诗公共卫生官员关注大型示威聚集的感染风险。图为温市数以千计民众6月5日进行和平示威。（加新社）            ",
          },
        },
        {
          paragraph: {
            text: "亨利说，虽然卑诗新病例数目在近期多周都属低，但世界各地和卑诗的新冠病毒大流行，距离结束仍很遥远。周一（8日）全球有约13.6万人获确诊，“全球病例数目继续上升，很多地区正面对个案回升的情况，周一正是全球单日新增个案最多的一天，对我们所有人而言，都令人担忧。”            ",
          },
        },
        {
          paragraph: {
            text: "卑诗的新增病例虽然较少，但加拿大和世界多个地方新冠病毒仍然是一个主要问题，“它将继续留在我们世界各地的社区中一段日子。”            ",
          },
        },
        {
          paragraph: {
            text: "就有消息指加美准备将“非必要”过境的禁令延至今年7月，亨利强调能够控制民众跨越边境的重要性。她表示要非常谨慎地去考虑容许游客到本地，她认为那应该是目前最后才需要做的事，“我们需聚焦在家庭、聚焦在必要服务工人和能够支援他们。”            ",
          },
        },
        {
          paragraph: {
            text: "列市设免下车验新冠中心            ",
          },
        },
        {
          paragraph: {
            text: "有病征者毋须医生转介            ",
          },
        },
        {
          paragraph: {
            text: "列治文中区新设的新冠病毒（COVID-19）筛检及测试中心将于今天（10日）开始启用，该个位于医院附近的新测试中心将取代医院现有同类设施，并且不需要医生转介，卫生局呼吁出现病征者可到中心接受测试。            ",
          },
        },
        {
          paragraph: {
            text: "温哥华沿岸卫生局（VCH）公布，新测试设施“列治文评估中心”（Richmond Assessment Centre，RAC）设于吉尔伯道（Gilbert Rd.）6820号，为列治文网球会的停车场。            ",
          },
        },
        {
          paragraph: {
            text: "列治文医院也位于吉尔伯道同一街角上，院内现有一个评估中心，新设施会取代医院那评估中心。RAC位距列治文医院以南约900米，由医院到中心驶车需约2分钟。            ",
          },
        },
        {
          paragraph: {
            text: "卑诗卫生厅长狄德安（Adrian Dix）表示，当本省正准备进入下一阶段时，列治文那新的免下车评估中心是重要的一步去加强应对。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020061011372184R4O.jpg",
          },
        },
        {
          paragraph: {
            text: "列治文的新测试中心启用。（李安迪摄）            ",
          },
        },
        {
          paragraph: {
            text: "RAC的开放时间为周一至周五，早上9时至下午3时，周末及公众假期由早上9时至中午12时。它为一个免下车（drive-through）评估中心，VCH指凡出现疑似新冠病毒病征的民众，即使征状轻微也可到RAC接受测试，并不用医护人员的转介；该中心以先到先得形式给民众进行检测。            ",
          },
        },
        {
          paragraph: {
            text: "VCH指，列治文和温沿岸卫生区内其他地方目前的感染水平属非常低，但随着列市及本省其他各处在复苏，及时确辨任何新病例是非常重要，而RAC将可有助抗疫。当局强烈建议，任何人曾与已知确诊或怀疑新冠病毒病例患者接触，都应接受测试。            ",
          },
        },
        {
          paragraph: {
            text: "凡出现病征的卑诗居民可到省内任何评估中心接受测试，而其他中心的地点可到卑诗疾病控制中心（BC Centre for Disease Control）网站查阅（www.bccdc.ca）。            ",
          },
        },
        {
          paragraph: {
            text: "感染新冠病毒的病征包括发烧、咳嗽、呼吸困难、喉咙痛、流鼻水、鼻塞、吞咽有痛楚、失去味觉、头痛、肌肉痛、疲倦或无胃口。            ",
          },
        },
        {
          paragraph: {
            text: "学者教光顾露天茶座防疫法            ",
          },
        },
        {
          paragraph: {
            text: "勿用枱上调味料及公共厕所            ",
          },
        },
        {
          paragraph: {
            text: "随着安省周五重启经济进入第二阶段，大多区以外餐厅酒吧的露天茶座亦将重新开放，有流行病学专家指出，市民外出用餐应需要注意一些事项，譬如不要用公共厕所，不要享用摆在枱上的调味酱料等，最重要是配上口罩。            ",
          },
        },
        {
          paragraph: {
            text: "多伦多市府上周四亦公布CafeTO计划，旨在将露台空间扩展到路边车道，以容纳桌子之间2米的距离。该计划要等到多伦多进入安省重启经济第二阶段才会生效。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006101137219v0C4.jpg",
          },
        },
        {
          paragraph: {
            text: "“任何户外活动都要比室内活动更安全。风险全在于当地疾病的发生率、距离、亲密性、通风和暴露时间。”渥太华大学流行病学家德奥兰登（Raywat Deonandan）说：“将室内和室外用餐进行比较，除了通风之外，所有这些变量都相同。”简而言之，在户外进餐将大大降低传播病毒飞沫的风险。在室内，不良的通风和空调系统会进一步传播颗粒。            ",
          },
        },
        {
          paragraph: {
            text: "德奥兰登指出，最近的一项研究表明，在一家餐厅用餐的食客因一位受感染的顾客而患病。他解释说：“大多数感染者都与空调系统有直接接触。通风系统可能是感染的驱动因素。此外，房间内的回收空气也会增加传播的机会。在户外，更大的通风可能有助于防止传染给身边人。”            ",
          },
        },
        {
          paragraph: {
            text: "德奥兰登建议人们尽可能戴上口罩。他还建议人们避免使用公共厕所，不要共用餐具、调味品或饮料。            ",
          },
        },
      ],
    },
  },
  {
    id: 35,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "重磅！加拿大可能在7月1日取消旅行限制重开边境",
      date: "2020-06-08",
      imageURL: "/images/article/1591506591571545.jpg",
      previewText:
        "日前，加拿大移民局（CIC）在其官网撰文指出：考虑到加拿大联邦政府最近采取的行动以及加拿大新冠病毒大流行曲线明显趋于平缓，有可能在7月1日对外国人开放！而本文所称的行动就是加拿大总理特鲁多在上周举行的记者…",
      content: [
        {
          paragraph: {
            text: "日前，加拿大移民局（CIC）在其官网撰文指出：考虑到加拿大联邦政府最近采取的行动以及加拿大新冠病毒大流行曲线明显趋于平缓，有可能在7月1日对外国人开放！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/659164_202006080727371WwLN.png",
          },
        },
        {
          paragraph: {
            text: " 而本文所称的行动就是加拿大总理特鲁多在上周举行的记者会上公开表示：",
          },
        },

        {
          paragraph: {
            text: " 1、加拿大正在考虑放宽旅行限制，即使是出于非必要的原因要进入加拿大。",
          },
        },

        {
          paragraph: {
            text: " 2、早日让加拿大公民和永久居民实现家庭团聚。",
          },
        },

        {
          paragraph: {
            text: " 特鲁多的讲话直接表明加拿大政府正在考虑重新开放边境，只是没有宣布时间表。",
          },
        },

        {
          paragraph: {
            text: " 而加拿大移民局官网上的这篇新闻直接把时间点暗示出来，如果没有大的意外出现，如果疫情没有重大反复，加拿大最早将于2020年7月1日重新开放边境，回到疫情发生之前的状态。",
          },
        },

        {
          paragraph: {
            text: " 根据加拿大移民局的文件，加拿大在2020年3月18日正式关闭边境，直接导致中国留学生、永久居民或者加拿大公民的中国籍家属、想去加拿大进行短期访问的游客和商务人士都被拒之门外。",
          },
        },

        {
          paragraph: {
            text: " 此举对控制疫情的帮助不言而喻，但也直接伤害了加拿大经济，所以当加拿大国内各地区相继重启，重新开放边境也自然进入议事日程。",
          },
        },

        {
          paragraph: {
            text: " 但说实话，这么快就要全面重开边境，还是超出很多人的预期，这对计划进入加拿大的各国民众来说是个好消息，对加拿大经济也是个好消息，但考虑到世界上还有很多国家的第二波疫情正在卷土重来，重新开放边境对加拿大来说也意味着高风险。",
          },
        },

        {
          paragraph: {
            text: " 移民局的文章非常清楚地的表示：",
          },
        },

        {
          paragraph: {
            text: " 1、加拿大欢迎更多的外国旅客进入加拿大，这将有助于刺激更多的经济活动。",
          },
        },

        {
          paragraph: {
            text: " 2、加拿大疫情曲线趋平，加拿大可以在疫情和开放之间取得平衡。",
          },
        },

        {
          paragraph: {
            text: " 3、重开边境之初，还将执行健康检查政策和强制14天自我隔离政策。",
          },
        },

        {
          paragraph: {
            text: " 加拿大移民局还表示，3月18日以来，加拿大仍在正常受理移民申请和留学申请。这是因为移民和留学生对加拿大经济的贡献重大，是重启经济不可或缺的力量。考虑到这一点，开放边境的时间也是越早越好。",
          },
        },

        {
          paragraph: {
            text: " 加拿大移民部长Marco Mendicino强调，欢迎更多人在7月1日之后进入加拿大，将有助于支持加拿大的经济复苏。",
          },
        },

        {
          paragraph: {
            text: " 根据加拿大移民局的数据，留学生每年为加拿大经济贡献近220亿加元，并提供17万个工作岗位。",
          },
        },

        {
          paragraph: {
            text: " 加拿大移民局还表示，封闭边境的时间越长，积压的签证申请就越多，考虑到舒缓移民系统压力的必要性，也应该尽早重开边境。",
          },
        },

        {
          paragraph: {
            text: " 黄三水说，如果加拿大在7月1日重开边境，则2020年秋季入学的留学生可以放心了，陪读的家属可以放心了，想趁着暑假探望亲人的可以放心了。就连他们这些卖房子的也感到心里更有底了。",
          },
        },

        {
          paragraph: {
            text: " 重启边境是重要的里程碑，意味着加拿大的生活秩序将重回正规。",
          },
        },
      ],
    },
  },
  {
    id: 36,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "列治文14天无新增，战胜疫情！BC详细数据公开！",
      date: "2020-06-08",
      imageURL: "/images/article/1591593906846556.png",
      previewText:
        "“华人是加拿大抗击疫情的模范标兵” —— 这句话，终于从“很有底气的猜测”，变为了结论！“City of Richmond fares well in BC’s disease fight”。《温哥华太阳报》用了这么一个标题，中文翻译是“列治文已经告…",
      content: [
        {
          paragraph: {
            text: "“华人是加拿大抗击疫情的模范标兵” —— 这句话，终于从“很有底气的猜测”，变为了结论！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144556J2P.png",
          },
        },
        {
          paragraph: {
            text: "“City of Richmond fares well in BC’s disease fight”。《温哥华太阳报》用了这么一个标题，中文翻译是“列治文已经告别了BC省疫情防控战。”            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006051714456w8J8.jpg",
          },
        },
        {
          paragraph: {
            text: "BC卫生厅在昨天下午的发布会上公布的模型显示：在过去的2个星期里，列治文没有出现新增病例！而从疫情开始至今，列治文总共只有88例。            ",
          },
        },
        {
          paragraph: {
            text: "每10万人确诊数字，列治文只有44，全大温最低！而隔壁的温哥华是83。看到这里，华人没有理由不自豪。列治文华人比例过半，是大温华人比例最高的城市，而感染率是最低的、也是率先取胜的。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006051714457eZ67.jpg",
          },
        },
        {
          paragraph: {
            text: "华人抗疫自称第二自觉，那谁敢称第一？尽管2周0增长不能说列治文已经永久告别新冠，但至少，所有列治文华人都能为自己骄傲、都是抗疫英雄。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006051714458Y66R.jpg",
          },
        },
        {
          paragraph: {
            text: "且不说什么大道理，就说一个很浅显、但很有说服力的事实：这两个月，小编从位于本拿比新西敏的家出发，去列治文或者去温西、西温多次，戴口罩的比例？列治文遥遥领先。            ",
          },
        },
        {
          paragraph: {
            text: "疫情期间，列治文的华人也好、大温的华人也好，因为口罩等等问题，被本地人当做异类、甚至遭到谩骂殴打，但华人抗疫的自律始终没有懈怠。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006051714459KP49.jpg",
          },
        },
        {
          paragraph: {
            text: "最终事实也证明：华人最多的地方，抗疫最成功。看到这里，那些认为华人小题大做的“老外们”，还有什么话可以说？            ",
          },
        },
        {
          paragraph: {
            text: "在评论区里，列治文的抗疫胜利也引起热议，本地网友也对华人心悦诚服：            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_20200605171445105vmh.png",
          },
        },
        {
          paragraph: {
            text: "“列治文在抗疫方面做的特别好，列治文以亚洲人为主，他们最愿意戴口罩，做的很对！”            ",
          },
        },
        {
          paragraph: {
            text: "“确实，但我觉得，亚洲人可能在社交距离方面保持的也足够好。”            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144511J866.png",
          },
        },
        {
          paragraph: {
            text: "“我猜因为大多数是华人，所以更健康？”            ",
          },
        },
        {
          paragraph: {
            text: "“因为在列治文，他们可以自由戴口罩，不被歧视。”            ",
          },
        },
        {
          paragraph: {
            text: "全体大温华人，都高度自律            ",
          },
        },
        {
          paragraph: {
            text: "华人比例很高的城市，不只是列治文，还包括温哥华、西温、本拿比、高贵林等等。这些地方的华人，自律程度也丝毫不落下风。整个大温华人社区，都在为抗疫“殚精竭虑”。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144512CM0u.jpg",
          },
        },
        {
          paragraph: {
            text: "如果你有印象的话，一定记得在加拿大疫情还不到10例时，华人就已经在微信群、论坛联名呼吁“任何返回加拿大的华人，请在家自觉隔离14天”。呼吁虽然不具备法律效应，但回到加拿大的华人，绝大部分都照做。            ",
          },
        },
        {
          paragraph: {
            text: "华人面对疫情不仅自律，还足够热心：不止一个大型微信群建立，为返回大温、在加隔离的华人提供买菜送菜服务，让他们能安心隔离、不至于生活不便；            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144513FZ7N.png",
          },
        },
        {
          paragraph: {
            text: "在面对“不守规矩”的同胞时，大温华人秉持0容忍态度。在2月上旬，一名华人回到白石镇后不仅不隔离，还公开表示“自己不隔离，要出去玩”。            ",
          },
        },
        {
          paragraph: {
            text: "自觉的华人们给出的答复是：曝光、转发、调查背景和住址、刨根究底。在加拿大的“价值观”里，这有些侵犯隐私，但这样的“侵犯”，为的正是大温、是加拿大的安全。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144514m7Zm.jpg",
          },
        },
        {
          paragraph: {
            text: "香港《南华早报》的一篇文章直言：大温的华人社区，对BC省疫情控制做出了杰出的贡献，华人的自觉自律和自我隔离，甚至配得上BC防疫的“首功之臣”这个称号。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_20200605171445150s19.png",
          },
        },
        {
          paragraph: {
            text: "《南华早报》在文章中表示：华人在BC的比例达到12%，并且BC最初的病例和华人输入有关，这让华人群体立刻意识到了疫情有可能在BC爆发，必须做好一切的防护工作。            ",
          },
        },
        {
          paragraph: {
            text: "曼尼托巴大学教授Kindrachuk也明确表示：“我们必须给BC的华人社区掌声，他们的反应比政府还要快，他们的表现是现象级的。”            ",
          },
        },
        {
          paragraph: {
            text: "一直“藏着掖着”的详细数据终于公布            ",
          },
        },
        {
          paragraph: {
            text: "在疫情的这4个月里，大家一直不解“为什么BC总不发布一些详细的数据，比如各城市病例数字等等”。在昨天的发布会上，一直藏着掖着的BC数据，终于公布。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144516V5Ov.jpg",
          },
        },
        {
          paragraph: {
            text: "首先是大家非常关心的：各个区域的确诊人数有多少？            ",
          },
        },
        {
          paragraph: {
            text: "温哥华市：540例、菲沙河南岸：523例；            ",
          },
        },
        {
          paragraph: {
            text: "菲沙河北岸：411例、菲沙河东岸：367例；            ",
          },
        },
        {
          paragraph: {
            text: "欧肯纳根：97例、温哥华岛南部：68例。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144517xy3J.png",
          },
        },
        {
          paragraph: {
            text: "BC省的新冠病例来源，主要来自5个区域：            ",
          },
        },
        {
          paragraph: {
            text: "中国、伊朗、欧洲；            ",
          },
        },
        {
          paragraph: {
            text: "加拿大东部、美国华盛顿州            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144518i8IH.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144519Bs2Q.png",
          },
        },
        {
          paragraph: {
            text: "通过图表可见，来自加拿大东部和欧洲的病例最多、持续的时间最长。显然，BC疫情的爆发，矛头绝对不能指向中国输入病例。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_20200605171445200tdd.png",
          },
        },
        {
          paragraph: {
            text: "这张图片比较有趣，显示的是各个区域的病例主要来自哪里。温哥华周边的病例主要来自华盛顿州、而菲沙河谷内陆的病例主要来自欧洲、加拿大东部。            ",
          },
        },
        {
          paragraph: {
            text: "BC省首席卫生官表示，列治文抗疫表现好的另一个原因是开始的最早：BC第一批新冠患者来自中国，而这些华人住在列治文的比例最高。开始的最早、防控的最好，自然结束的最早。            ",
          },
        },
        {
          paragraph: {
            text: "50~59岁的患者最多            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144521y7nx.png",
          },
        },
        {
          paragraph: {
            text: "通过这张图表可见，在BC所有的确诊病例中，50~59岁的病例最多，其次是30~39岁和40~49岁。这会令人稍感意外：30~39岁的壮年，居然是感染第二高的年龄段？            ",
          },
        },
        {
          paragraph: {
            text: "20岁以下的患者很少，总共只有77人。老年人因为防控工作做的更好，所以感染人数不高，但因为身体抵抗力弱，所以死亡率最高。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144522AxJ0.png",
          },
        },
        {
          paragraph: {
            text: "这张图表是各年龄段住院、重症、死亡状况。很显然，60岁以上的人，这三个比例都远高于青壮年。在BC，并没有任何一位30岁以下的病例死亡。            ",
          },
        },
        {
          paragraph: {
            text: "尽管1月份，BC就有首例新冠病例，但第一例死亡发生在3月9日的Lynn Valley养老院。至今，这座北温的养老院已经有20人不幸死于新冠。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144523Csuu.png",
          },
        },
        {
          paragraph: {
            text: "男女比例方面，在住院、在ICU、死亡的男性都明显高于女性。            ",
          },
        },
        {
          paragraph: {
            text: "“BC省的表现很好”            ",
          },
        },
        {
          paragraph: {
            text: "在介绍完数据后，BC省首席卫生官Dr Bonnie Henry总结道：总体来看，BC省的表现很好，我们采取的一系列措施发挥了作用、逐步放宽限制的计划也奏效。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144524AI4A.png",
          },
        },
        {
          paragraph: {
            text: "“但要保持曲线继续平稳，我们依然不能加快步伐，必须慎重”。Henry呼吁公众，生病时依然要留在家中、依然要少接触人、不进行集会。战役没有结束，但我们越来越接近胜利。            ",
          },
        },
        {
          paragraph: {
            text: "这次数据公布，信息量很大，让大家能更详细地了解BC的疫情发展、疫情状况。不过对华人而言，唯一的重点很明确：            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060517144525oN3u.png",
          },
        },
        {
          paragraph: {
            text: "列治文赢了，华人是首功之臣！我们都该为自己点个赞。            ",
          },
        },
      ],
    },
  },
  {
    id: 37,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "关于继续协助少数确有严重困难留学人员搭乘临时航班回国的预告",
      date: "2020-06-08",
      imageURL: "/images/article/1589495438205424.png",
      previewText:
        "按照国内统一部署，驻加拿大使领馆今年5月安排4架临时航班，顺利协助一批确有严重困难的留学人员回国。鉴于目前仍有少数面临严重困难的留学人员急需回国，国内有关部门正积极考虑采取有序方式安排来加临时航班。现就…",
      content: [
        {
          paragraph: {
            text: "按照国内统一部署，驻加拿大使领馆今年5月安排4架临时航班，顺利协助一批确有严重困难的留学人员回国。鉴于目前仍有少数面临严重困难的留学人员急需回国，国内有关部门正积极考虑采取有序方式安排来加临时航班。现就有关事项预告如下：",
          },
        },

        {
          paragraph: {
            text: "    一、特别提醒",
          },
        },

        {
          paragraph: {
            text: "居家防护、减少流动是疫情期间最安全的自我保护方式。机舱空间密闭、人员密集、旅途漫长，交叉感染风险极大，如无特别紧急需要，建议避免急于回国。有关安排仅为协助少数确有严重困难留学人员，希望大家理解。",
          },
        },

        {
          paragraph: {
            text: "二、条件和要求",
          },
        },

        {
          paragraph: {
            text: "（一）今年高校毕业且因签证已经或即将到期等确有困难急需回国的留学生。",
          },
        },

        {
          paragraph: {
            text: "（二）年龄未满18周岁（以登记日期为准）、父母均未陪伴在旁，确有困难急需回国的未成年留学生。",
          },
        },

        {
          paragraph: {
            text: "（三）其他确有严重困难的留学人员。",
          },
        },

        {
          paragraph: {
            text: "（四）临时航班机票和回国隔离费用自理。机票价格由航空公司按商业模式合理确定。放弃购票或退票，将丧失再次购票机会，并自行承担损失。",
          },
        },

        {
          paragraph: {
            text: "（五）乘机人须自行前往航班起飞地机场，乘机人自行承担回国过程中的各种可能风险，并自觉接受乘机过程中及入境后的各项防疫安排。未成年留学人员需要独自乘机，在加监护人不能同机随行。购票即视为同意。",
          },
        },

        {
          paragraph: {
            text: "（六）为确保公共健康安全，确诊、疑似病例、近14天内有发烧、咳嗽症状者、与新冠肺炎密切接触者，务请不要预订和乘坐航班。如登机前体温超过37.3度（含）或出现疑似症状，将被航空公司拒绝登机。",
          },
        },

        {
          paragraph: {
            text: "（七）拟搭乘临时航班回国人员需提前通过防疫健康码国际版微信小程序（http://ca.chineseembassy.org/chn/sggg/t1767031.htm），逐日连续填报个人资料、健康状况、近期出行情况等信息。",
          },
        },

        {
          paragraph: {
            text: "（八）航班入境口岸将进行严格检疫检测，一旦发现有隐瞒病情和接触史或在检疫检测中发现曾服用退烧药等抑制类药物的旅客，将以涉嫌危害公共安全罪被追究法律责任。",
          },
        },

        {
          paragraph: {
            text: "（九）未成年留学人员的父母或监护人须按有关地方政府要求到指定地点等候或陪同未成年子女接受14天集中隔离医学观察。请有关监护人按照要求，及时到位。",
          },
        },

        {
          paragraph: {
            text: "    驻加拿大使馆将于近日发布正式通知，敬请随时留意我馆官方网站公告栏（http://ca.chineseembassy.org/chn/sggg/）和微信公众号，并提前做好支付宝二维码扫描登记报名和健康码连续填报等相关准备。使馆将根据登记人员困难程度确定呼叫购票人员名单，由航空公司按顺序呼叫购票。",
          },
        },

        {
          paragraph: {
            text: " 驻加拿大使领馆咨询电话:",
          },
        },

        {
          paragraph: {
            text: "    +1-613-7833561(驻加拿大使馆涉临时航班咨询热线)",
          },
        },

        {
          paragraph: {
            text: "    +1-613-7833569(驻加拿大使馆涉临时航班咨询热线)",
          },
        },

        {
          paragraph: {
            text: "+1-613-5621616(驻加拿大使馆领事保护与协助电话)",
          },
        },

        {
          paragraph: {
            text: "+1-249-8749071(驻多伦多总领馆涉临时航班咨询热线)",
          },
        },

        {
          paragraph: {
            text: "+1-416-5942308(驻多伦多总领馆领事保护与协助电话)",
          },
        },

        {
          paragraph: {
            text: "+1-236-9880229(驻温哥华总领馆涉临时航班咨询热线)",
          },
        },

        {
          paragraph: {
            text: "+1-604-3369926(驻温哥华总领馆领事保护与协助电话)",
          },
        },

        {
          paragraph: {
            text: "+1-403-5376911(驻卡尔加里总领馆涉临时航班咨询热线)",
          },
        },

        {
          paragraph: {
            text: "+1-403-5376907(驻卡尔加里总领馆领事保护与协助电话)",
          },
        },

        {
          paragraph: {
            text: "+1-514-2418930(驻蒙特利尔总领馆涉临时航班咨询热线)",
          },
        },

        {
          paragraph: {
            text: "+1-514-9338891(驻蒙特利尔总领馆领事保护与协助电话)",
          },
        },

        {
          paragraph: {
            text: "驻加拿大使馆涉临时航班咨询邮箱：cnedu.ca@hotmail.com",
          },
        },

        {
          paragraph: {
            text: "驻多伦多总领馆涉临时航班咨询邮箱:tftcc20@gmail.com",
          },
        },

        {
          paragraph: {
            text: "驻卡尔加里总领馆涉临时航班咨询邮箱:consularaccess@chinaconsulatecalgary.com",
          },
        },
      ],
    },
  },
  {
    id: 38,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "别说你不会广交会直播了！收齐7份参展指引吧",
      date: "2020-06-07",
      imageURL: "/images/article/1591507165214312.png",
      previewText:
        "5月23日，在中央广播电视总台《两会你我他》特别节目中，商务部外贸司副司长张力介绍，广交会网站已全新改版，已有2万家参展企业上传了超过一百万件展品。截至6月1日，广交会发布了七份参展指引。   …",
      content: [
        {
          paragraph: {
            text: " 5月23日，在中央广播电视总台《两会你我他》特别节目中，商务部外贸司副司长张力介绍，广交会网站已全新改版，已有2万家参展企业上传了超过一百万件展品。截至6月1日，广交会发布了七份参展指引。",
          },
        },

        {
          paragraph: {
            text: "        同时，本届广交会不向企业收取参展费用，也不向参与同步活动的跨境电商平台收取任何费用。",
          },
        },

        {
          paragraph: {
            text: "        接下来，我们一起来看一下七份参展指引吧！",
          },
        },

        {
          paragraph: {
            text: " 参展指引•之一",
          },
        },

        {
          paragraph: {
            text: "        本份指引主要包含广交会网上举办的具体形式、上传企业信息和展品信息的具体要求以及参展培训和其他提示。",
          },
        },

        {
          paragraph: {
            text: "        广交会网上举办的具体形式",
          },
        },

        {
          paragraph: {
            text: "        在广交会官网建立全面的线上展示对接平台，已获得本届广交会展位安排的参展企业，全部上线展示，按所在展区线上参展。平台提供全天候网上推介、供采对接、在线洽谈等功能，主要包括线上展示对接平台、直播营销、供采对接、第三方平台同步活动。",
          },
        },

        {
          paragraph: {
            text: "        上传企业信息和展品信息的具体要求",
          },
        },

        {
          paragraph: {
            text: "        1.时间要求：5月25日前完成全部信息上传。",
          },
        },

        {
          paragraph: {
            text: "        2.技术规范：根据平台开发进度，目前先提供部分上传素材规格参数，大会将在后续参展指引继续补充。",
          },
        },

        {
          paragraph: {
            text: "        3.数量要求：每家企业在每个参展展区至少上传10个具有代表性的产品；获得1个以上展位的企业，每增加1个展位需增加上传5个产品；至少上传1个视频展示文件。上传展品数量不设上限；上传项目不少于下限要求。",
          },
        },

        {
          paragraph: {
            text: "        链接：第127届广交会网上举办参展指引•之一",
          },
        },

        {
          paragraph: {
            text: " 参展指引•之二",
          },
        },

        {
          paragraph: {
            text: "        本份指引主要包括云展厅管理、账号管理、企业信息、展品管理等。",
          },
        },

        {
          paragraph: {
            text: "        如何登陆云展厅管理平台？",
          },
        },

        {
          paragraph: {
            text: "        1.打开网址：http://mybooth.cantonfair.org.cn",
          },
        },

        {
          paragraph: {
            text: "        2.填写原参展易捷通系统账号、密码，完成登录",
          },
        },

        {
          paragraph: {
            text: "        *请妥善保管账号和密码，避免信息泄露",
          },
        },

        {
          paragraph: {
            text: "        如何进行展品管理？",
          },
        },

        {
          paragraph: {
            text: "        展品是参展商用于企业展示中心进行展示的产品。展品资料上传是最基本、最核心的工作，直接关系到网上展示、供采对接的效果，请参展商务必重视。",
          },
        },

        {
          paragraph: {
            text: "        重要提醒：知识产权保护",
          },
        },

        {
          paragraph: {
            text: "        参展商要始终保持知识产权防范意识，确保相关产品不能侵犯他人的知识产权或其他合法在先权利。",
          },
        },

        {
          paragraph: {
            text: "        链接：第127届广交会网上举办参展指引•之二",
          },
        },

        {
          paragraph: {
            text: " 参展指引•之三",
          },
        },

        {
          paragraph: {
            text: "        本份指引主要回答了参展企业近期普遍关心的热点问题，包括网上平台使用、信息上传及直播功能等操作事宜。",
          },
        },

        {
          paragraph: {
            text: "        以下是一些精选问答：",
          },
        },

        {
          paragraph: {
            text: "        链接：第127届广交会网上举办参展指引•之三",
          },
        },

        {
          paragraph: {
            text: " 参展指引•之四",
          },
        },

        {
          paragraph: {
            text: "        此份指引以视频形式发布，是由中国对外贸易中心主办、腾讯协办的第127届广交会网上举办参展商培训会内容，主要包括平台功能整体介绍、平台账号管理和展品信息上传操作讲解、平台重点功能预告（企业直播间等）以及交流互动环节。",
          },
        },

        {
          paragraph: {
            text: "        链接：第127届广交会网上举办参展指引·之四",
          },
        },

        {
          paragraph: {
            text: " 参展指引•之五",
          },
        },

        {
          paragraph: {
            text: "        本份指引主要回答了如何提升广交会参展商直播营销效果这个问题，需要明确直播营销理念，做好直播前、中、后全流程直播营销。",
          },
        },

        {
          paragraph: {
            text: "        明确直播营销理念",
          },
        },

        {
          paragraph: {
            text: "        广交会参展商直播营销≠直播带货",
          },
        },

        {
          paragraph: {
            text: "        广交会参展商直播营销的主要受众是B（企业）端客户，与普通的直播带货主要面向终端消费者不同。参展企业应充分利用直播间背靠广交会品牌的优势，针对B（企业）端客户特别是外贸行业客户特点，打造具有特色的直播间。",
          },
        },

        {
          paragraph: {
            text: "        做好直播前、中、后全流程直播营销",
          },
        },

        {
          paragraph: {
            text: "        链接：第127届广交会网上举办参展指引•之五",
          },
        },

        {
          paragraph: {
            text: " 参展指引•之六",
          },
        },

        {
          paragraph: {
            text: "        此份指引内容为广交会参展商直播操作指南，包含如何创建直播间、如何完成一场直播、如何进行直播管理三个方面。",
          },
        },
        {
          link: {
            linkURL:
              "https://mp.weixin.qq.com/s?__biz=MzU5NDk2Njc4Mg==&mid=2247492910&idx=1&sn=3f4c8ff4801b1915fea86aa6c0c92dd7&scene=21#wechat_redirect",
            linkText: "链接：第127届广交会网上举办参展指引•之六",
          },
        },

        {
          paragraph: {
            text: " 参展指引•之七",
          },
        },

        {
          paragraph: {
            text: "        此份指引内容回答了参展企业在筹备工作阶段普遍关心的热点问题，包括云展厅管理系统操作实际等。",
          },
        },

        {
          paragraph: {
            text: "        以下为精选问答：",
          },
        },

        {
          paragraph: {
            text: "        1. 企业可在展品列表页进行展品复制操作。系统将定期对恶意过量（10个以上）复制的展品进行扫描并隔离，请根据实际需要使用复制功能。",
          },
        },

        {
          paragraph: {
            text: "        2. 不是，子账号分为①业务子账号、②客服子账号、③业务及客服等三类子账号。",
          },
        },

        {
          paragraph: {
            text: "        3. 目前邮箱验证码发至国内邮箱是极速的，发至国外邮箱时间较长。如企业邮箱长时间未收到验证码，可能是因为企业的管理员将此类型邮件设置屏蔽，可以让企业邮箱管理员在后台修改屏蔽范围。",
          },
        },

        {
          paragraph: {
            text: "        4. 处于预告状态的直播间，可以修改直播标题、直播简介、海报、直播间关联展区，不能修改开播时间和结束时间。",
          },
        },

        {
          paragraph: {
            text: "        5. 云展厅管理系统中企业和展品信息可以填写其他语种，但其他语种在展示页面可能无法显示，建议使用中英文。",
          },
        },
      ],
    },
  },
  {
    id: 39,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "民航局出台国际航班管控新策 增加奖励和熔断措施",
      date: "2020-06-07",
      imageURL: "/images/article/1591506591571545.jpg",
      previewText:
        "为继续做好疫情防控工作，同时便利国际人员往来，6月4日早间中国民航局发布通知对国际客运航班数量进行调整，更多外国航空公司可以在“五个一”的大原则下飞中国，但需要落地城市的“接收函”。同时增加奖励和熔断措…",
      content: [
        {
          paragraph: {
            text: "为继续做好疫情防控工作，同时便利国际人员往来，6月4日早间中国民航局发布通知对国际客运航班数量进行调整，更多外国航空公司可以在“五个一”的大原则下飞中国，但需要落地城市的“接收函”。同时增加奖励和熔断措施，国际航班的增减与入境落地后旅客核酸检测阳性数量挂钩。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591506766120926.png",
          },
        },
        {
          paragraph: {
            text: " 计划内航班 按既定计划执行",
          },
        },

        {
          paragraph: {
            text: " 已列入民航局3月12日官网发布的“国际航班信息发布（第5期）”航班计划的中外航空公司可以上述航班计划为基准，继续按照以下原则执行自/至中国的国际客运航班：",
          },
        },

        {
          paragraph: {
            text: " 国内每家航空公司经营至任一国家的航线只能保留1条，每条航线每周运营班次不得超过1班；",
          },
        },

        {
          paragraph: {
            text: " 外国每家航空公司经营至我国的航线只能保留1条，每周运营班次不得超过1班；",
          },
        },

        {
          paragraph: {
            text: " 上述航线航班可在本公司经营许可范围内调整境内外航点。",
          },
        },

        {
          paragraph: {
            text: " 计划外航班 适度增加航班数量",
          },
        },

        {
          paragraph: {
            text: " 6月8日起，所有未列入“第5期”航班计划的外国航空公司，可在本公司经营许可范围内，选择1个具备接收能力的口岸城市（具体城市名单可在民航局官网查询），每周运营1班国际客运航线航班。",
          },
        },

        {
          paragraph: {
            text: " 各航空公司由于受疫情影响调减航班涉及的航线经营许可和起降时刻继续予以保留。",
          },
        },

        {
          paragraph: {
            text: " 航班“熔断”和奖励措施",
          },
        },

        {
          paragraph: {
            text: " 自6月8日起实施航班奖励和熔断措施。这一机制由民航局、外交部、国家卫健委、海关总署、移民局等共同建立，以入境航班落地后旅客核酸检测结果为依据。",
          },
        },

        {
          paragraph: {
            text: " 奖励措施：航空公司同一航线航班，入境后核酸检测结果为阳性的旅客人数连续3周为零的，可在航线经营许可规定的航班量范围内增加每周1班，最多达到每周2班。",
          },
        },

        {
          paragraph: {
            text: " “熔断”措施：航空公司同一航线航班，入境后核酸检测结果为阳性的旅客人数达到5个的，暂停该公司该航线运行1周；达到10个的，暂停该公司该航线运行4周。“熔断”的航班量不得调整用于其他航线。“熔断”期结束后，航空公司方可恢复每周1班航班计划。",
          },
        },

        {
          paragraph: {
            text: " 在风险可控并具备接收保障能力的前提下，可适度增加部分具备条件国家的航班增幅。",
          },
        },

        {
          paragraph: {
            text: " 新增航线 需落地城市“接收函”",
          },
        },

        {
          paragraph: {
            text: " 为防止航班入境地点过于集中，确保口岸城市具备相应的国际航班和旅客接收的综合保障能力，各航空公司在安排新增航线航班前，应取得由口岸机场所在地省级联防联控机制办公室或应对疫情工作领导小组办公室出具的《疫情防控保障能力确认函》。",
          },
        },
      ],
    },
  },
  {
    id: 40,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "加拿大宣布强制口罩令新规！即将迎来全民戴口罩",
      date: "2020-06-05",
      imageURL: "/images/article/1591393148598954.jpg",
      previewText:
        "加拿大确诊病例即将破10万大关！截至发稿时间，5月4日加拿大共确诊93,726例，治愈51,739例，死亡7,637例。据CTV报道，根据加拿大卫生部刚刚发布的最新短期预测模型，截至到6月15日，加拿大将累计有97,990至107,454确…",
      content: [
        {
          paragraph: {
            text: "加拿大确诊病例即将破10万大关！            ",
          },
        },
        {
          paragraph: {
            text: "截至发稿时间，5月4日加拿大共确诊93,726例，治愈51,739例，死亡7,637例。            ",
          },
        },
        {
          paragraph: {
            text: "据CTV报道，根据加拿大卫生部刚刚发布的最新短期预测模型，截至到6月15日，加拿大将累计有97,990至107,454确诊病例，以及7,700至9,400例死亡。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006050658012FQq7.jpg",
          },
        },
        {
          paragraph: {
            text: "总理特鲁多表示，全国各年龄段和大部分地区的疫情曲线已经放缓，但是现在还不是能放松警惕的时候。            ",
          },
        },
        {
          paragraph: {
            text: "针对卫生部发布的疫情数据，特鲁多对一些地区大量新增病例，以及加拿大长期护理院疫情严重表示担忧，新冠疫情情况仍然很严重。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006050658013q1jM.png",
          },
        },
        {
          paragraph: {
            text: "特别是安省和魁省仍然是加拿大的重灾区，在过去半个月时间里，这两省的确诊病例占了全国病例总数的90%以上。",
          },
        },

        {
          paragraph: {
            text: "所以革命尚未成功，大家仍需努力！",
          },
        },

        {
          paragraph: {
            text: "加拿大强制口罩令出台",
          },
        },

        {
          paragraph: {
            text: "魁省强制要求戴口罩",
          },
        },

        {
          paragraph: {
            text: "加拿大疫情发展至今，各个省政府都一直强调“建议”大家出行戴口罩、保持社交距离。",
          },
        },

        {
          paragraph: {
            text: "虽然大部分人都慢慢重视起来戴口罩，但走在街上还是会看到很多人并没有做好防护措施甚至没有戴口罩。",
          },
        },

        {
          paragraph: {
            text: "但随着复工复业如火如荼的开展起来，不少地方开始强制人们戴口罩！",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006050658014eXV1.png",
          },
        },
        {
          paragraph: {
            text: "在不久前，作为加拿大目前疫情最严重的城市蒙特利尔，该城市的一个自治区Cote St-Luc成为加拿大第一个“强制”进入商店或城市建筑的人戴口罩的地区！            ",
          },
        },
        {
          paragraph: {
            text: "Cote St-Luc直接下令市民进入商店或市政建筑时必须戴口罩，否则将面临最高$500的罚款。            ",
          },
        },
        {
          paragraph: {
            text: "其市长Mitchell Brownstein表示，委员会本周一已经通过这项法规，各个企业有两周的时间来遵守，对所有违反规章制度的企业和个人将予以100到500元不等的罚款。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006050658015WBbP.png",
          },
        },
        {
          paragraph: {
            text: " Brownstein还表示经过调查全加拿大各地的情况，没有发现其他省强制要求人们戴口罩的举动，所以希望加拿大其他省可以效仿Cote St-Luc。",
          },
        },

        {
          paragraph: {
            text: " 不过目前在魁北克省也只是强烈建议人们戴口罩而不是强制要求戴口罩。",
          },
        },

        {
          paragraph: {
            text: " 魁省市长Francois Legault也经常督促市民们在无法与人保持两米距离的情况下戴口罩。",
          },
        },

        {
          paragraph: {
            text: " 安省强制要求戴口罩",
          },
        },

        {
          paragraph: {
            text: " 大多伦多地区疫情较严重的Brampton市长Patrick Brown周三宣布，从7月初开始，该市将强制人们在公交上戴上口罩或面罩。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006050658016uCUn.png",
          },
        },
        {
          paragraph: {
            text: "Brown解释说：“我们有很多人乘坐公共交通工具前往从事基本工作，包括从事食品加工，实验室等工作，我想采取一切可能的预防措施，我们要确保这些乘客和司机的安全，我们已经有五名司机确诊了。”            ",
          },
        },
        {
          paragraph: {
            text: "此外，渥太华交通运输委员会投票决定从6月15日起强制在公共交通中戴口罩，但也表示不会禁止没有戴口罩的人上车。            ",
          },
        },
        {
          paragraph: {
            text: "多伦多公车局（TTC）和密西沙加市也强烈建议在公交上戴口罩，但不是强制性的。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006050658017Vfqf.png",
          },
        },
        {
          paragraph: {
            text: "加拿大联邦运输部强制口罩令扩大            ",
          },
        },
        {
          paragraph: {
            text: "加拿大联邦运输部长加诺（Marc Garneau）周三宣布口罩新规，为了减少新冠病毒的传播，所有乘坐飞机、火车及轮船的人都必须戴上口罩或面罩，新措施从6月4日中午起生效。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060506580181rqs.jpg",
          },
        },
        {
          paragraph: {
            text: "加拿大各航空公司在现有规定所有乘客必须戴口罩或面罩以外，机组人员和机场工作人员也必须戴上非医用口罩。            ",
          },
        },
        {
          paragraph: {
            text: "此外，火车、海运、以及卡车、大巴等陆路运输中所有工作人员必须戴上口罩，并且在无法保持与他人2米远的距离时，所有乘客必须要求戴口罩。            ",
          },
        },
        {
          paragraph: {
            text: "加诺表示，确保运输行业工人和旅行人士的安全，是运输部的首要任务，在无法保持社交距离的情况下使用面罩或口罩可以限制病毒传播。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202006050658019or2Y.jpg",
          },
        },
        {
          paragraph: {
            text: " 对于戴口罩一事，特鲁多总理也一再强调，随着更多企业和员工复工，大家走出家门，保持距离和戴口罩非常重要！",
          },
        },

        {
          paragraph: {
            text: " 卫生官员：为第二波疫情做好准备",
          },
        },

        {
          paragraph: {
            text: " 加拿大首席公共卫生官员谭咏诗医生今天表示，尽管加拿大在抗击疫情方面取得了不错的进展，但在疫苗出现或是更好的治疗方法之前。",
          },
        },

        {
          paragraph: {
            text: " 仍需要大家的不断努力，否则加拿大可能会面临严重的第二波疫情高峰。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060506580110zzJx.png",
          },
        },
        {
          paragraph: {
            text: " 根据最新的预测模型显示，如果在允许更大规模聚会，允许学校重开学生返校，以及允许企业在不采取任何措施的情况下重新开业，",
          },
        },

        {
          paragraph: {
            text: " 这极有可能导致新冠疫情在加拿大反弹！",
          },
        },

        {
          paragraph: {
            text: " 预测模型显示，如果预防扩散措施不足，加拿大可能在10月份再创高峰！",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020060506580111iPWf.png",
          },
        },
        {
          paragraph: {
            text: "而继续采取其它关键措施也很重要，包括及时发现病例并进行隔离，对接触者的追踪以及隔离已经确诊的患者，还有加强管理，严防从国外带来感染者的风险。            ",
          },
        },
      ],
    },
  },
  {
    id: 41,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "联邦拨款140亿，帮助经济重启防止二次疫情！",
      date: "2020-06-05",
      imageURL: "/images/article/1587578770165738.jpg",
      previewText:
        "根据Dailyhive和CP24联合报道，总理贾斯汀·杜鲁多（Justin Trudeau）表示，在COVID-19疫情期间，联邦政府准备向各省和地区投入140亿加元，以安全地重启经济。他说，这笔钱将用于确保企业在复工时能够给员工提供个人…",
      content: [
        {
          paragraph: {
            text: " 根据Dailyhive和CP24联合报道，总理贾斯汀·杜鲁多（Justin Trudeau）表示，在COVID-19疫情期间，联邦政府准备向各省和地区投入140亿加元，以安全地重启经济。",
          },
        },

        {
          paragraph: {
            text: " 他说，这笔钱将用于确保企业在复工时能够给员工提供个人防护设备（PPE），支持10日带薪病假等等。",
          },
        },

        {
          paragraph: {
            text: " 杜鲁多表示相关细节，包括如何给各省分配，将在未来几天内进行谈判，但联邦官员希望尽快达成协议，以使资金快速流转。杜鲁多提议将资金转移给省和地区政府，前提是他们同意将资金用于联邦政府认为必要的领域，例如降低疫情第二次爆发的风险。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/659164_202006051111371CAGg.jpg",
          },
        },
        {
          paragraph: {
            text: " 图源：CP24",
          },
        },

        {
          paragraph: {
            text: " 必要领域还包括病毒测试，接触者追踪，购买个人防护设备，加强市政建设，加强医疗保健系统，可能还包括改善长期护理院的条件。迄今为止，加拿大80％以上的死亡病例与之相关。",
          },
        },

        {
          paragraph: {
            text: " 加拿大市政当局联合会估计，全国各地疫情较严重的社区总计需要100亿至150亿加元来弥补损失。在疫情开始时，联邦政府将向各省和地区的医疗保健增加了5亿加元的资助。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/659164_2020060511114019gqd.jpg",
          },
        },
        {
          paragraph: {
            text: " 图源：Dailyhive",
          },
        },

        {
          paragraph: {
            text: " 尽管总理杜鲁多向各省和地区提供了更多的资金，但一些省长对总理杜鲁多规定他们如何使用这笔资金，而不是可以自行决定表示不满。",
          },
        },

        {
          paragraph: {
            text: " 在星期五的新闻发布会上，杜鲁多还宣布了对残疾人的经济援助。新的援助将一次性免税发放，最高限额为600加元。政府正在新增遍及全国的工作岗位，以为残疾人找到工作并创造就业机会。同时，政府并正在资助五个项目，以帮助残疾人来克服工作障碍。",
          },
        },

        {
          paragraph: {
            text: " 在疫情之前，他们已经难以支付生活费用。疫情导致许多残疾人不聘请家庭护理，并且需要支付杂货和其他物品的配送费，还需要为了购买药品支付更高额费用。",
          },
        },
      ],
    },
  },
  {
    id: 42,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "温哥华的学生们以一种有趣的方式重建多幅著名艺术作品",
      date: "2020-06-02",
      imageURL: "/images/article/1591139061434239.jpeg",
      previewText:
        "温哥华-威斯敏斯特新小学的一位老师要求她的学生们进入内心的雷诺阿河和艾米丽·卡尔斯（Emily Carrs），但他们的材料不是毛笔和画笔，而是毛绒动物，乐高和玩偶。Connaught Heights小学的Montesorri小学三年级和四…",
      content: [
        {
          paragraph: {
            text: "温哥华-威斯敏斯特新小学的一位老师要求她的学生们进入内心的雷诺阿河和艾米丽·卡尔斯（Emily Carrs），但他们的材料不是毛笔和画笔，而是毛绒动物，乐高和玩偶。            ",
          },
        },
        {
          paragraph: {
            text: "Connaught Heights小学的Montesorri小学三年级和四年级老师Sara Fox已指派她的学生使用他们的玩具重制著名的艺术品。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591139822863098.jpeg",
          },
        },
        {
          paragraph: {
            text: "由于COVID-19大流行，福克斯被迫接受在线教育，但是她的学生的常规美术老师无法继续他们的课程，因为他们被要求指导基本工人的孩子们。因此，福克斯（Fox）发挥了自己的创造力，以保持教学的进行，并让她的学生利用他们的想象力，将自己的想法摆在经典艺术品上。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591139839959235.jpg",
          },
        },
        {
          paragraph: {
            text: "达·芬奇（Leonardo da Vinci）的《最后的晚餐》由福克斯的学生奥黛丽（Audrey）重新构想，他用塑料杯形蛋糕，香蕉和胖胖的填充动物（包括圆形浣熊和长颈鹿）代替了原作中的酒，碟子和使徒杯。她将自己的作品命名为《南瓜味晚餐》。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591139558785183.jpeg",
          },
        },
        {
          paragraph: {
            text: "学生安吉丽卡（Angelica）用紫色和灰色填充动物重制了标志性的1930年格兰特伍德画作《美国哥特式》。 在她的版本中，她命名为Stuffie Gothic，用叉子代替了原来的无处不在的干草叉。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591139590882369.jpg",
          },
        },
        {
          paragraph: {
            text: "在Kai的“狗狗玩扑克”版本中，原始绘画中的扑克筹码被替换为薯片，桌子周围的狗狗扑克牌为毛绒。 几瓶迷你酸奶代替啤酒和威士忌，墙上的钟与原钟一样挂在同一地方。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591139605136005.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591139649862971.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591139650216210.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591139652725310.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1591139652329479.jpeg",
          },
        },
      ],
    },
  },
  // {
  //   id: 43,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "加拿大新闻",
  //   subDirectory: "/info/canada",
  //   article: {
  //     title: "习近平寄语广大少年儿童 致以六一节日祝贺",
  //     date: "2020-05-31",
  //     imageURL: "/images/article/1590962935700399.jpg",
  //     previewText:
  //       "习近平寄语广大少年儿童强调      刻苦学习知识坚定理想信念磨练坚强意志锻炼强健体魄      为实现中华民族伟大复兴的中国梦时刻准备着      向…",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "习近平寄语广大少年儿童强调",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "刻苦学习知识坚定理想信念磨练坚强意志锻炼强健体魄",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "为实现中华民族伟大复兴的中国梦时刻准备着",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "向全国各族少年儿童致以节日的祝贺",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/1590962948742954.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: " 在“六一”国际儿童节到来之际，中共中央总书记、国家主席、中央军委主席习近平代表党中央，向全国各族少年儿童致以节日的祝贺！",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: " 习近平指出，在这次全国人民万众一心抗击新冠肺炎疫情的斗争中，广大少年儿童也经历了一段特殊时期，不仅亲眼目睹了中国人民众志成城、迎难而上的伟大壮举，而且听从党和政府号召、以实际行动支持抗疫斗争，展现了我国少年儿童的良好精神风貌。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "       习近平强调，少年强则国强。当代中国少年儿童既是实现第一个百年奋斗目标的经历者、见证者，更是实现第二个百年奋斗目标、建设社会主义现代化强国的生力军。希望广大少年儿童刻苦学习知识，坚定理想信念，磨练坚强意志，锻炼强健体魄，为实现中华民族伟大复兴的中国梦时刻准备着。各级党委和政府、全社会都要关心关爱少年儿童，为少年儿童茁壮成长创造有利条件。共青团、少先队组织要着眼培养能够担当民族复兴大任的时代新人，顺应时代发展",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: " 六一儿童节的由来：",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "       第二次世界大战期间，１９４２年６月，德国法西斯枪杀了捷克利迪策村１６岁以上的男性公民１４０余人和全部婴儿，并把妇女和９０名儿童押往集中营。村里的房舍、建筑物均被烧毁，好端端的一个村庄就这样被德国法西斯给毁了。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: " 为了悼念利迪策村和全世界所有在法西斯侵略战争中死难的儿童，反对帝国主义战争贩子虐杀和毒害儿童，保障儿童权利，１９４９年１１月国际民主妇女联合会在莫斯科召开执委会，正式决定每年６月１日为全世界少年儿童的节日，即国际儿童节。",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: 44,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC学校已经做好准备迎接部分学生返校",
      date: "2020-05-29",
      imageURL: "/images/article/1590733257439135.jpg",
      previewText:
        "温哥华学区约40%的小学生将于周一非全日制返回教室，因为BC省将进入COVID-19大流行时期学年的最后一个月。根据BC省教育部收集的初步数据，全省归国学生人数因地区而异，一些地区预计下周将只接待20%的返校学生，而有…",
      content: [
        {
          paragraph: {
            text: " 温哥华学区约40%的小学生将于周一非全日制返回教室，因为BC省将进入COVID-19大流行时期学年的最后一个月。",
          },
        },

        {
          paragraph: {
            text: " 根据BC省教育部收集的初步数据，全省归国学生人数因地区而异，一些地区预计下周将只接待20%的返校学生，而有些地区则准备迎接80%的学生返校。",
          },
        },

        {
          paragraph: {
            text: " 这个数字可能因学校和教室而异，向邮报提供的一份声明说。我们要到下周初才会有确切的数字。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1590733582450980.jpg",
          },
        },
        {
          paragraph: {
            text: "周四，卫生部仍在审查每个学区的健康和安全计划——总共60个——在某些情况下，还与各区合作完善该计划。无论返回学生人数多少，每个学区都必须遵守省卫生官员的指导方针，这意味着只有50%的幼儿园到五年级的学生将在指定时间上学。六至十二年级学生的人数下降到20%。            ",
          },
        },
        {
          paragraph: {
            text: "温哥华学校总监苏珊娜·霍夫曼说，整理细节，包括日程安排、清洁和疏远措施，已经落到了学校管理人员和教师的身边。除此之外，管理人们感到的一些焦虑还需要额外的挑战。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1590733660960885.jpeg",
          },
        },
        {
          paragraph: {
            text: " 心理健康和福祉被确定为BC省学校在学年剩余时间里的重点，无论是针对正在返回的学生还是选择继续在家学习的学生。",
          },
        },

        {
          paragraph: {
            text: " 霍夫曼说，学区还努力确保因各种原因无法重返工作岗位的教师能够接受教育，并能够帮助进行在线教育。",
          },
        },

        {
          paragraph: {
            text: " 她说：我深受所进行的工作的启发。我对在我们学校工作的人很有信心。",
          },
        },

        {
          paragraph: {
            text: " 素里学区发言人里廷德·马修说，在素里，自愿入学人数可能占入学总人数的20%至30%，这取决于学校。",
          },
        },

        {
          paragraph: {
            text: " 她说：我们将在下周知道实际数字，因为并非所有家长都完成了我们的出勤调查，我们认识到，一些家长可能会改变主意。",
          },
        },

        {
          paragraph: {
            text: " 她说，由教师设计的虚拟程序仍将是素里的主要教学项目。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1590734140208175.jpg",
          },
        },
        {
          paragraph: {
            text: " 萨里区家长咨询委员会发言人迪恩·麦基（DeanMcGee）说，是否送孩子回学校的决定权留给家长，家长们有时几乎没有任何信息可继续。",
          },
        },

        {
          paragraph: {
            text: " 他说：感觉有点像我们得到这样的信号：如果孩子们不回去，也许这个区也会一样快乐。",
          },
        },

        {
          paragraph: {
            text: " 麦基说，他担心一些学校可能会安排兄弟姐妹在不同的日子来学校，这增加了家长面临的挑战。他说，家长们一直在对PAC Facebook页面和为有特殊需要的孩子的父母提供清洁措施表示担忧。",
          },
        },

        {
          paragraph: {
            text: " 我希望看到更清晰的沟通，他说。这并不是说学区没有尝试，但情况对父母来说是困难的。",
          },
        },

        {
          paragraph: {
            text: " 不列颠哥伦比亚省教师联合会主席泰瑞·穆林说，这对教师来说也是个挑战。",
          },
        },

        {
          paragraph: {
            text: " 她说：老师们想念学生，想和他们联系，但我们问了很多老师。我担心老师精疲力竭。不能指望教师提供相同级别的虚拟学习，同时提供课堂教学。",
          },
        },

        {
          paragraph: {
            text: " 穆林说，她预计需要根据第一天实际在校学生人数进行调整。我认为这些数字真的很难预测。",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: " 本周早些时候，省卫生官员邦妮·亨利博士说，全球研究继续表明，儿童感染COVID-19或传播儿童的风险较低。",
          },
        },
      ],
    },
  },
  {
    id: 45,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC省再度延长全省紧急状态令｜大温公交六一新规实行",
      date: "2020-05-28",
      imageURL: "/images/article/1587667395767154.png",
      previewText:
        "BC省长贺谨（John Horgan）今天宣布，将本省的紧急状态令延长两个星期；令其成为有史以来最长时间的BC紧急状态。BC省卫生官Bonnie Henry今天宣布，昨天全省新增了9例冠状病毒确诊病例，以及1死亡病例。如今全BC省确…",
      content: [
        {
          paragraph: {
            text: "BC省长贺谨（John Horgan）今天宣布，将本省的紧急状态令延长两个星期；令其成为有史以来最长时间的BC紧急状态。            ",
          },
        },
        {
          paragraph: {
            text: "BC省卫生官Bonnie Henry今天宣布，昨天全省新增了9例冠状病毒确诊病例，以及1死亡病例。如今全BC省确诊病例总数2550，死亡总数162。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005271704174NU65.png",
          },
        },
        {
          paragraph: {
            text: "旧闻回顾：            ",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=149",
            linkText: "今夏别想出国旅行！加拿大各省旅行限制令一览",
          },
        },
        {
          paragraph: {
            text: "省内每个卫生地区的病例累积数据如下：",
          },
        },

        {
          paragraph: {
            text: "温哥华沿海卫生局（Vancouver Coastal Health region）：899例菲莎卫生局（Fraser Health region）：1267例岛屿卫生局（Island Health region）：127例内部卫生局（Interior Health region）：194例北部卫生局（Northern Health region）：63例",
          },
        },

        {
          paragraph: {
            text: "目前本省总康复人数为2144，康复率高达84%。",
          },
        },

        {
          paragraph: {
            text: "Bonnie Henry今天强调，新冠病毒的潜伏期高达14天，因此重启经济带来的影响，将在下周开始展现。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005271704175hf9F.jpg",
          },
        },
        {
          paragraph: {
            text: " BC省在3月18日进入紧急状态，今天已是当局第五次延长。新一轮的紧急状态将在6月9日结束。",
          },
        },

        {
          paragraph: {
            text: " 贺谨说，本省在压平疫情曲线方面已经取得阶段性成功，但他提醒省民，重启经济活动并不代表本省完全恢复过去正常的生活，省民必须继续保持社交距离一段长时间，这是新常态，当局会继续跟从卫生官员的指引。各行业恢复营业的同时，亦需要遵从卫生指引，确保劳工及消费者的健康及安全。",
          },
        },

        {
          paragraph: {
            text: " 公共交通放宽限制",
          },
        },

        {
          paragraph: {
            text: " 经过了两个月对公交车进行座位限制后，TransLink运输联网表示将放宽部分限制，新规6月1日星期一生效。",
          },
        },

        {
          paragraph: {
            text: " 运输联网今天下午宣布，6月1日之后，所有公交车的载客量从原本的额定载客量的1/2，提高到额定载客量的2/3以内。",
          },
        },

        {
          paragraph: {
            text: " 简单来说，新规实施之后，车上所有座位都可以坐人，坐满人后这辆公交车就算达到了2/3的载客量，司机将不再允许乘客上车。当然如果乘客宁愿站立也可以，反正乘客人数和座位数量的比例将严格控制在1:1之内。",
          },
        },

        {
          paragraph: {
            text: " 自4月初以来，为了让乘客保持社交距离，TransLink将座位容量减低至50％并禁止乘客在车上站立。公交车的座位上也贴满了醒目的海报，实行了隔位而坐，以使乘客在公交车上均匀分布。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005271704176TJKN.jpg",
          },
        },
        {
          paragraph: {
            text: " 运输联网表示，随着BC省重新启动经济，预计乘客将激增，因此必须增加座位以应付需求。随着商业、景点和服务的逐步开放，以及气温升高，越来越多市民将需要公交出门。",
          },
        },

        {
          paragraph: {
            text: " 在过去一个月里，大温公交车的乘客人数增加了30％以上，疫情期间实施的座位限制已经无法满足激增的客流量。",
          },
        },

        {
          paragraph: {
            text: " 另外，从6月1日开始，乘客将可以在前门上车及购票。",
          },
        },

        {
          paragraph: {
            text: " 运输联网还宣布了一系列健康安全措施，包括在进行日常清洁的基础上，每周两次给车厢喷洒消毒剂，并在一些车站设置了保持社交距离的提醒。",
          },
        },
      ],
    },
  },
  {
    id: 46,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "今夏别想出国旅行！加拿大各省旅行限制令一览",
      date: "2020-05-26",
      imageURL: "/images/article/1590471525740012.jpg",
      previewText:
        "每年的夏天都是加拿大人的旅行高峰季节，出国、出省、或是到自己的度假屋，可以有很多选择。不过今年由于新冠疫情的爆发，很多地方都设置了旅行禁令。即使不离开加拿大，加国内部旅行也要提前知道这些……目前BC省和…",
      content: [
        {
          paragraph: {
            text: "每年的夏天都是加拿大人的旅行高峰季节，出国、出省、或是到自己的度假屋，可以有很多选择。不过今年由于新冠疫情的爆发，很多地方都设置了旅行禁令。即使不离开加拿大，加国内部旅行也要提前知道这些……            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005251143392itIZ.jpg",
          },
        },
        {
          paragraph: {
            text: "目前BC省和隔壁的阿尔伯塔省，还在互相规劝省民禁止跨省旅行。            ",
          },
        },
        {
          paragraph: {
            text: "一名居住在BC的阿尔伯塔省女子由于车牌仍然挂着阿省的车牌，而被人在车窗上贴上了“回家去”（Go home）的字条            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005251143394kU40.jpg",
          },
        },
        {
          paragraph: {
            text: "不过，虽然政府不鼓励跨省旅行，但是在BC省与阿省之间，并没有关卡、或是检查站，两省之间仍然保持开放状态。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005251143395MmRR.jpg",
          },
        },
        {
          paragraph: {
            text: "作为疫情控制较好、感染人数较低的萨省和曼省，两个草原省份结对子，欢迎对方省民来访，两个省的居民可以跨省旅行。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005251143396DrAU.jpg",
          },
        },
        {
          paragraph: {
            text: "安省没有限制其他省份的居民来访，包括远到BC省的居民，如果想到安省旅行，安省的大门仍然敞开，不过安省卫生官仍然规劝所有外省居民，尽可能的别来了！而适度开放的安省感染确诊人数也在持续攀升中，就算再多湖光山色美景，也最好别在最近去凑热闹。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005251143397r64l.jpg",
          },
        },
        {
          paragraph: {
            text: "魁省是加拿大当之无愧的疫情震中地区，不过尽管如此，魁省还是在陆路边境设置了路障，限制外来人员进入该省，给原本已经负担沉重的魁省增加新的感染几率。            ",
          },
        },
        {
          paragraph: {
            text: "加拿大这个法裔大省每年夏季都是旅游胜地，来自北美洲和世界的游客蜂拥而至的局面，今年肯定都将不再出现。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005251143398D3oW.jpg",
          },
        },
        {
          paragraph: {
            text: "新布伦瑞克省则更是大手笔，地处大西洋沿岸，陆地边境只有魁省和新斯科舍省，另外与爱德华王子岛一桥之隔。虽然疫情早已在该省清零，但是警戒心理丝毫不放松，毕竟旁边就是疫情最严重的魁省，该省干脆派出官员在跨省陆地设置检查，禁止外省人员非必要旅行者进入。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005251143399NNvH.jpg",
          },
        },
        {
          paragraph: {
            text: "新斯科舍省也设置了检查站点，禁止外省人员进入。不过事实上，新省的陆地接壤只有一个省，就是新不伦瑞克省。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020052511433910STSt.jpg",
          },
        },
        {
          paragraph: {
            text: "爱德华王子岛，是加拿大大西洋边的度假圣地，每年夏季这里都游客络绎不绝，不过今年该省提出6月1日之前禁止任何外省人员进入，至于6月1日以后，再议！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020052511433911483P.jpg",
          },
        },
        {
          paragraph: {
            text: "纽芬兰与拉布拉多省，作为美洲大陆最早有欧洲人登陆的地方，有着独特的自然风貌，每年夏季也是旅游旺季，不少温哥华的游客都要去一睹风采。            ",
          },
        },
        {
          paragraph: {
            text: "其中纽芬兰岛与陆地没有接壤，倒是相对容易控制。不过该省已经明确表示，不欢迎任何非本省居民。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020052511433912uOfO.jpg",
          },
        },
        {
          paragraph: {
            text: "北部三个地区：西北地区、努那瓦特地区和育空地区，则不欢迎加拿大任何其他地方的人来访。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020052511433913zoTx.jpg",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=210&id=148",
            linkText: "丽水800亩山地的水土空气“卖”了279万元",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=147",
            linkText: "BC省Abbotsford阿勃斯福再次爆发新冠疫情",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=145",
            linkText:
              "BC省今天进入重启第二阶段，实拍温哥华Robson商业街重启第1天",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=143",
            linkText: "加拿大全国确诊新冠病例破7.7万 过半已经康复",
          },
        },
      ],
    },
  },
  {
    id: 47,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "丽水800亩山地的水土空气“卖”了279万元",
      date: "2020-05-25",
      imageURL: "/images/article/1590385310473564.jpg",
      previewText:
        "日前，由国家电投集团投资1.7亿元建设的浙江丽水缙云县大洋镇大平山光伏发电“农光互补”项目正式签约落地。协议首次出现了“企业购买生态产品”条款——企业通过向当地生态强村集体经济有限公司支付279.28万元…",
      content: [
        {
          paragraph: {
            text: " 日前，由国家电投集团投资1.7亿元建设的浙江丽水缙云县大洋镇大平山光伏发电“农光互补”项目正式签约落地。协议首次出现了“企业购买生态产品”条款——企业通过向当地生态强村集体经济有限公司支付279.28万元，购买项目所在区域的调节服务类GEP，用于奖农民、优环境、美生态，成丽水首例基于GEP核算的市场化交易生态产品。",
          },
        },

        {
          paragraph: {
            text: " 　　 “保护好生态环境，能卖出大价钱。”大洋镇83岁的王玉秋老人说起这新鲜事，兴奋不已。王玉秋是乡里百姓口碑最佳文明劝导员，当天，大洋镇生态强村公司决定拿出一部分资金，奖励更多的“王玉秋”投身环保，保护生态。",
          },
        },

        {
          paragraph: {
            text: " 　　 生态系统生产总值（GEP）是评估区域生态产品价值的重要指标，包含了生态系统产品价值、生态调节服务价值和生态文化服务价值三方面。调节服务类GEP包括了当地的水源涵养、土壤保持、空气净化、固碳释氧等。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/W020200523674640271803.jpg",
          },
        },
        {
          paragraph: {
            text: "　　 大洋镇风光。赵世杰供图            ",
          },
        },
        {
          paragraph: {
            text: "新闻回顾：            ",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=147",
            linkText: "BC省Abbotsford阿勃斯福再次爆发新冠疫情",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=145",
            linkText:
              "BC省今天进入重启第二阶段，实拍温哥华Robson商业街重启第1天",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=143",
            linkText: "加拿大全国确诊新冠病例破7.7万 过半已经康复",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=142",
            linkText: "Offer来袭，论高中生如何轻松收获加拿大名校offer",
          },
        },
        {
          paragraph: {
            text: " “大洋镇是缙云的生态农业大镇，也是丽水生态产品价值实现机制试点的乡镇之一。”大洋镇党委书记赵世杰介绍。根据中科院生态环境研究中心GEP核算方法，大洋镇GEP达33亿元。国家电投集团委托丽水（两山）学院及相关科研团队对购买的生态调节服务类产品以及生态溢价进行估价，根据《大洋镇生态产品市场化交易暂行办法》，占地800亩的大平山光伏发电项目，以其所在区域GEP的5%和生态溢价价值的12%计算，核算出共279.28万元的购买总价。经双方认可，分25年付清，每年支付111712元。",
          },
        },

        {
          paragraph: {
            text: " 　　 “良好的生态环境，可以产生更大的经济效益，这是我们项目落户大洋镇并且愿意购买生态产品的考量。”国家电投集团大洋项目负责人表示，受益于大洋镇优良的生态环境，优异的空气质量，酸雨少，光伏发电板的电池衰减率比雾霾重、酸雨多的地区更低，电池使用寿命将延长近5年；光照辐射强度大，光伏电池发电效率高，预计项目年发电量增长超10%，将产出更多的生态溢价。",
          },
        },

        {
          paragraph: {
            text: " 　　 据了解，这笔资金将交由大洋镇生态强村公司统一管理使用，除了鼓励农民保护生态，主要用于开展生态资源资产保护与修复、生态资源资产整合与转化、生态产业化培育与品牌经营等，进一步促进区域生态环境与生态经济的相互转化。",
          },
        },

        {
          paragraph: {
            text: " 　　 “涵养绿水青山，不断带来生态溢价，助力当地经济可持续发展。”丽水市发改委主任饶鸿来表示，丽水将通过创新探索生态产品市场化交易，有效推动重大项目和重点企业主动参与丽水生态产品价值实现机制的试点建设，形成绿水青山和金山银山的相互支撑和转化。",
          },
        },

        {
          paragraph: {
            text: " 2020年05月23日 18:44:25 来源： 人民网-浙江频道 刘斌 王丽玮",
          },
        },
      ],
    },
  },
  {
    id: 48,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC省Abbotsford阿勃斯福再次爆发新冠疫情",
      date: "2020-05-23",
      imageURL: "/images/article/1590210052526822.jpg",
      previewText:
        "卫生官员已经确认，在阿勃斯福冷冻水果加工厂爆发了新冠疫情。弗雷泽健康说，Nature’s Touch的五名员工已经检测出病毒呈阳性。阅读更多：在阿勃斯福地区医院上周的COVID-19大爆发卫生当局说，他们正在调查疫情，并…",
      content: [
        {
          paragraph: {
            text: "卫生官员已经确认，在阿勃斯福冷冻水果加工厂爆发了新冠疫情。            ",
          },
        },
        {
          paragraph: {
            text: "弗雷泽健康说，Nature’s Touch的五名员工已经检测出病毒呈阳性。            ",
          },
        },
        {
          plink: {
            text: "阅读更多：",
            link: "在阿勃斯福地区医院上周的COVID-19大爆发",
            href: "https://globalnews.ca/news/6951947/covid-19-outbreak-confirmed-abbotsford-hospital/",
          },
        },
        {
          paragraph: {
            text: " 卫生当局说，他们正在调查疫情，并正在与接触者进行追踪，并与工人的密切接触者交谈。",
          },
        },

        {
          paragraph: {
            text: " 弗雷泽健康公司说，它已经检查了这家工厂，该公司已经自愿关闭至少至周一。",
          },
        },

        {
          paragraph: {
            text: " Nature Touch 总部位于蒙特利尔，2017 年成立了 Abbotsford 工厂。",
          },
        },

        {
          paragraph: {
            text: " 周五早些时候，不列颠哥伦比亚省卫生官员确认了18例新的病毒病例和3例死亡病例。",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=145",
            linkText:
              "BC省今天进入重启第二阶段，实拍温哥华Robson商业街重启第1天",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=143",
            linkText: "加拿大全国确诊新冠病例破7.7万 过半已经康复",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=142",
            linkText: "Offer来袭，论高中生如何轻松收获加拿大名校offer",
          },
        },
        {
          link: {
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=141",
            linkText: "BC省兰利地区一养老院第二次新冠爆发5人死亡，38人感染",
          },
        },
      ],
    },
  },
  {
    id: 49,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "世卫组织：520全球现疫情暴发以来单日确诊新冠数最大增幅",
      date: "2020-05-21",
      imageURL: "/images/article/1590041288745634.jpg",
      previewText:
        "当地时间20日，世界卫生组织（WHO）总干事谭德赛表示，在过去的24小时内，世界各国报告的单日新增新冠肺炎确诊病例数达10.6万例，比以往任何时候都要多，是疫情暴发以来的最大单日增幅。据美国有线电视新闻网（CNN）…",
      content: [
        {
          paragraph: {
            text: " 当地时间20日，世界卫生组织（WHO）总干事谭德赛表示，在过去的24小时内，世界各国报告的单日新增新冠肺炎确诊病例数达10.6万例，比以往任何时候都要多，是疫情暴发以来的最大单日增幅。",
          },
        },

        {
          paragraph: {
            text: " 据美国有线电视新闻网（CNN）21日消息，谭德赛在瑞士日内瓦举行新闻发布会，会上他指出，在过去的24小时内，世界各国共向世卫组织报告了10.6万例新冠肺炎新增确诊病例，“这是自疫情暴发以来一天之内增幅最大的，这些病例中几乎有三分之二是由四个国家报告的。”",
          },
        },

        {
          paragraph: {
            text: " WHO传染病流行病学家Maria Van Kerkhove向媒体表示，这四个国家分别是美国、俄罗斯、巴西和印度。",
          },
        },

        {
          paragraph: {
            text: " “在新冠肺炎大流行之中，我们还有很长的路要走。”谭德赛说道。",
          },
        },

        {
          paragraph: {
            text: " CNN特别指出，由于报告过程中可能出现延迟的情况，因此这一单日新增记录并不意味着10.6万人在过去24小时内被感染、检测或记录。",
          },
        },

        {
          paragraph: {
            text: " 据美国约翰斯·霍普金斯大学发布的新冠肺炎疫情最新统计数据显示，截至北京时间5月21日6时左右，全球新冠肺炎累计确诊病例超过496万例，达4968133例，累计死亡病例326464例。其中，美国累计确诊达1548646例，死亡93163例。",
          },
        },

        {
          paragraph: {
            text: " 当前有6个国家累计确诊数超过20万，除美国外，还有俄罗斯、英国、西班牙、意大利和巴西。此外，法国、德国、土耳其、伊朗、印度和秘鲁，确诊病例数均超过10万例。",
          },
        },

        {
          cite: {
            text: " 澎湃新闻记者 南博一",
          },
        },

        {
          cite: {
            text: " 2020-05-21 来源：澎湃新闻",
          },
        },
        {
          link: {
            linkText:
              "BC省今天进入重启第二阶段，实拍温哥华Robson商业街重启第1天",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=145",
          },
        },

        {
          link: {
            linkText: "加拿大全国确诊新冠病例破7.7万 过半已经康复",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=143",
          },
        },

        {
          link: {
            linkText: "Offer来袭，论高中生如何轻松收获加拿大名校offer",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=142",
          },
        },
      ],
    },
  },
  {
    id: 50,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC省今天进入重启第二阶段，实拍温哥华Robson商业街重启第1天",
      date: "2020-05-20",
      imageURL: "/images/article/1589950418868911.jpg",
      previewText:
        "今天5月19日星期二，BC省全面进入第二阶段，各项政策将变得更加放松。      然而，虽说BC省正在全力迈向下一阶段，但是在过去的48小时内，BC省还是有2例新的死亡案例，以及16例...",
      content: [
        {
          paragraph: {
            text: " 今天5月19日星期二，BC省全面进入第二阶段，各项政策将变得更加放松。",
          },
        },

        {
          paragraph: {
            text: "       然而，虽说BC省正在全力迈向下一阶段，但是在过去的48小时内，BC省还是有2例新的死亡案例，以及16例全新的确诊，死亡人数目前达到143人，而确诊人数则达到了2444人。",
          },
        },

        {
          paragraph: {
            text: "       不过，虽然说直到今天还有新的确诊，但已经有越来越多的患者都恢复了健康，据卫生官亨利博士表示，目前全省已经有1966人康复，活跃病例只有335例，这是3月20日以来的最低水平。",
          },
        },

        {
          paragraph: {
            text: "       根据BC省的重启计划，博物馆，美术馆和商店将在周二向公众开放，牙医，物理诊疗，以及面对面的咨询服务也将逐渐恢复，大家只需要遵守规定，保持社交距离就好。",
          },
        },

        {
          paragraph: {
            text: "       刚刚过去的周末是温哥华入夏以来，第一个长周末，往年这个时候，人们都已做好迎接夏天的准备，城市到处都是出来享受阳光和好天气的人们。今年，受“限制令”影响，将近8周时间，城市被按下“暂停键”，娱乐、商业活动和服务设施都暂时停止和关闭。随着BC省经济重启，温哥华Robson商业街的专卖店很多已拆掉临时的木板，在长周末重新开业。",
          },
        },

        {
          paragraph: {
            text: "       下雨的周六，实地探访开业第一天的温哥华Robson商业街。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1589916328601-1.jpg",
          },
        },
        {
          paragraph: {
            text: "▲ ZARA是第一波开业的门店之一，店外已经有不少人排队等候进店购物。            ",
          },
        },
        {
          paragraph: {
            text: "      可能是下雨的原因，街上人不多，车也不算多。走一圈看下来，只有三分之一的店开门，大部分店即使开门，人也很少。甚至，有几家店没能等到重启，已经拆掉招牌，永久性的关门了。            ",
          },
        },
        {
          paragraph: {
            text: "近期新闻回顾：            ",
          },
        },
        {
          link: {
            linkText: "加拿大全国确诊新冠病例破7.7万 过半已经康复",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=143",
          },
        },

        {
          link: {
            linkText: "Offer来袭，论高中生如何轻松收获加拿大名校offer",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=142",
          },
        },

        {
          link: {
            linkText: "BC省兰利地区一养老院第二次新冠爆发5人死亡，38人感染",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=141",
          },
        },

        {
          link: {
            linkText: "BC省餐厅开业时间敲定！但是这几样短期内不会重开",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=138",
          },
        },
        {
          paragraph: {
            text: "      曾经，Robson商业街也是各种美食遍布的一条街。有东南亚风味餐厅、有日式拉面店、烤肉店、法式闪电泡芙、西餐厅等，现在街上都是扎推儿开的奶茶店，没了以前的特色，太可惜了！            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1589916328601-2.jpg",
          },
        },
        {
          paragraph: {
            text: "▲ SEPHORA 店内很冷清            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1589916328601-3.jpg",
          },
        },
        {
          paragraph: {
            text: "▲ Club Monaco 封店的木板还没有拆除，紧邻的Cafe Crepe 法式可丽饼店，已经拆掉招牌，永久关门了。以前，也是顾客超多，想进去享用一客可丽饼一杯咖啡也是要排队才有的吃。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1589916328601-4.jpg",
          },
        },
        {
          paragraph: {
            text: "▲ Indigo 目前没有完全开门营业，可以在线购买，路边取货。            ",
          },
        },
        {
          cite: {
            text: "新闻转载自温哥华天空综述            ",
          },
        },
      ],
    },
  },
  {
    id: 51,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "加拿大全国确诊新冠病例破7.7万 过半已经康复",
      date: "2020-05-18",
      imageURL: "/images/article/1589837561826023.png",
      previewText:
        "加拿大星期日新增1,138宗新冠肺炎病例及103人死亡，累计全国77,002宗病例及5,782人死亡。加拿大首席卫生官谭咏诗表示，截至目前为止，全国共有38,550人完全康复，占全国感染人数逾一半。近日文章回顾：Offer来袭，论…",
      content: [
        {
          paragraph: {
            text: "加拿大星期日新增1,138宗新冠肺炎病例及103人死亡，累计全国77,002宗病例及5,782人死亡。加拿大首席卫生官谭咏诗表示，截至目前为止，全国共有38,550人完全康复，占全国感染人数逾一半。            ",
          },
        },
        {
          pMid: {
            text: "近日文章回顾：            ",
          },
        },
        {
          linkMid: {
            linkText: "Offer来袭，论高中生如何轻松收获加拿大名校offer",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=142",
          },
        },

        {
          linkMid: {
            linkText: "BC省兰利地区一养老院第二次新冠爆发5人死亡，38人感染",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=141",
          },
        },

        {
          linkMid: {
            linkText: "BC省餐厅开业时间敲定！但是这几样短期内不会重开",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=138",
          },
        },

        {
          linkMid: {
            linkText: "31省区市明确返校时间，部分省份公布暑假时间",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=210&id=139",
          },
        },

        {
          linkMid: {
            linkText: "线上跨国听证为侨胞申诉“搭桥” 温州“检侨驿站”为你解烦忧",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=210&id=140",
          },
        },

        {
          image: {
            imageSRC: "/images/article/0_2020051805010316H7e.jpg",
          },
        },
        {
          paragraph: {
            text: "满地可的市民，星期日到公园享受阳光。加通社）",
          },
        },

        {
          paragraph: {
            text: "谭咏诗要求加拿大国民，在本国康复率继续攀升的同时，在这段时间继续遵守卫生官员指引，包括与他人保持适当社交距离。",
          },
        },

        {
          paragraph: {
            text: "迄今加拿大已进行129.6万个检测，每天平均有2.6万至2.8万人，接受病毒检测。谭咏诗称，受到新冠肺炎疫情了的影响，这个长周末可说是“苦乐参半”， 她希望现在采取的措施，将在未来几个月有所作为。她又称，大家都非常清楚，大家为拉平这条（疫情）曲线付出了多少努力，大家也知道没有人愿意放弃已取得的进步，因此希望大家继续努力，透过遵守卫生官员指引，使这条曲线往下拉。",
          },
        },

        {
          paragraph: {
            text: "魁省录得737宗新增病例，使该省病例总数增至42,920宗。另有多79人死亡，令该省因新冠肺炎而病逝的人数，达到3,562人。",
          },
        },

        {
          paragraph: {
            text: "现时魁省有1,766人，因为感染新冠肺炎而住院，包括183人入住深切治疗部（ICU），以及有11,754人康复。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005180501032r49R.jpg",
          },
        },
        {
          paragraph: {
            text: "蒙特利尔逾2千死 占全省 64％",
          },
        },

        {
          paragraph: {
            text: "蒙特利尔仍是魁省重灾区，至今已有2276人死亡，确诊病例为21,717人，分别占魁省病例总数逾一半（50.5％）及占全省死亡人数的64％。蒙特利尔已把该市的紧急状态令，延长至5月21日。",
          },
        },

        {
          paragraph: {
            text: "至于亚省，多57人感染及多1人死亡。星期日新增的死亡病例，死者是卡加利一间长期护理院的70多岁女长者。到目前为止，亚省已录得合共6,644宗病例及127人死亡。该省大部分死亡事件，都发生在长期护理中心。",
          },
        },

        {
          paragraph: {
            text: "亚省日前宣布，决定把户外聚会的人数限制，从15人增加到50人，各人之间要保持社交距离，而卡加利动物园将于5月23日，对公众重新开放，但同一时间在动物园内的人数，和活动时间有所规限。公共卫生官员表示，他们很可能会在一周内知道，放宽限制措施是否会导致新一轮的疫情。",
          },
        },

        {
          paragraph: {
            text: "其他省份方面，纽奔驰域省继续无新增病例，并且全部120个患者已经康复。不过该卫生官员提醒省民不要掉以轻心，要继续保护自己，保护他人。",
          },
        },

        {
          paragraph: {
            text: "在爱德华王子岛，鉴于该省过去18天没有新的确诊病例，许多企业和服务机构，都准备在5月22日重新开放。 同时，民众可以享受春季龙虾季节的开放，由于疫情，龙虾季节推迟了两个星期。",
          },
        },
        {
          cite: {
            text: "文章转载自-星岛环球网            ",
          },
        },
      ],
    },
  },
  {
    id: 52,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "Offer来袭，论高中生如何轻松收获加拿大名校offer",
      date: "2020-05-17",
      imageURL: "/images/article/1589694744204624.jpg",
      previewText:
        "加拿大教育背景1.加拿大大学整体教育质量：加拿大顶尖名校在教育的质量、水平和资源上并不输于美国大学。加拿大的本科教育整体讲究“宽进严出”，不像澳洲把高等教育做成创收的产业链。在名校中（尤其是商学院和工程…",
      content: [
        {
          paragraph: {
            text: "加拿大教育背景",
          },
        },

        {
          paragraph: {
            text: "1.加拿大大学整体教育质量：加拿大顶尖名校在教育的质量、水平和资源上并不输于美国大学。加拿大的本科教育整体讲究“宽进严出”，不像澳洲把高等教育做成创收的产业链。",
          },
        },

        {
          paragraph: {
            text: "在名校中（尤其是商学院和工程学院），想要拿到漂亮的GPA毕业并不简单，身边也不乏非常优秀的人才。",
          },
        },

        {
          paragraph: {
            text: "2.加拿大接受各种课程体系的申请：IB，A-Level，SAT，ACT，SAT2，AP，中国体制内普高，美高和加拿大高中等。",
          },
        },

        {
          paragraph: {
            text: "不管你来自哪个课程，加拿大大学都有对应的要求和评判标准。其中IB课程申请有天然的优势（而且可以抵换较多大学学分）。",
          },
        },

        {
          paragraph: {
            text: "A-Level也有较强优势，加高课程体系的同学申请自己的课程体系那个省的大学有很大的优势。",
          },
        },

        {
          paragraph: {
            text: "3.加拿大的大学普遍接受高考成绩：申请中提交会考成绩和学校成绩单，获得Conditional Offer，在高考结束后提交高考成绩。",
          },
        },

        {
          paragraph: {
            text: "4.加拿大相比美国更看重课内成绩单GPA，会考，SAT2，AP等。他们也把每种课程体系摸得“门儿清”，对不同课程的GPA有非常具体的要求。SAT2，AP很加分。",
          },
        },

        {
          paragraph: {
            text: "5.比起Top美本头破血流的申请竞争，加拿大的申请难度相对“佛系”，对国际学生友好不少。但随着“加拿大热”的发酵，名校申请的难度逐步上升。",
          },
        },

        {
          paragraph: {
            text: "6.加拿大学费和生活费比美国便宜不少。对于想要继续留在北美生活且有移民倾向的同学，加拿大比美国更容易站稳脚跟。",
          },
        },

        {
          paragraph: {
            text: "申请信息",
          },
        },

        {
          paragraph: {
            text: "加拿大学校的申请要求很仔细，对于每种课程体系都有具体的要求，每个学校官网上基本会给出课程体系的选项，可以看到具体的申请要求，对文书要求比较简单，部分情况需要面试。",
          },
        },

        {
          paragraph: {
            text: "和美国大学提倡通识教育、转专业高度自由不同，加拿大大学是按专业项目申请，McGill（麦吉尔大学）最多可以申请三个专业，UBC（英属哥伦比亚大学）最多可以申请两个专业，大学对每个program都给出了均分、必修课程等细致的要求。",
          },
        },

        {
          paragraph: {
            text: "加拿大大学的申请系统，位于安大略省的基本可以通过OUAC（安大略省大学申请中心）进行，UBC英属哥伦比亚大学、麦吉尔大学均有自己的申请系统。",
          },
        },

        {
          paragraph: {
            text: "名校申请具体要求",
          },
        },

        {
          paragraph: {
            text: "PART",
          },
        },

        {
          paragraph: {
            text: "1. 多伦多大学",
          },
        },

        {
          paragraph: {
            text: "先给大家看一下我们今年申请到的多伦多大学Offer。",
          },
        },

        {
          paragraph: {
            text: "多伦多大学可以说是在国内最耳熟能详的加拿大大学，2019USNews全球排名第20位。位于安大略省多伦多市中心。",
          },
        },

        {
          paragraph: {
            text: "以圣乔治校区为主（St. George Campus）, 密西沙加校区（Mississauga Campus）和士嘉宝校区（Scarborough Campus）为辅。",
          },
        },

        {
          paragraph: {
            text: "实行类似英国牛津和剑桥大学的联邦书院制度，现共有十二个拥有各自独特历史文化的书院。强项专业有人文学科，医科，商科和生化类学科。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005132343014764R.png",
          },
        },
        {
          paragraph: {
            text: "申请系统",
          },
        },

        {
          paragraph: {
            text: "OUAC（安大略省大学申请中心）主要有两个通道，101 和105（又分105D和105F）。",
          },
        },

        {
          paragraph: {
            text: "101——在安大略省就读的高中生",
          },
        },

        {
          paragraph: {
            text: "105D——非安大略省的在加拿大就读的高中生",
          },
        },

        {
          paragraph: {
            text: "105F——在加拿大国外就读的高中生",
          },
        },

        {
          paragraph: {
            text: "通过OUAC提交申请后可以在portal内查看申请状态。若申请三一学院和维多利亚学院需要额外的文书，申请商学院会需要面试。",
          },
        },

        {
          paragraph: {
            text: "录取要求",
          },
        },

        {
          paragraph: {
            text: "IB",
          },
        },

        {
          paragraph: {
            text: "预估分最低27/42，（但一般来说要高于这个分才可以录取）HL 5分以上可以换学分，SL无法换学分",
          },
        },

        {
          paragraph: {
            text: "A-Level",
          },
        },

        {
          paragraph: {
            text: "单科B以上可以换学分",
          },
        },

        {
          paragraph: {
            text: "AP",
          },
        },

        {
          paragraph: {
            text: "单科4分以上可以换学分，每科最多换3个学分",
          },
        },

        {
          paragraph: {
            text: "普高",
          },
        },

        {
          paragraph: {
            text: "需要高中毕业证，会考和高考成绩",
          },
        },

        {
          paragraph: {
            text: "多大的工院录取要求要比其他学院高：",
          },
        },

        {
          paragraph: {
            text: "IB",
          },
        },

        {
          paragraph: {
            text: "最低30/42, 不接受Math Studies，与专业相关的学科不得低于4分",
          },
        },

        {
          paragraph: {
            text: "A-Level",
          },
        },

        {
          paragraph: {
            text: "必修数学，物理，化学，成绩不得低于C",
          },
        },

        {
          paragraph: {
            text: "AP",
          },
        },

        {
          paragraph: {
            text: "每科不得低于4分",
          },
        },

        {
          paragraph: {
            text: "普高",
          },
        },

        {
          paragraph: {
            text: "需要高三数学，化学和物理成绩。推荐高考物理。不参加高考需要书面解释与其余相等标化成绩（如SAT或AP）",
          },
        },

        {
          paragraph: {
            text: "SAT2",
          },
        },

        {
          paragraph: {
            text: "Math, Physics or Chemistry 不低于 650",
          },
        },

        {
          paragraph: {
            text: "ACT",
          },
        },

        {
          paragraph: {
            text: "Math 和Science不低于26",
          },
        },

        {
          paragraph: {
            text: "语言要求",
          },
        },

        {
          paragraph: {
            text: "作为英语非母语的学生需要提交雅思，托福等英语语言能力考试的成绩。",
          },
        },

        {
          paragraph: {
            text: "雅思：总分不低于6.5，单科不低于6.0",
          },
        },

        {
          paragraph: {
            text: "托福：总分不低于100，writing不低于22",
          },
        },

        {
          paragraph: {
            text: "注意，多大的工程学院和商学院，常常也是竞争最激烈的两个院系，要求做第三方视频面试，类似美本的initialview，区别是面试是录制进行。",
          },
        },

        {
          paragraph: {
            text: "且以这两个学院的高选拔性，建议SAT1450+的同学尝试。另外，多伦多大学录取存在调剂的情况，学校可能会发给你非自己申请的专业的offer。",
          },
        },

        {
          paragraph: {
            text: "PART",
          },
        },

        {
          paragraph: {
            text: "2. 英属哥伦比亚大学",
          },
        },

        {
          paragraph: {
            text: "我们今年申请到的UBC大学Offer。",
          },
        },

        {
          paragraph: {
            text: "英属哥伦比亚大学，简称UBC。位于加拿大最温暖的大温哥华地区，同时也是加拿大华人最密集的地区。",
          },
        },

        {
          paragraph: {
            text: "校园并不在市中心，但交通还算便利, 毗邻Burnaby和Richmond，吃喝玩乐不愁。依山傍海，风景迷人，活脱脱一座海边森林公园，很新很有钱。优势专业有农学，生化类学科，CS，和环境学。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020051323430160ogb.png",
          },
        },
        {
          paragraph: {
            text: "申请系统",
          },
        },

        {
          paragraph: {
            text: "UBC account，直接注册UBC账户，根据指示完成personal profile（个人信息）的填写。根据你申请的不同的专业，最多会要求回答8个short essay question（短文书）, 每个问题需要50到200字的response（回答）。",
          },
        },

        {
          paragraph: {
            text: "录取要求",
          },
        },

        {
          paragraph: {
            text: "UBC的每个专业都对学生的选课程有要求，以IB为例，申请生物学必须有生物/物理/化学中的一门，非常详细，需要每个同学到官网上查询。",
          },
        },

        {
          paragraph: {
            text: "IB链接：https://you.ubc.ca/applying-ubc/international-baccalaureate/ 。其他课程体系也是，需要在官网上查询。",
          },
        },

        {
          paragraph: {
            text: "基本要求",
          },
        },

        {
          paragraph: {
            text: "IB",
          },
        },

        {
          paragraph: {
            text: "需要完成完整的IB文凭（包括三门high level, TOK和EE），不接受单科文凭",
          },
        },

        {
          paragraph: {
            text: "A-Level",
          },
        },

        {
          paragraph: {
            text: "需要完成至少六门课，各个专业要求不一",
          },
        },

        {
          paragraph: {
            text: "AP",
          },
        },

        {
          paragraph: {
            text: "以AP为高中课程的学生需要完成完整的高中AP课业，SAT1或ACT（需要writing）",
          },
        },

        {
          paragraph: {
            text: "普高",
          },
        },

        {
          paragraph: {
            text: "需要高中成绩单（最好均分84+），会考和高考成绩。若没有高考成绩需要提供三门以上的AP成绩。",
          },
        },

        {
          paragraph: {
            text: "加拿大高中",
          },
        },

        {
          paragraph: {
            text: "每个省的要求不一。安大略省的高中生需要70%以上的final grade。",
          },
        },

        {
          paragraph: {
            text: "语言要求",
          },
        },

        {
          paragraph: {
            text: "雅思：总分不低于6.5，单科不低于6.0",
          },
        },

        {
          paragraph: {
            text: "托福：总分不低于90 （R:22，L:22, W:21，S:21）",
          },
        },

        {
          paragraph: {
            text: "注意，UBC和之后我们会提到的滑铁卢大学是有PS文书的！不同专业文书题目不同。",
          },
        },

        {
          paragraph: {
            text: "PART",
          },
        },

        {
          paragraph: {
            text: "3. 麦吉尔大学",
          },
        },

        {
          paragraph: {
            text: "我们今年申请到的麦吉尔大学Offer。",
          },
        },

        {
          paragraph: {
            text: "位于加拿大的法语区魁北克省的公立研究型大学，是加拿大国内录取分数线最高的大学，学业压力大。温度气候可参考美国的缅因州，不夸张地说半年都是冬天，是喜欢冰天雪地的孩子的天堂。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005132343018oxx5.jpg",
          },
        },
        {
          paragraph: {
            text: "申请系统",
          },
        },

        {
          paragraph: {
            text: "Minerva是McGill自己的申请系统，不需要写任何文书，只需要提供成绩和填写基本信息表格。在portal上可以查看申请状态。",
          },
        },

        {
          paragraph: {
            text: "录取要求",
          },
        },

        {
          paragraph: {
            text: "McGill每个学院和专业要求都不同，总体来说工科难度最大，农学院分数线最低。所以最低录取成绩可参考农学院和工院的区间范围。",
          },
        },

        {
          paragraph: {
            text: "文学院申请时不分专业，只能undeclared。IB Diploma，IB，A-level和AP最多可以在文学院换掉一年的学分（30个学分），其余学院各不相同。魁省本地读CEGEP的学生也可以直接换掉一年学分，相当于直接读大二。",
          },
        },

        {
          paragraph: {
            text: "基本要求",
          },
        },

        {
          paragraph: {
            text: "IB",
          },
        },

        {
          paragraph: {
            text: "需要完整IB文凭（有3门HL，TOK，EE）",
          },
        },

        {
          paragraph: {
            text: "农学院：最低30/42，数学和science不低于5",
          },
        },

        {
          paragraph: {
            text: "工院生物工程专业：预估分40/42，数学和science不低于6",
          },
        },

        {
          paragraph: {
            text: "A-Level",
          },
        },

        {
          paragraph: {
            text: "农学院：至少三个B",
          },
        },

        {
          paragraph: {
            text: "工院生物工程专业：至少两个A*和两个A",
          },
        },

        {
          paragraph: {
            text: "AP和美高",
          },
        },

        {
          paragraph: {
            text: "农学院：高中成绩B以上，SAT1阅读670+，数学580+",
          },
        },

        {
          paragraph: {
            text: "工院部分专业：高中成绩A-以上，ACT至少30，SAT1阅读710+，数学700+，SAT2 670+",
          },
        },

        {
          paragraph: {
            text: "普高",
          },
        },

        {
          paragraph: {
            text: "一些相关专业必须提供数学，生物，化学，物理成绩，所有专业都需要会考成绩",
          },
        },

        {
          paragraph: {
            text: "加拿大高中",
          },
        },

        {
          paragraph: {
            text: "农学院最低录取线75%,工院生物工程专业95%",
          },
        },

        {
          paragraph: {
            text: "魁省当地学生读CEFEP课程，有不同的评分系统",
          },
        },

        {
          paragraph: {
            text: "语言要求",
          },
        },

        {
          paragraph: {
            text: "雅思：总分不低于6.5，单科不低于6.0",
          },
        },

        {
          paragraph: {
            text: "托福：Education和Management 不低于100，Music 79-80，其余专业不低于90分，单科不低于21",
          },
        },

        {
          paragraph: {
            text: "注意，McGill不存在调剂一说，最多可以申请三个专业。分控，建议托福100+的学生申请，热门院系如Sci，Engi建议SAT1450+。",
          },
        },

        {
          paragraph: {
            text: "PART",
          },
        },

        {
          paragraph: {
            text: "4. 滑铁卢大学",
          },
        },

        {
          paragraph: {
            text: "我们今年申请到的滑铁卢大学Offer。",
          },
        },

        {
          paragraph: {
            text: "位于加拿大安大略省的滑铁卢市，邻近加拿大五大湖区。离多伦多2小时车程，尼亚加拉瀑布1.5小时车程。还有另外三个分校区位于加拿大剑桥市，基秦拿市，斯特拉特福镇。",
          },
        },

        {
          paragraph: {
            text: "滑铁卢大学是加拿大最有创新性的大学，其毕业生拥有较高的就业率。优势专业有CS，工程和数学。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020051323430110x30M.jpg",
          },
        },
        {
          paragraph: {
            text: "申请系统",
          },
        },

        {
          paragraph: {
            text: "OUAC/Quest，OUAC 与多大类似，申请Waterloo也是通过OUAC，但有一些专业需要注册Quest账户完成Admission Information Form （AIF）的填写。",
          },
        },

        {
          paragraph: {
            text: "Quest 强制要求：数学院和工院里的所有专业，Architecture, Accounting and Financial Management, Computing and Financial Management和Pharmacy programs。其余programs也推荐完成AIF，但不强制要求。",
          },
        },

        {
          paragraph: {
            text: "在官网上可以找到注册Quest账户的通道。跟着流程完成 Admission Information Form即可。AIF中，根据你选的不同专业，做多需要回答5个essay question, 包括why waterloo, 课外活动等。",
          },
        },

        {
          paragraph: {
            text: "录取要求",
          },
        },

        {
          paragraph: {
            text: "IB",
          },
        },

        {
          paragraph: {
            text: "针对不同专业要求不同，有些专业接受IB单科文凭，最低分数要求范围在27/42-32/42之间",
          },
        },

        {
          paragraph: {
            text: "A-Level",
          },
        },

        {
          paragraph: {
            text: "需要完成至少5门学科，至少3门advanced level。针对不同专业要求不同，最多接受一个C，申请专业的相关学科最好有A或A*",
          },
        },

        {
          paragraph: {
            text: "AP和美高",
          },
        },

        {
          paragraph: {
            text: "需要高中毕业证，高中三年成绩单，至少高于一本分数线的高考成绩。如不参加高考需提供书面解释。针对不同专业要求不同。",
          },
        },

        {
          paragraph: {
            text: "普高",
          },
        },

        {
          paragraph: {
            text: "需要高中毕业证，会考和高考成绩",
          },
        },

        {
          paragraph: {
            text: "加拿大高中",
          },
        },

        {
          paragraph: {
            text: "针对不同专业要求不同，具体录取平均分视每年申请人数和招收数量而决定。",
          },
        },

        {
          paragraph: {
            text: "比如会计与金融管理专业对于普高的学生要求如下：",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020051323430111xi90.png",
          },
        },

        {
          paragraph: {
            text: "语言要求",
          },
        },

        {
          paragraph: {
            text: "雅思：总分不低于6.5，单科不低于（W:6.5，S:6.5, R:6.0, L:6.0）",
          },
        },

        {
          paragraph: {
            text: "托福：不低于90分（W:25, S:25）",
          },
        },

        {
          paragraph: {
            text: "注意：滑铁卢是有文书的，但要求不高。近年来，滑铁卢的COOP项目名声在外，CS申请难度超过多大，其CS+COOP项目的含金量值得一些“大佬”挑战！",
          },
        },

        {
          paragraph: {
            text: "来源：加拿大留学中心",
          },
        },
        {
          cite: {
            text: "其他新闻            ",
          },
        },
        {
          linkMid: {
            linkText: "BC省兰利地区一养老院第二次新冠爆发5人死亡，38人感染",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=141",
          },
        },

        {
          linkMid: {
            linkText: "BC省餐厅开业时间敲定！但是这几样短期内不会重开",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=187&id=138",
          },
        },

        {
          linkMid: {
            linkText: "31省区市明确返校时间，部分省份公布暑假时间",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=210&id=139",
          },
        },

        {
          linkMid: {
            linkText: "线上跨国听证为侨胞申诉“搭桥” 温州“检侨驿站”为你解烦忧",
            linkURL:
              "https://www.wenzhouren.ca/index.php?a=show&catid=210&id=140",
          },
        },
      ],
    },
  },
  {
    id: 53,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC省兰利地区一养老院第二次新冠爆发5人死亡，38人感染",
      date: "2020-05-16",
      imageURL: "/images/article/1587667395767154.png",
      previewText:
        "卫生官员正在努力遏制兰利一家养老院的新的冠状病毒疫情，该病例已造成5人死亡。这是兰利养老院记录的第二次疫情。第一次疫情始于3月，涉及一名工作人员，于4月底宣布结束。4月29日，宣布爆发新的疫情，除死亡人数外…",
      content: [
        {
          paragraph: {
            text: "卫生官员正在努力遏制兰利一家养老院的新的冠状病毒疫情，该病例已造成5人死亡。            ",
          },
        },
        {
          paragraph: {
            text: "这是兰利养老院记录的第二次疫情。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1589605216578310.png",
          },
        },
        {
          paragraph: {
            text: "第一次疫情始于3月，涉及一名工作人员，于4月底宣布结束。",
          },
        },

        {
          paragraph: {
            text: "4月29日，宣布爆发新的疫情，除死亡人数外，已增至38例，其中包括至少5名工作人员。该设施有139张床。",
          },
        },

        {
          paragraph: {
            text: '周四在BC省记录的15个新病例中，有10例与该养老院有关。"',
          },
        },

        {
          paragraph: {
            text: "弗雷泽卫生首席医疗卫生官员马丁·拉沃伊博士说，官方已经确定第二次疫情是由一名工作人员发起的。",
          },
        },

        {
          paragraph: {
            text: "不过，他说，尽管在首次疫情爆发后，尽管该病毒在现场加强了筛查和清洁措施，但调查人员仍在努力确定病毒是如何如此广泛的传播的。",
          },
        },

        {
          paragraph: {
            text: '"通常，当我们看到这样的事情时，我们有一段非常非常少的活动期，然后我们在几天内发现了相当多的病例。可能发生了一些有传播的地方，"他说。',
          },
        },

        {
          paragraph: {
            text: '他说："COVID-19传播非常容易，而且当我们有痴呆症组时，我们实际上更难以控制病人的移动和与其他居民的接触。',
          },
        },

        {
          paragraph: {
            text: "拉沃伊说，访客限制仍然有效，同时加强了清洁和感染控制措施。他说，弗雷泽健康公司也在协助该设施与家属沟通。",
          },
        },

        {
          paragraph: {
            text: "弗雷泽健康表示，兰利洛奇养老院在首次疫情爆发前已经为工人下达了一对一服务的命令。",
          },
        },
      ],
    },
  },
  // {
  //   id: 54,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "中国新闻",
  //   subDirectory: "/info/china",
  //   article: {
  //     title: "线上跨国听证为侨胞申诉“搭桥” 温州“检侨驿站”为你解烦忧",
  //     date: "2020-05-14",
  //     imageURL: "/images/article/1589495438205424.png",
  //     previewText:
  //       "浙江在线5月14日讯（记者 李灿 戚祥浩 通讯员 章洁） “双方信号都已接入，听证会正式开始。”北京时间5月9日15时30分，米兰时间5月9日9时30分，温州检察机关就申诉人周月宇微信账号被盗造成财产、名誉受损一案…",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "浙江在线5月14日讯（记者 李灿 戚祥浩 通讯员 章洁） “双方信号都已接入，听证会正式开始。”北京时间5月9日15时30分，米兰时间5月9日9时30分，温州检察机关就申诉人周月宇微信账号被盗造成财产、名誉受损一案召开一场特殊的远程跨国视频听证会。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　此前，在意大利米兰经商的侨胞周月宇通过家人，向温州市检察院递交书面申诉材料：主要嫌疑人薛某2017年盗用周月宇微信账号获利16325.76元，之后又冒充他向微信好友实施诈骗，但薛某至今尚未到案，导致周月宇经济和名誉持续遭受损失。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　考虑到周月宇远在意大利，受新冠肺炎疫情影响不便回国，温州市检察院组织了这场远程视频听证会。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　“听证的目的，既是调解经济纠纷，也是帮申诉人挽回名誉损失。”承办检察官蒋儒博告诉记者，除了被申诉人（嫌疑人薛某的家属），温州市检察院还发挥“检侨驿站”机制，邀请与周月宇的生意、生活有着密切交集的意大利侨领代表、文成侨联代表、家属代表等出席听证会。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　一个多小时的听证后，双方和解，被申诉人当场退赔申诉人人民币16325.76元，并承诺将尽力规劝出逃在外的薛某早日回国配合调查，争取宽大处理。检察机关也表示将继续监督公安机关加大犯罪嫌疑人的侦查力度。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　“此次市检察院通过‘检侨驿站’，为海外侨胞反映诉求搭建了高效、便捷的平台。”参与听证会的文成县侨联副主席赵东者说。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　据了解，去年6月，温州市检察院和温州市侨联共同成立保障和促进温州人经济发展工作领导小组，在市侨联设立“检侨驿站”，并对接国外侨团建立海外检侨联络站，聘任海外检侨联络员，通过内外协同为华侨华人防范和化解法律风险、人身财产权益刑事救济等提供司法服务。",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: 55,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "31省区市明确返校时间，部分省份公布暑假时间",
      date: "2020-05-12",
      imageURL: "/images/article/1589327126940081.jpg",
      previewText:
        "人民网5月12日消息，随着疫情防控进入常态化，多地高校及中小学陆续迎来返校复课。截至5月10日，31个省份均明确了各级各类学校返校时间，不少省份同时公布了暑假时间。各省区市各级各类学校返校时间表一览（原题为《…",
      content: [
        {
          paragraph: {
            text: "人民网5月12日消息，随着疫情防控进入常态化，多地高校及中小学陆续迎来返校复课。截至5月10日，31个省份均明确了各级各类学校返校时间，不少省份同时公布了暑假时间。            ",
          },
        },
        {
          paragraph: {
            text: "各省区市各级各类学校返校时间表一览            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1589327297333813.png",
          },
        },
        {
          cite: {
            text: "（原题为《31省区市明确返校时间》）            ",
          },
        },
      ],
    },
  },
  {
    id: 56,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC省餐厅开业时间敲定！但是这几样短期内不会重开",
      date: "2020-05-11",
      imageURL: "/images/article/1588811928950031.jpeg",
      previewText:
        "虽然BC省府允许餐厅在5月19日重开，但BC省餐饮协会（BCRFSA）总裁兼首席执行官Ian Tostenson表示，他相信大部分餐厅还没准备好重启堂食。Ian Tostenson在接受采访时表示：“我们任重而道远——我们不仅要在安全及卫…",
      content: [
        {
          paragraph: {
            text: "虽然BC省府允许餐厅在5月19日重开，但BC省餐饮协会（BCRFSA）总裁兼首席执行官Ian Tostenson表示，他相信大部分餐厅还没准备好重启堂食。            ",
          },
        },
        {
          paragraph: {
            text: "Ian Tostenson在接受采访时表示：“我们任重而道远——我们不仅要在安全及卫生方面做足，我们还需要再次获得顾客的信任。”            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_202005101647103FK7K.jpg",
          },
        },
        {
          paragraph: {
            text: "Ian Tostenson            ",
          },
        },

        {
          paragraph: {
            text: "“我们还需要几周时间准备。最理想的情况是，大多数餐厅在5月底（或6月初）重开。”",
          },
        },

        {
          paragraph: {
            text: "Tostenson说，上周四该协会已给省府发了一份计划书，详细地解释餐厅重开后如何保证员工及顾客的安全。",
          },
        },

        {
          paragraph: {
            text: "Tostenson与55名餐厅老板合作，筹划了两个星期，才把计划书交到省长手里。",
          },
        },

        {
          paragraph: {
            text: "在周四的新闻发布会上，省卫生官员Bonnie Henry博士解释说，并非每家要重启的企业都需获省府审批。但是，每个行业都要公开发布一套通用准则，对自己的员工及顾客负责。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/0_2020051016471048Jrz.jpg",
          },
        },
        {
          paragraph: {
            text: "Tostenson表示，他们递交的计划书里，着重介绍了如何在店内保持社交距离，以及如何做好消毒工作。",
          },
        },

        {
          paragraph: {
            text: "他说：“这是一个非常复杂的计划。”细节包括餐桌之间的距离为6英尺，餐椅之间的距离为3英尺。另外我们还希望餐厅保持50%的上座率，当然这个百分比不能说死，毕竟每家餐厅的环境和结构不一样。”",
          },
        },

        {
          paragraph: {
            text: "“这仅仅是开始，随着疫情好转（可能是几周后），我们也许能够慢慢增加餐厅的上座人数。”",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020051016471050C15.jpg",
          },
        },
        {
          paragraph: {
            text: "Tostenson说，BC省餐饮协会希望在周一收到省府的回复。",
          },
        },

        {
          paragraph: {
            text: "虽然餐厅可以重开，但爱运动的人士可能要失望了。",
          },
        },

        {
          paragraph: {
            text: "最新消息指出，健身房及瑜珈教室暂时不会在本省重启计划第二阶段开放。",
          },
        },

        {
          paragraph: {
            text: "省长贺谨日前宣布分4阶段进行的重启经济活动计划，在5月中进入第二阶段，餐饮及零售等商业在卫生指引下可恢复营业。不过，健身房及瑜珈教室就不在第二阶段的计划中。",
          },
        },

        {
          paragraph: {
            text: "省首席卫生官Bonnie Henry表示，本省有健身房发生新冠肺炎传播的情况，很多设施还不能达到社交距离措施标准，因此健身房及瑜珈教室暂时不会在第二阶段开放，当局将会密切查看情况，确认到第三阶段，这些设施是否仍出现传播，若继续存在个案，当局会对这些设施采取限制措施。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/0_2020051016471063o3V.jpg",
          },
        },
        {
          paragraph: {
            text: "而第三阶段可能会从6月开始至9月，健身房这类设施可能要等到夏季才能重开。            ",
          },
        },
        {
          paragraph: {
            text: "另外，酒吧、夜店、赌场也不太可能在短期内重新开放，50人以上的大型聚会仍将被禁止。大型会议、音乐会以及演唱会都将保持禁止状态。居民仍应尽量避免不必要的旅行。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/0_2020051016471078Y5W.jpg",
          },
        },
        {
          paragraph: {
            text: "文章转载自Vanpeople人在温哥华            ",
          },
        },
      ],
    },
  },
  {
    id: 57,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC省官员表示：本周末请大家继续待在家里",
      date: "2020-05-09",
      imageURL: "/images/article/1587667395767154.png",
      previewText:
        "政府在步道上放置了路障，阻止本周末人们的步行活动。虽然这会让人们在即将到来的母亲节感到扫兴，但是政府官员还是希望大家能在家再多待久一点。政府继续在接下来几周时间内不鼓励非必要出行，即使是省内旅行。尽管…",
      content: [
        {
          paragraph: {
            text: "虽然这会让人们在即将到来的母亲节感到扫兴，但是政府官员还是希望大家能在家再多待久一点。",
          },
        },

        {
          paragraph: {
            text: "政府继续在接下来几周时间内不鼓励非必要出行，即使是省内旅行。尽管下周四，全省即将迎来部分重启，但是对全体社会而言，不要远离居所依旧是对社会最好的回报。",
          },
        },

        {
          paragraph: {
            text: "“目前，BC省居民最正确的做法就是不要远离居所”一位政府官员在最近的记者采访中说到，“我们还是希望人们在自己的社区内与社区成员保持联系，我们并不鼓励跨社区的非必要接触。”",
          },
        },

        {
          paragraph: {
            text: "我们也鼓励人们离开家门，但是不鼓励你们走远，直到我们全省进入到重启第三阶段。大概时间会是在6月份。夏天的时候大部分酒店，营地都会陆续被开放，到时候人们有的是机会去享受大自然。",
          },
        },
      ],
    },
  },
  {
    id: 58,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "今天是母亲节，祝母亲们节日快乐！",
      date: "2020-05-08",
      imageURL: "/images/article/1588970192723739.jpg",
      previewText:
        "在母亲眼里，无论我们多少的年纪都是那片朝气蓬勃的绿叶，都那朵盛开的花朵！我们可曾想到过是谁做了那春风春雨默默地滋润着我们呢？当我们早上匆匆忙忙地从床上爬起时，是谁已经为我们做好了可口的早餐？是妈妈；当…",
      content: [
        {
          paragraph: {
            text: "在母亲眼里，无论我们多少的年纪都是那片朝气蓬勃的绿叶，都那朵盛开的花朵！",
          },
        },

        {
          bParagraph: {
            text: "我们可曾想到过",
          },
        },

        {
          paragraph: {
            text: "是谁做了那春风春雨默默地滋润着我们呢？",
          },
        },

        {
          paragraph: {
            text: "当我们早上匆匆忙忙地从床上爬起时，是谁已经为我们做好了可口的早餐？是妈妈；",
          },
        },

        {
          paragraph: {
            text: "当我们背上书包急急地走出家门时，是谁的身影徘徊在窗前张望？是妈妈；",
          },
        },

        {
          paragraph: {
            text: "当我们带着一身疲惫回到家时，是谁早已为我们准备好了洗澡水？是妈妈；",
          },
        },

        {
          paragraph: {
            text: "当我们为了学习而挑灯苦读到深夜时，又是谁悄悄地在桌角放上一杯牛奶？是妈妈；",
          },
        },

        {
          paragraph: {
            text: "当疫情在全球扩散时，是谁隔着千山万水把安慰和关心送到我们心里，是妈妈；",
          },
        },

        {
          paragraph: {
            text: "是什么样的人才能做得这么多这么多却不求一点回报呢？是妈妈。",
          },
        },

        {
          bParagraph: {
            text: "从小到大，妈妈一直是我们身边最亲最爱的人。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1588970347231007.png",
          },
        },
        {
          paragraph: {
            text: "在我们还不会说话时，妈妈不厌其烦地教我们学习；",
          },
        },

        {
          paragraph: {
            text: "当我们还没有能力保护自己的时候，妈妈用那博大无私的爱为我们遮风挡雨；",
          },
        },

        {
          paragraph: {
            text: "当我们自认为已经长在要摆脱她的庇护时，妈妈不无担心地默默注视着我们；",
          },
        },

        {
          paragraph: {
            text: "当我们开心的时候，妈妈用明亮的眸子微笑地看着我们；",
          },
        },

        {
          paragraph: {
            text: "当我们难过的时候，妈妈明知道自己帮不了什么忙却还是陪着我们一起忧伤……",
          },
        },

        {
          paragraph: {
            text: "妈妈为我们做的已经太多太多，可是她却从来没有要求任何的回报，这是一种多么广博多么无私的爱啊！",
          },
        },

        {
          paragraph: {
            text: "妈妈不要华丽昂贵的首饰，不要价值不菲的礼物，送给妈妈最好的礼物就是我们自己。",
          },
        },

        {
          paragraph: {
            text: "母亲节送给妈妈的礼物是一枝初叶蓓蕾的康乃馨，是我们一张纯洁无邪的笑脸，和我们远隔重洋电话中的一声“妈妈我爱你，我一切都好，疫情马上会过去.......”",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "母亲是一盏明灯，指引着我们驶向成长的彼岸；",
          },
        },

        {
          paragraph: {
            text: "母亲是一缕阳光，呵护着我们度过美好的童年；",
          },
        },

        {
          paragraph: {
            text: "母亲是一阵轻风，拂去了我们凌乱焦急的思绪；",
          },
        },

        {
          paragraph: {
            text: "母亲是生命的交响曲，为我们谱写了爱的篇章。",
          },
        },

        {
          space: {},
        },

        {
          paragraph: {
            text: "“谁言寸草心，报得春。”到现在，我们才发现，原来我们一直生活在爱的溪水中，那么温暖、那么清甜。这就是母爱，无言的爱。亲爱的妈妈祝您天天快乐！",
          },
        },

        {
          paragraph: {
            text: "加拿大温州同乡总会给留学生的妈妈们报个平安，孩子们在加拿大的生活和学习都很好，请您放心！遥祝母亲节快乐！",
          },
        },
      ],
    },
  },
  {
    id: 59,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC省宣布幼儿班至12年级课堂教学将在6月部分恢复，完全恢复预计在9月",
      date: "2020-05-07",
      imageURL: "/images/article/1588870378366245.jpg",
      previewText:
        "温哥华——BC省州长约翰·霍根周三宣布，作为不列颠哥伦比亚省重新开学计划的一部分，幼儿园至12年级的一些学生将在6月份返回学校接受非全日制教学。该省预计要到9月份才能全面复课。2020年3月23日，星期一，BC省温…",
      content: [
        {
          paragraph: {
            text: "温哥华——BC省州长约翰·霍根周三宣布，作为不列颠哥伦比亚省重新开学计划的一部分，幼儿园至12年级的一些学生将在6月份返回学校接受非全日制教学。",
          },
        },

        {
          paragraph: {
            text: "该省预计要到9月份才能全面复课。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1588870227262746.jpg",
          },
        },
        {
          paragraph: {
            text: "2020年3月23日，星期一，BC省温哥华的埃里克·哈伯中学，一条空荡荡的走廊。一位专门研究青少年心理健康的精神病学家说，无聊和孤立的学生在网上花费太多时间，有些学生已经开始使用更多的物质，但是当课程恢复时，所有学生都需要额外的情感支持。加拿大新闻社/乔纳森·海沃德",
          },
        },

        {
          paragraph: {
            text: "此非全日制教学被认为是自愿的，鉴于学年的时间原因，接下来的教学时间也只持续几个星期而已。",
          },
        },

        {
          paragraph: {
            text: '霍根在周三的新闻发布会上说："我们理解，家长们对孩子重返校园时的安全有疑问，家长们的担心并非多虑。',
          },
        },

        {
          paragraph: {
            text: '"我们不会强迫任何人回来，但弗莱明部长和我正在努力确保那些需要孩子在课堂上的家庭有这杨的机会。',
          },
        },

        {
          bParagraph: {
            text: "目前，BC省所有60个学区都处于逐步恢复教学的阶段，总共分为五阶段，目前处于第四阶段（倒序），第一阶段为全面开放学校教学。",
          },
        },

        {
          paragraph: {
            text: "在第四阶段，为基本工作者和弱势学生的家庭的孩子进行课堂学习，大多数孩子进行在线学习。",
          },
        },

        {
          paragraph: {
            text: '第三阶段包括幼儿园至五年级学生非全日制课堂学习，以及六至十二年级学生"根据需要"获得非全日制课堂学习。在这个阶段，所有学生都可以在线和远程学习。',
          },
        },

        {
          paragraph: {
            text: "学区正在制定计划，确保部分孩子们在6月返校时能正确遵守和实施保持2米社交距离的卫生建议。",
          },
        },

        {
          paragraph: {
            text: "温哥华学校校长苏珊娜·霍夫曼说，许多细节仍有待制定。",
          },
        },

        {
          paragraph: {
            text: '她周四在CTV早间直播节目中说："我们首先需要确定谁的学生需要返回学校，这样我们才能知道如何做好健康和安全协议所规定的后勤工作。',
          },
        },

        {
          paragraph: {
            text: '"我们还需要在如何为选择返回的人管理面对面的课堂教学和网上教学的那部分寻找平衡点。',
          },
        },

        {
          paragraph: {
            text: "她说，学校董事会首先与教职员工合作，以确保他们能够顺利返回。",
          },
        },

        {
          paragraph: {
            text: "在六月份回到课堂的学生会注意到一些大的变化和新规则。",
          },
        },

        {
          paragraph: {
            text: '"我们可能会错开白天上课的时间，或休息时间，或午餐时间，逐渐交错进行。也确保我们在所有学校都有足够的洗手液，消毒洗手液，"霍夫曼说。',
          },
        },

        {
          paragraph: {
            text: "各区也在考虑在户外和学校其他区域（如图书馆）进行教学，以留出更多的间距。",
          },
        },

        {
          paragraph: {
            text: "当然还将加强卫生清洁。",
          },
        },

        {
          paragraph: {
            text: "霍夫曼说，来自全省各地的校长在周四与教育部召开了电话会议。",
          },
        },

        {
          paragraph: {
            text: "目前还不知道是否会去咨询学生家长是否对孩子重返课堂感兴趣，或者对那些希望返校的学生提出怎样的标准。",
          },
        },

        {
          paragraph: {
            text: "霍夫曼和省长都承认，许多家庭可能担心他们的孩子重返课堂的健康安全问题。",
          },
        },

        {
          paragraph: {
            text: '"我从人们那里听到的当然是他们的担忧。"霍根周三说。',
          },
        },

        {
          paragraph: {
            text: '"但是，我们还有一种强烈的渴望，希望回到一个我们可以让孩子们相互交流的地方，学习的不仅仅是如何读写和如何数，还有如何与他人互动。',
          },
        },

        {
          paragraph: {
            text: "霍根说，有关6月返校的更多细节将在近期内公布。",
          },
        },
        {
          cite: {
            text: "文章由CTV新闻直译            ",
          },
        },
      ],
    },
  },
  {
    id: 60,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "《关于明确新型冠状病毒抗体检测项目有关事项的通知》",
      date: "2020-05-07",
      imageURL: "/images/article/1588829198366524.jpg",
      previewText:
        "各市医疗保障局、卫生健康委员会，各在杭省级公立医院：       根据省委、省政府关于统筹做好新冠肺炎疫情防控和经济社会发展工作部署，经研究，决定设立新型冠状病…",
      content: [
        {
          paragraph: {
            text: "各市医疗保障局、卫生健康委员会，各在杭省级公立医院：",
          },
        },

        {
          paragraph: {
            text: "       根据省委、省政府关于统筹做好新冠肺炎疫情防控和经济社会发展工作部署，经研究，决定设立新型冠状病毒抗体检测项目，并将项目价格和医保支付政策通知如下：",
          },
        },

        {
          paragraph: {
            text: "设立新型冠状病毒IgG抗体（包括总抗体）检测和新型冠状病毒IgM抗体检测项目，试行价格均为40元/次。",
          },
        },

        {
          paragraph: {
            text: "新增项目按甲类管理，医保支付范围限发热门诊或具有新冠肺炎影像学特征的患者。",
          },
        },

        {
          paragraph: {
            text: "本通知自发文之日起执行。执行中遇到问题请及时反馈。",
          },
        },

        {
          paragraph: {
            text: "        附件：新型冠状病毒抗体检测项目试行价格表",
          },
        },

        {
          paragraphRight: {
            text: "浙江省医疗保障局      浙江省卫生健康委员会",
          },
        },

        {
          paragraphRight: {
            text: "                                                                                                2020年4月30日",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1588828963758638.png",
          },
        },
        {
          bParagraph: {
            text: "关于新冠肺炎防治的医保政策，你需要了解这些",
          },
        },

        {
          space: {},
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "一、确诊为新冠肺炎或者疑似新冠肺炎，医生使用了非医保或者超适应症的药品或者服务项目，医保能报销吗？",
          },
        },

        {
          paragraph: {
            text: "能报销。只要符合卫生健康部门制定的确诊及疑似新型冠状病毒感染的肺炎诊疗方案的，药品和服务项目是不受医保目录限制的，都可以纳入医保支付范围，按照甲类结算。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "二、如果在外地确诊为新冠肺炎或者疑似新冠肺炎，会因为在外地就医降低医疗费报销比例吗？",
          },
        },

        {
          paragraph: {
            text: "不会。对异地就医患者实行先救治后结算，不降低报销比例。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "三、确诊为新冠肺炎或者疑似新冠肺炎发生的医疗费，个人要承担一部分吗？",
          },
        },

        {
          paragraph: {
            text: "不需要承担。发生的医疗费在基本医保、大病保险、医疗救助等按规定支付后，个人负担部分由财政给予补助。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "四、医疗机构收治的外地参保新冠肺炎或者疑似新冠肺炎患者，发生的医保费用如何处理？",
          },
        },

        {
          paragraph: {
            text: "异地就医医保支付的费用由就医地医保部门先行垫付，做好异地就医参保患者信息记录和医疗费用记账，疫情结束后全国统一组织清算。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "五、2019年个人垫付的医疗费，原先要求1月份要报销完成，现在还能报吗？",
          },
        },

        {
          paragraph: {
            text: "可以。2019年发生的医疗费用，医保零星报销截止时间全省统一延期至2020年12月31日，大家可以选择疫情控制后办理相关业务。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "六、根据疫情防控要求，应该尽量少出门减少疫情扩散，有慢性病长期在服药的人员可以一次多配点药吗？",
          },
        },

        {
          paragraph: {
            text: "可以。医院可以根据病人实际情况，增加单次处方用药量。比如我省去年出台的12种慢性病种和各市自行增加的病种，所有定点医院的单次处方用药量都可延长到12周，以减少病人到医疗机构配药次数。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "七、长处方服务范围？",
          },
        },

        {
          paragraph: {
            text: "根据目前疫情防控趋势，为避免就诊人员交叉感染，最大限度保护人民群众健康安全以及医务人员执业安全，除原12种慢病外，省级医保参保人员确因疾病治疗需要持续用药的，定点医疗机构在保证医疗安全的情况下可提供长处方服务，开具不超过12周的药品。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "八、省本级开通在线复诊配药的互联网医院有哪几家？",
          },
        },

        {
          paragraph: {
            text: "疫情防控期间，我们目前推出浙大邵逸夫医院、浙江医院、浙江省中医院等3家医院试点互联网复诊配药服务，后续视情况再陆续扩大试点医院范围。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "九、省本级复诊病人在互联网医院配药怎么操作？",
          },
        },

        {
          paragraph: {
            text: "操作流程分五步，具体如下：",
          },
        },

        {
          paragraph: {
            text: "1）登录医院互联网平台（浙大邵逸夫医院入口：微信公众号“浙大邵逸夫医院”、“邵医健康”、支付宝生活号“浙大邵逸夫医院”，浙江医院入口：微信公众号“浙江医院”，浙江省中医院入口：浙里办互联网医院-浙江省中医院、微信公众号“浙江省中医院”）；",
          },
        },

        {
          paragraph: {
            text: "2）接诊医院医生接诊、问诊、根据病情开具处方；",
          },
        },

        {
          paragraph: {
            text: "3）处方产生的医疗费用由接诊医院与省级医保按规定进行结算；",
          },
        },

        {
          paragraph: {
            text: "4）医疗费用结算个人支付部分由参保人员支付给医院；",
          },
        },

        {
          paragraph: {
            text: "5）处方药品由医院委托第三方进行配送。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "十、在线复诊配药操作中有问题怎么办？",
          },
        },

        {
          paragraph: {
            text: "参保人员具体操作中如有问题，可咨询试点医院或浙江省医保中心。3家试点医院的咨询电话分别为：浙大邵逸夫医院4006138688、浙江医院81595030、浙江省中医院87071635，浙江省医保中心咨询电话：85111525。",
          },
        },
      ],
    },
  },
  {
    id: 61,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC省省长宣布五月中旬全省部分重启",
      date: "2020-05-07",
      imageURL: "/images/article/1587667395767154.png",
      previewText:
        '2020年5月6日，根据省长约翰·霍根（JohnHorgan）宣布的一项计划，BC不列颠哥伦比亚省将从5月中旬开始安全恢复该省。      根据BC省的"重启计划"，政府将与公共卫生官员、企业…',
      content: [
        {
          paragraph: {
            text: "2020年5月6日，根据省长约翰·霍根（JohnHorgan）宣布的一项计划，BC不列颠哥伦比亚省将从5月中旬开始安全恢复该省。",
          },
        },

        {
          paragraph: {
            text: '      根据BC省的"重启计划"，政府将与公共卫生官员、企业和劳工组织密切合作，分阶段取消限制，逐步允许更多的社会和经济活动，同时密切监测卫生信息，以尽量减少对公众的风险。',
          },
        },

        {
          image: {
            imageSRC: "/images/article/1588811928950031.jpeg",
          },
        },
        {
          paragraph: {
            text: '"我们的计划将安全放在首位。BC省居民到目前为止已经做出了巨大的牺牲，我们才能开始取消一些限制，"霍根说。"我们将允许活动恢复，因为证据和专家告诉我们，这样做是适当的。通过谨慎和慎重行动，我们将帮助BC省居民进入一个"新常态"，那样我们的社会和经济生活可以恢复更多。',
          },
        },

        {
          paragraph: {
            text: "      BC省重新启动经济活动看起来与其他管辖区不同，因为该省只有少数部门因公共卫生秩序而关闭。而许多其他省份才刚刚达到BC省在整个大流行期间能够维持的安全行动水平。",
          },
        },

        {
          bParagraph: {
            text: "      BC省目前处于重新启动计划的第 1 阶段。第二阶段将于5月中旬开始，包括：",
          },
        },

        {
          bList: [
            { text: "小型社交聚会;" },
            {
              text: "恢复选择性手术和受管制的保健服务，如物理治疗、牙科、脊医和面对面咨询;",
            },

            { text: "省级公园日间开放;" },

            { text: "根据安全运营计划，开设更多非必要业务;" },

            { text: "召回省立法机构，进行定期会议。" },
          ],
        },

        {
          paragraph: {
            text: "      迄今为止，在大流行期间仍然开放的基础企业在WorkSafeBC的支持下安全开展工作。政府将在这一成功经验基础上，支持所有企业重新开放。被命令关闭的部门将被要求与 WorkSafeBC 合作，制定安全重新开放的计划。WorkSafeBC 正在制定针对不同行业的帮助指导，以帮助雇主安全地将工人和客户带回来。任何企业重新启动业务必须确保它符合BC省卫生官员的命令，并符合 WorkSafeBC 提供的职业健康和安全指导。",
          },
        },

        {
          paragraph: {
            text: "      第三阶段开始的目标日期为2020年6月至9月，如果传输速率保持在较低或下降，则包括开放更多业务和服务。",
          },
        },

        {
          paragraph: {
            text: "      只有当COVID-19的威胁通过广泛疫苗接种、广泛成功的治疗、社区免疫证据或同等方法显著减少时，才能实现第四阶段。",
          },
        },

        {
          paragraph: {
            text: "      大多数省级公园将从5月14日起重新开放，仅供日使用。6月1日，包括露营地在内的许多剩余设施将重新开放。少数会吸引大量人群的公园，或重新开放将给附近社区带来健康风险的公园，将继续关闭。",
          },
        },

        {
          paragraph: {
            text: "      所有BC省居民必须强调个人卫生，包括洗手、保持社交距离和生病时呆在家里，这些对整个重启计划至关重要。",
          },
        },

        {
          paragraph: {
            text: "      BC省已经有足够的测试和跟踪能力，并且通过继续增加这些测试和跟踪能力，政府将能够快速响应大多数新冠疫情突发情况并加以解决。这将支持公共安全和增加公众信心。",
          },
        },

        {
          paragraph: {
            text: '      "今天，我们公布了缓慢而安全重启的计划。我们需要保持警惕，以确保我们不断使传输曲线变平，"省长霍根说。"还有更多工作要做。但是，我们将通过共同努力，保护彼此安全，度过这一疫情大流行回到美好的日子“。',
          },
        },
        {
          space: {},
        },

        {
          paragraph: {
            text: "有关WorkSafeBC背景资料，请访问：",
          },
        },
        {
          link: {
            linkText:
              "https://news.gov.bc.ca/files/BG_Support_for_Workplaces_Resuming_Operation.pdf",
            linkURL:
              "https://news.gov.bc.ca/files/BG_Support_for_Workplaces_Resuming_Operation.pdf",
          },
        },
        {
          space: {},
        },
        {
          paragraph: {
            text: "有关学校和公园的背景资料，请访问：",
          },
        },
        {
          link: {
            linkText:
              "https://news.gov.bc.ca/files/BG_Parks_and_Sites_and_In-Class_Learning.pdf",
            linkURL:
              "https://news.gov.bc.ca/files/BG_Parks_and_Sites_and_In-Class_Learning.pdf",
          },
        },

        {
          space: {},
        },
        {
          paragraph: {
            text: "文章直译自BC省政府网站，原文链接：            ",
          },
        },
        {
          link: {
            linkText: "https://news.gov.bc.ca/releases/2020PREM0026-000826#",
            linkURL: "https://news.gov.bc.ca/releases/2020PREM0026-000826#",
          },
        },
      ],
    },
  },
  {
    id: 62,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "虚假申报紧急救助金CERB将被追责 退款外加2.5倍罚款！",
      date: "2020-05-06",
      imageURL: "/images/article/1588739462914484.jpg",
      previewText:
        "联邦及省出台多项疫情救助政策，会计师提醒公众在报税时要如实申报。联邦及卑诗政府已出台多项疫情救助计划，若有人虚假申报，日后被发现追责，不仅要归还所得救助款，还须外加2.5倍罚款。如按约1.2万元联邦个人入息…",
      content: [
        {
          paragraph: {
            text: "联邦及省出台多项疫情救助政策，会计师提醒公众在报税时要如实申报。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588739344574360.jpg",
          },
        },
        {
          paragraph: {
            text: "联邦及卑诗政府已出台多项疫情救助计划，若有人虚假申报，日后被发现追责，不仅要归还所得救助款，还须外加2.5倍罚款。如按约1.2万元联邦个人入息免税门槛，多数获得救助者毋须多缴交个人入息税，受到救助的纳税人要如实申报。",
          },
        },

        {
          paragraph: {
            text: "注册会计师寇鸿久，周一接受《星岛日报》记者访问时表示，个人救助的主要对象，是因疫情而工作收入大幅降低甚至失业者，原本联邦仅针对失业人士救助，后来扩大至月收入不超过1,000元的低收入者。联邦该项名为加拿大紧急救济补贴（CERB）的救助金每周发放500元，自4月6日起接受申请，暂定发放时间为16周。另外一项救助失业者的政策是正在领取就业保险金（EI）人士，如果领取期限将近结束，因疫情爆发无法找到工作，其EI领取期限也会被延长。",
          },
        },

        {
          paragraph: {
            text: "卑诗省3月23日宣布的救助计划，为正在领取EI或符合领取联邦CERB人士，发放1,000元的一次性临时补贴。联邦另外一项补助金是针对专上院校学生，及即将入读高校的中学毕业生做出，无法找到暑期兼职工作的学生，每月可以领取1,250元补助金。",
          },
        },

        {
          paragraph: {
            text: "补助金都是应纳税收入",
          },
        },

        {
          paragraph: {
            text: "寇鸿久说：「这些补助金都是应纳税收入，不过获得者大可不必担心，要如实申报。本年度联邦及卑诗省的个人入息税免税门槛分别为12,069元及10,062元，按这个标准计算，绝大多数收入大幅降低或失业者，收入不会达到这个门槛。」",
          },
        },

        {
          paragraph: {
            text: "至于协助小生意东主方面，联邦政府原来公布给予雇主员工总薪金的10%作为补偿，后来很多雇主表示不足够，联邦马上将该标准提高到75%。",
          },
        },

        {
          paragraph: {
            text: "另外，受到疫情严重打击的餐饮及旅游业，很多餐厅及旅行社现金流出现严重困难。联邦对此给予4万元免息贷款，而且如有需要在2022年底前还可免还1万元，若此后生意恢复缓慢，联邦也承诺仅会收取极低的利息。",
          },
        },

        {
          paragraph: {
            text: "而联邦也将原来4月30日的报税及缴交欠税的期限，推迟至6月1日截止，9月1日截止缴交欠税，这也是前所未有的。",
          },
        },

        {
          paragraph: {
            text: "寇鸿久表示，报税及缴交税款期限的宽限，对报税者已经足够。其实，本次救助虽然有联邦及省多项，但报税时也只不过是多填写几个简单表格而已，目前电子报税软件20到30元左右就能买到，报税本身并未因政府救助增加复杂性及困扰。",
          },
        },
        {
          space: {},
        },
        {
          citeMid: {
            text: "2020年5月05日    来源: 星岛环球网            ",
          },
        },
      ],
    },
  },
  {
    id: 63,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "今日立夏",
      date: "2020-05-05",
      imageURL: "/images/article/1588646251937763.jpg",
      previewText:
        "过了荼醾与素馨一春风雨欠追寻却从立夏晴多日策杖闲来看绿阴今日8时51分迎来夏季的第一个节气“立夏”春日渐远，夏日初来天文学中立夏是夏季开始的标志蛙声蝉鸣，草长莺飞绿肥红瘦，云卷云舒万物开始奋力生长一年中…",
      content: [
        {
          image: {
            imageSRC: "/images/article/1588646251937763.jpg",
          },
        },
        {
          pMid: {
            text: "过了荼醾与素馨",
          },
        },

        {
          pMid: {
            text: "一春风雨欠追寻",
          },
        },

        {
          pMid: {
            text: "却从立夏晴多日",
          },
        },

        {
          pMid: {
            text: "策杖闲来看绿阴",
          },
        },

        {
          space: {},
        },
        {
          pMid: {
            text: "今日8时51分",
          },
        },

        {
          pMid: {
            text: "迎来夏季的第一个节气“立夏”",
          },
        },

        {
          pMid: {
            text: "春日渐远，夏日初来",
          },
        },

        {
          pMid: {
            text: "天文学中",
          },
        },

        {
          pMid: {
            text: "立夏是夏季开始的标志",
          },
        },

        {
          space: {},
        },
        {
          pMid: {
            text: "蛙声蝉鸣，草长莺飞",
          },
        },

        {
          pMid: {
            text: "绿肥红瘦，云卷云舒",
          },
        },

        {
          pMid: {
            text: "万物开始奋力生长",
          },
        },

        {
          pMid: {
            text: "一年中最热闹的季节就要来了",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588646264330389.jpeg",
          },
        },

        {
          pMid: {
            text: "立夏",
          },
        },

        {
          pMid: {
            text: "是绿荫渐浓、繁花茂盛的季节",
          },
        },

        {
          pMid: {
            text: "寒去暑来，赏花郊游",
          },
        },

        {
          pMid: {
            text: "所到之处无不让人欣喜",
          },
        },

        {
          space: {},
        },
        {
          pMid: {
            text: "看那天地间的水鸟",
          },
        },

        {
          pMid: {
            text: "或浅水觅食，或展翅翱翔",
          },
        },

        {
          pMid: {
            text: "走近池塘侧耳细听",
          },
        },

        {
          pMid: {
            text: "阵阵蛙鸣送来夏天的问候",
          },
        },

        {
          pMid: {
            text: "为游人添得几许雅兴",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1588646276605898.jpeg",
          },
        },
        {
          pMid: {
            text: "立夏",
          },
        },

        {
          pMid: {
            text: "是颇为重要的农时",
          },
        },

        {
          pMid: {
            text: "古汉语中，“夏”有大的意思",
          },
        },

        {
          pMid: {
            text: "春日播种的植物至此已直立长大",
          },
        },

        {
          space: {},
        },
        {
          pMid: {
            text: "夏季的早间空气清和",
          },
        },

        {
          pMid: {
            text: "适宜晨起劳作",
          },
        },

        {
          pMid: {
            text: "早稻插秧、茶树采摘",
          },
        },

        {
          pMid: {
            text: "都已排上农家人的日程",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588646294922233.jpeg",
          },
        },
        {
          pMid: {
            text: "立夏",
          },
        },

        {
          pMid: {
            text: "也是新鲜果蔬上市的时候",
          },
        },

        {
          pMid: {
            text: "“立夏见三新”",
          },
        },

        {
          pMid: {
            text: "“九荤十三素”",
          },
        },

        {
          pMid: {
            text: "不少地方有“尝鲜”的传统",
          },
        },

        {
          space: {},
        },
        {
          pMid: {
            text: "樱桃红了，梅子青了",
          },
        },

        {
          pMid: {
            text: "枇杷黄了，桃子熟了",
          },
        },

        {
          pMid: {
            text: "享受清爽的夏天",
          },
        },

        {
          pMid: {
            text: "就从享受立夏时的美味开始",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588646329102892.jpeg",
          },
        },

        {
          pMid: {
            text: "今年的立夏",
          },
        },

        {
          pMid: {
            text: "恰逢劳动节假期",
          },
        },

        {
          pMid: {
            text: "一度冷清的城市",
          },
        },

        {
          pMid: {
            text: "正在拥抱期待已久的人流",
          },
        },

        {
          space: {},
        },
        {
          pMid: {
            text: "连绵不息的车流连成缎带",
          },
        },

        {
          pMid: {
            text: "五颜六色的霓虹点亮街道",
          },
        },

        {
          pMid: {
            text: "轻松漫步的游客们",
          },
        },

        {
          pMid: {
            text: "见证着夏日最初的模样",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588646346705851.jpeg",
          },
        },
        {
          pMid: {
            text: "春日复苏，夏日生长",
          },
        },

        {
          pMid: {
            text: "伴随立夏而来的",
          },
        },

        {
          pMid: {
            text: "正是万物勃发之势",
          },
        },

        {
          pMid: {
            text: "让我们与春日作别",
          },
        },

        {
          pMid: {
            text: "在夏季静默生长，奋发向上",
          },
        },
        {
          space: {},
        },
        {
          citeMid: {
            text: "文章摘自人民日报",
          },
        },
      ],
    },
  },
  // {
  //   id: 64,
  //   categoryClass: "information",
  //   subCategoryClass: "placeholder",
  //   parentDirectory: "info",
  //   category: "信息资讯",
  //   subcategory: "中国新闻",
  //   subDirectory: "/info/china",
  //   article: {
  //     title: "奋进正当时！习近平与青年说 @青年人，总书记倡导这样奋斗",
  //     date: "2020-05-04",
  //     imageURL: "/images/article/1588568351433426.jpg",
  //     previewText:
  //       "联播+丨奋进正当时！习近平与青年说　  2020年是我国纪念“五一”国际劳动节72周年，纪念“五四”运动101周年，也是决胜决战脱贫攻坚、全面建成小康社会的收官之年。但今年的“五一”不寻常。全国各地有序推进…",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "2020年是我国纪念“五一”国际劳动节72周年，纪念“五四”运动101周年，也是决胜决战脱贫攻坚、全面建成小康社会的收官之年。但今年的“五一”不寻常。全国各地有序推进各类企业复工复产，各行各业的劳动者立足岗位，以实际行动在这个特殊时期诠释着劳模精神。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　“五一”放假期间又适逢“五四”青年节。自新冠肺炎疫情发生以来，众多“90后”、“95后”组成战“疫”一线的青年突击队，发扬创新精神，不逃避不畏惧，以赤子之心回报国家和人民，以无私奉献诠释青春担当。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　青年是祖国的未来、民族的希望。习近平总书记一直以来都十分重视青年工作，他常常鼓励青年追求梦想、努力奋斗。“青年最富有朝气、最富有梦想”“好儿女志在四方，有志者奋斗无悔”“中华民族伟大复兴终将在广大青年的接力奋斗中变为现实”。总书记的谆谆教诲犹如一本成长指南，引领新时代青年走好人生之路。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　央视网《联播+》梳理习近平总书记对新一代青年的深情寄语，让我们牢记总书记嘱托，激扬青春、逐梦前行！",
  //         },
  //       },

  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417894580560.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417901844885.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417906313078.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417910171208.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417914431474.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417918681049.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417924327250.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417929031861.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417933034210.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417937276194.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417942608154.jpg",
  //         },
  //       },
  //       {
  //         pMid: {
  //           text: "奋斗：青春的逆行",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200503808101595001.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "一把锄头扛在肩，一支铁锹培新土。一个动作，跨越了三十年。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　黑白老照片拍摄于1989年，时任宁德地委书记的习近平带领地直机关干部参加义务劳动，他一把锄头扛在肩上，大步走在田埂上。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　彩色照片拍摄于2019年。党的十八大以来，习近平总书记每到春季都身体力行参加首都义务植树活动。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　熟悉的姿态，不变的情怀。在陕北高原的农家窑洞、在河北正定的街头村巷、在福建厦门的改革前沿……他向着一线、向着艰难、向着挑战逆行，是勇敢的逆行者、青年人的楷模。",
  //         },
  //       },
  //       {
  //         pMid: {
  //           text: "@青年人，总书记倡导这样奋斗",
  //         },
  //       },

  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417459311415.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417464927975.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417469097037.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417473867622.jpg",
  //         },
  //       },
  //       {
  //         image: {
  //           imageSRC: "/images/article/W020200504417478210962.jpg",
  //         },
  //       },
  //       {
  //         paragraph: {
  //           text: "祝大家五四青年节快乐",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "加拿大温州同乡总会",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "2020年5月3日",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: 65,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "难以置信！海归女2小时被骗1919万…",
      date: "2020-05-03",
      imageURL: "/images/article/1588541813680437.jpg",
      previewText:
        "23岁的林女士从国外留学回长沙不到半年在财务工作岗位上短短2个小时竟然被骗走1919万元！湖南历史上金额最大的一起电信网络诈骗案到底是怎么发生的？5月1日，长沙市公安局召开新闻通报会，通报了包括此案在内的10起…",
      content: [
        {
          pMidBold: {
            text: "23岁的林女士",
          },
        },

        {
          pMidBold: {
            text: "从国外留学回长沙不到半年",
          },
        },

        {
          pMidBold: {
            text: "在财务工作岗位上",
          },
        },

        {
          pMidBold: {
            text: "短短2个小时",
          },
        },

        {
          pMidBold: {
            text: "竟然被骗走1919万元！",
          },
        },

        {
          pMidBold: {
            text: "湖南历史上金额最大的",
          },
        },

        {
          pMidBold: {
            text: "一起电信网络诈骗案",
          },
        },

        {
          pMidBold: {
            text: "到底是怎么发生的？",
          },
        },
        {
          space: {},
        },
        {
          cite: {
            text: "5月1日，长沙市公安局召开新闻通报会，通报了包括此案在内的10起典型网络诈骗典型案例及整体发案情况。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/640.jpeg",
          },
        },
        {
          pMid: {
            text: "▲ 诈骗人员伪造的最高人民检察院网站。警方供图            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588541418672074.jpeg",
          },
        },
        {
          paragraph: {
            text: "2019年7月，林女士从国外留学回到长沙，成为湖南某大型企业财务管理人员。",
          },
        },

        {
          paragraph: {
            text: "2019年12月21日下午，林女士接到自称来自福建公安机关的电话，称其涉嫌一桩特大洗钱案，已被公安机关列为通缉对象，并向其出示了一张网络逮捕令。在对方的诱导下，林女士按要求进入其提供的一个“最高人民检察院”的虚假网站，下载了网站中的“资金清算软件”。",
          },
        },

        {
          paragraph: {
            text: "随后，林女士在该软件页面对应位置输入了公司账户账号和支付密码，并按对方要求将公司对公账户的U盾插入电脑。对方以资金清算需保密为由，要求其关闭电脑屏幕，刘女士照做后，短短两个小时，对方就分45次将公司账上的1919万元全部转走。",
          },
        },

        {
          paragraph: {
            text: "经查，该犯罪团伙诱导林女士下载的所谓资金清算软件实则是一款名叫Teamviewer的远程控制软件，骗子正是通过这个软件远程操控了刘女士的办公电脑直接实施转账。",
          },
        },

        {
          paragraph: {
            text: "目前，案件正在进一步侦办之中。该案是湖南迄今为止涉案金额最大的一起电信网络诈骗案。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588541433336838.jpeg",
          },
        },
        {
          paragraph: {
            text: "网友评论",
          },
        },
        {
          image: {
            imageSRC: "/images/article/640.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/640.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/640.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588541472161528.jpeg",
          },
        },
        {
          paragraph: {
            text: "2020年3月，邓女士在百合网上认识了一名自称某公司高管的王姓男子，并迅速确立恋爱关系。",
          },
        },

        {
          paragraph: {
            text: "双方网恋大约一周后，该名王姓男子告诉邓女士自己的表兄弟在一家赌博网站担任技术工程师，无意中发现了网站的漏洞，只要投钱就能获得高额回报，并向邓女士展示了自己账户的盈利情况，蛊惑其趁漏洞还没被发现之前赶紧投资赚钱。",
          },
        },

        {
          paragraph: {
            text: "邓女士在王姓男子的一再诱导下先后投入74万元（其中42万元来自网贷），当邓女士想提现的时才发现，平台显示赚钱但无法提现，这才发现自己被骗。",
          },
        },

        {
          paragraph: {
            text: "该案是2019年以来高发的一类电信网络诈骗案件。",
          },
        },

        {
          bParagraph: {
            text: "警方提醒",
          },
        },

        {
          paragraph: {
            text: "网上交友务必认真核实对方身份，不要被对方的花言巧语所迷惑。不要轻易相信网友所说的“稳赚不赔”“高回报”之类的赚钱谎言。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588541480123553.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588541496726190.jpeg",
          },
        },
        {
          paragraph: {
            text: "2020年4月16日，刘女士接到一个自称淘宝客服的电话，称其最近购买的婴儿纸尿裤质量检测不合格，对此表示万分抱歉，将以十倍的价格进行赔偿，并请刘女士关注一个名叫“极速理赔1168”的微信公众号办理退款和理赔。",
          },
        },

        {
          paragraph: {
            text: "刘女士点击进入公众号后，跳转到了一个支付宝的界面，她按要求填写完自己的支付宝的账户和密码进入后，随即又转到一了填写退款银行和个人信息的页面，刘女士按要求填写完相关信息后，手机便收到了一个短信验证码，便在跳转的页面中填写了短信验证码，但页面提示“验证码超时，请重新获取”，随后刘女士的手机收到了一条扣款44950元的短信。",
          },
        },

        {
          paragraph: {
            text: "经查，该微信公众号其实是一个钓鱼网站的链接，所呈现的支付宝页面是假的，刘女士填写的个人信息和银行卡信息通过钓鱼网站被骗子获取，从而盗刷了刘女士银行卡中的全部余额。目前该公众号已被封停。",
          },
        },

        {
          bParagraph: {
            text: "警方提醒",
          },
        },

        {
          paragraph: {
            text: "接听任何自称客服的电话，切勿轻信，建议通过官方客服电话进行核实确认，同时不要随意点击陌生链接或关注不明来路的微信公众号，切勿在陌生网站填写个人隐私信息或银行卡信息。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588541505892306.jpeg",
          },
        },
      ],
    },
  },
  {
    id: 66,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "照“靓”温州城！2020年“月光经济”产业、建设项目清单出炉！",
      date: "2020-05-03",
      imageURL: "/images/article/1588485101298420.png",
      previewText:
        "从温州市“大建大美”领导小组办公室获悉，今年我市“月光经济”产业、建设项目清单出炉，所涉项目可助力我市系统谋划包括“夜宴”“夜游”“夜购”“夜演”在内的“‘月光经济’四部曲”，培育我市城市经济的新…",
      content: [
        {
          paragraph: {
            text: "从温州市“大建大美”领导小组办公室获悉，今年我市“月光经济”产业、建设项目清单出炉，所涉项目可助力我市系统谋划包括“夜宴”“夜游”“夜购”“夜演”在内的“‘月光经济’四部曲”，培育我市城市经济的新增长点。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/00300654859_5de973e9.png",
          },
        },
        {
          paragraph: {
            text: "赵用摄",
          },
        },
        {
          image: {
            imageSRC: "/images/article/00300654860_4f8db148.jpg",
          },
        },
        {
          paragraph: {
            text: "今年我市将加速推进28个“月光经济”产业项目，其中特色餐饮、文化旅游、夜间购物项目各6个，体育健身项目7个，研学培训项目3个。",
          },
        },

        {
          paragraph: {
            text: "　　属“夜宴”范畴的滨江商务区海鲜夜市系特色餐饮项目中的代表之一，该项目位于滨江商务区CBD核心区，计划年内建成开业；五马街后巷改造提升工程计划8月完工，小吃店铺11月开业；南塘夜市将打造为集美食、生活、创意、时尚为一体休闲街区。",
          },
        },

        {
          paragraph: {
            text: "　　在“夜游”“夜购”等其他方面，今年我市还将推出不夜瓯江、月色塘河、遇见五马3条精品月光旅游线路，联动朔门历史文化街区整体开发，启动海坦广场整体改造。",
          },
        },

        {
          paragraph: {
            text: "　　此外，全年鼓励五马步行街、米房创意街区、大型商场、超市、综合体延长营业时间，引导超市建设24小时便利店。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/00300654861_68779171.png",
          },
        },
        {
          pMid: {
            text: "杨冰杰摄",
          },
        },
        {
          image: {
            imageSRC: "/images/article/00300654862_3c95828e.jpg",
          },
        },
        {
          paragraph: {
            text: "今年我市“月光经济”建设项目共40个，其中36个项目位于市区，4个项目位于永嘉县。",
          },
        },

        {
          paragraph: {
            text: "　　位于市区的36个项目，包括滨江商务区城市阳台工程、鹿城“渔人码头”项目、温州东部时尚中心项目、温瑞塘河瓯海段沿河民办博物馆群项目、瓯海梧田老街改造提升工程等。",
          },
        },

        {
          paragraph: {
            text: "　　其中，计划年内进场施工的鹿城“沙汀渔火”项目计划在望江西路南侧翠微山广场至西城路沿线打造温州特色餐饮排档；在望江西路南侧西城路至勤奋路段打造夜市跳蚤市场；在东瓯大桥以东到郭公山段沿江防洪堤公园上打造露天酒吧、咖啡茶吧休闲带。",
          },
        },

        {
          paragraph: {
            text: "　　另外，4个位于永嘉县的项目包括永嘉三江温乡城商业综合体工程、永嘉瓯北夜游码头项目等。",
          },
        },

        {
          cite: {
            text: "文章转载自温州网",
          },
        },
      ],
    },
  },
  {
    id: 67,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "加拿大全面禁止国民持有多达1500种攻击性武器 今日生效",
      date: "2020-05-02",
      imageURL: "/images/article/1588385792600826.jpg",
      previewText:
        '加拿大联邦政府今日宣布在加拿大全面禁止国民持有军用级"突击式"武器，立刻禁止持牌枪支拥有者出售、运输、进口或使用这类武器，被禁止的枪支品类多达1500种。已经拥有这些攻击性武器的枪支拥有者将被允许拥有2年的…',
      content: [
        {
          paragraph: {
            text: '加拿大联邦政府今日宣布在加拿大全面禁止国民持有军用级"突击式"武器，立刻禁止持牌枪支拥有者出售、运输、进口或使用这类武器，被禁止的枪支品类多达1500种。',
          },
        },

        {
          paragraph: {
            text: "已经拥有这些攻击性武器的枪支拥有者将被允许拥有2年的豁免权，允许他们仍然拥有这些枪支，请查阅具体条款。业主也可以通过回购计划获得补偿，尽管这些选项的细节尚未公布。",
          },
        },

        {
          paragraph: {
            text: "此类枪支拥有者必须在 2022 年 4 月前依法处置枪支。届时仍未处置违禁枪支的人可能会根据《刑法》受到制裁。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1588385703996604.png",
          },
        },
        {
          paragraph: {
            text: "这项禁令包括过去加拿大枪击案中使用的枪支，例如：            ",
          },
        },

        {
          list: [
            {
              text: "1989年在蒙特利尔的Ecole理工学院大屠杀中使用的Ruger Mini-14，政府估计目前在加拿大有16,860支正在流通;",
            },
            {
              text: "M14半自动步枪，2014年蒙克顿枪击案中被使用，政府估计在加拿大有5,230人持有;              ",
            },
            {
              text: "在道森学院枪击案中使用的贝雷塔CX4风暴，政府估计目前大约有1,510个支在流通;              ",
            },
            {
              text: "持枪者试图在魁北克清真寺枪击案中使用CSA-VZ-58，政府称加拿大有11,590人持有。              ",
            },
          ],
        },

        {
          bParagraph: {
            text: "武器的完整清单已在网上公布（点击可以查看完整列表）。            ",
          },
        },
      ],
    },
  },
  {
    id: 68,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "祝愿温州乡亲们五一国际劳动节快乐",
      date: "2020-05-01",
      imageURL: "/images/article/1588291832106364.jpg",
      previewText:
        "远山含黛，鲜花怒放，温哥华姹紫嫣红的春天印照着五月湛蓝的天空！不知不觉，“五一”国际劳动节踏着岁月风尘悄然临至.......      这是一个与以往不同的五一国际劳动节，虽然…",
      content: [
        {
          paragraph: {
            text: "      远山含黛，鲜花怒放，温哥华姹紫嫣红的春天印照着五月湛蓝的天空！不知不觉，“五一”国际劳动节踏着岁月风尘悄然临至.......            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588291910954495.jpg",
          },
        },
        {
          paragraph: {
            text: "这是一个与以往不同的五一国际劳动节，虽然乡亲们“每逢佳节倍思亲”，但在“疫情”下，我们加拿大温州同乡总会这个大家庭还是决定乡亲们暂时不能团聚......“保持社交距离”。",
          },
        },

        {
          bParagraph: {
            text: "      在此五一佳节来临之际，会长朱建国先生代表加拿大温州同乡总会理事会的全体成员，祝我们温州乡亲们节日快乐，阖家幸福！同时也向在“抗疫”期间为温州同乡总会募捐活动慷慨解囊、不辞辛苦、无私奉献的温州乡亲们致以节日的问候、诚挚的感谢和崇高的敬意！",
          },
        },

        {
          paragraph: {
            text: "      由于“疫情”，我们加拿大温州同乡总会错过了很多相聚在这个大家庭的机会。但是，乡亲们对大家庭的热爱和信任依旧！",
          },
        },

        {
          paragraph: {
            text: "      自新冠肺炎疫情蔓延以来，各位居住在温哥华的乡亲们，心系祖国，情系居住地，踊跃捐款捐物，迅速行动，用大爱真情支援国内和居住地的疫情防控；同时，加拿大温州同乡总会积极发挥民间外交生力军的作用，不遗余力地向世界传播祖国抗击疫情的正能量，发挥我们温州人自强自尊、奉献社会搭建中外民间抗疫桥梁的纽带作用，做出了加拿大温州人社团在居住国和祖国面对全人类疫情期间独特的贡献！",
          },
        },

        {
          paragraph: {
            text: "      加拿大温州同乡总会的每一份成绩单都写满了各位乡亲精诚合作、团结一致的美好诗篇！",
          },
        },

        {
          paragraph: {
            text: "      在五一国际劳动节来临之际让我们怀着美好的愿望，期待疫情早日结束，让欢歌笑语再次回荡在加拿大温州同乡总会这个大家庭里.........",
          },
        },

        {
          paragraphRight: {
            text: "加拿大温州同乡总会",
          },
        },

        {
          paragraphRight: {
            text: "二0二0年四月三十日",
          },
        },
      ],
    },
  },
  {
    id: 69,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "大温地区草坪浇水规定于5月1日生效",
      date: "2020-04-29",
      imageURL: "/images/article/1588192914971890.jpg",
      previewText:
        "大温地区2020年度草坪浇水条例于5月1日（星期五）生效，并持续到10月15日星期四。这些限制是为了保护我们地区高质量的经处理的饮用水，并确保在雨季有充足的水储备。我们的用水量在夏季和初秋可能会增加50%，这主要…",
      content: [
        {
          paragraph: {
            text: "大温地区2020年度草坪浇水条例于5月1日（星期五）生效，并持续到10月15日星期四。这些限制是为了保护我们地区高质量的经处理的饮用水，并确保在雨季有充足的水储备。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588193390584979.jpg",
          },
        },

        {
          paragraph: {
            text: "我们的用水量在夏季和初秋可能会增加50%，这主要是由于草坪浇水。全地区的浇水法规是帮助我们明智地使用饮用水的有效方法。",
          },
        },

        {
          paragraph: {
            text: "浇水法规是大温哥华地区饮用水保护计划的一部分。第一阶段限水措施将于5月1日生效，根据区域内的供水情况，可根据需要实施更严格的限水阶段。",
          },
        },

        {
          paragraph: {
            text: "第 1 阶段草坪浇水条例如下：",
          },
        },

        {
          bParagraph: {
            text: "住宅草坪浇水允许：",
          },
        },

        {
          list: [
            {
              text: "偶数地址：周三和周六上午4点-9点",
            },
            {
              text: "奇数地址：周四和周日上午4点-9点",
            },
            {
              text: "给树木、灌木、装饰植物和花卉浇水（不包括食用植物）：任何一天从凌晨4点到9点使用洒水器之间; 可随时使用手持浇水或滴灌。所有软管必须具有自动关闭装置。",
            },
          ],
        },

        {
          space: {},
        },
        {
          bParagraph: {
            text: "允许非住宅草坪浇水：",
          },
        },

        {
          list: [
            {
              text: "偶数地址：星期一上午1时至6时，星期五上午4时至9时。",
            },
            {
              text: "奇数地址：星期二上午1时至6时，星期五上午4时至9时",
            },
            {
              text: "树木、灌木、装饰性植物和花卉（不包括食用植物）可以在一周中的任何一天任何时间使用手工浇水或滴灌，或从上午1点到9点之间使用洒水器浇水。所有软管必须具有自动关闭装置。",
            },
          ],
        },

        {
          space: {},
        },
        {
          bParagraph: {
            text: "食用植物可以随时浇水。",
          },
        },

        {
          paragraph: {
            text: "第一阶段浇水限制是确保该地区居民明智地使用饮用水的有效方法，并有可能延迟或避免对更高、更严格的用水阶段的需求。夜间，当居民需要水用于准备晚餐、洗碗、洗衣和淋浴等家庭用水时，对水的需求最高。清晨浇灌草坪有助于减少对供水系统的峰值需求。",
          },
        },

        {
          paragraph: {
            text: "此外，限水是减少非优先用水（如洗涤车辆或车道等不可渗透表面）的绝佳提醒。这些限制仅适用于使用经过处理的饮用水/自来水，不适用于使用雨水、灰水（来自浴室、水槽、洗衣机和其他厨房用具的废水）或任何形式的再生水。",
          },
        },

        {
          paragraph: {
            text: "有关大温哥华的草坪浇水法规、节水草坪护理和日常节水提示的更多信息和视频，请访问：",
          },
        },
        {
          link: {
            linkText:
              "www.metrovancouver.org/services/water/water-conservation/Pages/default.aspx。",
            linkURL:
              "www.metrovancouver.org/services/water/water-conservation/Pages/default.aspx。",
          },
        },

        {
          cite: {
            text: "文章转载自大温哥华政府网站。",
          },
        },

        {
          link: {
            linkText:
              "http://www.metrovancouver.org/services/water/water-conservation/lawn-sprinkling/Pages/default.aspx",
            linkURL:
              "http://www.metrovancouver.org/services/water/water-conservation/lawn-sprinkling/Pages/default.aspx",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588193464276338.jpg",
          },
        },
      ],
    },
  },
  {
    id: 70,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "防疫健康码国际版程序更新的通知",
      date: "2020-04-29",
      imageURL: "/images/article/1588133828596383.jpeg",
      previewText:
        "为进一步直观体现填报结果，外交部领事司对防疫健康码国际版微信小程序进行了优化升级，增设了不同颜色二维码。外交部再次提醒，在当前新冠肺炎疫情全球蔓延的情况下，海外中国公民要充分评估…",
      content: [
        {
          paragraph: {
            text: "为进一步直观体现填报结果，外交部领事司对防疫健康码国际版微信小程序进行了优化升级，增设了不同颜色二维码。",
          },
        },

        {
          paragraph: {
            text: "外交部再次提醒，在当前新冠肺炎疫情全球蔓延的情况下，海外中国公民要充分评估国际旅行可能带来的交叉感染风险，非必要不旅行。近期确需从有关国家回国的海外中国公民应严格按照中国政府有关公告要求，通过健康码国际版小程序如实填报个人信息。请大家密切留意每次填报后的健康码状态（包括相应颜色、有效连续填报起始时间及是否出现飞机标识等），如需重新规划行程，请尽快联系航空公司办理退票和改签手续。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1588133960227556.jpeg",
          },
        },
        {
          paragraph: {
            text: "转载自中国外交部领事司            ",
          },
        },
      ],
    },
  },
  {
    id: 71,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "最新！5月中国国国际航班计划出炉",
      date: "2020-04-28",
      imageURL: "/images/article/1588097705168173.jpg",
      previewText:
        "近几日，国内各航空公司陆续公布了5月最新的国际航班计划。从各航司的航班计划中可以看出，由于严峻的海外疫情和五一出境游热度过低，国内航司将继续延长“五个一”的政策直到5月31日，即一家航空公司在一个国家保留…",
      content: [
        {
          paragraph: {
            text: "近几日，国内各航空公司陆续公布了5月最新的国际航班计划。从各航司的航班计划中可以看出，由于严峻的海外疫情和五一出境游热度过低，国内航司将继续延长“五个一”的政策直到5月31日，即一家航空公司在一个国家保留一条航线，一周最多有一个航班。",
          },
        },

        {
          space: {},
        },
        {
          paragraph: {
            text: "目前， 中国往返加拿大航班有6个航线，其中温哥华4个，多伦多两个。",
          },
        },

        {
          space: {},
        },
        {
          paragraph: {
            text: "中国国际航空：",
          },
        },

        {
          paragraph: {
            text: "自2020年5月1日0时至5月31日24时，国航每周可执行国际航线共计22条，其中涉及北京分流航线17条，浦东相关航线3条，成都相关航线2条，具体航班计划及关于北京地区的第一入境点计划如下：",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1588098355749485.png",
          },
        },
        {
          paragraph: {
            text: "东方航空：",
          },
        },

        {
          paragraph: {
            text: "自2020年5月3日0时至5月30日24时，东航、上航每周可执行国际航线共20条，其中涉及上海航线16条，昆明航线3条，南京航线1条。具体航班计划如下：",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1588098656723346.png",
          },
        },
        {
          paragraph: {
            text: "南方航空：",
          },
        },

        {
          paragraph: {
            text: "自5月3日0时至5月30日24时，南航每周可执行国际航线共计19条，其中涉及广州航线16条，沈阳航线2条，乌鲁木齐航线1条，具体航班计划如下：",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-3.png",
          },
        },
        {
          paragraph: {
            text: "海南航空：            ",
          },
        },
        {
          paragraph: {
            text: "自2020年5月1日0时至5月31日24时，海南航空每周可执行国际航线2条，具体计划和第一入境分流点如下：            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-4.png.jpeg",
          },
        },
        {
          paragraph: {
            text: "四川航空：",
          },
        },
        {
          paragraph: {
            text: "自5月3日至6月30日，川航计划每周执行国际航线共计3条，具体航班计划如下：            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-5.png",
          },
        },
        {
          paragraph: {
            text: "厦门航空：            ",
          },
        },
        {
          paragraph: {
            text: "自5月3日至5月30日，厦航计划每周执行国际及地区航线共计7条，具体航班计划如下：            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-6.png",
          },
        },
        {
          paragraph: {
            text: "买票/登机政策多，务必注意",
          },
        },

        {
          paragraph: {
            text: "随着国外疫情的扩散，以及回国航班的锐减，国际机票的价格水涨船高，回国机票从2万多的经济舱全价到10万元的实际成交价，背后经过了层层加价的多次转手，甚至加价方都不一定是拥有正规牌照的机票代理，而是拥有客户资源的黄牛。",
          },
        },

        {
          paragraph: {
            text: "中国民航局4月17日披露，为进一步加强疫情期间国际机票销售管理，确保国际航空运输市场平稳有序，切实维护旅客的合法权益，民航局下发《关于进一步明确疫情期间国际机票销售有关问题的通知》，要求航空公司对国际机票全部采取直销模式，确保公开透明、明码标价，杜绝中间环节倒票、炒票行为。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-7.png.jpeg",
          },
        },
        {
          paragraph: {
            text: "《通知》要求，自通知发布之日起，航空公司在国际航线“五个一”(一航空公司、一个国家、一条航线、一周、一个航班)疫情防控政策实施期间，要加强国际机票销售渠道管理，对国际机票全部采取直销模式。同时，对已由代理企业销售的国际机票要加强管控，严禁换票，订座及购票后禁止更改旅客姓名，以杜绝中间环节倒票、炒票行为。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-8.png.jpeg",
          },
        },
        {
          paragraph: {
            text: "《通知》指出，航空公司要严格落实市场主体责任，严格执行国际运价政策，确保公开透明、明码标价。同时，要进一步加强内部管理，杜绝内部员工的违规操作行为。民航业主管部门将会同市场监管等部门，依法严肃查处国际运价违法违规行为，并依据《民航行业信用管理办法(试行)》实施信用惩戒，加大市场监管力度。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-9.png.jpeg",
          },
        },
        {
          paragraph: {
            text: "从加拿大回中国，需提前14天每日填报健康信息，否则无法登机",
          },
        },
        {
          paragraph: {
            text: "4月7日，中国民用航空局、中华人民共和国海关总署联合发布关于中国籍旅客乘坐航班回国前填报防疫健康信息的公告。公告指出，为减少疫情跨境传播，从意大利、美国、西班牙、德国、伊朗、法国、韩国、瑞士、英国、荷兰、奥地利、比利时、挪威、葡萄牙、瑞典、澳大利亚、巴西、土耳其、马来西亚、丹麦、加拿大、以色列、捷克、爱尔兰、菲律宾、泰国26个国家已购买回国机票的中国籍旅客需要提前填报防疫健康信息。旅客未按要求填报的，将无法登机；填报虚假信息，将导致行程受阻，并须承担相应法律责任。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-10.png.jpeg",
          },
        },
        {
          paragraph: {
            text: "具体要求如下：            ",
          },
        },
        {
          paragraph: {
            text: "一、自2020年4月8日起，已购票旅客在登机前需要提前通过防疫健康码国际版微信小程序，逐日填报个人资料、健康状况、近期出行情况等信息。特殊情况可由他人代为填报。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-11.png",
          },
        },
        {
          paragraph: {
            text: "二、2020年4月8日至4月22日为过渡期。过渡期内乘坐航班的中国籍旅客，应于4月8日起连续逐日填报。过渡期（4月23日）后乘坐航班的，应于登机前第14天起连续逐日填报。",
          },
        },

        {
          paragraph: {
            text: "三、未按上述要求填报的，将无法登机。旅客填报虚假信息，将导致行程受阻，并须承担相应法律责任。",
          },
        },

        {
          paragraph: {
            text: "从中国到加拿大，必须提交自我隔离计划",
          },
        },

        {
          paragraph: {
            text: "从4月15日凌晨开始，所有从海外入境加拿大的人都必须有一个可信的隔离计划，否则将被要求在指定酒店进行为期14天的强制隔离。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587742573968-12.png.jpeg",
          },
        },
        {
          paragraph: {
            text: "根据新规，所有入境者要向加拿大海关提交一份自我隔离计划，由海关决定计划是否合格，其中必须上报将要隔离住处的详细信息，并承诺直接从机场到达目的地，中间不作任何停留，如果入境者没有隔离计划、或在加拿大没有定住处，或将要自行隔离的住处有老年人居住，都将被海关要求去酒店隔离。          ",
          },
        },
        {
          cite: {
            text: "转载自温哥华港湾          ",
          },
        },
      ],
    },
  },
  {
    id: 72,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title: "秋冬新冠和流感会叠加！张文宏：今年我一定会去打流感疫苗",
      date: "2020-04-27",
      imageURL: "/images/article/1588022599864368.jpg",
      previewText:
        "今年新冠病毒疫情爆发后　　越来越多的人开始关心疫苗　　新冠肺炎疫苗何时能上市？　　是不是人人都要打？　　成人、老人、儿童需要打哪些疫苗？　　上海华山医院感染科主任张文宏教授…",
      content: [
        {
          paragraph: {
            text: "今年新冠病毒疫情爆发后",
          },
        },

        {
          paragraph: {
            text: "　　越来越多的人开始关心疫苗",
          },
        },

        {
          paragraph: {
            text: "　　新冠肺炎疫苗何时能上市？",
          },
        },

        {
          paragraph: {
            text: "　　是不是人人都要打？",
          },
        },

        {
          paragraph: {
            text: "　　成人、老人、儿童需要打哪些疫苗？",
          },
        },

        {
          paragraph: {
            text: "　　上海华山医院感染科主任张文宏教授",
          },
        },

        {
          paragraph: {
            text: "　　接受人民日报专访",
          },
        },

        {
          paragraph: {
            text: "　　又回答了许多重要问题！",
          },
        },

        {
          paragraph: {
            text: "　　建议大家都认真看一下！",
          },
        },

        {
          paragraph: {
            text: "　　新冠疫苗是不是人人都要打？",
          },
        },

        {
          paragraph: {
            text: "　　张文宏：现在新冠疫苗的临床试验结果还没出来，我们还拿不到疫苗保护效果的一些数据。",
          },
        },

        {
          paragraph: {
            text: "　　到时候是不是人人都打？取决于几个数据：第一，不良反应有多大；第二，它的保护率有多高；第三，当时全世界的疫情有多高；第四，病死率会降到什么样的程度。",
          },
        },

        {
          paragraph: {
            text: "　　到时候这些（数据）都出来，大家就开始评估了，我们是不是值得打。要不要打疫苗，它不是一件简单的事情，而是要衡量这么多事情。",
          },
        },

        {
          paragraph: {
            text: "　　新冠疫苗需要每年都打吗？",
          },
        },

        {
          paragraph: {
            text: "　　张文宏：原则上讲，像疱疹病毒也好，冠状病毒也好，如果这个病毒没有发生大的突变，我们不需要反复接种。",
          },
        },

        {
          paragraph: {
            text: "　　但是我们今天谈论这个事情为时过早。对于新冠疫苗以后怎么打，先把它弄出来，弄出来以后再来解决将来是不是需要每年都要打。现在看起来，每年都要打的概率偏低。",
          },
        },

        {
          paragraph: {
            text: "　　我们会不会成为疫苗的小白鼠？",
          },
        },

        {
          paragraph: {
            text: "　　张文宏：我们在加快研发疫苗进度，不代表我们放弃对它的疗效跟不良反应的评估。",
          },
        },

        {
          paragraph: {
            text: "　　疫苗为什么做出来了，现在不能马上给你打？就是因为尽管加快了审批的流程，但是不能降低它的质量，不可以降低对疫苗的要求。",
          },
        },

        {
          paragraph: {
            text: "　　肯定是要等完成了三期临床研究，三期研究是安全后再给老百姓打。哪里有什么小白鼠的事情，你想做小白鼠，我们流程都不可以。安全有效是底线，绝对不能突破，再着急也不能突破。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/W020200427415767817593.jpeg",
          },
        },
        {
          paragraph: {
            text: "此前张文宏教授曾表示，到今年秋冬季节，可能还会有一波流感高峰，那我们应该如何防范呢？",
          },
        },

        {
          paragraph: {
            text: "　　重要提醒来了！",
          },
        },

        {
          paragraph: {
            text: "　　今年秋冬新冠跟流感会叠加？",
          },
        },

        {
          paragraph: {
            text: "　　建议打一下流感疫苗",
          },
        },

        {
          paragraph: {
            text: "　　张文宏：当然会（叠加）。到冬天，流感的发生率高了，到时候跟新冠混在一起，你以为得的是新冠，病人就会在新冠的观察病房里面待着，新冠患者和流感患者之间就会互相出现传播。",
          },
        },

        {
          paragraph: {
            text: "　　今年，我自己一定会去打流感疫苗，至少把合并感染风险大幅度下降。",
          },
        },

        {
          paragraph: {
            text: "　　总体上来讲，我们认为新冠跟流感是叠加存在的，我们要把这个风险降下来，一旦生病，至少打了流感苗，不会因为合并感染造成病情进一步恶化。",
          },
        },

        {
          paragraph: {
            text: "　　别人都打了疫苗我不打也安全？",
          },
        },

        {
          paragraph: {
            text: "　　不建议冒这个险",
          },
        },

        {
          paragraph: {
            text: "　　张文宏：经常有人这么想，别人都打了，我没打，有个免疫屏障。如果长期以来大家都这么去做，免疫屏障率会越来越低。",
          },
        },

        {
          paragraph: {
            text: "　　只要有人没打疫苗，你自己的风险、还有群体的风险都会升高，这跟不接受疫苗率是有关系的。不建议大家冒这个险。",
          },
        },

        {
          paragraph: {
            text: "　　成人哪些疫苗应该打？",
          },
        },

        {
          paragraph: {
            text: "　　这几个尤其重要！",
          },
        },

        {
          paragraph: {
            text: "　　张文宏：成人有几个疫苗我尤其要提醒大家（去打）。",
          },
        },

        {
          paragraph: {
            text: "　　每年冬季都会有流感大流行。今年新冠之后，如果再加上流感，对老年人、成年人都有极大的风险。",
          },
        },

        {
          paragraph: {
            text: "　　去年由于宣传做得比较好，流感疫苗脱销了我都没打到。今年我问了我疾控的同事关于流感疫苗的储备，他说今年国家做了充分的储备，流感疫苗不会出现脱销的情况。",
          },
        },

        {
          paragraph: {
            text: "　　建议老年人，除了流感疫苗之外，把肺炎疫苗也打掉（比较好）。",
          },
        },

        {
          paragraph: {
            text: "　　还有女性在成年之前最好把HPV打了，预防宫颈癌的。",
          },
        },

        {
          paragraph: {
            text: "　　还有一些高危群体，比如跟血液接触比较多的，像医生、人群聚集的地方，你如果以前没有打过乙肝疫苗，乙肝疫苗也要打掉。",
          },
        },

        {
          paragraph: {
            text: "　　除了老年人，儿童也是需要加强预防的重点人群，张爸的建议来了！",
          },
        },

        {
          paragraph: {
            text: "　　哪些疫苗孩子应该要打？",
          },
        },

        {
          paragraph: {
            text: "　　张文宏：一类疫苗孩子是必打，二类疫苗医生提倡去打。",
          },
        },

        {
          paragraph: {
            text: "　　一类苗、二类苗都是极其重要的，如果不打，重点人群、高风险人群就面临极大的风险。",
          },
        },

        {
          paragraph: {
            text: "　　流感疫苗、水痘疫苗，不好说必打，但我强烈建议去打。",
          },
        },

        {
          paragraph: {
            text: "　　打进口苗还是国产苗？",
          },
        },

        {
          paragraph: {
            text: "　　张文宏：中国相关部门对疫苗的质量要求是极高的，现在全球对疫苗的质量要求都是非常高的。但是在同等情况下，国产疫苗供应链比较大，单位价格比较低。进口的疫苗，价位比较高。",
          },
        },

        {
          paragraph: {
            text: "　　这些我认为都不是接种疫苗核心的问题，核心的问题还是你打不打疫苗。至于打哪种疫苗，我也希望在疫苗接种点的医生能够妥善介绍现在可以提供的疫苗接种的类型，让家长自己去选择。",
          },
        },

        {
          paragraph: {
            text: "　　孩子咳嗽发烧可以延迟接种吗？",
          },
        },

        {
          paragraph: {
            text: "　　张文宏：疫苗如果需要打，总归是越早打越好，打得早，保护得早。",
          },
        },

        {
          paragraph: {
            text: "　　如果小孩子最近几天有咳嗽发烧头痛，可以延迟一下接种疫苗。延迟接种一个星期两个星期没有大的问题。最好不要拖的时间太长。",
          },
        },

        {
          paragraph: {
            text: "　　现在开始复工复产了，孩子开始上学了。我认为你出去第一个礼拜应该找个时间把孩子的疫苗接种掉，如果实在没空就第二个礼拜。有聚集就有风险，因此尽量把疫苗及早接种。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/W020200427415767860447.jpeg",
          },
        },
        {
          paragraph: {
            text: "张爸的这些提醒太及时了！对于成年人、老年人、儿童都很有参考价值。",
          },
        },

        {
          paragraph: {
            text: "　　对疫苗多一点了解，对自己的健康就多一份保障！",
          },
        },

        {
          paragraph: {
            text: "　　家里有老人小孩的，大家赶紧科普起来~~",
          },
        },

        {
          cite: {
            text: "      文章转载自新民晚报",
          },
        },
      ],
    },
  },
  {
    id: 73,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "温哥华顶级体育俱乐部与水族馆联名发售口罩助力抗疫",
      date: "2020-04-25",
      imageURL: "/images/article/1587849152113647.jpg",
      previewText:
        "温哥华一家顶级的体育俱乐部Vancouver Whitecaps正在与温哥华水族馆合作，帮助这家陷入困境的水族馆避免在新型冠状病毒大流行期间破产。温哥华Vancouver Whitecaps与水族馆合作，销售印有两个组织标志的非医疗口罩，…",
      content: [
        {
          paragraph: {
            text: "温哥华一家顶级的体育俱乐部Vancouver Whitecaps正在与温哥华水族馆合作，帮助这家陷入困境的水族馆避免在新型冠状病毒大流行期间破产。            ",
          },
        },
        {
          paragraph: {
            text: "温哥华Vancouver Whitecaps与水族馆合作，销售印有两个组织标志的非医疗口罩，所得款项将捐给现金匮乏的设施。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587851020964960.jpg",
          },
        },

        {
          bParagraph: {
            text: "本页最后有具体购买指南。",
          },
        },

        {
          paragraph: {
            text: "水族馆于3月17日因COVID-19而被迫关闭，尽管裁员超过一半，但仍需要每月约100万加元用于继续运营。",
          },
        },

        {
          paragraph: {
            text: '"我说你知道吗，我们运动员的肌肉真的可以帮上忙，"Whitecaps首席执行官马克·潘内斯说。',
          },
        },

        {
          paragraph: {
            text: '"我联系了一位供应商，只是询问是否可以生产口罩。该供应商是联盟商业公司，该公司通常为麦当劳和可口可乐等公司生产制服和促销商品。这一业务也是他的公司的生命线。',
          },
        },

        {
          paragraph: {
            text: "阅读更多：",
          },
        },
        {
          link: {
            linkText: "温哥华水族馆面临破产冠状病毒关闭",
            linkURL:
              "https://globalnews.ca/news/6825917/vancouver-aquarium-bankruptcy-financial-aid-coronavirus-shutdown/",
          },
        },

        {
          paragraph: {
            text: '"我们之前认为我们必须解雇我们所有的员工;我们目前的业务只能维持公司运营一个月，"首席执行官马克·特罗丘克说。',
          },
        },

        {
          paragraph: {
            text: "这些面具售价约20加元，有多种设计，从直徽标到水母，再到带有白帽吉祥物和卡通水母的儿童友好版。",
          },
        },

        {
          paragraph: {
            text: '特罗丘克说："我们有足够的布料来制作50万到100万个口罩“。',
          },
        },

        {
          paragraph: {
            text: "人们可能需要这些口罩——到上周五晚些时候，已经售出7500只。",
          },
        },

        {
          paragraph: {
            text: "经营水族馆的海洋智者保护协会的主席兼首席执行官拉塞·古斯塔夫松说，这些面具既有助于拯救水族馆，又防止COVID-19的传播。",
          },
        },

        {
          paragraph: {
            text: '"这是Vancouver Whitecaps的超级创意计划，正如我所说，我们很感激，"他说。',
          },
        },

        {
          paragraph: {
            text: '"现在，我们专注于将这些面具让给尽可能多的人。',
          },
        },

        {
          paragraph: {
            text: "卫生官员说，非医疗口罩不能保护个人免受COVID-19的侵害，但可以帮助阻止有病毒的人传播。",
          },
        },

        {
          paragraph: {
            text: "到目前为止，该机构已经成功地从捐赠者筹集了约62.5万加元，古斯塔夫松说，他希望Ocean Wise也能与省政府达成融资协议。",
          },
        },

        {
          bParagraph: {
            text: "购买指南",
          },
        },

        {
          paragraph: {
            text: "口罩可以在温哥华水族馆或Vancouver Whitecaps网站上购买。（点击就可以转到购买页面）。",
          },
        },

        {
          paragraph: {
            text: "进入购买页面后，有4种图案和3种尺寸可以选择。选择好加入购入车后填地址信息付款即可，发货日期是最早5月第一个星期。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587850349604508.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587850350609612.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587851241427028.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587851138367175.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587851138612778.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587851138107007.jpg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587851138438324.jpg",
          },
        },
      ],
    },
  },
  {
    id: 74,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "中国新闻",
    subDirectory: "/info/china",
    article: {
      title:
        "温州市城镇老旧小区改造三年行动方案 计划3年改造85个老旧小区 今年完成改造12个开工20个",
      date: "2020-04-25",
      imageURL: "/images/article/1587776411500605.jpg",
      previewText:
        "温都讯 今天，记者从市住建局了解到，按照最新出炉的《温州市城镇老旧小区改造三年行动方案（2020-2022年）》（以下称“行动方案”），至2022年底，全市实施改造老旧小区85个，居民楼781幢，改造面积250万平方米，受…",
      content: [
        {
          paragraph: {
            text: "温都讯 今天，记者从市住建局了解到，按照最新出炉的《温州市城镇老旧小区改造三年行动方案（2020-2022年）》（以下称“行动方案”），至2022年底，全市实施改造老旧小区85个，居民楼781幢，改造面积250万平方米，受益居民2.43万户。其中，全市2020年完成老旧小区改造12个，开工20个。",
          },
        },

        {
          paragraph: {
            text: "据了解，龙湾区状元街道龙跃社区华塑大楼、文成县大峃镇县前社区县前街老旧小区改造项目已经开工。",
          },
        },

        {
          bParagraph: {
            text: "2000年后建成的小区，符合条件也可纳入改造范围",
          },
        },

        {
          paragraph: {
            text: "哪些小区可以纳入改造范畴？根据行动方案，我市将重点改造2000年前建成的、且未列入棚改计划或5年内未列入征收计划的老旧住宅小区。2000年后建成的使用功能不齐全、配套设施不完备、物业管理不完善且居民改造意愿强烈的小区，也可纳入改造范围。",
          },
        },

        {
          paragraph: {
            text: "拟通过拆除新建（改建、扩建、翻建）实施改造的棚户区（居民住房）以及居民自建住房为主的区域和城中村不属本次老旧小区改造的范畴。",
          },
        },

        {
          paragraph: {
            text: "温州城镇老旧小区改造以确保老旧小区居住安全、完善居住功能等为重点改造内容，主要包括建筑立面、道路交通和停车、管网通信系统、景观绿化、养老服务设施、社区服务体系等6大类。",
          },
        },

        {
          paragraph: {
            text: "按照基础类、完善类、提升类3种类型，根据老百姓的需求，因地制宜、因项目而异来确定改造内容。其中，基础类改造内容主要解决小区功能性、安全性等迫切问题，确保小区基本功能的正常运行，满足居民公共安全需要和基本生活需求；完善类改造内容主要考虑满足居民改善型生活需求和生活便利型需要，改善公共空间和公共环境，打造宜居环境；提升类改造内容主要完善公共服务设施的统筹配套，丰富小区及周边配套服务的供给，满足居民的社会服务要求。",
          },
        },

        {
          bParagraph: {
            text: "原则上居民要出资参与本小区改造",
          },
        },

        {
          paragraph: {
            text: "改造的资金谁来出？根据行动方案，各县（市、区）要对城镇老旧小区改造的基础类改造内容予以重点支持，完善类改造内容政府适当给予支持，提升类改造内容引导社会市场主体投入，政府重点在资源统筹使用等方面给予政策支持。",
          },
        },

        {
          paragraph: {
            text: "另外，除了省市县的财政补助，原则上居民要出资参与本小区改造提升工作，具体通过个人出资或单位捐资、物业维修基金（补交）、小区公共收益等渠道落实。",
          },
        },

        {
          paragraph: {
            text: "同时，吸引银行、保险等金融机构的融资支持，通过多渠道融资方式筹集改造资金，引导社会资金投入城镇老旧小区改造。探索引入市场化、专业化的社会机构参与老旧小区的改造和后期管理。鼓励供电、供水、供气、排水、网络通信、有线电视等经营单位投资老旧小区管线整治改造，提升服务质量。",
          },
        },

        {
          bParagraph: {
            text: "补齐公共卫生事件应急配套设施短板",
          },
        },

        {
          paragraph: {
            text: "这次疫情的影响，在行动方案中也有所体现。",
          },
        },

        {
          paragraph: {
            text: "行动方案要求各县（市、区）要在老旧小区改造过程中，针对突发公共卫生事件应急配套设施等方面的短板，重点解决小区防疫功能不完善、公共空间防疫设施不足、防疫管控不到位等问题。",
          },
        },

        {
          paragraph: {
            text: "将污水管网、化粪池改造作为小区改造的必选内容，以切断病毒通过污水管道传播扩散的途径。鼓励业主对各户室内排水系统缺陷部位进行改造，完善户内排水系统和地漏的封闭功能，避免病毒气溶胶通过排水口反溢到室内。",
          },
        },

        {
          paragraph: {
            text: "在不影响消防安全、住宅日照的前提下，合理增设卫生服务站等公共配套服务场所。合理配置生活垃圾分类投放设施，加强垃圾回收站点改造提升，满足卫生防疫需要。统筹物流末端配送设施、快递存放场所设置，为小区防疫生活物资配送提供便利。",
          },
        },

        {
          paragraph: {
            text: "据了解，4月14日召开的国务院常务会议透露，今年各地计划改造城镇老旧小区3.9万个，涉及居民近700万户，比去年增加一倍，重点是2000年底前建成的住宅区。各地要统筹负责，按照居民意愿，重点改造完善小区配套和市政基础设施，提升社区养老、托育、医疗等公共服务水平。建立政府与居民、社会力量合理共担改造资金的机制，中央财政给予补助，地方政府专项债给予倾斜，鼓励社会资本参与改造运营。",
          },
        },

        {
          paragraph: {
            text: "温都记者 吕进科",
          },
        },

        {
          paragraph: {
            text: "编辑 孙立彭",
          },
        },

        {
          paragraph: {
            text: "校对 严嘉瑜",
          },
        },

        {
          paragraph: {
            text: "版式 邵海若",
          },
        },

        {
          paragraph: {
            text: "审核 李雪锋",
          },
        },
      ],
    },
  },
  {
    id: 75,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "加拿大温州同乡总会向Finnish Manor老人院捐赠防疫口罩",
      date: "2020-04-24",
      imageURL: "/images/article/1587703328268861.jpeg",
      previewText:
        "【枫华温情  携手抗疫】———暖心小故事之八      今天上午加拿大温州同乡总会的姊妹张茹代表同乡会将400个口罩捐给Finnish Manor 老人院。      张茹姊妹得知有我们温州籍长者…",
      content: [
        {
          paragraph: {
            text: "【枫华温情  携手抗疫】",
          },
        },

        {
          paragraph: {
            text: "———暖心小故事之八",
          },
        },

        {
          paragraph: {
            text: "      今天上午加拿大温州同乡总会的姊妹张茹代表同乡会将400个口罩捐给Finnish Manor 老人院。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1587703714199465.jpeg",
          },
        },
        {
          paragraph: {
            text: "张茹姊妹得知有我们温州籍长者居住在Finnish Manor老人院。在探望过程中得知，在疫情期间Finnish  Manor老人院的工作人员在照顾老人的工作中必须要佩戴防护口罩。可是，用于工作量大，所以口罩的消耗也是平时的几十倍。目前Finnish Manor老人院的口罩已经没有备用的存量了。护理人员非常着急。同乡会张茹姊妹抱着试试看的心态和同乡会取得了联系。",
          },
        },

        {
          paragraph: {
            text: "      大家都知道在疫情期间口罩是重要“抗疫物资”。不但专业人员需要，百姓的日常生活也必不可少。同乡会前段时间已经将大量防疫物资捐给了有需要的单位和社会。",
          },
        },

        {
          paragraph: {
            text: "      但是考虑到Finnish Manor老人院的紧急情况，同乡会理事会还是决定从“牙缝里挤出”400只口罩捐给老人院的工作人员应急。",
          },
        },

        {
          paragraph: {
            text: "      数量虽然不是很多，但是表达了加拿大温州同乡总会对Finnish Manor老人院关心和支持！",
          },
        },

        {
          paragraph: {
            text: "      同时老人院也以邮件形式发来了感谢信，表达了对加拿大温州同乡总会的谢意！",
          },
        },

        {
          paragraph: {
            text: "      我们温州乡亲能在这次抗疫慈善活动中屡次为社会奉献爱心，为居住国社会伸出援助之手，是温州籍乡亲的骄傲！",
          },
        },
        {
          paragraphRightBold: {
            text: "加拿大温州同乡总会报道",
          },
        },

        {
          paragraphRightBold: {
            text: "2020年4月23日",
          },
        },
      ],
    },
  },
  {
    id: 76,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "BC省政府发放$1000加币 工作者紧急津贴",
      date: "2020-04-23",
      imageURL: "/images/article/1587667395767154.png",
      previewText:
        "维多利亚——从下周开始的COVID-19大流行期间，不列颠哥伦比亚省人将能够申请该省的一次性紧急福利金。1,000加币紧急福利金的申请将于5月1日（星期五）开放，对象是对于那些工作能力受到新型冠状病毒负面影响的人。…",
      content: [
        {
          paragraph: {
            text: "维多利亚——从下周开始的COVID-19大流行期间，不列颠哥伦比亚省人将能够申请该省的一次性紧急福利金。",
          },
        },

        {
          paragraph: {
            text: "1,000加币紧急福利金的申请将于5月1日（星期五）开放，对象是对于那些工作能力受到新型冠状病毒负面影响的人。",
          },
        },

        {
          paragraph: {
            text: "对于那些已经有资格享受联邦就业保险或新的加拿大应急福利 （CERB） 的人来说，这项福利是一个补充。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1587669299104633.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587669307484751.png",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587669315513003.png",
          },
        },
        {
          paragraph: {
            text: '不列颠哥伦比亚省财政部长卡罗尔·詹姆斯（Carole James）周四在一份声明中说："这项福利对不列颠哥伦比亚省居民来说，是进一步帮助他们在COVID-19大流行期间能正常支付账单和维持生计。',
          },
        },

        {
          paragraph: {
            text: '她补充说："在这些不确定的时期，我们希望通过这项措施帮助受影响工人来共同渡过难关。',
          },
        },

        {
          paragraph: {
            text: "1000加币不列颠哥伦比亚省工人紧急津贴是免税的补贴。",
          },
        },

        {
          bParagraph: {
            text: "要符合付款条件，收款人必须：",
          },
        },

        {
          listNoStyle: [
            {
              text: "2020年3月15日为不列颠哥伦比亚省居民;",
            },

            {
              text: "符合中央应急委员会的资格要求;",
            },

            {
              text: "已为中央应急委员会批准，即使他们尚未获得福利;",
            },

            {
              text: "申请日期至少年满15岁;",
            },

            {
              text: "已提交或同意提交 2019 年不列颠哥伦比亚省所得税申报表;和",
            },

            {
              text: "未领取省级收入援助或残疾援助。",
            },
          ],
        },

        {
          bParagraph: {
            text: "不列颠哥伦比亚省人可以从 5月1日起点击这里在线申请（点击进入政府申请页面）。",
          },
        },

        {
          paragraph: {
            text: "据该省称，付款将在申请后几天内开始发放。",
          },
        },

        {
          paragraph: {
            text: "有关申请或一般问题的帮助，用户可以拨打778-309-4630，或拨打不列颠哥伦比亚省1-855-955-3545的免费电话，周一至周五上午 8：30 至下午 4：30。",
          },
        },

        {
          paragraph: {
            text: "电话申请将于5月4日开始。",
          },
        },

        {
          paragraph: {
            text: "这项福利是该省50亿加币COVID-19行动计划的一部分，该计划旨在向个人和企业提供收入支持、税收减免和直接供资。",
          },
        },
      ],
    },
  },
  {
    id: 77,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "特鲁多总理宣布为学生提供新的90亿加元COVID-19资助",
      date: "2020-04-22",
      imageURL: "/images/article/1587578770165738.jpg",
      previewText:
        "OTTAWA -- 总理贾斯汀·特鲁多宣布，作为旨在帮助年轻人的90亿加元一揽子新措施的一部分，学生和应届毕业生看到他们的教育及工作前景受到持续COVID-19流感的阻碍，他们将很快能够申请新的加拿大紧急学生津贴。从5月…",
      content: [
        {
          paragraph: {
            text: "OTTAWA -- 总理贾斯汀·特鲁多宣布，作为旨在帮助年轻人的90亿加元一揽子新措施的一部分，学生和应届毕业生看到他们的教育及工作前景受到持续COVID-19流感的阻碍，他们将很快能够申请新的加拿大紧急学生津贴。",
          },
        },

        {
          video: {
            videoURL:
              "https://www.wenzhouren.ca/uploads/video/20200423/1587579418583874.mp4",
          },
        },
        {
          paragraph: {
            text: "从5月到8月，符合条件的大专学生每月可领取1，250加元，如果您正在照顾他人或有残疾，每月将增加到1，750加元。",
          },
        },

        {
          paragraph: {
            text: "目前在校的大学生和大学生，计划在9月开始，或2019年12月毕业，符合资格。",
          },
        },

        {
          paragraph: {
            text: "同样，每月收入低于1，000加元的在职学生也可以申请。",
          },
        },

        {
          paragraph: {
            text: '"COVID-19 意味着学生没有那么多工作，如果没有工作，就很难支付学费或日常基本费用。你通常向父母求助，但现在爸爸妈妈也捉襟见肘，"特鲁多说。',
          },
        },

        {
          paragraph: {
            text: "特鲁多说，这项福利将需要额外的立法，目前正在就实施这项新计划的法案能以多快的速度提出进行谈判。",
          },
        },

        {
          paragraph: {
            text: "特鲁多在周三更新的里多小屋COVID-19措施时说，新的学生工作和助学金也在进行中。",
          },
        },

        {
          paragraph: {
            text: "具体来说，联邦政府也是：",
          },
        },

        {
          list: [
            {
              text: "为目前需要额外援助的部门或处于这一流行病前线的青年人再创造76 000个就业机会，其中可能包括接触者追踪或帮助农场;",
            },

            {
              text: "投资2.916亿加元，将奖学金、研究金和助学金延长三到四个月，以保持研究项目和安置，包括博士后奖学金。",
            },

            {
              text: "扩大获得经济援助的资格，并将2020-21年可提供给学生的最高每周金额从210加元提高到350加元。",
            },

            {
              text: "为自愿参加COVID-19战斗的学生发放1，000至5，000加元的新加拿大学生服务补助金，以争取秋季学费;",
            },

            {
              text: "提供7 520万加元，专门增加对原住民、因努特人和梅的国人学生的支助;和",
            },

            {
              text: "2020-21年，将所有符合条件的全日制学生的加拿大学生助学金增加一倍，至6，000加元，非全日制学生最高为3，600加元。",
            },
          ],
        },

        {
          image: {
            imageSRC: "/images/article/1587578788826521.jpg",
          },
        },
        {
          paragraph: {
            text: '"对于今天观看的所有学生，让我这样说：当你建设未来，思考如何贡献，开始家庭或事业，突然间你面临着巨大的危机...这些措施将帮助您度过难关，这样你就可以建立我们一直期待的事业和未来，"特鲁多说。',
          },
        },

        {
          paragraph: {
            text: '"另一方面，当经济重头大做，你就会确定我们前进的道路。',
          },
        },

        {
          paragraph: {
            text: "在采取这些新措施之后，一些学生表示担心他们没有资格享受每月2，000加元的加拿大紧急响应津贴，该福利要求申请人在过去一年中至少获得5，000加元，而并非所有完成中学后学业的学生都能获得。",
          },
        },

        {
          paragraph: {
            text: "联邦政府已承诺弥补一些与紧急援助计划一起发现的差距，因为有人批评许多加拿大人被排除在外。政府表示，他们最初的重点是向尽可能多的人提供资金，并在以后对标准进行微调。",
          },
        },

        {
          paragraph: {
            text: "特鲁多周三表示，希望未来几天能为老年人提供更多帮助。",
          },
        },

        {
          paragraph: {
            text: "联邦政府已经宣布对加拿大暑期就业计划进行临时修改，以帮助学生在夏天开始后在一个基本上被封锁的国家里找到工作。",
          },
        },

        {
          paragraph: {
            text: "通过该方案，雇用暑期学生的雇主可以申请高达省或地区小时最低工资100%的补贴。政府表示，这旨在帮助15至30岁的加拿大人创造多达7万个就业机会，并为他们提供工作经验和收入。",
          },
        },

        {
          paragraph: {
            text: "同时，3月底，国家助学贷款服务中心暂停学生贷款还款6个月，免息。",
          },
        },

        {
          paragraph: {
            text: "正如首席公共卫生官特蕾莎·塔姆博士继续说的那样，总理继续扩大扩张和更新财政援助表明，经济距离重新开放还有数周时间。",
          },
        },

        {
          paragraph: {
            text: '不过，谭伯源周二表示，这些措施似乎有效地避免了"爆炸性爆发"。尽管如此，她还是鼓励社会各阶层现在开始思考如何调整日常活动，以保持身体疏远，直到对病毒进行治疗或疫苗。',
          },
        },

        {
          paragraph: {
            text: "截至周三上午，加拿大已确认的COVID-19病例为38，967例，已有1，873例死亡。",
          },
        },

        {
          paragraph: {
            text: "新闻来自CTV 新闻",
          },
        },
      ],
    },
  },
  {
    id: 78,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "加拿大温州同乡总会再次收到乡亲捐赠防疫物资",
      date: "2020-04-21",
      imageURL: "/images/article/1587485274910020.jpg",
      previewText:
        "【枫华温情    众志成城】————温州乡亲温情小故事      自加拿大温州同乡总会为抗击新冠疫情发起“枫化温情   众志成城”捐款捐物活动以来，温州乡亲们积极响应号召，踊跃捐…",
      content: [
        {
          paragraph: {
            text: "【枫华温情    众志成城】",
          },
        },

        {
          paragraph: {
            text: "————温州乡亲温情小故事",
          },
        },

        {
          paragraph: {
            text: "      自加拿大温州同乡总会为抗击新冠疫情发起“枫化温情   众志成城”捐款捐物活动以来，温州乡亲们积极响应号召，踊跃捐款捐物。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1587484959566333.jpg",
          },
        },
        {
          paragraph: {
            text: "     虽然活动开展了一个月有余，但是乡亲们捐款捐物的热情依然不减。            ",
          },
        },
        {
          paragraph: {
            text: "      4月20日上午加拿大温州同乡总会收到来自张茹姊妹的电话，要求捐赠“护目镜”。接到电话，总会的工作人员简直不能相信自己的耳朵，“护目镜”这个紧缺防疫物资就像及时雨，来得正是时候！因为几天前同乡总会刚刚收到来自国内的口罩，正想配上护目镜送给工作在公共服务事业单位有需要的工作人员。问了很多商家都缺货的护目镜，就让张茹姊妹给解决了。            ",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587484692147669.jpeg",
          },
        },
        {
          paragraph: {
            text: "紧接着我们又收到了另一位乡亲捐赠的1000个口罩。捐赠口罩的是同乡总会的一位长者。老先生一再叮嘱不要公开他的名字，他觉得抗疫期间能为乡亲们出点儿，做点儿力所能及的事，是他最大的心愿和快乐！一点儿小事不足挂齿，让人们都知道了，反而不好意思了！",
          },
        },

        {
          paragraph: {
            text: "      此时此刻我们又被温州同乡的爱心和朴素的情谊暖到了！",
          },
        },

        {
          paragraphRight: {
            text: "加拿大温州同乡总会",
          },
        },

        {
          paragraphRight: {
            text: "2020年4月21号",
          },
        },
      ],
    },
  },
  {
    id: 79,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "卑诗省实行有症状都检测 联系医生或打811",
      date: "2020-04-20",
      imageURL: "/images/article/1587420456747380.png",
      previewText:
        "据温哥华海岸健康（VCH）首席医疗健康官称，在不列颠哥伦比亚省，任何出现COVID-19症状的人现在都可获得检测。帕特里夏·戴利博士周五晚上在一个虚拟市政厅里谈到COVID-19时说，该省的检测指南上周被修改了，这些变…",
      content: [
        {
          paragraph: {
            text: "据温哥华海岸健康（VCH）首席医疗健康官称，在不列颠哥伦比亚省，任何出现COVID-19症状的人现在都可获得检测。",
          },
        },

        {
          paragraph: {
            text: "帕特里夏·戴利博士周五晚上在一个虚拟市政厅里谈到COVID-19时说，该省的检测指南上周被修改了，这些变化已经传达给医生。",
          },
        },

        {
          paragraph: {
            text: '"我们现在已经向任何有COVID-19症状的人开放了测试，"她说。"我们建议临床医生测试出现呼吸道症状或担心可能有COVID-19的患者。',
          },
        },

        {
          paragraph: {
            text: "这意味着任何医生或护士执业者都可以根据病人的临床判断为患者订购冠状病毒测试。也可以拨打 811 来推荐人员进行测试。",
          },
        },

        {
          paragraph: {
            text: "戴利说，由于实验室容量增加，测试于4月8日开放，这是其他地方（如艾伯塔省）在曲线开始弯曲时引入的一项措施。",
          },
        },

        {
          paragraph: {
            text: 'Daly 说："我们实际上希望提高测试的可用性，并确保任何出现 COVID-19 症状的人都得到检测。',
          },
        },

        {
          paragraph: {
            text: "但是，B.C. 仍不建议对没有病毒症状的人进行测试，因为在这种情况下，测试不可靠。",
          },
        },

        {
          paragraph: {
            text: "此前，不列颠哥伦比亚省将其COVID-19检测仅限于卫生保健工作者、居民或长期护理设施的工作人员、参与疫情调查的人员或住院人员。",
          },
        },

        {
          paragraph: {
            text: "虚拟市政厅由司法协助约翰·亚普（里奇蒙德-史蒂夫斯顿）和鲍文·马（北温哥华-朗斯代尔）主办，戴利和VCH首席执行官玛丽·阿肯胡森（Mary Ackenhusen）共同主持了这五个市政厅，定于4月17日至4月23日，每个地点在不列颠哥伦比亚省的卫生区举办一个。",
          },
        },

        {
          paragraph: {
            text: "不列颠哥伦比亚省人能够事先或在Facebook直播期间提交问题。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1587421248845336.png",
          },
        },
        {
          bParagraph: {
            text: "何时就医？",
          },
        },

        {
          paragraph: {
            text: "一位里士满居民提出了一个问题，即那些在家里与COVID-19自我隔离的人何时应该就医。",
          },
        },

        {
          paragraph: {
            text: "在里士满一名男子死亡后，卫生官员多次被问到这个问题。",
          },
        },

        {
          paragraph: {
            text: "据Daly称，大多数有病毒的人有轻微的症状，大约80%的人正在家中康复。",
          },
        },

        {
          paragraph: {
            text: "戴利说，这些人每天都会接到来自公共卫生的随访电话，看看他们的症状是好转还是恶化。通常，症状在大约10天后解决。",
          },
        },

        {
          paragraph: {
            text: "但是有些情况的症状会恶化，比如大约五到七天，她说。任何开始经历呼吸急促或胸痛，或感觉更糟的人，应拨打911。",
          },
        },

        {
          bParagraph: {
            text: "对已经康复的人的限制是否会放宽？",
          },
        },

        {
          paragraph: {
            text: "另一位里士满居民问，是否可以首先取消对从COVID-19康复的人的身体疏远限制。",
          },
        },

        {
          paragraph: {
            text: "不列颠哥伦比亚省卫生官员目前正在验证血液测试，以确定某人是否有足够的抗冠病毒抗体，这意味着他们已经产生了免疫力，戴利说，尽管目前没有证据表明免疫将是终生的。",
          },
        },

        {
          paragraph: {
            text: '戴利说："我们每天都在从一些正在进行的研究中学习更多，一旦我们得到这种新的抗体测试的一些（研究）结果，你就会找到更多的指导。',
          },
        },

        {
          paragraph: {
            text: "文章摘自列治文新闻 Richmond News",
          },
        },
      ],
    },
  },
  {
    id: 80,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "搭机入境中国注意！中国民航局再出最严新规",
      date: "2020-04-19",
      imageURL: "/images/article/",
      previewText:
        "随着国外疫情的扩散，以及回国航班的锐减，国际机票的价格水涨船高，回国机票从2万多的经济舱全价到10万元的实际成交价，背后经过了层层加价的多次转手，甚至加价方都不一定是拥有正规牌照的机票代理，而是拥有客户…",
      content: [
        {
          paragraph: {
            text: "随着国外疫情的扩散，以及回国航班的锐减，国际机票的价格水涨船高，回国机票从2万多的经济舱全价到10万元的实际成交价，背后经过了层层加价的多次转手，甚至加价方都不一定是拥有正规牌照的机票代理，而是拥有客户资源的黄牛。",
          },
        },

        {
          paragraph: {
            text: "中国民航局17日披露，为进一步加强疫情期间国际机票销售管理，确保国际航空运输市场平稳有序，切实维护旅客的合法权益，民航局下发《关于进一步明确疫情期间国际机票销售有关问题的通知》，要求航空公司对国际机票全部采取直销模式，确保公开透明、明码标价，杜绝中间环节倒票、炒票行为。",
          },
        },

        {
          paragraph: {
            text: "《通知》要求，自通知发布之日起，航空公司在国际航线“五个一”(一航空公司、一个国家、一条航线、一周、一个航班)疫情防控政策实施期间，要加强国际机票销售渠道管理，对国际机票全部采取直销模式。同时，对已由代理企业销售的国际机票要加强管控，严禁换票，订座及购票后禁止更改旅客姓名，以杜绝中间环节倒票、炒票行为。",
          },
        },

        {
          paragraph: {
            text: "《通知》指出，航空公司要严格落实市场主体责任，严格执行国际运价政策，确保公开透明、明码标价。同时，要进一步加强内部管理，杜绝内部员工的违规操作行为。民航业主管部门将会同市场监管等部门，依法严肃查处国际运价违法违规行为，并依据《民航行业信用管理办法(试行)》实施信用惩戒，加大市场监管力度。",
          },
        },

        {
          paragraph: {
            text: "《通知》还要求，航空公司要加大宣传力度，引导广大旅客通过航空公司直销渠道购买机票，并提醒旅客保留好有关凭证，避免上当受骗。如发现价格违法违规行为，鼓励旅客向国家有关部门投诉举报，切实维护自身合法权益。",
          },
        },

        {
          paragraph: {
            text: "从加拿大回中国，需提前14天填报健康信息，否则无法登机",
          },
        },

        {
          paragraph: {
            text: "4月7日，中国民用航空局、中华人民共和国海关总署联合发布关于中国籍旅客乘坐航班回国前填报防疫健康信息的公告。公告指出，为减少疫情跨境传播，从意大利、美国、西班牙、德国、伊朗、法国、韩国、瑞士、英国、荷兰、奥地利、比利时、挪威、葡萄牙、瑞典、澳大利亚、巴西、土耳其、马来西亚、丹麦、加拿大、以色列、捷克、爱尔兰、菲律宾、泰国26个国家已购买回国机票的中国籍旅客需要提前填报防疫健康信息。旅客未按要求填报的，将无法登机；填报虚假信息，将导致行程受阻，并须承担相应法律责任。",
          },
        },

        {
          paragraph: {
            text: "具体要求如下：",
          },
        },
        {
          paragraph: {
            text: "一、自2020年4月8日起，已购票旅客在登机前需要提前通过防疫健康码国际版微信小程序，逐日填报个人资料、健康状况、近期出行情况等信息。特殊情况可由他人代为填报。",
          },
        },
        {
          paragraph: {
            text: "二、2020年4月8日至4月22日为过渡期。过渡期内乘坐航班的中国籍旅客，应于4月8日起连续逐日填报。过渡期后乘坐航班的，应于登机前第14天起连续逐日填报。",
          },
        },
        {
          paragraph: {
            text: "三、未按上述要求填报的，将无法登机。旅客填报虚假信息，将导致行程受阻，并须承担相应法律责任。",
          },
        },

        {
          paragraph: {
            text: "3月26日，中国民航局宣布调减国际客运航班量的措施，即一家航空公司在一个国家保留一条航线、一周至多有一个航班的“五个一”政策。",
          },
        },

        {
          paragraph: {
            text: "目前从加拿大回中国航班共计6个航线，其中温哥华4条，多伦多两条。",
          },
        },
      ],
    },
  },
  {
    id: 81,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "加拿大入境隔离新规即日生效 违者严惩",
      date: "2020-04-18",
      imageURL: "/images/article/1587189475760162.jpg",
      previewText:
        "返回加拿大的旅行者加拿大政府已根据《检疫法》发出紧急命令。它适用于所有抵达加拿大的旅行者。其目的是减缓COVID-19在加拿大的传播。根据《检疫法》，不遵守这项命令属违法。有症状的旅行者：强制隔离如果您是加拿…",
      content: [
        {
          bParagraph: {
            text: "返回加拿大的旅行者",
          },
        },

        {
          paragraph: {
            text: "加拿大政府已根据《检疫法》发出紧急命令。它适用于所有抵达加拿大的旅行者。其目的是减缓COVID-19在加拿大的传播。根据《检疫法》，不遵守这项命令属违法。",
          },
        },

        {
          bParagraph: {
            text: "有症状的旅行者：强制隔离",
          },
        },

        {
          paragraph: {
            text: "如果您是加拿大人或永久居民，并且症状与 COVID-19 一致，您仍可以通过陆路、铁路或海上进入加拿大。您不得乘飞机进入加拿大，以保护所有旅客的健康。",
          },
        },

        {
          paragraph: {
            text: "如果您需要，我们将立即为您提供医疗照顾，当您到达加拿大。",
          },
        },

        {
          paragraph: {
            text: "如果你有症状，你必须隔离14天。这是强制性的。",
          },
        },
        {
          listWithSub:
            "您必须隔离在一个不会与弱势人群接触的地方，例如：          ",
          content: [
            {
              text: "65岁或以上的人，或",
            },
            {
              text: "具有基本医疗条件的人",
            },
          ],
        },

        {
          list: [
            {
              text: "您需要确认您有合适的地方可以隔离，在那里您可以获得基本必需品，如食品和药品              ",
            },
            {
              text: "您必须使用私人交通工具（如您自己的车辆）才能到达您的隔离地点              ",
            },
            {
              text: "在前往隔离地点时，您必须戴上非医疗面罩或面罩",
            },
          ],
        },
        {
          paragraph: {
            text: "如果您没有私人交通工具或适当的隔离场所，加拿大首席公共卫生官将指定一个必须隔离 14 天的设施。",
          },
        },

        {
          list: [
            {
              text: "直接前往您的隔离地点，而不停止任何位置",
            },
          ],
        },

        {
          listWithSub: "待在里面，除非是寻求医疗照顾，否则不要离开14天",
          content: [
            {
              text: "不上学、工作或任何其他公共场所",
            },
          ],
        },

        {
          list: [
            {
              text: "留在单独的房间，并使用一个单独的浴室，从其他人，如果可能的话",
            },
            {
              text: "不允许访客",
            },
            {
              text: "限制在隔离场所与他人接触，包括儿童",
            },
            {
              text: "如果您的症状恶化，请立即联系您的医疗保健提供者或公共卫生当局，并按照他们的指示",
            },
          ],
        },

        {
          image: {
            imageSRC: "/images/article/travellers-symptoms-new-eng.jpg",
          },
        },

        {
          paragraph: {
            text: "无症状的旅行者：强制隔离",
          },
        },

        {
          paragraph: {
            text: "如果你最近回到加拿大，你没有任何症状，你必须隔离（自我隔离）14天。这是强制性的。您有出现症状和感染他人的风险。",
          },
        },

        {
          listWithSub:
            "您必须隔离（自我隔离）在一个与弱势人群没有接触的地方，例如：",
          content: [
            {
              text: "65岁或以上的人，或",
            },
            {
              text: "具有基本医疗条件的人",
            },
          ],
        },

        {
          list: [
            {
              text: "您需要确认您有一个合适的地方来隔离，在那里您将能够获得基本必需品，如食品和药品。",
            },
            {
              text: "在前往隔离地点（自我隔离）时，您必须戴上非医疗面罩或面罩。",
            },
          ],
        },

        {
          paragraph: {
            text: "如果您没有足够的隔离场所（自我隔离），加拿大首席公共卫生官将指定一个设施，您必须在其中停留 14 天。",
          },
        },

        {
          cite: {
            text: "除上述情况外，强制隔离（自隔离）意味着您必须：",
          },
        },

        {
          listWithSub:
            "直接前往您的隔离地点，不停止任何地方，并在那里停留 14 天",
          content: [
            {
              text: "不上学、工作或其他公共区域和社区设置",
            },
          ],
        },

        {
          list: [
            {
              text: "监测您的健康，以寻找COVID-19的症状",
            },
            {
              text: "安排有人为你买杂货或药品等必需品",
            },
            {
              text: "没有访客",
            },
            {
              text: "留在一个私人的地方，如你的院子或阳台，如果你去外面新鲜空气",
            },
            {
              text: "与他人保持至少 2 臂长（约 2 米）的距离",
            },
          ],
        },
        {
          image: {
            imageSRC: "/images/article/coronavirus-handout-eng.jpg",
          },
        },

        {
          bParagraph: {
            text: "如果您在 14 天内出现症状：",
          },
        },

        {
          listWithSub2: [
            {
              text1: "把自己与别人隔离开来",
              text1link: "公共卫生机构",
              text1linkURL:
                "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/provincial-territorial-resources-covid-19.html",
              text1Cont: "，并：",
              content1: [
                {
                  text: "描述您的症状和旅行历史记录",
                },
                {
                  text: "仔细按照他们的指示",
                },
              ],

              text2: "症状出现后将隔离期延长至 14 天",
              // text2link: "link",
              // text2Cont: "",
              linkURL: "",
              content2: [],
            },
          ],
        },
        {
          bParagraph: {
            text: "检查您是否已暴露",
          },
        },
        {
          paragraphLink: {
            text: "您是否乘坐过最近的航班、游轮、火车或公共聚会？检查列出的",
            text1link: "曝光位置",
            link1URL:
              "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/latest-travel-health-advice/exposure-flights-cruise-ships-mass-gatherings.html",
            text1Cont: "了解您是否已暴露于 COVID-19。",
          },
        },

        {
          bParagraph: {
            text: "遵守和执行《检疫法》",
          },
        },
        {
          paragraph: {
            text: "加拿大政府正在与联邦和省级伙伴合作，通过积极的沟通和抽查，促进和核查紧急命令的遵守情况。",
          },
        },
        {
          paragraph: {
            text: "如果您被允许进入加拿大，您将：",
          },
        },

        {
          listWithSub3: [
            {
              text1: "询问您是否咳嗽、发烧或呼吸困难",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                // {
                //   text: "content1-1",
                // },
                // {
                //   text: "content1-2",
                // },
              ],
            },
            {
              text1: "需要确认您必须：",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "如果您有 COVID-19或",
                },
                {
                  text: "隔离（自我隔离）14天，如果你没有症状",
                },
              ],
            },

            {
              text1: "询问您是否有合适的隔离或隔离位置（自隔离）",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "一个合适的地方，你会有基本必需品，如食品和药物，在那里你不会接触弱势人群",
                },
              ],
            },

            {
              text1: "就您根据紧急命令承担的义务发出指示",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },
        {
          paragraph: {
            text: "根据《检疫法》，违反您进入加拿大时提供给您的任何指示均属违法行为，并可能导致：",
          },
        },
        {
          list: [{ text: "6个月监禁和/或" }, { text: "$750，000 罚款" }],
        },

        {
          paragraph: {
            text: "此外，在故意或鲁莽地违反本法或条例的情况下，对另一人造成即将死亡或严重身体伤害的风险的人，可能负有责任：",
          },
        },
        {
          list: [
            { text: "最高 1，000，000 美元罚款或" },
            { text: "最高3年监禁或" },
            { text: "两者" },
          ],
        },
        {
          paragraph: {
            text: "《违反者法》已经修改，赋予警察（包括皇家骑警、省和当地警察）更多的权力来执行《检疫法》。他们现在可以向不遵守该法案的人发放罚单。罚款从275美元到1000美元不等。",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "旅行限制豁免",
          },
        },
        {
          paragraph: {
            text: "货物和人员的持续全球流动以及基本服务的持续提供，对加拿大对COVID-19的反应至关重要。",
          },
        },
        {
          paragraphLink: {
            text: "几类人",
            text1link: "免于",
            link1URL:
              "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/covid-19-information-essential-service-workers.html",
            text1Cont:
              "这项命令，因为他们提供关键服务，如果他们没有症状。这些人包括：",
          },
        },

        {
          listWithSub3: [
            {
              text1: "正在进行必要的医疗分娩，以治疗患者，例如：",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "细胞",
                },
                {
                  text: "器官",
                },
                {
                  text: "组织",
                },
                {
                  text: "血液和血液制品",
                },
                {
                  text: "其他类似的救生人体器官",
                },
              ],
            },
          ],
        },

        {
          listWithSub3: [
            {
              text1: "在贸易和运输部门工作，对货物和人员流动很重要，包括：",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "卡车司机",
                },
                {
                  text: "任何飞机、火车或海船的船员",
                },
              ],
            },
          ],
        },

        {
          listWithSub3: [
            {
              text1: "定期跨越边境上班，包括在卫生保健部门或关键基础设施工人",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },

            {
              text1:
                "必须跨越边界，提供或接受基本服务，包括应急人员和向加拿大人提供与COVID-19疫情有关的基本服务",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },

        {
          paragraph: {
            text: "这些部门的工人应：",
          },
        },

        {
          listWithSub3: [
            {
              text1: "练习",
              text1link: "身体（社交）距离",
              text1linkURL:
                "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/social-distancing.html",
              text1Cont: "（与其他人保持2米的距离）",
              content1: [],
            },

            {
              text1: "密切自监控",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },
        {
          paragraph: {
            text: "这些部门的雇主应：",
          },
        },

        {
          listWithSub3: [
            {
              text1: "每日积极监察员工的COVID-19症状（检查咳嗽、发烧或呼吸急促",
              content1: [],
            },

            {
              text1: "在",
              text1link:
                "COVID-19 大流行期间，使用工作场所/企业的风险知情决策指南",
              text1linkURL:
                "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/guidance-documents/risk-informed-decision-making-workplaces-businesses-covid-19-pandemic.html",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },

        // English translation
        {
          bParagraph: {
            text: "Travellers returning to Canada",
          },
        },

        {
          paragraphLink: {
            text: "The Government of Canada has put in place an",
            text1link: "emergency order",
            link1URL:
              "https://orders-in-council.canada.ca/attachment.php?attach=38989&lang=en",
            text1Cont:
              " under the Quarantine Act. It applies to all travellers arriving in Canada. Its purpose is to slow the spread of COVID-19 in Canada. Failure to comply with this order is an offence under the Quarantine Act.",
          },
        },

        {
          bParagraph: {
            text: "Travellers with symptoms: mandatory isolation",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "If you are Canadian or a permanent resident, and you have symptoms consistent with COVID-19,",
            },
            {
              bold: " you may still enter Canada by land, rail or sea.",
            },
            {
              text: " You may",
            },
            {
              bold: " not",
            },
            {
              text: " enter Canada by air, to protect the health of all travellers.",
            },
          ],
        },

        {
          paragraph: {
            text: "If you need it, we will provide you with immediate medical attention when you arrive in Canada.",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "If you have symptoms, ",
            },
            {
              bold: "you must ",
            },
            {
              link: "isolate",
              linkURL:
                "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/travellers-with-symptoms-return-canada.html",
            },
            {
              text: " for 14 days.",
            },
            {
              bold: " This is mandatory.",
            },
          ],
        },

        {
          listWithSub3: [
            {
              text1:
                "You must isolate in a place where you will not have contact with vulnerable people, such as:",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "people 65 years or older, ",
                  bold: "or",
                },
                {
                  text: "people with underlying medical conditions",
                },
                // {
                //   text: "content1-2",
                // },
              ],
            },
            {
              text1:
                "You will need to confirm you have a suitable place to isolate where you will have access to basic necessities, such as food and medication",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },

            {
              text1:
                "You must use private transportation (such as your own vehicle) to get to your place of isolation",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },

            {
              text1:
                "You must wear a non-medical mask or face covering while traveling to your place of isolation",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },

        {
          paragraph: {
            text: "If you do not have private transportation or an adequate place to isolate, the Chief Public Health Officer of Canada will designate a facility where you must isolate for 14 days.",
          },
        },

        {
          bParagraph: {
            text: "In addition to the above, mandatory isolation means you must:",
          },
        },

        {
          listWithSub3: [
            {
              text1:
                "go directly to your place of isolation without stopping anywhere",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "people 65 years or older, ",
                  bold: "or",
                },
                {
                  text: "people with underlying medical conditions",
                },
                // {
                //   text: "content1-2",
                // },
              ],
            },
            {
              text1:
                "stay inside and do not leave for 14 days unless it is to seek medical attention",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "do not go to school, work or any other public areas",
                },
              ],
            },

            {
              text1:
                "You must use private transportation (such as your own vehicle) to get to your place of isolation",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },

            {
              text1:
                "stay in a separate room and use a separate bathroom from others, if possible",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },

            {
              text1: "do not allow visitors",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
            {
              text1:
                "limit contact with others in the place of isolation, including children",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
            {
              text1:
                "contact your health care provider or public health authority immediately if your symptoms get worse, and follow their instructions",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },

        {
          image: {
            imageSRC: "/images/article/travellers-symptoms-new-eng.jpg",
          },
        },

        {
          bParagraph: {
            text: "Travellers without symptoms: mandatory quarantine",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "If you have recently returned to Canada and ",
            },
            {
              bold: "you have no symptoms,  ",
            },
            {
              text: "you must ",
            },
            {
              link: "quarantine",
              linkURL:
                "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/2019-novel-coronavirus-information-sheet.html",
            },
            {
              text: " (self-isolate) for 14 days.",
            },
            {
              bold: " This is mandatory.",
            },
            {
              text: " You are at risk of developing symptoms and infecting others.",
            },
          ],
        },

        {
          listWithSub3: [
            {
              text1:
                "You must quarantine (self-isolate) in a place where you will have no contact with vulnerable people, such as:",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "people 65 years or older, ",
                  bold: "or",
                },
                {
                  text: "people with underlying medical conditions",
                },
                // {
                //   text: "content1-2",
                // },
              ],
            },
            {
              text1:
                "You will need to confirm you have a suitable place to isolate where you will have access to basic necessities, such as food and medication.",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "do not go to school, work or any other public areas",
                },
              ],
            },

            {
              text1:
                "You must use private transportation (such as your own vehicle) to get to your place of isolation",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },

            {
              text1:
                "You must wear a non-medical mask or face covering while traveling to the place you will quarantine (self-isolate).",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },

        {
          paragraph: {
            text: "If you do not have an adequate place to quarantine (self-isolate), the Chief Public Health Officer of Canada will designate a facility where you must remain for 14 days.",
          },
        },

        {
          bParagraph: {
            text: "In addition to the above, mandatory quarantine (self-isolate) means you must:",
          },
        },

        {
          listWithSub3: [
            {
              text1:
                "go directly to your place of quarantine, without stopping anywhere, and stay there for 14 days",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "do not go to school, work or other public areas and community settings",
                },
              ],
            },
            {
              text1: "monitor your health for symptoms of COVID-19",
              content1: [],
            },
            {
              text1:
                "arrange to have someone pick up essentials like groceries or medication for you",
              content1: [],
            },
            {
              text1: "do not have visitors",
              content1: [],
            },
            {
              text1:
                "stay in a private place like your yard or balcony if you go outside for fresh air",
              content1: [],
            },
            {
              text1:
                "keep a distance of at least 2 arms lengths (approximately 2 metres) from others",
              content1: [],
            },
          ],
        },

        {
          image: {
            imageSRC: "/images/article/coronavirus-handout-eng.jpg",
          },
        },

        {
          bParagraph: {
            text: "If you develop symptoms within 14 days:",
          },
        },

        {
          listWithSub3: [
            {
              text1: "isolate yourself from others",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
            {
              text1: "immediately call a health care professional or ",
              text1link: "public health authority ",
              text1linkURL:
                "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms/provincial-territorial-resources-covid-19.html",
              text1Cont: "and:",
              content1: [
                {
                  text: "describe your symptoms and travel history",
                },
                {
                  text: "follow their instructions carefully",
                },
              ],
            },

            {
              text1:
                "extend your quarantine to 14 days following the appearance of symptoms",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },

        {
          bParagraph: {
            text: "Check if you have been exposed",
          },
        },
        {
          paragraphLink: {
            text: "Have you been on a recent flight, cruise, train, or at a public gathering? Check the listed",
            text1link: "exposure locations",
            link1URL:
              "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/latest-travel-health-advice/exposure-flights-cruise-ships-mass-gatherings.html",
            text1Cont: " to see if you may have been exposed to COVID-19.",
          },
        },

        {
          bParagraph: {
            text: "Compliance and enforcement of the Quarantine Act",
          },
        },
        {
          paragraph: {
            text: "The Government of Canada is working with federal and provincial partners to promote and verify compliance of the emergency order with active communication and spot checks.",
          },
        },
        {
          paragraph: {
            text: "If you are permitted to enter Canada, you will be:",
          },
        },

        {
          listWithSub3: [
            {
              text1: "asked if you have a cough, fever or difficulty breathing",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                // {
                //   text: "content1-1",
                // },
                // {
                //   text: "content1-2",
                // },
              ],
            },
            {
              text1: "required to acknowledge that you must:              ",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "isolate for 14 days if you have symptoms of COVID-19",
                  bold: " or ",
                },
                {
                  text: "quarantine (self-isolate) for 14 days if you do not have symptoms",
                },
              ],
            },

            {
              text1:
                "asked if you have a suitable place to isolate or quarantine (self-isolate)",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "a suitable place is one where you will have basic necessities, such as food and medication, and where you will not have contact with vulnerable people",
                },
              ],
            },

            {
              text1:
                "given instructions about your obligations under the emergency order",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },
        {
          paragraph: {
            text: "Violating any instructions provided to you when you entered Canada is an offence under the Quarantine Act and could lead to up to:",
          },
        },

        {
          listWithSub3: [
            {
              text1: "6 months in prison",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              text1bold: " and/or",
              content1: [
                // {
                //   text: "content1-2",
                // },
              ],
            },
            {
              text1: "$750,000 in fines",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },

        {
          paragraph: {
            text: "Further, a person who causes a risk of imminent death or serious bodily harm to another person while wilfully or recklessly contravening this act or the regulations could be liable for:",
          },
        },

        {
          listWithSub3: [
            {
              text1: "a fine of up to $1,000,000",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              text1bold: " or",
              content1: [],
            },

            {
              text1: "imprisonment of up to 3 years",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              text1bold: " or",
              content1: [],
            },
            {
              text1: "both",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },

        {
          paragraph: {
            text: "The Contraventions Act has been changed to give police (including RCMP, provincial and local police) more power to enforce the Quarantine Act. They can now issue tickets to people who do not comply with the act. Fines range from $275 to $1000.",
          },
        },
        {
          space: {},
        },
        {
          bParagraph: {
            text: "Exemptions to travel restrictions",
          },
        },
        {
          paragraph: {
            text: "The continued global movement of goods and people and the ongoing delivery of essential services will be important for Canada's response to COVID-19.",
          },
        },

        // {
        //   paragraphLink: {
        //     text: "Several categories of people are",
        //     text1link: " exempted",
        //     link1URL:
        //       "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/covid-19-information-essential-service-workers.html",
        //     text1Cont:
        //       " from this order because they provide critical services, if they have",
        //     text1bold: " no symptons ",
        //     text: "These include people who:",
        //   },
        // },

        {
          paragraphLink2: [
            {
              text: "Several categories of people are ",
              link: " exempted",
            },

            {
              text: " from this order because they provide critical services, if they have",
              bold: " no symptoms.",
            },
            {
              text: " These include people who:",
            },
          ],
        },

        {
          listWithSub3: [
            {
              text1:
                "are making necessary medical deliveries required for patient care, such as:",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "cells",
                },

                {
                  text: "organs",
                },

                {
                  text: "tissues",
                },

                {
                  text: "blood and blood products",
                },

                {
                  text: "other similar lifesaving human body parts",
                },
              ],
            },
          ],
        },

        {
          listWithSub3: [
            {
              text1:
                "work in the trade and transportation sector who are important for the movement of goods and people, including:",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [
                {
                  text: "truck drivers",
                },

                {
                  text: "crew on any plane, train or marine vessel",
                },
              ],
            },
          ],
        },

        {
          list: [
            {
              text: "cross the border regularly to go to work, including in the health care sector or critical infrastructure workers",
            },
            {
              text: "have to cross the border to provide or receive essential services, including emergency responders and personnel providing essential services to Canadians related to the COVID-19 outbreak",
            },
          ],
        },

        {
          paragraph: {
            text: "Workers in these sectors should:",
          },
        },

        {
          listWithSub3: [
            {
              text1: "practise ",
              text1link: " physical (social) distancing",
              text1linkURL:
                "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/social-distancing.html",
              text1Cont: " (maintain a distance of 2 metres from others)",
              content1: [],
            },

            {
              text1: "closely",
              // text1link: "text1link",
              // text1linkURL: "",
              // text1Cont: "text1cont",
              content1: [],
              text1bold: " self-monitor",
            },
          ],
        },
        {
          paragraph: {
            text: "Should they exhibit any symptoms, they must isolate and contact their local public health authority.",
          },
        },

        {
          paragraph: {
            text: "Employers in these sectors should:",
          },
        },

        {
          listWithSub3: [
            {
              text1:
                "conduct active daily monitoring of their staff for COVID-19 symptoms (checking for cough, fever or shortness of breath)",
              content1: [],
            },

            {
              text1: "use the",
              text1link:
                "risk-informed decision-making guidelines for workplaces/businesses during the COVID-19 pandemic",
              text1linkURL:
                "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/guidance-documents/risk-informed-decision-making-workplaces-businesses-covid-19-pandemic.html",
              // text1Cont: "text1cont",
              content1: [],
            },
          ],
        },
      ],
    },
  },
  {
    id: 82,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "加拿大温州同乡总会向中侨护理安老院捐赠N95口罩",
      date: "2020-04-18",
      imageURL: "/images/article/1587183852822966.jpeg",
      previewText:
        "在这个新冠疫情严峻时刻，长者是高危一群。列治文北中选区省议员屈洁冰与加拿大温州同乡总会代表在4月13日星期一复活节长周末公众假期，专程把一批N95口罩赠送给华埠的中侨李国贤护理安老院。屈洁冰对加拿大温州同乡…",
      content: [
        {
          paragraph: {
            text: "在这个新冠疫情严峻时刻，长者是高危一群。列治文北中选区省议员屈洁冰与加拿大温州同乡总会代表在4月13日星期一复活节长周末公众假期，专程把一批N95口罩赠送给华埠的中侨李国贤护理安老院。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587184108562704.jpeg",
          },
        },
        {
          paragraph: {
            text: "屈洁冰对加拿大温州同乡总会的善举表示衷心感谢。称赞在这个防疫保护装备物资短缺的非常时期，温州同乡总会慷慨地把一批N95口罩捐赠给安老院，供长者和照顾他们的医护人员使用，尽显同乡会对社区的关爱。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587184125465646.jpeg",
          },
        },
        {
          paragraph: {
            text: "为安全起见，屈洁冰和温州同乡总会的朱建国会长及张光辉常务副会长戴上口罩，互相保持安全距离，把送赠的口罩摆放在安老院门外，再由工作人员搬入室内。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587184140689102.jpeg",
          },
        },
        {
          paragraph: {
            text: "屈洁冰指出，疫情仍在持续恶化，请大家遵守防疫指引，尽量留在家中，外出时谨记要和他人保持最少两米社交距离，避免触摸公共物品，勤洗手，以及避免用手触摸面部。齐心合力阻止病毒在社区传播。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587184156253334.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587184232123038.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587184256457063.jpeg",
          },
        },
        {
          citeRight: {
            text: "加拿大温州同乡总会",
          },
        },
        {
          citeRight: {
            text: "2020年4月17日",
          },
        },
      ],
    },
  },
  {
    id: 83,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "加拿大温州同乡总会官网升级至SSL加密数字证书",
      date: "2020-04-17",
      imageURL: "/images/article/1587147358938116.png",
      previewText:
        "加拿大温州同乡总会官网正式升级至SSL加密数字证书。新的加密数字证书为浏览者带来绝对安全的使用体验。何为SSL加密数字证书？       SSL证书是数字证书的一种，类似于驾驶证、护照和营业执照的…",
      content: [
        {
          paragraph: {
            text: "加拿大温州同乡总会官网正式升级至SSL加密数字证书。新的加密数字证书为浏览者带来绝对安全的使用体验。",
          },
        },
        {
          list: [
            {
              text: "何为SSL加密数字证书？",
            },
          ],
        },
        {
          paragraph: {
            text: " SSL证书是数字证书的一种，类似于驾驶证、护照和营业执照的电子副本。因为配置在服务器上，也称为SSL服务器证书。",
          },
        },

        {
          paragraph: {
            text: "SSL 证书就是遵守 SSL协议，由受信任的数字证书颁发机构CA，在验证服务器身份后颁发，具有服务器身份验证和数据传输加密功能。",
          },
        },

        {
          paragraph: {
            text: "SSL证书通过在客户端浏览器和Web服务器之间建立一条SSL安全通道（Secure socket layer(SSL)安全协议是由Netscape Communication公司设计开发。该安全协议主要用来提供对用户和服务器的认证；对传送的数据进行加密和隐藏；确保数据在传送中不被改变，即数据的完整性，现已成为该领域中全球化的标准。由于SSL技术已建立到所有主要的浏览器和WEB服务器程序中，因此，仅需安装服务器证书就可以激活该功能了），即通过它可以激活SSL协议，实现数据信息在客户端和服务器之间的加密传输，可以防止数据信息的泄露，保证了双方传递信息的安全性，而且用户可以通过服务器证书验证他所访问的网站是否是真实可靠。数字签名又名数字标识、签章 (即 Digital Certificate，Digital ID )，提供了一种在网上进行身份验证的方法，是用来标志和证明网络通信双方身份的数字信息文件，概念类似日常生活中的司机驾照或身份证。 数字签名主要用于发送安全电子邮件、访问安全站点、网上招标与投标、网上签约、网上订购、网上公文安全传送、网上办公、网上缴费、网上缴税以及网上购物等安全的网上电子交易活动。",
          },
        },
      ],
    },
  },
  {
    id: 84,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "加拿大政府又发钱啦！每人$400！4月9日到账",
      date: "2020-04-05",
      imageURL: "/images/article/1586046219673385.jpg",
      previewText:
        "疫情中的好消息!加拿大人又可以领钱了!除了CERB和特殊EI，政府还有一笔福利!几乎人人有份!那就是：为疫情而特别增额的GST/HST退税。这笔增加了额度的退税款项会在4月9日起自动打到你账户，也就是说只要你有税务关联…",
      content: [
        {
          paragraph: {
            text: "疫情中的好消息!",
          },
        },

        {
          paragraph: {
            text: "加拿大人又可以领钱了!",
          },
        },

        {
          paragraph: {
            text: "除了CERB和特殊EI，政府还有一笔福利!",
          },
        },

        {
          paragraph: {
            text: "几乎人人有份!",
          },
        },

        {
          paragraph: {
            text: "那就是：为疫情而特别增额的GST/HST退税。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1586016894243-1.jpg",
          },
        },
        {
          paragraph: {
            text: "这笔增加了额度的退税款项会在4月9日起自动打到你账户，也就是说只要你有税务关联的银行账户，就可以看到钱直接打入了!",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1586016894243-2.jpg",
          },
        },

        {
          paragraph: {
            text: "已经有网友在自己的账户里看到了~",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1586016894243-3.jpg",
          },
        },

        {
          paragraph: {
            text: "据联邦政府相关网页说明：",
          },
        },

        {
          paragraph: {
            text: "这个退税的福利是一次性的，符合资格的低收入、中产家庭都可以拿到GST/HST的退款资格不变，金额加码!",
          },
        },

        {
          paragraph: {
            text: "无需申请!",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1586016894243-4.jpg",
          },
        },
        {
          paragraph: {
            text: "以下人士可享有增加的福利(满足一项)：",
          },
        },

        {
          paragraph: {
            text: "年满19岁;",
          },
        },

        {
          paragraph: {
            text: "有(或曾有)配偶或同居伴侣;",
          },
        },

        {
          paragraph: {
            text: "是(或曾)是父母，并(或曾)与孩子同住;",
          },
        },

        {
          paragraph: {
            text: "此外你需要是2018年的加拿大税务居民。",
          },
        },

        {
          paragraph: {
            text: "并且报过2018年的税。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1586016894243-5.jpg",
          },
        },
        {
          paragraph: {
            text: "你能拿多少钱?",
          },
        },

        {
          paragraph: {
            text: "GST/HST的一次性增额退款，基于你2018年申报税表数据进行计算。",
          },
        },

        {
          paragraph: {
            text: "2019-2020年度最高金额如下：",
          },
        },

        {
          paragraph: {
            text: "单身人士，$443涨至$886",
          },
        },

        {
          paragraph: {
            text: "已婚或同居伴侣，$580涨至$1,160",
          },
        },

        {
          paragraph: {
            text: "19岁以下的每个孩子153涨至$306(不包括单亲的第一个子女)",
          },
        },

        {
          paragraph: {
            text: "单身父母的第一个子女$290涨至$580",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1586016894243-6.jpg",
          },
        },
        {
          paragraph: {
            text: "如果以前没资格获得GST/HST抵免，但已申报了2018年的税，那还是可以根据家庭净收入获得一次性退税。",
          },
        },

        {
          paragraph: {
            text: "本次发款金额是根据2018年所得税和申报中的数字计算。如果2018年没报税，则无法收到这笔付款。",
          },
        },

        {
          paragraph: {
            text: "但是，政府建议尽快补交申报，申报后还有资格获得追溯的退款福利。",
          },
        },

        {
          paragraph: {
            text: "那么有人可能要问了，还没有申报2019年的税会影响吗?",
          },
        },

        {
          paragraph: {
            text: "答案是：没关系，你依然可以收到这笔额外的福利，因为这是根据2018年的数字计算和支付的。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1586016894243-7.jpg",
          },
        },
        {
          paragraph: {
            text: "大家赶紧留意下CRA的网上账户及银行吧~",
          },
        },

        {
          paragraph: {
            text: "毕竟现在补助，津贴，发钱....",
          },
        },

        {
          paragraph: {
            text: "有一点算一点!多一些好一些!",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1586016894243-8.jpg",
          },
        },
        {
          paragraph: {
            text: "政府官网：",
          },
        },
        {
          link: {
            linkText:
              "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/covid-19-gsthstc-increase.html",
            linkURL:
              "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/covid-19-gsthstc-increase.html",
          },
        },
      ],
    },
  },
  {
    id: 85,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "加拿大温州同乡总会助力温哥华食物银行",
      date: "2020-04-04",
      imageURL: "/images/article/1585977015906262.jpeg",
      previewText:
        "加拿大温州同乡总会抗疫慈善活动报道之 为食物应行捐款存爱心，慈善捐助脚步在路上....... 今天早上9:30分，由加拿大温州同乡总会会长带队，由同乡会理事组成的捐款小组准…",
      content: [
        {
          pMid: {
            text: "加拿大温州同乡总会",
          },
        },
        {
          pMid: {
            text: "抗疫慈善活动报道之",
          },
        },
        {
          paragraph: {
            text: "      为食物应行捐款存爱心，慈善捐助脚步在路上.......",
          },
        },

        {
          paragraph: {
            text: "      今天早上9:30分，由加拿大温州同乡总会会长带队，由同乡会理事组成的捐款小组准时来到位于本拿比的“大温哥华地区食物银行”总部，为食物银行捐献善款。本拿比市议员王白进先生也前来为捐款活动助阵。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585976281271243.jpeg",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585976381140706.jpeg",
          },
        },
        {
          paragraph: {
            text: "      加拿大温州同乡总会理事会了解到，随着新冠状肺炎疫情在加拿大的攀升，很多处于受助临界点的家庭由于疫情失去了工作。连购买食物都成了问题。越来越多的弱势群体需要食物的帮助！总理杜鲁多特别指出，虽然政府将帮助食物银行和各地的机构将食物送到弱势人群手中。但是，在疫情期间食物银行无疑需要更多支援，他呼吁并鼓励更多的人为食物银行捐款提供帮助！",
          },
        },

        {
          paragraph: {
            text: "      早上9点半食物银行门口非常繁忙。停车场已经没有停车位，工人们开着叉车忙碌地工作着。有5、6位受助者在工作人员的指引下排队等待领取食物。现场工作人员告诉我们，早上7点开始忙着发放食物，现在早晨的发放食物工作已经进入尾声，中午会有更多的人过来。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585976819175827.jpg",
          },
        },
        {
          paragraph: {
            text: "      在工作人员的指引下，我们来到办公室将此次加拿大温州同乡总会募集到的抗疫爱心款加币3万元的支票送到大温哥华地区食物银行总部CEO David Long手中。",
          },
        },

        {
          paragraph: {
            text: "David Long表示：“非常感谢加拿大温州同乡总会捐献的善款，这是伟大的爱心奉献。在疫情如此艰难的时刻收到加拿大温州同乡总会的3万元捐款对于食物银行是很大的帮助。每一位受助者都会感受到来自你们的温暖！”",
          },
        },

        {
          paragraph: {
            text: "      大温哥华地区食物银行的工作人员还邀请我们参观了食物银行的仓库区和工作人员的工作情况。看到温州同乡总会老乡们的捐款将会以食物的方式送到有需要的人手里，每个人都感到十分欣慰！因为受助者他们更多的是老者、儿童、单亲母亲、失业的家庭......希望一份丰盛的晚餐能给这些家庭带来安慰和快乐!",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585976627670343.jpeg",
          },
        },
        {
          citeRight: {
            text: "加拿大温州同乡总会 简讯",
          },
        },

        {
          citeRight: {
            text: "二0二0年四月三日",
          },
        },
      ],
    },
  },
  {
    id: 86,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "不要慌！加拿大抗疫软实力很强，呼吸机、口罩大批生产",
      date: "2020-04-03",
      imageURL: "/images/article/1585939319197086.jpg",
      previewText:
        "3月20日，加拿大政府就已经开始向加拿大所有的企业和制造商发出行动呼吁，要求各行各业齐心协力，共同协助政府抗疫。这是3月31日，杜鲁多在日常新冠疫情讲话时的部分摘要：目前正在与联邦政府开展合作，大规模生产医…",
      content: [
        {
          paragraphContainsBold: [
            {
              text: "3月20日，",
              link: "加拿大",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
            },
            {
              text: "政府就已经开始向",
              link: "加拿大",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
            },
            {
              text: "所有的企业和制造商发出行动呼吁，要求各行各业齐心协力，共同协助政府抗疫。",
            },
          ],
        },

        {
          paragraph: {
            text: "这是3月31日，杜鲁多在日常新冠疫情讲话时的部分摘要：",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-1.jpg",
          },
        },
        {
          paragraph: {
            text: "目前正在与联邦政府开展合作，大规模生产医疗设备的公司如下：",
          },
        },

        {
          paragraph: {
            text: "位于多伦多的康山医疗公司(ThornhillMedical)正在生产1500台便携式呼吸机，政府正在制定合理分配呼吸机的计划，争取每家医院都有补充。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-2.jpg",
          },
        },
        {
          paragraph: {
            text: "康山医疗生产的呼吸机",
          },
        },

        {
          paragraph: {
            text: "总部位于蒙特利尔的医疗级个人防护设备制造商麦迪康(Medicom)正在增建生产线，制造上千万个口罩，联邦政府已经向包括Medicom在内的制造商订购了超过1.57亿只外科口罩，为医护人员和病人提供保障。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-3.jpg",
          },
        },
        {
          paragraph: {
            text: "麦迪康的口罩",
          },
        },
        {
          paragraphContainsBold: [
            {
              text: "位于渥太华的DNA快速诊断设备制造商SpartanBioscience已经研发出了新冠病毒快速检测试剂盒，只等",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "卫生部和美国FDA下发认证，即可大规模批量生产。",
            },
          ],
        },
        {
          paragraphContainsBold: [
            {
              text: "另外，",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "政府还和以下企业签署了意向书，支援国家生产抗议抗疫物资：",
            },
          ],
        },
        {
          paragraphContainsBold: [
            {
              text: "位于圭尔夫的生物技术公司PrecisionBiomonitoring正在开发核酸检测试剂盒，确保",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "实现核酸试剂盒自给自足的能力。",
            },
          ],
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-4.jpg",
          },
        },
        {
          paragraphContainsBold: [
            {
              text: "位于卡尔加里的环保化学公司FluidEnergyGroupLtd.正在加紧改造生产线，专门生产洗手液和消毒液，确保",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "消毒制剂充足。",
            },
          ],
        },

        {
          paragraphContainsBold: [
            {
              text: "经营着",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "最大的炼油厂和900个加油站，总部设在圣约翰的IrvingOil正在改造生产线，生产消毒洗手液。",
            },
          ],
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-5.jpg",
          },
        },

        {
          paragraph: {
            text: "IrvingOil",
          },
        },

        {
          paragraph: {
            text: "位于蒙特利尔的CalkoGroup专业生产工业防护服和急救医疗用品，目前该该公司正在加班加点地生产防护面罩、医疗防护服等，全力支援抗议前线的医护人员。",
          },
        },

        {
          paragraph: {
            text: "位于新斯科舍省的Stanfield’s是内衣和休闲服装制造商，目前正在调动资源及改造生产线，为医护工作者生产更多医疗防护服。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-6.jpg",
          },
        },
        {
          paragraphContainsBold: [
            {
              text: "Stanfield’s的生产线",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "联邦政府也欢迎已经相应政府抗疫行动号召，并且已经走到生产线上加紧生产物资的其他公司和企业们。",
            },
          ],
        },

        {
          paragraphContainsBold: [
            {
              text: "鹅(CanadaGoose)重新改造其位于多伦多和温尼伯的生产线，生产医护制服和防护服，并给无偿捐赠所有物资。",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "联邦政府也欢迎已经相应政府抗疫行动号召，并且已经走到生产线上加紧生产物资的其他公司和企业们。",
            },
          ],
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-7.jpg",
          },
        },

        {
          paragraphContainsBold: [
            {
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "鹅生产车间",
            },
          ],
        },

        {
          paragraphContainsBold: [
            {
              text: "通用电气已经将呼吸机的生产能力提供一倍，并计划在未来翻两番，为",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "政府提供500台呼吸机;",
            },
          ],
        },

        {
          paragraphContainsBold: [
            {
              text: "麦格纳汽车零件商、通用汽车、丰田汽车",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "、福特、壳牌、森科尔能源、利纳马汽车系统、HomeDepot以及阿里巴巴等一系列公司正在积极捐献个人防护设备，为医院提供消毒用品，帮助",
            },
            {
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "医务人员。",
            },
          ],
        },

        {
          paragraphContainsBold: [
            {
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "化妆品联会、",
            },
            {
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "消费者特殊产品协会、",
            },
            {
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "烈酒协会联手建立洗手液生产交易所，帮助汇集行业合作伙伴共同努力，最大限度地扩大洗手液",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "自产化。",
            },
          ],
        },

        {
          paragraphContainsBold: [
            {
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "科技担当：超级产业集群——",
            },
            {
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "制造次世代",
            },
            {
              text: "(NextGenerationManufacturingCanada)，已经拨款5000万加元用于开发和生产急需的新技术，包括病毒筛查试验、疫苗、治疗手段、呼吸机、外围设备、个人防护、消毒化学品等。",
            },
          ],
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-8.jpg",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "目前全",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "已经有3个项目在支援国家的号召发出48小时内，从无到有被创造并且经审查批准，即将投入大规模生产并确保长期生产能力。",
            },
          ],
        },
        {
          paragraph: {
            text: "包括：",
          },
        },

        {
          paragraph: {
            text: "1.BurloakTechnologies的3D打防护面罩，目前该公司正在与当地的医疗专家、大学等合作，确保实现每周1.5万个面罩的生产目标。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-9.jpg",
          },
        },
        {
          paragraph: {
            text: "2.利纳马联合StarFishMedical论证了开源呼吸机——应急呼吸机制造方案的可行性。",
          },
        },

        {
          paragraph: {
            text: "他们的第一个目标是创造出安全有效并且经济实惠的呼吸机设计，第二个目标是整合制造商和供应商，大规模生产这种经济型基础呼吸机。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-10.jpg",
          },
        },
        {
          paragraph: {
            text: "西班牙网友自制的开源呼吸机",
          },
        },

        {
          paragraph: {
            text: "SonaNanotech将于实验室、高校和医院E座，利用纳米技术开发能提高病毒检测准确性，且10分钟就能出结果的核酸检测盒。",
          },
        },

        {
          paragraph: {
            text: "如果成功，该项目每周可生产2万个试剂盒，并有可能扩大到每周100万个试剂盒，同时将成本控制到最低。",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "随着疫情的发展，老牌制造业强国",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "也已经进入紧急状态，开动了国家机器，全力抗疫。",
            },
          ],
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-11.jpg",
          },
        },

        {
          paragraphContainsBold: [
            {
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "政府已经开始与3,000家公司开展了合作，共同抗疫。",
            },
          ],
        },

        {
          paragraph: {
            text: "作为普通民众，首先就是不要慌张。目前多伦多已经封城，我们唯一要做的也很简单，老老实实待在家里哪也不要去，冷静看待疫情，不过分紧张造谣传谣增大社区恐慌就行。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585930696933-12.jpg",
          },
        },

        {
          paragraphContainsBold: [
            {
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "不仅制造业发达，农牧渔本身也在世界前列，和意大利等欧洲国家完全不一样，所以大家购买生活必需品也完全用不着疯狂囤积。",
            },
          ],
        },

        {
          paragraph: {
            text: "冷静、冷静、还是冷静。",
          },
        },
        {
          paragraphContainsBold: [
            {
              text: "相信",
              linkURL: "https://www.vansky.com/news/tag/加拿大",
              link: "加拿大",
            },
            {
              text: "一定能力抗疫成功的，加油!",
            },
          ],
        },
      ],
    },
  },
  {
    id: 87,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "枫华温情 众志成城",
      date: "2020-04-02",
      imageURL: "/images/article/1585801228262337.jpeg",
      previewText:
        "经济学家钟朋荣将“温州人精神”概括为四句话：白手起家、艰苦奋斗的创业精神；不等不靠、依靠自己的自主精神；闯荡天下、四海为家的开拓精神；敢于创新、善于创新的创造精神”。这是流淌在温…",
      content: [
        {
          paragraph: {
            text: "      经济学家钟朋荣将“温州人精神”概括为四句话：白手起家、艰苦奋斗的创业精神；不等不靠、依靠自己的自主精神；闯荡天下、四海为家的开拓精神；敢于创新、善于创新的创造精神”。这是流淌在温州人血液里的基因，温州人怀揣着这些美好的品德走向世界各地！",
          },
        },

        {
          paragraph: {
            text: "      当新冠肺炎疫情在加拿大蔓延开来的时候，生活在这片辽阔土地上的温州人再一次发扬了“温州人的团结一致，不等不靠的精神”。与以往不同的是，温州人的这次行动不光是为了帮助有需要的老乡，更是将温州人的温暖爱心传递给居住国的人们，为居住国的社会慈善事业提供帮助！",
          },
        },

        {
          paragraph: {
            text: "      总会设在温哥华的加拿大温州同乡总会，在“加拿大温州人为抗击新冠肺炎疫慈善募捐”活动中，不折不扣的“打了个全场”！上半场刚刚将善款和物资寄回温州，下半场就发起了为居住国捐款的倡议。让人感动的是，滞留在国内的温州老乡不顾时差造成的不便，依然踊跃为加拿大温州同乡总会倡议的活动捐款，可以说，温州老乡的爱心是不分国界跨越时空的距离汇聚在了一起！",
          },
        },

        {
          paragraph: {
            text: "     善款如何用，如何用得有意义，这成了加拿大温州同乡总会理事会思考的问题！加拿大温州同乡总会会长特别指出“善款的每一分钱都是我们温州老乡的一份拳拳赤子之心！把善款用在刀刃上，把温州人的爱心以最快的速度传递出去，让善款发挥最大的作用，只有这样才不能辜负温州老乡们的一片赤诚之心！",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585802601416009.jpg",
          },
        },
        {
          citeImage: {
            text: "加拿大温州同乡总会准备了充足的防疫物品，准备发放给需要的人和机构",
          },
        },
        {
          paragraph: {
            text: "      把“善款用得暖心，把温州娒娒照顾好”加拿大温州同乡总会的长辈们首先想到的是在加拿大留学，父母不在身边的“温州娒”。汇总温州留学生的信息，我们了解到，这些孩子生活基本保证，就是由于上课繁忙错过了购买口罩等防疫物品的时间，口罩买不到！于是，加拿大温州同乡总会决定将市面上的“紧缺抗疫物资”N95口罩、医用一次性口罩和一次性手套分捡组合成“抗疫爱心包”分发给有需要的“加拿大温州留学娒”。由于加拿大疫情有攀升的趋势，全国停工停课，国民居家驻留。再加上生活在温哥华的温州留学生居住分散，加拿大的邮递渠道单一且缓慢等原因，都有可能妨碍了“防疫爱心包”及时送达的初衷。于是，同乡会的温州年轻人就发挥了积极的作用！加拿大温州同乡总会青年会的会员们主动请命，跨越好几个城市，将“爱心包”点对点，一对一送到温州留学生手中！最让我们欣慰的是“抗议爱心包”发放安抚了远在温州的留学生家长的焦虑和牵挂……",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1585801936146664.jpg",
          },
        },
        {
          citeImage: {
            text: "留学生们收到了来自加拿大温州同乡总会的关怀包 ",
          },
        },
        {
          paragraph: {
            text: "      俗话说“爱自己的孩子是人，爱别人的孩子是神”。要让温州人的善良，升华到“慈善事业”就要将大爱播撒出去。在“有钱都买不到防疫物资”的情况下，加拿大温州同乡总会还是将一箱箱珍贵的“防疫爱心包”送到了中国驻温哥华总领馆，配合总领管发起的面对中国留学生的疫情帮助倡议活动中。",
          },
        },
        {
          citeImages: [
            {
              text: "加拿大温州同乡总会会长朱建国先生",
              imageSRC: "/images/article/1585802020646055.jpeg",
            },
          ],
        },

        {
          citeImages: [
            {
              text: "加拿大温州同乡总会代表与中国驻温哥华总领事馆领事合影",
              imageSRC: "/images/article/1585802059407397.jpeg",
            },
          ],
        },
        {
          paragraph: {
            text: "      “把善款用在刀刃上，不求大，只求快快发挥作用”",
          },
        },

        {
          paragraph: {
            text: "      疫情当前的此时此刻，只有在医院里，只有在危重患者的抢救中，人们才能体会到时间就是生命这句的分量！",
          },
        },

        {
          paragraph: {
            text: "     “口罩告急！”“我们需要的防护服何时能到位？”“急需N95口罩”这些急切的声音不是来自普通人的你、我、他。这些声音是来自温哥华总医院的医生和护士！",
          },
        },

        {
          paragraph: {
            text: "      加拿大温州同乡总会理事会成员偶尔听到朋友谈起，温哥华总医院（Vancouver General Hospital）呼吸传染科的医护人员急需N95口罩！需求已经到了迫在眉睫的程度！一线护士说，如果N95口罩再供应不上，就只能重复使用了。这太危险了！",
          },
        },

        {
          paragraph: {
            text: "      口罩也用到“刀刃”上，一刻都不能耽搁！",
          },
        },

        {
          paragraph: {
            text: "      加拿大温州同乡总会会长工作小组马上和这位朋友联系，问清楚捐赠事宜，立刻拍板，绕开繁琐的捐赠程序，直接派加拿大温州同乡总会的工作人员把同乡会仅存的两箱N95医用口罩送到温哥华总医院呼吸科去救急！",
          },
        },
        {
          citeImages: [
            {
              text: "加拿大温州同乡总会义工把N95口罩送到了温哥华总医院",
              imageSRC: "/images/article/1585802206447362.jpeg",
            },
          ],
        },
        {
          paragraph: {
            text: "      “把善款用在刀刃上，为居住国的慈善事业添砖加瓦”",
          },
        },

        {
          paragraph: {
            text: "      加拿大是一个社会慈善体系非常发达的国家。但是，在新冠肺炎疫情蔓延的情况下，一切都显得措手不及。“食物银行”是加拿大历史悠久，体系完善的救助有需要人士的慈善项目。此时也面临资金短缺，无法购买捐赠食物的窘境。加拿大温州同乡总会立刻决定将一部分善款用于帮助“食物银行”购买食物，发放给有需要的人！",
          },
        },

        {
          paragraph: {
            text: "      闯荡天下，四海为家，落地生根，传承美德！今天的温州人正以大踏步前进的速度融入到居住国的社会活动和建设中，用每一位温州老乡的爱心去点亮我们中国同胞在居住国的形象！加拿大温州同乡总会是我们每一位生活在加拿大温州老乡的家！",
          },
        },
        {
          space: {},
        },
        {
          citeRight: {
            text: " 加拿大温州同乡总会",
          },
        },

        {
          citeRight: {
            text: " 2020年4月1日",
          },
        },
      ],
    },
  },
  {
    id: 88,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "致旅加侨胞、留学生朋友们的一封信",
      date: "2020-03-24",
      imageURL: "/images/article/1585016085182279.png",
      previewText:
        "亲爱的旅加侨胞、留学生朋友们：　新冠肺炎疫情暴发后，广大旅加侨胞、留学生朋友们情系桑梓，纷纷行动，捐款捐物，关心和支持国内抗疫斗争。国内亲友对此深受感动，深感自豪。驻加拿大使馆在此谨对大家的无私奉献…",
      content: [
        {
          paragraph: {
            text: "亲爱的旅加侨胞、留学生朋友们：",
          },
        },

        {
          paragraph: {
            text: "　　新冠肺炎疫情暴发后，广大旅加侨胞、留学生朋友们情系桑梓，纷纷行动，捐款捐物，关心和支持国内抗疫斗争。国内亲友对此深受感动，深感自豪。驻加拿大使馆在此谨对大家的无私奉献表示由衷敬意和感谢。",
          },
        },

        {
          paragraph: {
            text: "　　在习近平主席的坚强领导和亲自指挥部署下，在海内外侨胞和留学生朋友们的大力支持下，全国人民团结一心、众志成城、共同抗疫，国内疫情防控形势持续向好，生产生活秩序加快恢复。但让我们感到揪心的是，国际疫情快速蔓延，加拿大疫情也不断发展，大家面临的健康风险在上升。你们目前的处境正是国内同胞刚刚经历过的，我们对你们的担忧、不安感同身受。请相信，我们以及国内千千万万亲友时刻牵挂着你们。习近平主席在最近一次会议上特别要求，要保护好我们在海外公民的生命安全和身体健康。对驻加拿大使馆来说，“外交为民”是我们不变的宗旨。我们始终心系每一位海外游子，始终把海外公民的健康和安全放在第一位。",
          },
        },

        {
          paragraph: {
            text: "　　目前，加拿大联邦和省级政府总体重视疫情防控。加医疗水平相对较高，有应对疫情的经验。希望大家高度重视疫情防范，严格遵守加各级政府和卫生部门的防疫要求，加强个人防护，尽可能减少出行和聚会，不前往人群密集的场所，尤其注意避免长途旅行。如有不适，请遵循加卫生部门的指导立即就医。在此，建议大家及时了解掌握当地和国内的有关防控要求。请大家务必保持信心和定力，以理性、科学和冷静的态度做好自身防疫。",
          },
        },

        {
          paragraph: {
            text: "　　海外游子与故土乡亲都是我们的手足同胞，我们心血相通、心意相连。驻加拿大使领馆将积极支持大家抗疫，只要我们能做到的，一定会全力以赴提供协助。国内有关防疫指南，抗疫远程问诊平台等信息已登载在我馆网站上，欢迎大家查阅和使用。我们的领事保护与协助热线电话将24小时保持畅通。不管疫情如何发展变化，我们都会坚守岗位，与大家一起努力，迎接抗疫斗争的最后胜利。",
          },
        },
        {
          paragraph: {
            text: "　　祝大家身体健康，生活幸福！",
          },
        },

        {
          paragraph: {
            text: "  　驻加拿大使馆",
          },
        },

        {
          paragraph: {
            text: "　　2020年3月20日",
          },
        },
      ],
    },
  },
  {
    id: 89,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title:
        "加拿大奥委会宣布不参加东京奥运，除非推迟，国际奥委会将在4周内作决定",
      date: "2020-03-24",
      imageURL: "/images/article/1585052101320901.jpg",
      previewText:
        "除非东京奥运会推迟一年，否则加拿大已决定不会派员参加东京奥运会。加拿大奥委会宣布不派员参加东京奥运 除非奥运会推迟国际奥委会对于要不要推迟东京奥运还在犹疑不决，但加拿大奥林匹克委员会和加拿大残奥会…",
      content: [
        {
          citeMid: {
            text: "除非东京奥运会推迟一年，",
          },
        },

        {
          citeMid: {
            text: "否则加拿大已决定不会派员参加东京奥运会。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/093506c6yxaq9a39915ub6.jpg",
          },
        },
        {
          bParagraph: {
            text: "加拿大奥委会宣布不派员参加东京奥运 ",
          },
        },

        {
          bParagraph: {
            text: "除非奥运会推迟",
          },
        },

        {
          paragraph: {
            text: "国际奥委会对于要不要推迟东京奥运还在犹疑不决，但加拿大奥林匹克委员会和加拿大残奥会委员会在星期天发表联合声明说，除非本届夏季奥运推迟一年，否则他们拒绝派遣球队前往东京参赛。",
          },
        },

        {
          paragraph: {
            text: '加拿大奥运及残奥委员会表示，在咨询过运动员、体育组织和加拿大政府之后，他们作出了"这个艰难的决定"。',
          },
        },

        {
          bParagraph: {
            text: "加拿大紧急呼吁延期",
          },
        },

        {
          paragraph: {
            text: '该国还同时"紧急呼吁"国际奥委会、国际残奥委以及世界卫生组织（WHO）将东京奥运会延期一年。',
          },
        },

        {
          paragraph: {
            text: "声明中说：“尽管我们意识到延期带来的复杂性，但没有什么比运动员和国际社会的健康与安全更重要了。这不仅关乎运动员的健康，还关乎公共健康。有新冠状病毒风险，这对我们的运动员、他们的家人和整个加拿大社区的健康都是不安全的。”",
          },
        },
        {
          image: {
            imageSRC: "/images/article/112752otm5xu8zdgmoxdo1.jpg",
          },
        },
        {
          paragraph: {
            text: '之后，加拿大代表团官方在推特（Twitter）上发布帖文称："今日先延期，明日再征服（Postpone today. Conquer tomorrow）。"',
          },
        },

        {
          bParagraph: {
            text: "运动员们都表示理解",
          },
        },

        {
          paragraph: {
            text: "曾两次获得奥运会蹦床冠军的罗西·麦克伦南（Rosie MacLennan）说：“我认为这是一个负责任的决定，尽管可能很难，感到我们错过了这个机会，但我内心深知，这样做是百分之一百正确的选择。”",
          },
        },

        {
          paragraph: {
            text: "国际奥委会委员、六届奥运选手Hayley Wickenheiser认为，大多数运动员都支持加拿大奥林匹克委员会和加拿大残奥会委员会的决定。",
          },
        },

        {
          paragraph: {
            text: "奥运摔跤手冠军埃里卡·维比说：这是令人心碎的消息。“这是一个旋风般的一周。上周六我正式出线，刚取得参加东京奥运会比赛的资格。一周后，将面临无法参加。希望国际奥委会可以推迟一年。”",
          },
        },

        {
          bParagraph: {
            text: "国际奥委会和安倍终于首度改变口风",
          },
        },

        {
          paragraph: {
            text: "东京奥运会订于7月24日开始，残奥会定于8月25日举行。",
          },
        },

        {
          paragraph: {
            text: "面对全球疫情严峻，国际奥委会本来一直无动于衷，跟日本首相安倍晋三口径一致：东京奥运将按照原定计划和规模如期举行。但不同国家和项目总会不断施压，希望延迟奥运，令国际奥委会和日本首相安倍晋三终于首度改变口风，表示正展开研究，四个星期内会做出决定。",
          },
        },

        {
          paragraph: {
            text: "首相安倍晋三周一（3月23日）在日本议会上讲话时，第一次承认，2020年东京奥运会可能不得不延期举办。",
          },
        },

        {
          paragraph: {
            text: '"如果完整地举办（奥运会）变得困难，延期将会是无可避免的决定，因为我们认为，运动员的安全是首要的，"安倍说。不过，他仍然坚持，不会取消这届奥运会。',
          },
        },

        {
          paragraph: {
            text: "历史上，奥运会从未在和平时期被延期或取消。1940年奥运会因为二次世界大战而被取消，该届奥运会原定的主办地亦是东京。",
          },
        },

        {
          bParagraph: {
            text: "加拿大的声明引起共鸣",
          },
        },

        {
          paragraph: {
            text: "澳大利亚奥委会在其网站上的声明中告诉运动员，他们应该为2021年的东京奥运会做准备。",
          },
        },

        {
          paragraph: {
            text: '周一，澳大利亚向该国的运动员作出指引，为在2021年的北半球夏天参加奥运会及残奥会作准备。"运动会已经明显不可能在7月举办，"澳大利亚代表团团长伊恩·切斯特曼（Ian Chesterman）说。',
          },
        },

        {
          paragraph: {
            text: '英国奥林匹克协会（BOA）主席罗伯森爵士（Sir Hugh Robertson）对国际奥委会执委会复核奥运会举办安排的决定表示欢迎，同时敦促IOC"为那些面临重大不确定性的运动员"考虑，尽快作出决定。',
          },
        },

        {
          paragraph: {
            text: '周日，国际田联主席塞巴斯蒂安·科（Sebastian Coe/柯伊/高爾）致信巴赫表示，在7月举办奥运会"既不可行也不理想"。',
          },
        },

        {
          paragraph: {
            text: "国际奥委会主席托马斯·巴赫周日早些时候表示，国际奥委会组织正在考虑包括推迟的方案，并将在四个星期内做出决定。巴赫说，没有考虑完全取消奥运会。",
          },
        },

        {
          paragraph: {
            text: "自COVID-19大流行以来，这是国际奥委会第一次承认将考虑其他选择。",
          },
        },

        {
          paragraph: {
            text: "许多国际体育界知名人士都已预测，国际奥委会一定会推迟东京奥运，只是推迟多久还是未知数，但今年夏天肯定不会举行奥运了。",
          },
        },

        {
          paragraph: {
            text: "加拿大运动员对巴赫的最后四个星期的期限充满了喜忧参半的感觉，对并未考虑彻底取消比赛感到宽慰，但在全球疫情紧急状况对体育界影响的情况下，仍围绕着奥运会举行与否的不确定性感到焦虑。",
          },
        },

        {
          bParagraph: {
            text: "复杂的代价",
          },
        },

        {
          paragraph: {
            text: "目前，国际奥委会及东京组委会并未将取消奥运会纳入考虑范围之内，不过，即使只是延期，也仍然会带来重大影响。",
          },
        },

        {
          paragraph: {
            text: 'IOC主席巴赫在周日致运动员的信中表示"我们正处在困境当中"，但是现在就东京奥运会的举办日期作出最终的决定，仍然太早。',
          },
        },

        {
          paragraph: {
            text: '他表示，延期举办将是"一个极其复杂的挑战"，而取消举办则会"摧毁1.1万名运动员的奥林匹克梦想"。',
          },
        },

        {
          paragraph: {
            text: '巴赫指，一旦延期，东京奥运的一部分重要场馆有可能无法使用，此外有多达33个奥运项目各自在接下来一年的单项赛事日程将要作出相应的调整，而这只是"更多挑战当中的其中几个"。',
          },
        },

        {
          paragraph: {
            text: "国际奥委会最终将要听取世卫和日本政府的建议才能作出决定。",
          },
        },
      ],
    },
  },
  {
    id: 90,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "多伦多去年迎游客2810万人创新高，中国游客22.2万人",
      date: "2020-03-24",
      imageURL: "/images/article/1585051996444776.jpg",
      previewText:
        "多伦多去年迎游客增 2810万人创新高根据多伦多旅游局(Tourism Toronto)最新发表的统计数据，在2019年到访多伦多的海外游客的人数达2,810万人，创下了新的历史纪录，但受到与新型冠状病毒疫情相关的旅游限制的影响，…",
      content: [
        {
          image: {
            imageSRC: "/images/article/102334gbqkauvbkmkgb1fo.jpg",
          },
        },
        {
          bParagraph: {
            text: "多伦多去年迎游客增 2810万人创新高",
          },
        },
        {
          paragraph: {
            text: "根据多伦多旅游局(Tourism Toronto)最新发表的统计数据，在2019年到访多伦多的海外游客的人数达2,810万人，创下了新的历史纪录，但受到与新型冠状病毒疫情相关的旅游限制的影响，中国游客今年到访多伦多的游客人数预期将有所减少。",
          },
        },
        {
          paragraph: {
            text: "多伦多旅游局昨(26日)发表的统计数据显示，在2019年到访多伦多的海外游客的人数达2,810万人，超过了在2018年创下的2,750万人的历史纪录。",
          },
        },
        {
          bParagraph: {
            text: "住宿消费开支67亿元",
          },
        },
        {
          paragraph: {
            text: "多伦多旅游局的执行副总裁威尔(Andrew Weir)指出，海外游客去年在多伦多花费在酒店住宿、餐馆就餐、景点观光以及零售消费等方面的金钱高达67亿元。",
          },
        },
        {
          paragraph: {
            text: "他还指出，海外游客到访多伦多的人数在过往5年来增加了11.5%，归功于多伦多作为一个国际城市的崛起；高科技行业的蓬勃发展推动了商务旅行以及五星级酒店的增加来吸引富有的游客。",
          },
        },
        {
          paragraph: {
            text: "根据多伦多旅游局发表的统计数据，美国依然是多伦多最大的国际市场，来自美国的游客在去年到访多伦多的人数增至200万人，与2018年相比增长了3%。美国游客去年在多伦多消费的金额高达13.5亿元，也打破了去年创下的历史纪录。",
          },
        },
        {
          paragraph: {
            text: "统计数据还显示，中国依然是多伦多最大的海外市场，在去年到访多伦多的中国游客的人数达22.2万人，与2018年相比下跌了5.4%。",
          },
        },
        {
          bParagraph: {
            text: "疫情影响中国游客来加",
          },
        },
        {
          paragraph: {
            text: "然而，中国近期爆发了新型冠状病毒的疫情，为了阻止病毒的传播，中国政府已实施了严格的旅游限制，恐对多伦多的旅游业构成严重的负面影响。",
          },
        },
        {
          paragraph: {
            text: "对此，威尔说，很多到访多伦多的中国游客还前往尼亚加拉大瀑布、渥太华和白求恩大夫的故居Gravenhurst旅游，现时还无法预测新型冠状病毒疫情在2020年对多伦多旅游业的影响有多大。",
          },
        },
        {
          paragraph: {
            text: "他还补充说，从过往的情况来看，当来自一个市场的游客人数下跌时，来自其他市场的游客人数的增加有助于填补缺口。",
          },
        },
      ],
    },
  },
  {
    id: 91,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "加拿大新闻",
    subDirectory: "/info/canada",
    article: {
      title: "华人社区应该行动起来了！向加拿大的医护人员捐赠抗疫防护设备 ...",
      date: "2020-03-24",
      imageURL: "/images/article/1585051784872200.jpg",
      previewText:
        "华人社区应该行动起来向加拿大的医护人员捐赠抗疫防护设备一个月前，中国新冠病毒疫情严重，加拿大的华人、华侨和留学生义无反顾捐钱捐物，支援中国抗疫。现在，加拿大新冠病毒疫情不断扩大，生活在加国的华人、华侨…",
      content: [
        {
          bParagraph: {
            text: "华人社区应该行动起来",
          },
        },

        {
          bParagraph: {
            text: "向加拿大的医护人员捐赠抗疫防护设备",
          },
        },

        {
          paragraph: {
            text: "一个月前，中国新冠病毒疫情严重，加拿大的华人、华侨和留学生义无反顾捐钱捐物，支援中国抗疫。现在，加拿大新冠病毒疫情不断扩大，生活在加国的华人、华侨和留学生更不能袖手旁观，应该尽其所能，向加拿大的医护人员捐赠抗疫防护设备，或向加拿大红十字会捐钱资助加拿大的医疗系统和第一线的医护人员。",
          },
        },

        {
          space: {},
        },

        {
          paragraph: {
            text: "加拿大红十字会网站：https://www.redcross.ca",
          },
        },

        {
          image: {
            imageSRC: "/images/article/163616t02p2zkeaow0ubq3.jpg",
          },
        },
        {
          bParagraph: {
            text: "加国医生集体向政府请愿 ",
          },
        },

        {
          bParagraph: {
            text: "促尽快自产口罩等医护用品解决短缺问题",
          },
        },
        {
          paragraph: {
            text: "加拿大新冠状病毒疫情不断扩大，导致前线医护人员处于高风险情势中，全国各地共数十名医生集体发出请愿信，呼吁联邦和各省政府正视医疗资源短缺的问题，希望全国进入类似战争的紧急状态，尽所有可能来生产口罩等医护用品。",
          },
        },

        {
          paragraph: {
            text: "这群医生在Change.org的网站请愿信是写给总理杜鲁多、卫生厅长凯杜（Patty Hajdu）和全国各省和地区的省长和卫生厅长。",
          },
        },

        {
          paragraph: {
            text: "信中说：“我们前线医疗保健人员已经用尽个人防护设备（PPE），例如N95口罩、手术口罩、手套和防护服。我们还需要包括面罩、护目镜和COVID-19测试套件、呼吸机、洗手液和可能治疗患者的药物，但这些医护用品严重短缺。这对于医护人员乃至公众而言，都是无法接受的危险。”",
          },
        },

        {
          paragraph: {
            text: "信中提到，全球都急需这些医护用品，而多数用品都在中国等地制造，所以加拿大更必须自己生产来确保需求。所以信中建议启动类似战争情况的模式。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/161131qudzuddevxdz5ivd.jpg",
          },
        },
        {
          listNum: [
            {
              text: "对目前的工厂和熟练工人进行再利用，使其能",
              bold: "在国内生产这些物品，并优先分配给医疗保健工作者。",
            },
            {
              text: "呼吁民众将他们储存而尚未开封的医疗用品捐赠给医院和诊所。",
            },

            {
              text: "研究如何透过漂白剂、紫外线或其他技术而能更安全地重新使用现有库存用品，研究重复使用布口罩或医疗罩袍的可能性。",
            },

            {
              text: "从",
              bold: "SARS",
              text2:
                "流行病中解放所有库存的防护设备。我们中的许多人愿意签署同意书来使用过期的个人防护设备，毕竟这比没有防护来得好。",
            },

            {
              bold: "从中国和其他国家购买任何可能的库存用品。",
            },

            {
              text: "扩展COVID-19病毒测试剂功能和处理设施。",
            },

            {
              text: "利用酒厂来生产含酒精的洗手液。",
            },

            {
              text: "制造氯喹 (chloroquine)、羟氯喹(hydroxychloroquine)、和抗病毒药物，这些药物可能会治疗染病的患者。这个请愿书在周四东岸时间下午三点已突破2万人连署。",
            },
          ],
        },
      ],
    },
  },
  {
    id: 92,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "加拿大温州同乡总会捐款倡议书",
      date: "2020-03-22",
      imageURL: "/images/article/1584913031519272.jpg",
      previewText:
        "乡亲们：                     当前，加拿大新型冠状病毒感染的肺炎疫情形势严峻，已呈现地区暴发、全国范围多点散发局面。虽然加拿大政府和社会有着…",
      content: [
        {
          paragraph: {
            text: "乡亲们：                 ",
          },
        },

        {
          paragraph: {
            text: "    当前，加拿大新型冠状病毒感染的肺炎疫情形势严峻，已呈现地区暴发、全国范围多点散发局面。虽然加拿大政府和社会有着很充分的救援保障机制，但医疗物资和防护物资的缺乏是当务之急。",
          },
        },

        {
          paragraph: {
            text: "    当我们的祖籍国发生重大天灾时，我们每次都会凭着血浓于水的同胞情谊踊跃捐款捐物，在这一次“战疫”中，加拿大的华人华侨买空了市面上的所有防护用品，运回祖国，支援祖国抗击疫情，贡献力量！现在我们的居住国加拿大抗击新冠状肺炎疫情扩散已经进入关键时刻！俗话说“唇亡齿寒，皮毛焉存”当我们的居住国，面临困难时，我们应该伸出援助之手，帮人就是帮己，乡亲们，我们有钱出钱，有力出力，不管能力大小，贡献自己的一份爱心！疫情无情，人间有爱；一方有难，八方支援。不要犹豫，马上行动起来吧，希望广大温州老乡们慷慨解囊，鼎力相助，用博爱善举彰显我们华人华侨在居住国的社会责任。",
          },
        },

        {
          paragraph: {
            text: "   捐款人可获得加拿大温州同乡总会的退税凭证。",
          },
        },

        {
          paragraph: {
            text: "                                   加拿大温州同乡总会 ",
          },
        },

        {
          paragraph: {
            text: "                                   2020年3月22日",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1585115726515301.jpg",
          },
        },
      ],
    },
  },
  {
    id: 93,
    categoryClass: "information",
    subCategoryClass: "placeholder",
    parentDirectory: "info",
    category: "信息资讯",
    subcategory: "家乡协会",
    subDirectory: "/info/association",
    article: {
      title: "加拿大温州同乡总会紧急呼吁防范新冠肺炎",
      date: "2020-03-22",
      imageURL: "/images/article/1584912495613353.jpg",
      previewText: "",
      content: [
        {
          image: {
            imageSRC: "/images/article/1585116454137818.jpg",
          },
        },
      ],
    },
  },
  // EventMessages begin here
  {
    id: 96601,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "加拿大華裔投票促進會「就差你一票」街頭促票活動",
      imageURL: "/images/article/1632512090782665.jpeg",
      content: [
        {
          paragraph: {
            text: "2019年6月14日，加拿大中国国家书画院数位画家在温州同乡总会会所举办书画教学及创作活动。 ",
          },
        },

        {
          paragraph: {
            text: "下午一点整，画家们聚集在同乡会会所，大家挥毫泼墨，完成了一幅幅高水准的字画，现场观众赞声不绝。",
          },
        },

        {
          paragraph: {
            text: "山水画家毕恭先生",
          },
        },

        {
          paragraph: {
            text: "画家王世勇先生",
          },
        },

        {
          paragraph: {
            text: "画家吴荣添先生",
          },
        },

        {
          paragraph: {
            text: "出身书画世家的温州同乡总会会长游兆丰先生也现场秀了书法。",
          },
        },

        {
          paragraph: {
            text: "　　此次活动由温州同乡总会副会长李朝晖先生牵头举办。为了弘扬中国优秀的传统文化和促进中加两国的经贸交流，李朝晖先生创办了加拿大中国新时代文化经贸促进会和加拿大中国国家书画院，让海内外人士可以更积极有效地参与中加贸易、教育与文化的交流工作，推动中国优秀的传统文化在世界传播。",
          },
        },

        {
          paragraph: {
            text: "展示作品",
          },
        },

        {
          paragraph: {
            text: "列志文市议员区泽光先生（中）也亲临现场观摩。",
          },
        },

        {
          paragraph: {
            text: "左为李朝晖先生，右为区泽光先生。 ",
          },
        },

        {
          paragraph: {
            text: "这次活动得到了老乡们的好评。李朝晖先生说，以后会经常举办此类学习班，给老乡提供一个学习书画的好机会。",
          },
        },
      ],
    },
  },
  {
    id: 96602,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "万水千山粽是情 - 加拿大温州同乡总会乡亲欢度端午节",
      content: [
        {
          paragraph: {
            text: "浓情五月，粽叶飘香。2019年6月7日，农历五月初五，加拿大温州同乡总会的乡亲们，迎来了中国的传统节日：端午节。",
          },
        },

        {
          paragraph: {
            text: "这天，位于列治文的加拿大温州同乡总会，青青的粽叶香气弥漫了整座会所，大厅里高挂着端午节的祝福横幅，温籍的父老乡亲如期而至，相聚在同乡会会所共度端午佳节。",
          },
        },

        {
          paragraph: {
            text: "会所大厅，席开三排长桌：每排桌子可容纳好几十人。",
          },
        },

        {
          paragraph: {
            text: "中午时分，乡亲们陆陆续续到达。由同乡义工为大家制作的端午薄饼，艾草煮蛋，口味各不相同的粽子，是这个节日的主打菜，也是温州人过端午节必不可少的传统菜。",
          },
        },

        {
          paragraph: {
            text: "大家品粽子，叙友情，熟悉亲切的乡音回荡在会所里",
          },
        },

        {
          paragraph: {
            text: "正在北美考察的温籍老乡、锦州商会长会陈训蒿先生，也光临会所和大家共度佳节。",
          },
        },

        {
          paragraph: {
            text: "很多老乡这天早早的就来到会所，大家分工明确，争相干活，不亦乐乎。",
          },
        },

        {
          paragraph: {
            text: "烹调高手陈珲",
          },
        },

        {
          paragraph: {
            text: "来自乐清浦岐的贾芬萍的婆婆，带领大家熟练地包起粽子，没一会儿，一只只小巧玲珑形状各异的粽子堆满了一锅锅。",
          },
        },

        {
          paragraph: {
            text: "大家还编起了香蛋袋子。好多人编着编着，就情不自禁的回忆起童年的趣事，会所的厨房里不时发出一阵阵欢快的笑声。这种寓教于乐的游戏，让在场的孩子们也感受到了母国民族浓郁的传统文化，感受到民俗的魅力。青青艾叶香，根根丝相连，切切情意深。身在异国他乡的游子们，在这端午佳节里，共欢聚在同乡会会所，深深地感受到浓浓的故乡情。",
          },
        },

        {
          paragraph: {
            text: "大家期待来年艾叶飘香的时节，依旧能够欢聚在温州同乡会这个温州人自已的家里，共度端午佳节。",
          },
        },

        {
          paragraph: {
            text: "特别鸣谢下列端午节义工：",
          },
        },

        {
          paragraph: {
            text: "陈珲、叶丹金、唐海萍、金新程、夏盈盈、叶云丹、王云、林爱华、丽蓉、林琴、贾芬萍和她的婆婆、公公。李胜、应树德、高燕子、邵莲珠、胡玉萍、李小玲、美华、徐聪和他的父母等。如有遗漏义工名字的，敬请原谅，以后再统计在册。",
          },
        },
      ],
    },
  },
  // {
  //   id: 96603,
  //   categoryClass: "events",
  //   parentDirectory: "events",
  //   category: "活动分享",
  //   subcategory: "2019年活动",
  //   subDirectory: "/events/Events2019",

  //   article: {
  //     title: "锦州市温州商会会长陈训蒿先生到访加拿大温州同乡总会",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "5月30曰星期四，加拿大温州同乡总会迎来了一位远道而来的贵客：锦州市温州商会会长陈训蒿先生。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "左为陈训蒿会长，右为温州同乡总会游兆丰会长。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　陈训蒿会长是位土生土长的温州人，是商界的成功人士，非常热心公益事业。他此次北美之行，就是为做好做大锦州温州商会，开拓视野、取经学习的。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　在温州同乡总会的小会议厅，陈会长认真听取了游兆丰会长的办会心得和经验。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　陈会长仔细参观了同乡会会所，对温州同乡总会拥有自已的这么一座明亮宽敞的会所，赞不绝口。特别是参观会所的展示墙上文图并茂的'温州记忆'，记载了温州城的建城历史，地理地貌、风土人情、政治、经济、文化、娱乐、地方小吃，特别是在先天下先的温州特色的地方经济等等包罗万象。他深有感触地说：这道墙很有创意，很有义意。看到它仿佛置身于故乡，真正有了家的感觉，特别的温馨。对旅居海外的下一代有特别的教育意义，让他们知道自已的根在何方，自已美丽可爱富饶的家乡。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "晚上，游兆丰会率同乡会数位副会长，在列志文海港大酒家宴请陈会长。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "席间，陈会长盛情邀请游会长和各位副会长们到锦州温州商会考察作客。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "宴会结束大家愉快合影留念。",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: 96604,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "七百华人健儿参赛温马助力北京冬奥",
      content: [
        {
          paragraph: {
            text: "5月5日上午，晴空万里，阳光灿烂，2019年温哥华国际马拉松比赛盛大举行，在马拉松比赛的赛道上，来自加拿大和中国的700名长跑爱好者、运动员及各界人士身着“跑向2022北京”字样的蓝色运动衫，在温哥华美丽的滨海道路上，为2022年北京冬奥会“助跑”。",
          },
        },

        {
          paragraph: {
            text: "这是“相约最美温马、助力北京冬奥”活动连续第二年在温哥华马拉松比赛期间举行。活动由加拿大华人联合总会主办，钻石女皇珠宝冠名赞助，加拿大青少年体育促进会承办。当天，在温哥华马拉松比赛的全程、半程和8公里长跑项目中，到处可见到北京冬奥助跑者们的身影。",
          },
        },

        {
          paragraph: {
            text: "温哥华国际马拉松是加拿大第二大马拉松赛事，其赛道全程约有75%沿海而行，被评为“全球十佳马拉松”之一，亦有“世界最美马拉松”之誉。“温马”赛道连接众多温哥华地标，沿途可见群山苍翠、碧海无垠。“温马”每年吸引世界50多个国家15, 000多名选手参赛。",
          },
        },

        {
          paragraph: {
            text: "温马助奥组委会主席、加拿大华人联合总会执行会长王岩，组委会荣誉主席、加拿大华人联合总会荣誉主席余俊作均表示，温哥华与北京远隔重洋，但奥运精神将这两座城市紧密相连。七百健儿在温哥华最美赛道上一展英姿，正是当地华侨华人以加中体育交流的实际行动，向新中国70周年华诞献上的一份诚挚贺礼。",
          },
        },

        {
          paragraph: {
            text: "中国驻温哥华总领事佟晓玲表示，相信体育运动可拉近中加两国间的距离，增进相互了解。她以助跑活动标志图案上的跨桥为例说，这不仅象征着连接太平洋两岸的桥梁，也是体育和友谊的桥梁、心与心相连的桥梁、两国友好的桥梁。",
          },
        },

        {
          paragraph: {
            text: "加拿大联邦参议员胡元豹认为，温哥华马拉松赛和北京冬奥助跑活动不仅有益健康，让大家乐享春光，更可以在加中之间架起更多沟通的桥梁。",
          },
        },

        {
          paragraph: {
            text: "曾作为加拿大曲棍球奥运选手参加过北京奥运的BC省议会体育与多元文化秘书拉维·卡隆（RaviKahlon）也相信，体育运动会让两国人民之间联系得更为紧密。",
          },
        },

        {
          paragraph: {
            text: "温马助奥助跑活动继续得到温哥华华人社区、中资企业和留学生的热烈响应，中国驻温哥华总领馆也组团参加。该助跑活动发起人之一、加拿大青少年体育促进会主席吴自力表示，作为旅加华人，组织者们深感要为推动两国民间交往作出更多努力，因此今年动员了逾700人参与助跑，远多于首届的500人，体现出温哥华华人社区更为团结。",
          },
        },

        {
          paragraph: {
            text: "中国驻温哥华副总领事王承军，本那比市议员王白进，温马助奥组委会名誉主席崔钒、刘宝，共同主席常钰、韩雪莹、薛海清、于兆利、Andy Wang，咸氏金融集团董事长咸生林，温哥华中华会馆理事长姚崇英、副理事长吴俊誉、王元珑，加拿大华人社团联席会主席陈永涛、副主席刘朝方、陈阿忠，加拿大华人联合总会会长牛华、加拿大河北同乡会会长刘书梅、加拿大齐鲁华人总商会会长郑燕、加拿大辽宁同乡会会长吴彤等社区名人也率众参加了温马助奥活动。",
          },
        },

        {
          paragraph: {
            text: "年逾八旬的助跑者、温哥华老侨领朱展伦说，北京成功申办冬奥体现了祖籍国的强大。参加这一助跑盛事是华侨华人的骄傲，我们支持本地体育比赛，愿意助力北京冬奥。加拿大青少年体育促进会“冬奥小使者”、10年级学生常美婷表示，期待自己成为加中之间的友谊小使者，通过体育感知世界的同时也架起友好的桥梁。",
          },
        },

        {
          paragraph: {
            text: "今年的温哥华国际马拉松赛有来自60个国家和地区的1万7千多名参赛者参加。日本选手川内优辉和他的伴侣水口侑子包揽当日全程马拉松赛的男女金牌。",
          },
        },
      ],
    },
  },
  // {
  //   id: 96605,
  //   categoryClass: "events",
  //   parentDirectory: "events",
  //   category: "活动分享",
  //   subcategory: "2019年活动",
  //   subDirectory: "/events/Events2019",

  //   article: {
  //     title: "加拿大温州同乡总会考察团拜访温州市侨联",
  //     content: [
  //       {
  //         paragraph: {
  //           text: "  3月30日，加拿大温州同乡总会会长游兆丰率团拜访温州市侨联。市侨联党组书记、副主席林春霞会见了考察团一行，双方进行了座谈交流。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "       游兆丰一行参观了世界温州人家园。他介绍了侨团的基本情况以及今年的主要活动安排。他说，今年是加拿大温州同乡总会成立20周年，也将迎来第二届北美温州人大会。加拿大温州同乡总会将一如既往做好沟通和服务工作，团结海外侨胞，参与家乡建设。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "　　林春霞对考察团的来访表示欢迎，并就我市侨情和侨联工作职能等情况作了介绍。她希望加拿大温州同乡总会按照“规范化、规模化、本地化、年轻化”的要求，不断提升管理和发展水平。同时表示，市侨联作为温籍侨胞的娘家人，希望侨胞回温多走走看看，多为温州发展提宝贵意见。",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: 96606,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "快乐相聚同乡会",
      content: [
        {
          paragraph: {
            text: "4月8号是温州同乡总会对外开放日。这天天气晴好，蓝天白云，樱花灿烂。许多温籍的父老乡亲来到同乡会会所，带着浓浓的乡音乡情，大家叙旧、K歌、弹琴、打乒乓、学做美食。很多老乡还自带美食。中午时分，大家围坐一起。喝着美酒，尝着家乡菜。熟悉亲切的乡音，诉说着家乡的记忆，其情切切，其乐融融，大家在同乡会这个温暖的大家庭里共度了一天愉快的时光。",
          },
        },

        {
          paragraph: {
            text: " 卡拉OK演唱中",
          },
        },

        {
          paragraph: {
            text: " 打乒乓",
          },
        },

        {
          paragraph: {
            text: " 奋力拼搏",
          },
        },

        {
          paragraph: {
            text: " 学做包子",
          },
        },

        {
          paragraph: {
            text: " 成功了",
          },
        },

        {
          paragraph: {
            text: " 制作蔓越莓小酥饼是老乡新程最拿手的",
          },
        },

        {
          paragraph: {
            text: " 科班出身的美女EVA弹奏优美钢琴曲",
          },
        },

        {
          paragraph: {
            text: " 兴致勃勃的小可爱",
          },
        },

        {
          paragraph: {
            text: " 诗人珊瑚亲自制作的富有北美风味的烟熏三文鱼",
          },
        },

        {
          paragraph: {
            text: " 一桌美食",
          },
        },
      ],
    },
  },
  // {
  //   id: 96607,
  //   categoryClass: "events",
  //   parentDirectory: "events",
  //   category: "活动分享",
  //   subcategory: "2019年活动",
  //   subDirectory: "/events/Events2019",

  //   article: {
  //     title: "加拿大温州同乡总会一众侨领家乡行",
  //     content: [
  //       {
  //         cite: {
  //           text: "2019年3月30日，加拿大温州同乡总会会长游兆丰率一众侨领15人，在家乡温州市，拜会了市侨务部门领导。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "温州市侨联党组书记、副主席林春霞会见考察团一行，双方举行了座谈交流。随后一行人参观了世界温州人家园，并参加温州同乡总会协办的“加拿大华侨美术书法作品展”开幕典礼。",
  //         },
  //       },

  //       {
  //         paragraph: {
  //           text: "以下是活动集锦： ",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    id: 96608,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "加拿大温州同乡总会妇女分会欢庆国际三八妇女节",
      content: [
        {
          paragraph: {
            text: "- 美国西雅图观光购物一日游2019年3月8号，温哥华冬日的清晨，天还只有朦朦亮，加拿大温州同乡总会的女同胞们，就已聚集在列志文赌场大门前的一辆大巴车上了，只见女神们个个打扮时尚、神采飞扬，进行期待已久的、为时一天的美国西雅图观光购物游，以此形式欢度属于自己的节曰：国际三.八妇女节。",
          },
        },

        {
          paragraph: {
            text: "大巴一路南行，湛蓝的天空、洁白的云朵、雪山海景，沿途风光美不胜收。车至半道，大家忍不住下车拍照留影。",
          },
        },

        {
          paragraph: {
            text: "近三个小时的车程，在一路的欢声笑语中，不知不觉的到达了目的地。",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "正是中午时分，一下车，女神们直达",
              bold: "202",
            },
            {
              text: "奥特莱斯旁边赌场自助餐厅。",
            },
          ],
        },

        {
          paragraph: {
            text: "自助餐厅，美食琳琅满目，看得人眼花缭乱。",
          },
        },

        {
          paragraph: {
            text: "大家大盘小盘，大快朵颐，美美地享用了一顿",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "饭后女神们直奔邻近的奥特莱斯 ",
              bold: "（202），",
            },
            {
              text: "开启买买买的模式。",
            },
          ],
        },

        {
          bParagraph: {
            text: "costco 采购",
          },
        },

        {
          paragraph: {
            text: "不知不觉，四小时的快乐的购物时光一闪而过，大家意犹未尽告别了商场，趁着暮色，满载着'战利品'凯旋回家，结束愉快的西雅图观光、购物一日游。大伙儿对温州同乡总会此次活动的精心安排，吃好又玩好，感到非常满意和由衷的感谢 ，大家纷纷赞道：有同乡会真好，温州同乡会就是我们温州人的家！期待来年的三八妇女节，同乡会能组织女同胞们再相聚！",
          },
        },
      ],
    },
  },
  {
    id: 96609,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2020年活动",
    subDirectory: "/events/Events2020",

    article: {
      title: "加拿大温州同乡总会父老乡亲欢喜过大年",
      content: [
        {
          paragraphContainsBold: [
            {
              bold: "2019年2月4日,",
            },
            {
              text: "是中国农历除夕之夜，温州同乡总会三百多老乡，齐聚在列治文海港大酒店，举行春节团拜庆祝酒会，欢度2019年新春佳节。",
            },
          ],
        },

        {
          paragraphContainsBold: [
            {
              text: "春拜活动席开",
              bold: "35",
            },
            {
              text: "桌，年味十足。",
            },
          ],
        },

        {
          paragraph: {
            text: "温州才女朱小梅和温州帅哥徐聪联手主持春节团拜酒会。",
          },
        },

        {
          paragraph: {
            text: "晚上六时三十分，主持人宣布团拜酒会开始。",
          },
        },
        {
          video: {
            videoURL: "/images/article/1560615961652.mp4",
          },
        },
        {
          paragraph: {
            text: "由温州女胞合唱的一曲《在希望的田野上》拉开了活动序幕。",
          },
        },

        {
          paragraph: {
            text: "会长游兆丰代表同乡总会向乡亲们致以节日的问候和祝福。",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "加拿大温州同乡总会自",
              bold: "2001",
            },
            {
              text: "年成立至今，在同乡会历任会长、理事和乡亲们的共同努力下，在当地三级政府的支持下，从开始的十几人到现在的上千人，从开始的没有场所到现在拥有自己宽畅明亮的会所，在温哥华的众多社团里也是屈指可数。特别是在现任会长游兆丰先生的带领下，同乡会每年的各种节日都组织举办丰富多彩的活动：春节大拜年、欢庆三八妇女节、端午包粽子、七一国庆节户外大型",
              bold: "BBQ",
            },
            {
              text: "中秋品月饼、重阳敬老茶话会等等大型节日一个都不落。平时组织老乡学英文、学电脑、打乒乓、卡拉",
              bold: "OK",
            },
            {
              text: "赛、登山徒步、摘蓝梅、赏樱花、学习中西餐烹调、筹款慰问患病的乡亲、采取奖金制奖励考取北美大学的学子、支持助力华人参政议政等等，把同乡会办的有声有色、红红火火 ，受到乡亲们和社会各界的一致好评。",
            },
          ],
        },

        {
          paragraph: {
            text: "今年的春节团拜酒会分外热闹，同乡会不但预订了一桌桌上好的菜品，还打造了一台全部是由温州老乡自己出演的精彩的文艺节目，还首次颁发了老乡子女考上北美大学的奖金，并为2018年参与过同乡会义工的乡亲颁发义工奖及证书。小朋友们也个个拿到了压岁红包。此次活动提供了大量的奖金和奖品，乡亲们拿到手软。现场气氛热烈，欢声笑语不断。",
          },
        },

        {
          paragraph: {
            text: "九十高龄的同乡会终身荣誉会长曾田书和太太现场跳起了喜庆的双人舞。",
          },
        },
        {
          video: {
            videoURL: "/images/article/1560616731251.mp4",
          },
        },
        {
          paragraph: {
            text: "温州小伙强强、李志坚、姜盺三人组合的器乐合奏《友谊地久天长》，欢快、优美，演奏技巧娴熟，老乡们喝采声、掌声此起彼伏，把春拜酒会又推上一个高潮。",
          },
        },
        {
          video: {
            videoURL: "/images/article/1560616762917.mp4",
          },
        },
        {
          paragraph: {
            text: "温州姑娘陈茹一曲琵琶独奏给大家带来浓浓的中国情家乡结",
          },
        },

        {
          paragraph: {
            text: "同乡会终身荣誉会长曾田书和太太夏良环，给小朋友们分派压岁钱。",
          },
        },

        {
          paragraph: {
            text: "举杯互道新年好！",
          },
        },

        {
          paragraph: {
            text: "国会议员候选人袁薇女士（中间红衣者）是温州人的老朋友。",
          },
        },

        {
          paragraph: {
            text: "烈志文市议员王白进先生也光临当晚酒会。",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "游兆丰会长为",
              bold: "2018",
            },
            {
              text: "年度考上北美大学的老乡子女颁发鼓励奖金。",
            },
          ],
        },

        {
          paragraph: {
            text: "同乡总会副会长张光辉、秘书长李烨武为义工颁奖。",
          },
        },

        {
          paragraph: {
            text: "展示义工证书",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "特等奖是",
              bold: "800",
            },
            {
              text: "加元现金，由温州老乡、嘉兴温州商会会长庄君新先生赞助。图为庄君新会长为喜获特等奖的老乡颁发奖金。",
            },
          ],
        },

        {
          paragraphContainsBold: [
            {
              text: "一等奖是",
              bold: "500",
            },
            {
              text: "加元现金。应树德副会长为荣获一等奖的老乡颁发奖金。",
            },
          ],
        },

        {
          paragraphContainsBold: [
            {
              bold: "2019",
            },
            {
              text: "温州同乡总会春节团拜酒会，最后在乡亲们的新年祝福声中、在特邀佳宾、女高音歌唱家胡桂梅老师的带领下，齐唱经典歌曲《难忘今宵》中圆满结束。",
            },
          ],
        },
        {
          video: {
            videoURL: "/images/article/1560616679335.mp4",
          },
        },
      ],
    },
  },
  {
    id: 96610,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "有那么一群生活在白求恩故乡的温州人⋯⋯",
      content: [
        {
          paragraph: {
            text: '温州人素有"东方犹太人"之称，意为精明的会做生意的人，但如今在白求恩的故乡加拿大，却生活着这么一群"不精明"的人，他们也有着白求恩一样的精神，乐于奉献，不索回报，专门利人。虽然他们很不起眼，默默无闻，甚至有人说他们傻，但是他们却充满了正能量。',
          },
        },

        {
          paragraph: {
            text: "当你走进温州同乡总会会所，看到里面窗明几净 、地面墙壁光可鉴人，那就是他们的付出。每天他们会把会所打扫得干干净净，每次同乡会活动锅碗瓢盆的清洗全是他们负责。比如刚刚过去的同乡会中秋节茶话会就是这些义工队操办的，",
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "乡亲们能快乐地团聚在同乡会所，品月饼尝美食，展开丰富多彩的活动，全是他们辛苦劳动的结果。从中秋节前几天开始，他们就忙碌开了:布置会场、采购食品，一直忙到中秋节茶话会圆满结束后的打扫、清理。中秋节的早上六点多，义工们就到达了会所，为的是赶在中午前能做出新鲜的食物，而不是在前一晚制作谁都知道新做出的食物是最新鲜的。值得一提的是，有位老乡现场烤制的葱肉馒头供不应求，美味的馒头几乎让所有人赞不绝口，但谁也不知道，这次提供给茶话会的大量糕点，她已经准备好几天了。在中秋节的那天早上，",
              bold: "5",
            },
            {
              text: "点钟她就起床忙开了，一直在同乡会的厨房里烤馒头直到茶话会结束。由于长时间的站立竟使右腿抽了筋。 ",
            },
          ],
        },

        {
          paragraph: {
            text: "还有老乡带来了她自费制作的好几只熏鸡，美味无比；也有老乡送来了大盘的烧鸡翅，温州特色青草凉雾汤等等，都是不辞辛劳精心制作、无偿奉献给同乡会的；老乡陈先生，每次炒面都是他撑勺；老乡叶大姐，一大早就来到了同乡会，中秋节所有的蔬果清洗都出自她的手，一直帮忙到茶话会结束才离去。还有很多自发来的老乡义工不胜枚举。 ",
          },
        },

        {
          paragraph: {
            text: '　　就是有这么多"不精明"的温州人,成就了乡亲们每次愉快的联谊团聚活动。每次活动成功的背后，是他们的汗水、是他们的默默付出；他们是一群可敬、可亲、可爱的温州人。当然，他们也得到金钱买不到的"回报"即就是人们投以满满的微笑和由衷的敬意!',
          },
        },

        {
          paragraph: {
            text: " 在此，同乡会欢迎有更多的老乡投身到义工队的行列，把我们温州人共同的家一一同乡会建设得更加温馨美丽，让爱心接力传承在白求恩的故乡加拿大。",
          },
        },

        {
          paragraph: {
            text: " 加拿大温州同乡总会秘书处",
          },
        },

        {
          bParagraph: {
            text: "2017年10月",
          },
        },
      ],
    },
  },
  {
    id: 96611,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "摘蓝莓",
      content: [
        {
          bParagraph: {
            text: "摘蓝莓",
          },
        },

        {
          paragraph: {
            text: "八月的一天，温州同乡会组织一群老乡去摘蓝莓。正好这天我也有空，就兴致勃勃地跟随大伙儿一起去了。",
          },
        },

        {
          paragraph: {
            text: "这是同乡会滕达老会长的蓝莓园，在列治文6号路上。",
          },
        },

        {
          paragraph: {
            text: "往年摘蓝莓，总是被太阳晒个大红脸，汗流浃背，可是那天天公作美，太阳被云层遮住，就这么隐隐约约，似有似无，冷暖适中。不用担心太阳晒，摘起来是那么轻松愉快。",
          },
        },

        {
          paragraph: {
            text: "这个季节的蓝莓都熟透了，蓝莓园里的蓝莓像一颗颗蓝宝石缀满了枝头，很是养眼。大家说说笑笑，摘着尝着，每一颗都是那么甜那么香。我也不用去找寻哪颗大的、观察哪颗甜的，只要随手沿树枝上一捋，蓝莓咕噜噜顺势滑到提着的桶里。不知不觉，就摘满了一桶。",
          },
        },

        {
          paragraph: {
            text: "真心感谢今天的组织者，温州同乡会和老乡金新程，一切都是她在联系，带路大伙儿去蓝莓园，还这么用心地挑这么个好天气，而且今天还是免费采摘。",
          },
        },
      ],
    },
  },
  {
    id: 96612,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "片片枫叶情",
      content: [
        {
          bParagraph: {
            text: '每年的九、十月，温哥华早早地就会被五彩斑斓的浪漫"枫情"装点得婀娜多姿。',
          },
        },

        {
          paragraphContainsBold: [
            {
              text: "驱车行走大温各处，树林的气息和光影里恍然岁月的瞬变和流逝，仿佛今年的秋色非同去岁。经历了连绵雨水的洗礼，已快入冬的红枫丝毫没有谢幕的曲调，反而更加妖娆。温哥华最美枫林大道的枫叶似乎换了新装，不再是醉人的深红，而是略带粉色，却更为娇嫩迷人，一簇簇、一片片，仿佛一触手即可满怀。山间、湖边、水岸、大道、小路、楼间、屋隙处处枫叶处处景，红的、粉的、绿的、黄的间或在树林里、大道旁，跳跃在各式别墅中，像是大地的调色盘五彩艳丽，使雨中的",
              bold: "Vancouver",
            },
            {
              text: "更显梦幻旖旎……",
            },
          ],
        },

        {
          paragraph: {
            text: "满地的缤纷落叶，看似凋零，却在静美时煽动着路人的激情，就连偶尔稀疏可见的银杏树也闪动着金黄的叶子卖弄，倒是丝毫不逊于那耀眼的红枫。",
          },
        },

        {
          paragraph: {
            text: "拾一片落叶透着难得出来的一丝阳光，仿佛可以看到它从灿烂之绿转成黄色、橙色，最后变成浓烈的艳红。一叶知秋都在不经意间，自然而神奇。",
          },
        },

        {
          paragraph: {
            text: "　　来年的＂枫情＂是否会更胜往昔？期待⋯⋯",
          },
        },
      ],
    },
  },
  {
    id: 96613,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "加拿大温州同乡总会吁请加拿 大国会设立南京大屠杀纪念日",
      content: [
        {
          bParagraph: {
            text: "加拿大温州同乡总会吁请加拿 大国会设立南京大屠杀纪念日",
          },
        },

        {
          paragraphContainsBold: [
            {
              bold: "2018年8月22",
            },
            {
              text: "号下午，加拿大温州同乡总会在会所召开会议，声援支持加拿大国会议员关慧贞女士发起的请求加拿大政府在每年",
              bold: "12月13",
            },
            {
              text: "日设立“南京大屠杀纪念日”签名活动，游兆丰会长主持了这次会议。他说：",
              bold: "81",
            },
            {
              text: "年前日本侵略者在中国南京残忍的杀害了我",
              bold: "30",
            },
            {
              text: "万同胞，为了悼念死难的同胞 ，让后人铭记这段血的历史，不让历史重演，作为一个有良知的中国人，有义务有必要行动起来，签上自己的名字，但目前离十万人签名，还远远不够，希望大家齐心协力，实现这个愿望。他还表示：从这天开始，至十月签名到期，每星期一、三、五都安排义工迎候大家前来会所签名，并开放会所，让没有场地进行此次活动的社团免费使用。其他到会的社团负责人刘书梅、魏克风、李振杰及市议员候选人刘海也做了发言。在场的温州老乡纷纷踊跃签名，好多人一人签上全家、朋友等委托的名字，临走还拿了表格，表示会动员更多人士签名。老乡温太太一人拿了八张（一张可签",
              bold: "13",
            },
            {
              text: "位人），好些人拿了七张六张不等的表格，表示一定会签满为止。",
            },
          ],
        },
      ],
    },
  },
  {
    id: 96614,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "英文班开课啦",
      content: [
        {
          paragraph: {
            text: "英文班开课啦 2017年9月12日，我们温州同乡总会免费英文班在同乡会所开班了。",
          },
        },

        {
          paragraph: {
            text: "上午十时，老乡学员们纷纷到达，对号入座。游兆丰会长做了简短发言，向大家介绍了具有二十多年英语教学经验的美女华裔老师Julie，并仼命老乡周艳子为英文班班长。然后老师开始讲课。从见面问候、接听电话、吃饭点菜等等基础又实用的英语开始教。一遍遍地纠正大家的发音，有问必答，不厌其烦。而学员们也是非常认真地学，不懂就问，在老师的带领下互动对讲，偶尔遇到难以理解的单词句子，应学员的要求，老师会用中文解释。",
          },
        },

        {
          paragraph: {
            text: "这使大家感觉到比单纯的老外老师讲课效果好得多，一些平曰不好意思开口的学员也尝试着大胆地说了出来，一节为时2小时的课程在学员们朗朗的读书声中不知不觉地愉快地结束了。",
          },
        },
      ],
    },
  },
  {
    id: 96615,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "登山记",
      content: [
        {
          paragraphContainsBold: [
            {
              text: '早就想去爬一爬号称"温哥华之峰"的松鸡山',
              bold: "（GrouseMountain)",
            },
            {
              text: "了。 因松鸡山的最高处海",
              bold: "1220",
            },
            {
              text: "米左右，而且山路陡峭，不到3公里的登山径高差达",
              bold: "850",
            },
            {
              text: "多米，所以许多人知难而退。今天正好温州同乡总会登山队组织去爬这座山，我就欣然报名参加 。",
            },
          ],
        },

        {
          paragraph: {
            text: "下午二点多，男女老少三、四十位登山队员集结在北温的松鸡山脚下，我一看，好家伙！几乎个个全副武装：登山鞋、背包、水瓶、速干服、手杖等等，专业范十足。虽然不是专业的，但我平曰也是坚持锻炼，所以抬头望着高峻的山峰，我并不畏惧，随着队伍向山顶进发。一路上参天大树遮天蔽日，我们深深地呼吸着新鲜空气，紧走慢赶地谈笑聊天。",
          },
        },

        {
          paragraph: {
            text: " 大概几十分钟后，登山队伍就开始分化了，慢的远远地拉在后面了。队员们这时候有的奋力攀爬，有的在作稍事休息。约过了半山腰，已全身大汗淋漓，我脱掉了长体恤衫，补充了一些水，就继续往上爬。有几段山路特别陡峭，有时候只好手脚并用，累得大口大口喘着气，",
          },
        },

        {
          paragraph: {
            text: " 腿也越来越沉，但我知道现在是关键时刻，一旦停止，就会前功尽弃，只有坚持，就会达到顶点。大约七十多分钟，我终于到达了山顶。回头看看大伙，也陆陆续续向山顶靠拢。站在山顶登高望远，真是太美了！洁白的云朵就飘在身边，一伸手仿佛就能捞到。史坦利公园、温哥华西区和停泊在通向太平洋出海口处的许多远洋轮依稀可见。环视另一侧，整个大温哥华地区一览无遗。这座最适合人类居住的城市，在金秋的阳光下，显得更加迷人。再望向远处，乔治海峡和温哥华岛尽在眼底。我庆幸自己没有半途而废，不然哪能欣赏到如此美丽的风光。我想，坚持就是胜利.",
          },
        },
      ],
    },
  },

  {
    id: 96616,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2019年活动",
    subDirectory: "/events/Events2019",

    article: {
      title: "加拿大温州同乡总会父老乡亲欢喜过大年",
      content: [
        {
          paragraph: {
            text: "2019年2月4日，是中国农历除夕之夜，温州同乡总会三百多老乡，齐聚在列治文海港大酒店，举行春节团拜庆祝酒会，欢度2019年新春佳节。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584914848720436.jpg",
          },
        },

        {
          paragraph: {
            text: "春拜活动席开35桌，年味十足。",
          },
        },

        {
          paragraph: {
            text: "今年的春节团拜酒会分外热闹，同乡会不但预订了一桌桌上好的菜品，还打造了一台全部是由温州老乡自己出演的精彩的文艺节目，还首次颁发了老乡子女考上北美大学的奖金，并为2018年参与过同乡会义工的乡亲颁发义工奖及证书。小朋友们也个个拿到了压岁红包。此次活动提供了大量的奖金和奖品，乡亲们拿到手软。现场气氛热烈，欢声笑语不断。",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1584914848409690.jpg",
          },
        },

        {
          paragraph: {
            text: "温州才女朱小梅和温州帅哥徐聪联手主持春节团拜酒会。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584914888899911.jpg",
          },
        },

        {
          paragraph: {
            text: "晚上六时三十分，主持人宣布团拜酒会开始。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584914848895842.jpg",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1584914848966962.jpg",
          },
        },

        {
          paragraph: {
            text: "由温州女胞合唱的一曲《在希望的田野上》拉开了活动序幕。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584914848638634.jpg",
          },
        },

        {
          paragraph: {
            text: "会长游兆丰代表同乡总会向乡亲们致以节日的问候和祝福。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584915511587966.jpg",
          },
        },

        {
          image: {
            imageSRC: "/images/article/1584915518735336.jpg",
          },
        },

        {
          paragraph: {
            text: "九十高龄的同乡会终身荣誉会长曾田书和太太现场跳起了喜庆的双人舞。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584914848909087.jpg",
          },
        },

        {
          paragraph: {
            text: "2019温州同乡总会春节团拜酒会，最后在乡亲们的新年祝福声中、在特邀佳宾、女高音歌唱家胡桂梅老师的带领下，齐唱经典歌曲《难忘今宵》中圆满结束。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584914848173525.jpg",
          },
        },

        {
          paragraph: {
            text: "温州小伙强强、李志坚、姜盺三人组合的器乐合奏《友谊地久天长》，欢快、优美，演奏技巧娴熟，老乡们喝采声、掌声此起彼伏，把春拜酒会又推上一个高潮。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584914848392972.jpg",
          },
        },

        {
          paragraph: {
            text: "温州姑娘陈茹一曲琵琶独奏给大家带来浓浓的中国情家乡结",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584914977587340.jpg",
          },
        },

        {
          paragraph: {
            text: "特等奖是800加元现金，由温州老乡、嘉兴温州商会会长庄君新先生赞助。图为庄君新会长为喜获特等奖的老乡颁发奖金。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584915007682056.jpg",
          },
        },

        {
          paragraph: {
            text: "国会议员候选人袁薇女士（中间红衣者）是温州人的老朋友。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584915031547047.jpg",
          },
        },

        {
          paragraph: {
            text: "同乡总会副会长张光辉、秘书长李烨武为义工颁奖。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584915110795352.jpg",
          },
        },

        {
          pMid: {
            text: "一等奖是500加元现金。应树德副会长为荣获一等奖的老乡颁发奖金。",
          },
        },
        {
          citeRight: {
            text: "加拿大温州同乡总会",
          },
        },
        {
          citeRight: {
            text: "2019年2月4日",
          },
        },
      ],
    },
  },

  {
    id: 96617,
    categoryClass: "events",
    parentDirectory: "events",
    category: "活动分享",
    subcategory: "2020年活动",
    subDirectory: "/events/Events2020",

    article: {
      title: "加拿大温州同乡总会换届成立",
      content: [
        {
          paragraph: {
            text: "2020年3月2号下午1：00~4：00，加拿大温州同乡总会在会所举行第七届会长选举，与会理事67人，朱建国先生以62票高票当选为温州同乡总会第七届会长。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1584910879415627.jpg",
          },
        },
        {
          paragraph: {
            text: "图为第七届会长朱建国先生（左）从第六届会长游兆丰先生（右）接过会印",
          },
        },

        {
          paragraph: {
            text: "  关于加拿大温州同乡总会换届的通知函",
          },
        },

        {
          citeIndent: {
            text: "“加拿大温州同乡总会”于2020年3月2日在本会会所进行了换届选举，第七届“加拿大温州同乡总会”换届成立，朱建国担任新一任会长。 ",
          },
        },
        {
          citeIndent: {
            text: "特此函告各界！",
          },
        },
        {
          citeIndent: {
            text: "联系电话：6047282578",
          },
        },

        {
          citeIndent: { text: "传真：6043701117" },
        },
        {
          citeIndent: {
            text: "地址：4266 Hazelbridge Way,Richmond BC.Canada V6X 0J5",
          },
        },

        {
          citeIndentLarge: {
            text: "加拿大温州同乡总会",
          },
        },
        {
          citeIndentLarge: {
            text: "二〇二〇年三月十日",
          },
        },
      ],
    },
  },
  // Beginning of Cultural Garden Messages
  {
    id: 32201,
    categoryClass: "CulturalPark",
    parentDirectory: "culture",
    category: "文化园地",
    subcategory: "家乡温州",
    subDirectory: "/culture/wenzhou",
    article: {
      content: [
        {
          paragraph: {
            text: "对于中国人来说，最熟悉的一条路，莫过于“解放路”。",
          },
        },

        {
          paragraph: {
            text: "　　能够有资格被叫做解放路的，往往曾经是当时、当地最繁华热闹的一条街。",
          },
        },

        {
          paragraph: {
            text: "　　温州城的解放路也是如此，明清时期它叫“大街”，后来分别叫“南大街”和“北大街”。有趣的是，国内很多城市的“解放路”前身，都叫过南北大街，比如西安。",
          },
        },

        {
          paragraph: {
            text: "　　2020年，温州的解放街即将迎来新的“焕颜”：五马-墨池历史文化街区实施改造工程，解放街改造提升被列入其中。",
          },
        },

        {
          bParagraph: {
            text: "　　南北大街通南北",
          },
        },

        {
          paragraph: {
            text: "　　南北大街，顾名思义，是贯穿城市南北走向的主要道路。",
          },
        },

        {
          paragraph: {
            text: "　　翻开明清时期温州古地图，你会发现古城有两条平行的南北向大街，一条是解放街，一条是信河街。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/00300651345_e7d4cbf1.jpg",
          },
        },
        {
          paragraph: {
            text: "　　解放街是温州古城中最长、也最古老的主要街路，南起古城瑞安门(俗称大南门)，北至望江门(俗称双门，今朔门)，纵贯城区南北。",
          },
        },

        {
          paragraph: {
            text: "　　民国初期，大街分为两段，以广场路东口为界，分别称为北大街和南大街。",
          },
        },

        {
          paragraph: {
            text: "　　新中国成立后，在政府主持下，附近的居民代表组织了修路委员会，翻修南北大街的道路。修建竣工后，1950年7月，《浙南日报》上刊登了一条消息：《南北大街翻了身，从此改名解放路》。",
          },
        },

        {
          paragraph: {
            text: "　　新得名的解放路以打锣桥口为中心，向北称解放北路，向南称为解放南路。2000年8月，两条路合并改称“解放街”至今。？",
          },
        },

        {
          paragraph: {
            text: "　　后来，解放路往南慢慢延伸，一直到卖麻桥，都被称为解放南路。",
          },
        },

        {
          paragraph: {
            text: "　　路长、巷多、底蕴深",
          },
        },

        {
          paragraph: {
            text: "　　解放街不仅路长、巷多，交通便利，周边还有着一批历史悠久的街道巷弄，是历史文化街区的重要组成部分。",
          },
        },

        {
          paragraph: {
            text: "　　北宋时期，温州知州杨蟠规划的三十六坊中，解放街周边就占了九个坊：",
          },
        },

        {
          paragraph: {
            text: "　　有问政坊(七枫巷)、棠阴坊(仓桥街)、墨池坊、德政坊(县后巷)、道爱坊(县前头)、荣亲坊(晏公殿巷)、双桂坊(纱帽河)、简讼坊(大简巷)，以及至今仍然保留坊名的康乐坊、墨池坊等。",
          },
        },

        {
          paragraph: {
            text: "　　而南北大街贯通的两座城门，也有深厚的文化底蕴：",
          },
        },

        {
          paragraph: {
            text: "　　望江门坐落在古城的正北面，因望北为江而得名。望江门原名“拱辰门”，唐时有双城门，五代钱元瓘任温州刺史时，拆除拱辰门的双城门，只存其一。又以朔方指北方，别称朔门。南宋建炎四年(1130)宋高宗驻跸温州，御驾仪卫就是自拱辰门入城，御驾依次由大街(今解放路)、五马街，通过谯楼(沿今公安路)到达州治(今广场路小学)。",
          },
        },

        {
          paragraph: {
            text: "　　瑞安门则与南宋的另一位皇帝有关。南宋咸淳元年(1265)，原永嘉郡王赵禥即帝位，是为宋度宗，升温州为瑞安府(府治仍在温州)，“瑞安府”为温州称府之始，比宁波升府早123年。宋度宗登基后，还把旧城门改名“瑞安门”。因瑞安门坐落在城南，所以温州更喜欢称这里叫“大南门”。",
          },
        },
        {
          citeImages: [
            {
              text: "1877年，从积谷山俯瞰温州南门外",
              imageSRC: "/images/article/00300651342_652aa406.jpg",
            },
          ],
        },
        {
          paragraph: {
            text: "　　南北百货一条街",
          },
        },

        {
          paragraph: {
            text: "　　“南大街北大街，南北百货一条街。”",
          },
        },

        {
          paragraph: {
            text: "　　在老温州人的记忆中，曾经的南北大街，就是繁华的代名词，经济繁盛、店铺林立。",
          },
        },

        {
          paragraph: {
            text: "　　由于解放街南北分别设有瑞安门、望江门，地理位置非常重要，自清末以来，一直是温州城区的商业街道。",
          },
        },

        {
          citeImages: [
            {
              text: "1877年，瓯海关税务司公署近景",
              imageSRC: "/images/article/00300651344_20752bdc.jpg",
            },
          ],
        },

        {
          paragraph: {
            text: "　　据《温州通览》记载，清光绪二年(1876)，根据《烟台条约》，温州开辟为对外通商口岸以后，英、美、法、日等国的商人、传教士便纷纷来温经商或传教，而国内的上海、宁波等地商家也频频与温州工商界加强往来，或采购物资，或推销商品，或开设店铺，关系日趋密切。",
          },
        },

        {
          paragraph: {
            text: "　　当时温州对外交通专靠轮船和汽船，而望江门外，正是轮舟辐辏之处，又是管理口岸的“瓯海关”驻地。查看民国时期的地图，会发现望江门外各类码头一字排开，各种货物都要通过这个城门进入城内。",
          },
        },
        {
          citeImages: [
            {
              text: "上世纪50年代南北大街",
              imageSRC: "/images/article/00300651340_661e95f1.jpg",
            },
          ],
        },
        {
          paragraph: {
            text: "　　南北大街的南端是瑞安门，出此门向南行，沿着“七铺河路”，经过物产丰盈的下河乡，可以直达瑞安县城。下河乡的农民和瑞安的民众到温州来购买商品或进行交易，一般都由瑞安门内的南大街进入城区。",
          },
        },

        {
          paragraph: {
            text: "　　因此，南北大街遂成为交通频繁、商业兴盛的主干街道。",
          },
        },

        {
          paragraph: {
            text: "　　到了上世纪20年代，随着外国商人不断涌入，一批白墙青瓦、欧陆风格的建筑街面和“益泰源”、“协大祥”、“大生堂”等名店便应运而生，并成为今天百年老街的历史景观。",
          },
        },

        {
          paragraph: {
            text: "　　百年老店与中国第一张个体工商业营业执照",
          },
        },

        {
          paragraph: {
            text: "　　这里汇聚诸多百年老店：",
          },
        },

        {
          paragraph: {
            text: "　　【县前头汤圆】县前头汤圆原名叫“郑德大”汤圆店，始于1901年。1958年和另两家汤圆店合并，改成如今众人皆知的名字。他家的汤圆洁白晶莹、滑糯爽口、皮薄馅大、馅心香馨。",
          },
        },

        {
          paragraph: {
            text: "　　【长人馄饨店】长人馄饨始于1930年。最早是乐清人陈立标挑着担子叫卖进温州的，因陈立标个子很高，他的馄饨人称“长人馄饨”。长人馄饨皮薄馅多，盖料丰富，汤清味鲜。",
          },
        },

        {
          paragraph: {
            text: "　　【许大同毛笔店】许大同毛笔店创建于清光绪二十六年(1906)。许大同笔店创始人许进芳(1887-1961)，原籍平阳，光绪二十六年(1900)刚满13岁，经族人引荐离乡到永嘉城区新同文毛笔店，学习制笔手艺。1906年他在康乐坊大简巷口开设毛笔店，取名“许大同”。此时适逢辛亥革命前夕，孙中山先生倡导天下为公，走向共和，实现大同。",
          },
        },

        {
          paragraph: {
            text: "　　而改革开放以后，中国第一张个体工商业营业执照，就来自温州市解放北路的一户人家。",
          },
        },

        {
          paragraph: {
            text: "　　1980年12月11日，章华妹从当时的温州市工商局领到了编号为10101的营业执照。营业执照上的住址，写的是解放北路83号。",
          },
        },
        {
          image: {
            imageSRC: "/images/article/00300651339_46d5eb31.jpg",
          },
        },
        {
          paragraph: {
            text: "　　出生在解放北路的章华妹，和她拿到的始于解放北路的全国首张个体工商业营业执照，是中国改革开放政策下，众多温州商人创业打拼的一个缩影。",
          },
        },

        {
          paragraph: {
            text: "　　发生在解放街的老故事：",
          },
        },

        {
          paragraph: {
            text: "　　1.“张宝琛禁烟，自吃红丸，别人吃红汤丸(圆)”",
          },
        },

        {
          paragraph: {
            text: "　　这个故事刊登在当年的温州本地报纸上。这句温州独有的俚语，与成语“只许州官放火，不许百姓点灯”有同样的含意。",
          },
        },

        {
          paragraph: {
            text: "　　抗日战争时，张宝琛在温州当伪专员。他本人是吃鸦片的，但“上峰”命令他要“厉行禁烟”，所以不得不装模作样，搞了一阵“禁烟”运动。他自拟一张禁烟告示，字如碗大，张贴于南北大街、五马街，尤以原“金三益”墙上那张最显眼。告示用温州方言写成：“贩卖鸦片和吃鸦片的，捉牢后，本专员就请他吃红汤丸。”(意即枪决。丸，系圆)可是，张宝琛自己烟瘾上来时，便偷偷地在房间里吞“红丸”(一种毒品)。",
          },
        },

        {
          paragraph: {
            text: "　　当时的老百姓深谙个中奥秘，便用这句俚语，揭露他的真面目。",
          },
        },

        {
          paragraph: {
            text: "　　2.“拦街福”",
          },
        },

        {
          paragraph: {
            text: "　　“拦街福”是一度流行的温州民间的独特风俗，从明清以来便有了。",
          },
        },

        {
          paragraph: {
            text: "　　关于“拦街福”的由来，一种说法是，相传明时倭寇在我国浙东南沿海猖獗犯境，明将戚继光尽歼犯境之敌，使温州城区免受战祸蹂躏。温州人民为庆祝胜利，在农历二三月间在各街巷举行祝福活动，并逐渐沿袭成温州一年一度的民间盛会。每年，市区主要街道及附近小巷均安排日期，轮流举行祈福活动。",
          },
        },

        {
          citeImages: [
            {
              text: "拦街福老照片",
              imageSRC: "/images/article/00300651343_7a122747.jpg",
            },
          ],
        },
        {
          paragraph: {
            text: "　　“拦街福”每年二月初一从康乐坊开始(取“康乐安宁”之意)，到三月廿一日在第一桥结束(取“第一”之意)。在这过程中，以二月初一的康乐坊、三月初一的百里坊、三月十五的南北大街与铁井栏、五马街等的规模最为盛大。是日，街上张灯结采，并有木偶戏演出，小康之家与殷富商户还邀请“说书”、“鼓词”艺人在门前搭台演唱。",
          },
        },

        {
          paragraph: {
            text: "　　在“拦街福”的五十天中，郊区农民都挑着新鲜的瓜果蔬菜、鸡鱼肉蛋，到城里叫卖。温州一些著名的大商店，如五马街的“许云章”、“金三益”、“五味和”及南北大街的“锦彰”、“东桂芳”等更是不失良机，老板都会陪着笑脸，接待顾客。",
          },
        },

        {
          paragraph: {
            text: "　　参考资料：",
          },
        },

        {
          paragraph: {
            text: "　　《鹿城人文景观》沈克成汤章虹著",
          },
        },

        {
          paragraph: {
            text: "　　《翻修南北大街居民协助下工程进行顺利南段竣工北段一月后完成》李启钤、《南北大街翻了身从此改名解放路》陈龙，原载《浙南日报》",
          },
        },

        {
          paragraph: {
            text: "　　《温州解放路——一条街串起根与魂》来源《钱江晚报》记者汪子芳",
          },
        },

        {
          paragraph: {
            text: "　　来源：温州三十六坊",
          },
        },
      ],
      title: "温州最有名的“大街”原来在这里！",
      previewText:
        "对于中国人来说，最熟悉的一条路，莫过于“解放路”。　　能够有资格被叫做解放路的，往往曾经是当时、当地最繁华热闹的一条街。　　温州城的解放路也是如此，明清时期它叫“大街”，后来分别叫“南大街”和“北大街...",
      date: "2020-04-26",
      imageURL: "/images/article/1587934417469607.jpg",
    },
  },
  {
    id: 32202,
    categoryClass: "CulturalPark",
    parentDirectory: "culture",
    category: "文化园地",
    subcategory: "家乡温州",
    subDirectory: "/culture/wenzhou",
    article: {
      content: [
        {
          paragraphIndent: {
            text: "花",
          },
        },

        {
          paragraphIndent: {
            text: "桃花春色暖先开，明媚谁人不看来。——周朴（唐）",
          },
        },

        {
          paragraphIndent: {
            text: "如何去瓯越大地感受别样的美？有哪些赏花好去处？看看这些踏青胜地，在这个周末来一场赏花之旅，让你的朋友圈展现出一片姹紫嫣红。",
          },
        },

        {
          paragraphIndent: {
            text: "花溪花岛：三垟湿地动人“花鸟画”",
          },
        },

        {
          paragraphIndent: {
            text: "4月15日下午，在三垟湿地花溪花岛上，沿途成片的花儿沐浴着阳光，迎着习习的春风傲然绽放，让人心旷神怡。周边的湿地里，芦苇荡漾，一派“蒹葭苍苍”的美丽景色，不时还有飞鸟停驻嬉戏。",
          },
        },
        {
          citeImages: [
            {
              text: "三垟湿地公园",
              imageSRC: "/images/article/1587050837313.jpg",
            },
          ],
        },

        {
          paragraphIndent: {
            text: "花溪花岛位于三垟湿地公园西入口广场以东，西临温州中学，南依南仙堤，是三垟湿地与西边城市的衔接点，也是温瑞塘河水进入三垟的主要入口区，占地600余亩，去年国庆期间正式对外开放。",
          },
        },

        {
          paragraphIndent: {
            text: "三垟湿地公园工作人员介绍，公园全天候向市民开放，公园里桃花正在盛开，塘河两岸的瓯柑树也绽放着小白花，船行水上，游客可以闻到阵阵清香。",
          },
        },

        {
          paragraphIndent: {
            text: "除了各色鲜花，三垟湿地内栖息着大量的水鸟，阳春三月布谷啼鸣，燕舞岛屿，白鹭成群栖息，为三垟湿地增添亮丽的动态景观。据介绍，近年来三垟湿地成了飞禽的理想栖息地，其中有普通鵟、灰背隼、红隼、白鹭等81种鸟类，市民在游玩时随处可见。",
          },
        },

        {
          paragraphIndent: {
            text: "“五福源景点最南面的荷花池，有9只水鸟在这里“安家”，为不惊扰到水鸟的生活，我们及时调整浮萍清理计划。 ”工作人员说，9只水鸟包括7只黑水鸡和2只小鸊鷉（pì tī），均属“三有保护动物”，即国家保护的有益的或者有重要经济、科学研究价值的陆生野生动物。记者在现场看到，它们时而把头钻进荷花池中，时而双脚踩着浮萍闲逛。",
          },
        },

        {
          paragraphIndent: {
            text: "此外，在万寿园种植了寓意福寿的四季常青松，加上桃树的点缀，春天红花绿树，美不胜收。栖迟园种植了佛肚竹、龟背竹、摆尾竹、斑竹等数十种竹类，成为观赏体验竹文化的博览园。",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 叶海鹏",
          },
        },

        {
          paragraphIndent: {
            text: "票价",
          },
        },

        {
          paragraphIndent: {
            text: "画舫船40元/人",
          },
        },

        {
          paragraphIndent: {
            text: "手划船120元/艘（包船）",
          },
        },

        {
          paragraphIndent: {
            text: "游览车10元/人",
          },
        },

        {
          paragraphIndent: {
            text: "时间：9：00~16：30",
          },
        },

        {
          paragraphIndent: {
            text: "新闻+",
          },
        },

        {
          paragraphIndent: {
            text: "三垟湿地",
          },
        },

        {
          paragraphIndent: {
            text: "垟，音yáng，是吴方言俗字，指宽广、平坦的田野、田地。",
          },
        },

        {
          paragraphIndent: {
            text: "民国时期，因境内有后垟、仙垟、高垟等三地而改名“三垟”，一直沿用至今。",
          },
        },

        {
          paragraphIndent: {
            text: "何为湿地？湿地是界于陆地和水体之间的过渡客体，属半陆半水的生态系统，是指“长久或暂时性沼泽地、泥炭地或水域地带，带有静止或流动、或为淡水、半咸水、咸水体，包括低潮时不超过6米的水域”。",
          },
        },

        {
          paragraphIndent: {
            text: "三垟湿地是温州生态园的重要组成部分，以“垟漂海面，云游水中”的水网特殊地貌而闻名。三垟湿地也是我市保持最完整的水网湿地，被誉为“浙南的威尼斯”，有城市“绿肾”的美称。",
          },
        },

        {
          paragraphIndent: {
            text: "圣井山花海：千亩杜鹃映红四月天",
          },
        },
        {
          citeImages: [
            {
              text: "圣井山花海",
              imageSRC: "/images/article/1587050953446.jpg",
            },
          ],
        },
        {
          paragraphIndent: {
            text: "“人间仙境圣井山，山花烂漫映红天”，随着气温的不断升高，瑞安圣井山杜鹃花海将于本月中下旬迎来最美时刻。这个周末可以和家人一块到圣井山，听花开的声音，看云起云落。",
          },
        },

        {
          paragraphIndent: {
            text: "圣井山位于瑞安马屿，每年的4月，整座山上杜鹃花开成海。这里的杜鹃花都是自然生长，品种为红色的“满山红”，面积上千亩，花期长达30天，从4月初期一直延续至5月上旬。在这段时间，杜鹃花从低山区向高山区次第开放，漫山遍野都是杜鹃花的芳影，让人目不暇接。2018年，浙江省林业厅公布了我省100处最美赏花胜地，涵盖了花卉主题公园、花海项目、旅游型苗圃等10多类以观赏植物为主的景点（项目），圣井山千亩杜鹃花海入榜。",
          },
        },

        {
          paragraphIndent: {
            text: "除了花海，圣井山的奇峰怪石、云海雾涛也值得一看。圣井山经历了数亿年的地质变化运动，风雨沧桑，形成了独特的花岗岩峰林地貌。如果碰上云雾，你还能领略到圣井山的另一种美，云海在山涧悠然，山间被红色包围，花中带着露水，不禁让人感叹，这“仙境”也带着色彩。",
          },
        },

        {
          paragraphIndent: {
            text: "周末郊游，少不了美食。圣井山停车场一带有多家农家乐，餐饮美食以农家菜为主，新鲜清淡，美味爽口。山道路边还有很多当地土特产售卖，原汁原味，好吃实惠。",
          },
        },

        {
          paragraphIndent: {
            text: "如果你对这烂漫的春色流连忘返，想留宿一晚，那么可以选择当地的民宿——圣井左舍。圣井左舍位于圣井山景区大南社区杨角井村，占地总面积6.6亩，拥有3栋民房，最值得一提的，便是民宿正面靠湖的大草坪和游泳池，视野开阔，面对山光水色。大草坪上还设有蹦床、烧烤炉、吊床、木椅等。",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 王锦灵 综合整理",
          },
        },

        {
          paragraphIndent: {
            text: "自驾路线：沈海高速飞云出口（或江溪枢纽）—新56省道—老56省道—圣井公路—圣井山景区",
          },
        },

        {
          paragraphIndent: {
            text: "温馨提示：一路上都有非常清晰的路牌指示，山路弯多，谨慎驾驶。山高风大，请注意保暖。游玩时爱花护花，旅行的美丽不仅呈现在微信朋友圈中，现实里的言与行更值得“一键美颜”。",
          },
        },

        {
          paragraphIndent: {
            text: "中雁玉甑景区：三色“彩蝶”飞舞山林间",
          },
        },
        {
          citeImages: [
            {
              text: "中雁荡山环湖游步道 通讯员 梁琳",
              imageSRC: "/images/article/1587050902528.jpg",
            },
          ],
        },

        {
          paragraphIndent: {
            text: "周末时分，不用走远，可以到乐清古村探秘，中雁寻春。此次推荐当地一条两日游线路。",
          },
        },

        {
          paragraphIndent: {
            text: "第一天上午，可以到黄檀硐古村落看美景。黄檀硐古村落是首批15个“中国景观村落”之一，除了别有韵味的古民居，古村的春季还有漫山的杜鹃花，在两侧溪流潺潺的古村小径上散步，抬眼便是漫山红，绝对是春天里的一道风景线。下午可以到钟前湖游步道游玩。钟前湖游步道是春季赏湖光山色的佳季，在阳光的照耀下，湖水波光粼粼，呼吸新鲜的空气，远眺玉甑峰，在此间浑然忘却一切俗务，唯有悠然自得。",
          },
        },

        {
          paragraphIndent: {
            text: "第二天上午，可以到中雁荡山玉甑景区看看。春来玉甑，满目翠绿，满山翠绿中夹杂了一簇簇的杜鹃花，这里的杜鹃花不似其他地方的杜鹃红得漫山遍野，它有红、紫、淡粉三色，点缀在山林间，如彩蝶飞舞。下午则可以到中雁荡山西漈景区游玩。春日的西漈景区，绿草如茵，樱白如雪。",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 蒋文泽",
          },
        },

        {
          paragraphIndent: {
            text: "推荐美食：泥鳅炒粉干、水库白鱼、剁椒鱼头、家烧天鹅肉、家烧溪螺、家烧鲶鱼、农家萝卜干、梅菜鲫鱼、羊骨头、春日野菜、本地鸡、油泡丸子",
          },
        },

        {
          paragraphIndent: {
            text: "推荐民宿：隐于流世、下垟大宅、栖岸岚宿",
          },
        },

        {
          paragraphIndent: {
            text: "新闻+",
          },
        },

        {
          paragraphIndent: {
            text: "到乐清游玩有这项福利",
          },
        },

        {
          paragraphIndent: {
            text: "4月18日10时起，乐清市人民政府将向社会发放1.05亿元消费券，参与活动商家预计让利2.1亿元。活动期间总共发放约150万份消费券。",
          },
        },

        {
          paragraphIndent: {
            text: "申领步骤：支付宝首页专区入口进入“春暖瓯越·温享生活”活动页面申领消费券卡包，消费券卡包分时段多轮投放，每阶段内每人最多申领一次。",
          },
        },

        {
          paragraphIndent: {
            text: "享",
          },
        },

        {
          paragraphIndent: {
            text: "无声细下飞碎雪，有骨已剁觜春葱。——杜甫（唐）",
          },
        },

        {
          paragraphIndent: {
            text: "看美景，吃美食，方可称得上是一趟完美的旅途。眼下，哪些食物会让你有“吃”春天的感觉呢？不妨去品尝一下本版列举的滋味吧。",
          },
        },

        {
          paragraphIndent: {
            text: "苍南马站：“民间圣果”邀你采摘游",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051148102.jpg",
          },
        },
        {
          paragraph: {
            text: "4月15日，在苍南马站被称为“蔬果十大采摘园”之一的中魁顿丽桑葚合作社内，挂满枝头的桑葚正等待着游客的到来。",
          },
        },

        {
          paragraph: {
            text: "“我家已经种了8年的桑葚，全部采用无公害种植，桑葚个个大又甜。” 中魁顿丽桑葚合作社社长郑秋丽说，合作社门口竖起了“苍南县中魁顿丽桑葚种植专业合作社”“桑葚标准化生产示范基地”的牌子，一个桑葚种植基地位于渔寮支线，中魁村口处。",
          },
        },

        {
          paragraph: {
            text: "郑秋丽介绍，合作社有供种植果蔬的土地50多亩，当季种植的桑葚就占40多亩。桑葚都经过他们改良，分为温室种植和室外露天种植，各占20多亩地。温室种植的桑葚已于今年2月份成熟，供游客采摘，室外种植的桑葚马上就迎来采摘期。",
          },
        },

        {
          paragraph: {
            text: "桑葚既可入食又可入药，营养价值很高，被称为“民间圣果”。郑秋丽拿起一个刚摘下来的温室桑葚，说温室种植可以让桑葚生长的环境更加稳定，免受不良天气的干扰，因此味道更加香甜，成果也较大，颗粒饱满。这种桑葚呈紫黑色，口感软糯，细细咀嚼中果香四溢，饱含汁水，甜中带些酸。",
          },
        },

        {
          paragraph: {
            text: "在该基地温室大棚里，桑树整齐划一，桑葚挂满枝头。郑秋丽说，2月份起，就陆续有游客来采摘桑葚，一般是以家庭为单位，亲子采摘，感受乡村清新空气的同时，还能边摘边吃纯天然的桑葚，别有一番趣味。",
          },
        },

        {
          paragraph: {
            text: "室内的快下市了，室外的则“蓄势待发”。比起温室内的桑葚，室外的更多的是靠“天”吃饭。“今年正月里有几天倒春寒，室外的桑树受到了影响，因此产量可能比往年要低一些。”郑秋丽说，室外的桑葚比起室内的多了一些野趣，外形更加粗犷，颜色更加亮丽，吃起来酸度稍微高一点。",
          },
        },

        {
          paragraph: {
            text: "提着小篮子摘完桑葚，还可以在田间的小路散步。累了，就坐在田间喝喝茶，品尝合作社自酿的特色桑葚酒，悠闲自得。",
          },
        },

        {
          paragraph: {
            text: "郑秋丽说，接下来，她还要扩大种植规模，开办农家乐，开发多种乡村旅游体验项目，提升游客的体验满意度。",
          },
        },

        {
          paragraph: {
            text: "温都记者 陈伟",
          },
        },

        {
          paragraphIndentBold: {
            text: "桑葚又名桑果、桑枣等，经科学鉴定鲜果中含有大量游离酸和16种氨基酸，此外还含有人体缺少的锌、铁、钙、锰等矿物质和微量元素，以及胡萝卜素、果糖、葡萄糖、丁二酸果胶、纤维素等，被列为既是食品又是药品的“药食同源”农产品之一。",
          },
        },

        {
          paragraphIndentBold: {
            text: "龙湾状元：奶汤王鱼鲜得真够味",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051175298.jpg",
          },
        },
        {
          paragraphIndent: {
            text: "到拥有多个知名景点的龙湾踏青，是不少市民的一个选择。但对老食客来说，去龙湾如不品王鱼，怎么能称得上完美？王鱼这种长着长长胡须的鱼类，很受时间、地点的限制，显得格外珍贵。",
          },
        },

        {
          paragraphIndent: {
            text: "每年谷雨时节，王鱼从大海洄游到瓯江口（七里港—状元—灵昆岛一带）水域产卵，七八月份过后又洄游至深海，再也难觅其踪。因王鱼肉质鲜美，再加上厨师妙手生花的烹制，成为温州一道独特的美食。",
          },
        },

        {
          paragraphIndent: {
            text: "带上家人到龙湾几处知名景点走走，中午去店里品下王鱼，傍晚时分到永强的海鲜市场购买一些小海鲜带回家烹饪，就是值得记录的一天。",
          },
        },

        {
          paragraphIndent: {
            text: "4、5月是品王鱼的上佳时间，老练的食客往往择一家老店吃王鱼，龙湾状元是吃王鱼的绝佳地之一。状元传统的王鱼做法是将鱼洗净，横刀切大块，用锅煮十几分钟后，加粉干、土豆一起炖煮，直至汤色奶白，味道鲜甜可口，突出瓯菜“清、鲜”的做法。",
          },
        },

        {
          paragraphIndent: {
            text: "目前，王鱼已经成为状元的一个美食品牌，在当地也有不少做王鱼的老店，再兼以各类农家卤食，还有各类龙湾的特色海鲜。",
          },
        },

        {
          paragraphIndent: {
            text: "其中，懒岳平王鱼的门口显眼位置摆放着王鱼招牌，楼内并没有豪华的装修、高端的包厢，但在食客圈名气不小。记者到店时，该店李老板正将活蹦乱跳的王鱼从水池里捞起切块。",
          },
        },

        {
          paragraphIndent: {
            text: "“在这个时节，温州各地的人都喜欢赶来这里尝个‘鲜’，但今年受疫情的影响，食客少了一些，但现在生意好一些了，中午已经送走了几拨食客，现在准备晚上的食材。”李老板手里活没停，相当健谈。",
          },
        },

        {
          paragraphIndent: {
            text: "李老板介绍，粉干、土豆是状元王鱼的标配，做出来的王鱼，汤色奶白，味道鲜甜可口，大大的脸盆端上桌就着汤大口品尝才够味，每盆大概有三条王鱼的量，有些资深食客要吃上好几脸盆才过瘾。",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 徐奇",
          },
        },

        {
          paragraphIndentBold: {
            text: "王鱼是鲶鱼的一种，主要分布在缅甸、印度和我国东海、南海海域。它体背褐绿色，各鳍灰黑色，背鳍第一鳍条延长呈丝状，主要栖息在水流缓慢的海底，喜食贝类，背鳍棘、胸鳍棘具毒腺，可以药用，有健脾补虚的功效。",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "美食攻略：",
            },
            {
              text: "龙湾区状元街道的王鱼店有张智美食、番茄海鲜楼、懒岳平王鱼等，凡是王鱼美食店，门口有招牌写明。",
            },
          ],
        },

        {
          paragraphIndentBold: {
            text: "龙港舥艚：禁渔期前吃海鲜大餐",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051201845.jpg",
          },
        },
        {
          paragraphIndent: {
            text: "眼下正是鱿鱼、马鲛鱼上市的时节，抓住春天的尾巴，买海鲜，吃海鲜大餐，不容错过。记者为此跑了一趟龙港市舥艚片区。",
          },
        },

        {
          paragraphIndent: {
            text: "“要买海鲜也就是这段时间，再过半个月就到了禁渔期，我也要休息了。”舥艚片区海鲜批发商张招棒这样说。从龙港市时代大道一直走，走到尽头就是舥艚渔港了。记者在舥艚渔港码头看到，只有几艘渔运船停靠在码头。码头边上停着几十辆冷冻车，如果有海鲜进港，这些车要第一时间把货送给各地商户。",
          },
        },

        {
          paragraphIndent: {
            text: "每天涨潮的时间就是这里渔船和售卖海鲜的商家工作的时间。业内人士说，舥艚渔港中间深两端浅，不是涨潮时间渔船靠不了岸，也出不了渔港。拖网船（含单拖和双拖作业）考虑到成本，要长时间停留在近海或者外海作业，每天进渔港的海鲜通过渔运船运送。于是，每天涨潮时间就是渔港最忙碌的时候。",
          },
        },

        {
          paragraphIndent: {
            text: "位于港滨路57号的一家水产批发商户在渔港码头算是规模比较大的。批发商张招棒从事这个行业已经20多年。他每天要从渔船购进20多吨海鲜。",
          },
        },

        {
          paragraphIndent: {
            text: "最近，舥艚渔港最多的海鲜就是章鱼、鱿鱼等。张招棒说了一个挑选海鲜的简单方法：如果买鱼，一定要买鱼鳃是红的，越红代表越新鲜，如果鱼鳃是黑的，就不要买；选鱿鱼要选看上去是白色的，如果鱿鱼颜色变红，就不新鲜了。",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 王春霞",
          },
        },

        {
          paragraphIndentBold: {
            text: "舥艚历史悠久，旅游资源丰富，有建于南宋嘉定元年的阴均水闸、阴均埭和建于清嘉庆十四年的燕埭水闸等。",
          },
        },

        {
          paragraphIndentBold: {
            text: "近海渔场海鱼种类繁多、经济价值高，盛产马鲛鱼、鲳鱼、石斑鱼、黄鱼、带鱼、马面鱼、对虾、梭子蟹等400余种海产品。",
          },
        },

        {
          paragraphIndentBold: {
            text: "嬉",
          },
        },

        {
          paragraphIndentBold: {
            text: "遍绿野，嬉游醉眼，莫负青春。—韩缜 （宋）",
          },
        },

        {
          paragraphIndentBold: {
            text: "万物复苏春意暖，鱼游虾嬉好时光！去百岛洞头体验海岛运动的刺激；自驾泰顺“浙江最美公路”领略一路春光；去草地牧场遛娃野餐……走走、动动、嬉嬉，才是打开春天的正确方式。",
          },
        },

        {
          paragraphIndentBold: {
            text: "相约洞头：体验三大主题游",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051258165.jpg",
          },
        },

        {
          paragraphIndent: {
            text: "洞头一年四季都有不同的景致，眼下正是最宜人的出游时节之一。这个季节去洞头，乡村休闲游、研学亲子游、海岛运动体验游也很值得体验。",
          },
        },

        {
          paragraphIndentBold: {
            text: "海岛运动体验游",
          },
        },

        {
          paragraphIndentBold: {
            text: "推荐：帆船、摩托艇、蹦极、环岛骑行、海钓",
          },
        },

        {
          paragraphIndent: {
            text: "在奥帆基地，可体验帆船和摩托艇呼啸在海面上的速度与激情，追赶浪花和海鸥，辽阔的海域会让你觉得天地间如此宽广，所有的烦恼在这一瞬间都不值一提；在国际放生台从全国落差最高的海滨悬崖蹦极台纵身越下，迎着蔚蓝的海面，感受身体上的失重感与橡皮筋的反弹力所带来极限乐趣；或是可以约上三五骑友，乘着海风沿着环岛的最美公路且行且赏美景；海钓是一场与大海的博弈，与礁石作伴，与海浪共舞，与鱼儿斗志，洞头得天独厚的海钓条件让它获评了“全国海钓基地”的称号，每年这里都会举办海钓专业赛事，吸引数万海钓爱好者轮竿垂钓。",
          },
        },

        {
          paragraphIndentBold: {
            text: "乡村休闲游",
          },
        },

        {
          paragraphIndentBold: {
            text: "推荐：七彩洞头村、花岗渔村、白迭村、海霞村、金岙村、东岙村",
          },
        },

        {
          paragraphIndent: {
            text: "古树石墙老房子，蓝天浅滩微风。穿梭在村庄的小巷间，用相机定格七彩洞头村的斑斓涂鸦；用指尖触碰花岗渔村略显粗糙的石屋墙壁，感叹岁月的痕迹；眺望白迭村山顶的风车，听风吹来的呢喃；走进海霞村感受红色文化，珍惜当下幸福的来之不易；在金岙村的大树下休憩，斑驳的树影交织出光与影的变奏曲；沿着东岙村的小巷走到尽头，在沙滩看日落，看余晖洒满大海。从此岁月静好，遗忘尘世。",
          },
        },

        {
          paragraphIndentBold: {
            text: "研学亲子游",
          },
        },

        {
          paragraphIndentBold: {
            text: "推荐：蓝色海湾科普馆、冰雪王国、百岛森林乐园、东海贝雕博物馆、至朴海陶、水族贝壳工作室",
          },
        },

        {
          paragraphIndent: {
            text: "徜徉蓝色海湾科普馆，探索海洋的秘密，感受科技的魅力；畅游百岛梦幻冰雪王国，里面不仅有美仑美央的冰雕展示，更有动态冰上游乐项目；探秘百岛森林公园，让网红秋千、呐喊喷泉、丛林穿越、彩虹滑道、憨态可掬的小动物刷爆你的朋友圈；寻迹东海贝雕博物馆感叹螺钿技艺在匠人手中又重新焕发新生。在匠人手把手的指导下你也可以拥有一副专属于自己的贝雕作品；或是可以选择在至朴海陶、水族贝壳工作室制作海陶器皿、雕刻海陶砖、绘制蟹壳画，度过一段美好的亲子时光。",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "福利信息：",
            },
            {
              text: "洞头区目前分两期向复工民宿免费提供4000份精美特色渔产品礼包，内含紫菜、羊栖菜和大黄鱼等洞头特产。6月30日前，入住洞头民宿和星级酒店的游客还可凭住宿发票享受每间房1人免费游全区所有国有景区。",
            },
          ],
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "住宿推荐：",
            },
            {
              text: "截至2019年底，洞头共有民宿390家，已形成了白迭艺术村、花岗渔村等13个民宿集群。它们各有特色，洞头区日前评选出了19家星级海岛民宿，其中聆海左舍民宿获得五星级海岛民宿称号，岩海山居、白迭艺术村等5家民宿获得四星级海岛民宿称号……",
            },
          ],
        },

        {
          paragraphIndent: {
            text: "温都记者 谢树华 通讯员 叶欣婷",
          },
        },

        {
          paragraphIndentBold: {
            text: "一“鹿”有你：城市周边田园乐",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051288374.jpg",
          },
        },
        {
          paragraphIndent: {
            text: "白鹿之城的一草一木，都已在明媚的阳光下苏醒。为提振文旅体消费，重燃消费“引擎”，助力消费行业迈向发展“暖春”，周末时分，市民朋友们何不来鹿城周边体验田园之乐？比如，七都就不可错过。",
          },
        },

        {
          paragraphIndent: {
            text: "春日的七都，花海烂漫，分外美丽，吸引着各方游客前来赏玩。眼下，七都将借助全域旅游，打造一条乡村振兴示范带。你可以来一场自行车环岛骑行，感受白云朵朵、悠悠麦香的田园风光。也可以循着以下线路：七都樟里村——菜菜头动漫中心——环岛自行车道——七彩侨都田园综合体，走走停停，游览一番。",
          },
        },

        {
          paragraphIndent: {
            text: "你可以在樟里村感受小桥流水人家的江南小镇，在菜菜头动漫中心感受时尚趣味的动漫文化，或到众多高颜值餐厅品尝美食……",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "福利信息：",
            },
            {
              text: "鹿城在各类线下线上平台，送出价值300万元旅游消费券和免费门票，发券时间截止到4月17日18时，消费券使用期限从4月18日至6月30日。免费旅游消费券覆盖景区、餐饮、文化驿站、体育健身、非遗、特色美食、书店等行业。市民朋友可通过掌上鹿城app活动页面进行抢票，只要实际消费金额高于券面金额即可使用。",
            },
          ],
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "美食推荐：",
            },
            {
              text: "谷子里农家乐、前沙GUAVA民宿、罗勒餐厅等。",
            },
          ],
        },

        {
          paragraphIndent: {
            text: "温都记者 李伟康",
          },
        },

        {
          paragraphIndentBold: {
            text: "走走泰顺：愿我们一切都顺",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051304691.jpg",
          },
        },
        {
          paragraphIndent: {
            text: "在这最好的赏花时节，泰顺县为全国医护人员送出了泰顺旅游大礼包，同时还面向全国游客送出了价值2000万元的无门槛旅游优惠券，诚邀全国游客到“浙南净土”游玩，更是欢迎市民能“一路向南”，赏最美的花、呼吸最新鲜的空气。",
          },
        },

        {
          paragraphIndent: {
            text: "眼下去泰顺，建议自驾，不仅因为这里有浙江最美公路，更因为去往泰顺的路上，稻田绿，菜花黄，远山近水，举目四望一片生机勃勃，让人胸怀舒畅。",
          },
        },

        {
          paragraphIndentBold: {
            text: "到乌岩岭登山徒步",
          },
        },

        {
          paragraphIndent: {
            text: "乌岩岭的大名不必多说，生态堪称一绝。从山脚到山顶的路蜿蜒曲折，但当登上山顶的时候，一切长途跋涉后的疲惫都会烟消云散。作为“温州之巅”，白云尖的云海奇观实在太美。除了云美，乌岩岭还有个出名的美景便是高山杜鹃。乌岩岭杜鹃花的品种非常多，开花的日期也不一致，猴头杜鹃是最常见的，五月开花；云锦杜鹃长得很高大，六月上旬才开花。如果你五六月份来这里，会看到满山遍野的山花恣意生长，万紫千红。",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "门票：",
            },
            {
              text: "50元/人（即日起至4月30日前免费开放）",
            },
          ],
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "地址：",
            },
            {
              text: "50元/温州市泰顺县乌岩岭国家级自然保护区双坑口保护站",
            },
          ],
        },

        {
          paragraphIndentBold: {
            text: "穿越浙江最美公路",
          },
        },

        {
          paragraphIndent: {
            text: "“车在路上行，人在景中游”，泰顺331省道蜿蜒地绘着路上的每一处风景，泗溪廊桥、乌岩岭自然保护区、飞云湖等风景因为这条最美公路而聚集在一起，是不少自驾游爱好者的心头好。",
          },
        },

        {
          paragraphIndent: {
            text: "说331省道这一条道路就是一处景点，并不为过。一路穿越10个隧道，27座桥梁，331省道就像一条飞舞在山间的绿色绸带。自驾其间，不仅是惬意的心情，更多的是满眼的旖旎风景，山风徐徐，踏进这小城的那一刻就让你的心静了下来。",
          },
        },

        {
          paragraphIndentBold: {
            text: "去云岚牧场亲子野餐",
          },
        },

        {
          paragraphIndent: {
            text: "云岚牧场，可以说是泰顺近年来的新晋网红了。这里是遛娃圣地，更是春游野餐的好地方，春天已来，疫情未散，何不约上好友，来这空旷的牧场走一遭。",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "门票：",
            },
            {
              text: "80元/人（停车免费）",
            },
          ],
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "地址：",
            },
            {
              text: "温州市泰顺县柳峰乡高场村",
            },
          ],
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "民宿推荐：",
            },
            {
              text: "竹里云溪（省白金宿级）、塔头底迷途·七厝（省金宿级）、沐云·嚮往牧场民宿、沐云·鸣泉牧场民宿、月蓝舍畲乡风情民宿、凤栖谷艺术民宿村",
            },
          ],
        },

        {
          paragraphIndent: {
            text: "美食推荐：竹里乌米饭、百丈溪鱼干、筱村红粬酒、泗溪泥鳅汤、柳峰牛杂、仕阳肉丸、龟湖溪鱼、雪溪绿豆腐、大安辣兔、洲岭猪肉、碑排笋干、翁山番薯干、南院茭白、仙稔溪螺",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 蔡挺/整理",
          },
        },

        {
          paragraphIndentBold: {
            text: "宿",
          },
        },

        {
          paragraphIndentBold: {
            text: "枕上片时春梦中，行尽江南数千里。——岑参（唐代）",
          },
        },

        {
          paragraphIndentBold: {
            text: "眼下，本应在旺季的温州民宿行业尚待复苏。”游千村 住千宿“等众多活动，正在为民宿行业回暖加温，趁着各种福利和优惠都在发放中，不妨来住住隐匿在温州各地美好的山水、村野间的民宿吧。",
          },
        },

        {
          paragraphIndentBold: {
            text: "瓯海外水良·艺镜:别样的村居之美",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051385686.jpg",
          },
        },
        {
          paragraphIndent: {
            text: "穿过蜿蜒曲折的盘山公路，车子进入位于瓯海泽雅的外水良村落。这里的深山中坐落着一家民宿，名叫外水良·艺镜。它依山而建，几座石头老屋错落有致地分布在村里，仿佛处在世外桃源内。民宿从内到外，从房梁到庭院，随处透露出旧时庭院的影子。“这里的一砖一瓦，一木一叶都是我们从拆迁的老房子处搜集来的。”民宿的女主人薛莉茹和丈夫都是喜欢旅游的人，开一间民宿既是满足了自己的兴趣，也是一种全新的体验。",
          },
        },

        {
          paragraphIndent: {
            text: "为了打造一家精品高端民宿，薛莉茹一边游历于世界各地，学习优质民宿的经营之道，另一边也在积极寻找开民宿的合适场地。最终，瓯海泽雅的自然风光和古村落的气质吸引了她。目前，外水良1号院和2号院已投入营业，在山水风光中显现出别样的村居之美。",
          },
        },

        {
          paragraphIndent: {
            text: "“我们希望民宿能唤起人们对家的情感记忆，所以我们倡导家庭式的接待方式，让客人有一种宾至如归的感觉。” 薛莉茹觉得，开民宿是在和客人分享她的生活空间和生活态度，也分享着客人们的人生。",
          },
        },

        {
          paragraphIndent: {
            text: "今年3月份，外水良·艺镜推出了针对援鄂医护人员的优惠福利活动，其中包括温州援鄂的37名医护人员可免费入住一泊三餐的房间。“在这里能看到外面整个山谷。最近处是上山的小道，整个人身心舒展，仿佛置身在大自然里一样。”一位前来体验入住的医护人员告诉记者。",
          },
        },

        {
          paragraphIndent: {
            text: "“我们准备将民宿做成一份长期的事业。” 薛莉茹说，目前她已和村里的十几栋老房子签订租赁合同，接下来，这些老房子经过重新装修和改造提升，将摇身变为一幢幢独立的民宿群。",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 郑荣",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "瓯海美景推荐：",
            },
            {
              text: "温州乐园、三垟湿地、泽雅、仙岩、吹台山森林公园、五美景园。",
            },
          ],
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "瓯海美食推荐：",
            },
            {
              text: "眼下正好可以吃泽雅人最爱的棉菜饼，另外，泽雅纸农菜也很有名，推荐白鲞烧冬笋、双咸混炒、干菜大荟萃等。",
            },
          ],
        },

        {
          paragraphIndentBold: {
            text: "文成水云见·源:去“远方乡村的家”",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051408629.jpg",
          },
        },
        {
          paragraphIndent: {
            text: "临近谷雨，正是农夫们种瓜点豆的时节。温州的春日时晴时雨，乍暖还寒。在位于文成县南田镇驮湖村的水云见·源确是一派热火朝天。",
          },
        },

        {
          paragraphIndent: {
            text: "原本最近的两三个月是民宿行业一年中的黄金时间，却因为一场突如其来的疫情，让他们不得不暂停营业。民宿的掌柜王盛说：“这次停业损失不小，不过我们也不会自怨自艾，趁机‘修炼内功’，对整个民宿内外都进行了整修，打算4月20日正式开业。”",
          },
        },

        {
          paragraphIndent: {
            text: "“我们在外面的空地上开了个‘巴士酒吧’，还有阳光餐厅和天然泳池，另外一些改建马上就要收尾了。”提起最近的改建成果王盛不无激动。",
          },
        },

        {
          paragraphIndent: {
            text: "最近，当地政府鼓励民宿主把文成侨乡文化融入各自民宿，而水云见·源也正奔着“侨家乐”这个主题大踏步前进。“客人来玩，我们有洋气的‘巴士酒吧’、草坪音乐会，也有乡土味的森林探险。”主人告诉记者，他们会带客人上山入林，去挖春笋，采草药，下溪水去抓溪鱼、泥鳅。",
          },
        },

        {
          paragraphIndent: {
            text: "当然，作为温州两家白金宿之一的水云见·源，除了好玩的节目，民宿本身才是最大的卖点。主人家说，他们的初心是要把这里打造成“远方乡村的家”，和朋友们分享既私密、又自由的山中岁月。对于民宿里的一点一滴都是他们精心打造出来的，如果客人有耐心，她可以把这里每一件家具、摆件的故事告诉他。",
          },
        },

        {
          paragraphIndent: {
            text: "在大堂里，有一颗用枯树做成的工艺品，上面点缀着很多装饰品，立于大厅中央十分别致。“这棵树是2016年下大雨时，后山上一棵被山洪冲垮的树。那天我们4个人，用了3个小时，从后山上把它挖出来，然后抬回来。经过晾晒、去皮、装饰，就成了现在这个工艺品。”王盛说。",
          },
        },

        {
          paragraphIndent: {
            text: "除了好住好玩，在水云见·源最好就是过个春日的慢生活，撸猫逗狗看书，慵慵懒懒。",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 严嘉瑜",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "文成美食推荐：",
            },
            {
              text: "在文成以下几道特色菜不可错过：文成拉面、文成粉丝、白落地、绿豆腐、青钱柳、兔肉、田螺……",
            },
          ],
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "文成美景推荐：",
            },
            {
              text: "百丈漈飞瀑、山顶湖、猴王谷、龙麒源、铜铃山、安福寺这些个旅游景点都是不错的去处。",
            },
          ],
        },

        {
          paragraphIndentBold: {
            text: "平阳溪山别院：可见山也可望水",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051444810.jpg",
          },
        },
        {
          paragraphIndent: {
            text: "智者乐水，仁者乐山。在溪山别院，可见山也可望水。它座落于平阳县怀溪镇水口村。前段时间，温州新增100家职工疗休养基地，溪山别院榜上有名。",
          },
        },

        {
          paragraphIndent: {
            text: "从怀溪镇逆溪而上，往西南而行，驾车10来分钟就到了水口村。村口有个百水台，溪水从堤上一层层流下，形成一道道水帘。游客们纷纷在此拍照留念，这是村里一处网红打卡点。",
          },
        },

        {
          paragraphIndent: {
            text: "再往上走，一个天然大泳池便映入眼帘，它像一面大镜子，映出蓝天白云，还有飞鸟掠过的影子。听说它面积有近1000平方米，水深1.3米左右，水温常年25摄氏度。",
          },
        },

        {
          paragraphIndent: {
            text: "沿溪一路行来，大概在村中央地带，就可以看到依山傍水的溪山别院了——一幢民宿“临水居”和5座八角形的小木屋，伞型顶部遮盖着干草，屋面的落地式玻璃墙，于阳光下反射出光亮，其背景为葱郁的树木，给人以现代和自然相融一体之感。",
          },
        },

        {
          paragraphIndent: {
            text: "溪山别院主人徐宗督说，这段时间，周一至周五住宿费用优惠，欢迎游客预订，本周六有个工会组织已订下所有的客房。",
          },
        },

        {
          paragraphIndent: {
            text: "到了晚上，住宿在“临水居”或小木屋，你可以站在玻璃墙前，远眺那点点灯火，这个身影，很有可能成为他人眼中的夜景；当然你还可以轻轻推门而出，独坐于溪边，听听水声和虫鸣；闻闻山风带来青草的气息；瞧瞧天上的星星和月亮，此时想些什么，或者什么都不想，享受着乡村的静谧和安祥。",
          },
        },

        {
          paragraphIndent: {
            text: "来到水口村赏景，在溪山别院住宿一夜之后，才能体会到“人，诗意地栖居”这句话的含义。",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 汪麟康",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "平阳美食推荐：",
            },
            {
              text: "本地的土豆和春笋已开挖，怀溪番鸭等农家菜也值得一尝。",
            },
          ],
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "平阳美景推荐：",
            },
            {
              text: "水口村素有“平阳的香格里拉”之美称。这里有浙江最美古道——穹岭古道，保留着不少传统建筑，同时这里群山环抱、气候润泽，森林覆盖率达93%。",
            },
          ],
        },

        {
          paragraphIndentBold: {
            text: "永嘉悦栖山居:栖于山水心悦然",
          },
        },
        {
          image: {
            imageSRC: "/images/article/1587051457676.jpg",
          },
        },
        {
          paragraphIndent: {
            text: "在“山上如画”的永嘉楠溪江，有一家悦栖山居轻奢度假酒店，它汲取了“悦榕庄”式的设计与居住体验，将中国古典美学匹配舒适度假。",
          },
        },

        {
          paragraphIndent: {
            text: "从市区出发沿诸永高速公路自驾约40分钟，进入楠洋百草园就看到一座三层的 “苏州园林”式建筑，这便是悦栖山居轻奢度假酒店。",
          },
        },

        {
          paragraphIndent: {
            text: "一进酒店，汇集中式美学精华的中式月洞门带你来到大厅。新中式的装修风格、明清经典桌椅，还有上百幅国风水墨画装点于厅堂、走廊。",
          },
        },

        {
          paragraphIndent: {
            text: "据介绍，悦栖山居占地14亩，包含中式建筑和精致庭院，5千平方米的户外空间，配以200平方米豪华露天超大泳池。30间不同风格的高级客房，分别以“悦”为名，悦泉、悦水、悦园、悦山、悦云……设计师把中式的庭院美学融入到楠溪江的幽美环境之中，信步庭院让人有种暂别世事喧嚣，寄情于山水间的感觉。",
          },
        },

        {
          paragraphIndent: {
            text: "在这里，你可以约上三五好友相聚，可以对月茗茶静思回忆曾经那段铭记于心的时光。一楼还有草坪适合举行露天聚会、烧烤等活动。该酒店的卓店长介绍，酒店不但适合家庭休闲旅游，也适合同学聚会等。",
          },
        },

        {
          paragraphIndent: {
            text: "从酒店出来，步行数百步，就能看到古码头、嬉水滩、月亮湾露营地等。目前工人正在加紧人工沙滩的施工，夏天一边在沙滩上堆沙，一边还可以在楠溪江玩一些水上运动。酒店周边还规划了一个射箭场，不久也将对外开放。",
          },
        },

        {
          paragraphIndent: {
            text: "温都记者 周晓玲",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "永嘉美食推荐：",
            },
            {
              text: "楠溪江本地的笋干、土鸡、溪螺、溪鱼、溪虾等，都值得一尝。",
            },
          ],
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "永嘉美景推荐：",
            },
            {
              text: "从悦栖山居驱车6分钟车程可至达太平岩；开车约12分钟可至永嘉书院；约13分钟车程可到狮子岩景区。",
            },
          ],
        },

        {
          paragraphIndent: {
            text: "编辑 孙立彭 金慧君",
          },
        },

        {
          paragraphIndent: {
            text: "校对 郑凌 严嘉瑜",
          },
        },

        {
          paragraphIndent: {
            text: "版式 邵海若",
          },
        },

        {
          paragraphIndent: {
            text: "审核 王思宁 李罗华",
          },
        },

        {
          paragraphIndent: {
            text: "监制 陈博盛",
          },
        },

        {
          paragraphIndentBold: {
            text: "本文转载自温都网",
          },
        },

        {
          paragraphContainsBoldIndent: [
            {
              bold: "原文链接：",
            },
            {
              link: "http://news.wendu.cn/2020/0416/784181.shtml",
              linkURL: "http://news.wendu.cn/2020/0416/784181.shtml",
            },
          ],
        },
      ],
      title: "村“游温州·温州去哪儿",
      previewText:
        "花桃花春色暖先开，明媚谁人不看来。——周朴（唐）如何去瓯越大地感受别样的美？有哪些赏花好去处？看看这些踏青胜地，在这个周末来一场赏花之旅，让你的朋友圈展现出一片姹紫嫣红。花溪花岛：三垟湿地动人“花鸟画...",
      date: "2020-04-19",
      imageURL: "/images/article/1587050902528.jpg",
    },
  },
  {
    id: 32203,
    categoryClass: "CulturalPark",
    parentDirectory: "culture",
    category: "文化园地",
    subcategory: "家乡的艺术和文化",
    subDirectory: "/culture/art",
    article: {
      content: [
        {
          paragraph: {
            text: "《漫步之夜》",
          },
        },

        {
          paragraph: {
            text: "文／Coral 珊瑚",
          },
        },

        {
          listNoStyleNoIndent: [
            {
              text: "漫步月光里的思乡",
            },
            {
              text: "一滴滴咸涩",
            },
            {
              text: "结晶成发白的",
            },
            {
              text: "无数星光",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "一条思绪的银河",
            },
            {
              text: "散着满天花瓣",
            },
            {
              text: "抒情飞舞在空中",
            },
            {
              text: "浅浅慢慢",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "故乡",
            },
            {
              text: "一个可以放在心头的",
            },
            {
              text: "迷惘",
            },
            {
              text: "却是回不去的地方",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "多年飘泊的你我",
            },
            {
              text: "皎洁一轮",
            },
            {
              text: "孤独的惆怅",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "把彼此认定成",
            },
            {
              text: "思念之痛的故乡",
            },
          ],
        },
      ],
      title: "听音乐 An evening walk",
      previewText:
        "《漫步之夜》文／Coral 珊瑚漫步月光里的思乡一滴滴咸涩结晶成发白的无数星光一条思绪的银河散着满天花瓣抒情飞舞在空中浅浅慢慢故乡一个可以放在心头的迷惘却是回不去的地方多年飘泊的你我皎洁一轮孤独的惆怅把彼此...",
      date: "2020-03-28",
      imageURL: "/images/article/1585362352130151.jpg",
    },
  },
  {
    id: 32204,
    categoryClass: "CulturalPark",
    parentDirectory: "culture",
    category: "文化园地",
    subcategory: "家乡的艺术和文化",
    subDirectory: "/culture/art",
    article: {
      content: [
        {
          listNoStyleNoIndent: [
            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "春风十里",
            },
            {
              text: "是否写过得意",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "夏风微醺",
            },
            {
              text: "醉尽荷香清气",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "把它们全部留给你",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "我只静读",
            },
            {
              text: "花开花谢的呼吸",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "它们起伏于",
            },
            {
              text: "荷塘月色下的",
            },
            {
              text: "涟漪",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "盛放于纸上",
            },
            {
              text: "渲染奔放的淋漓",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "然后止于",
            },
            {
              text: "慢慢干去的韵迹",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "唤醒不言不语的香",
            },
            {
              text: "在脑海里",
            },
            {
              text: "把整个夏天满溢",
            },
          ],
        },
      ],
      title: "《写荷》",
      previewText:
        "文／Coral珊瑚春风十里是否写过得意夏风微醺醉尽荷香清气把它们全部留给你我只静读花开花谢的呼吸它们起伏于荷塘月色下的涟漪盛放于纸上渲染奔放的淋漓然后止于慢慢干去的韵迹唤醒不言不语的香在脑海里把整个夏天满...",
      date: "2020-03-28",
      imageURL: "/images/article/1585362352130151.jpg",
    },
  },
  {
    id: 32205,
    categoryClass: "CulturalPark",
    parentDirectory: "culture",
    category: "文化园地",
    subcategory: "家乡的艺术和文化",
    subDirectory: "/culture/art",
    article: {
      content: [
        {
          listNoStyleNoIndent: [
            {
              text: "文／Coral 珊瑚",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "想那夏夜的荷塘",
            },
            {
              text: "清香溢满",
            },
            {
              text: "遥远的故乡",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "明知月亮在天上",
            },
            {
              text: "却仍低头喜欢",
            },
            {
              text: "那被抱在水中的月亮",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "你的诗句",
            },
            {
              text: "落入池塘",
            },
            {
              text: "像一只小船",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "轻轻地涟漪",
            },
            {
              text: "就碎了",
            },
            {
              text: "水里忐忑的月亮",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "等风过",
            },
            {
              text: "等船靠岸",
            },
            {
              text: "等荷香把寂色涂满",
            },
          ],
        },
        {
          listNoStyleNoIndent: [
            {
              text: "静静地拾回",
            },
            {
              text: "自己的月亮",
            },
          ],
        },
      ],
      title: "《荷塘自己的月亮》",
      previewText:
        "文／Coral 珊瑚 想那夏夜的荷塘清香溢满遥远的故乡 明知月亮在天上却仍低头喜欢那被抱在水中的月亮 你的诗句落入池塘像一只小船 轻轻地涟漪就碎了水里忐忑的月亮 等风过等船靠岸等荷香把寂...",
      date: "2020-03-28",
      imageURL: "/images/article/1585362352130151.jpg",
    },
  },
  {
    id: 32206,
    categoryClass: "CulturalPark",
    parentDirectory: "culture",
    category: "文化园地",
    subcategory: "家乡温州",
    subDirectory: "/culture/wenzhou",
    article: {
      content: [
        {
          paragraph: {
            text: "李社潮（庆祝中华人民共和国成立60周年）我的家乡-温州,在长江支流秀丽的瓯江之畔。东有名山雁荡山, 北有媲美桂林漓江的国家级风景名胜区南溪江, 南有孕育出瑞安古城的飞云江,群山叠叠, 江河环绕。小时候听老人说, 现今很多街道以前都是河道。河上横跨着拱桥, 路面铺着一块块石板,春雨透过石板缝悄悄溶入河水, 洗去岁月留下的尘埃，留给路人是一片干净又清爽的路面。 ",
          },
        },

        {
          paragraph: {
            text: '古书记载说温州因气候"虽隆冬而恒燠"，四季温和湿润, 所以名为"温州"。在温州还有一个美丽的民间传说,在东晋年间温州太守郭璞建造城墙时屡建屡塌, 一日一只白鹿衔杏花驾着祥云飞驰而来,在倒塌的城墙上空绕飞3周, 沿途鲜花盛开并散落下来铺盖着墙基 ,白鹿又踏着白云冉冉而去。从此, 城池建成不曾再坍倒。人们称白鹿为温州带来吉祥、好运, 所以也叫温州为"鹿城"。现在温州管辖2市, 6县,3区, 温州地区的政治、经济、文化中心就在"鹿城区" 。',
          },
        },

        {
          paragraph: {
            text: "上世纪九十年代初,我刚来美国时,会有人问我从那里来。当我回说来自温州时,那人又问到,那温州是在大陆还是在台湾啊? 问得我很诧异,我心想这人怎么连温州在中国大陆都不知道啊! 温州又不是一个山沟里的小村庄! 这不是太夸张了吗? 在往后的日子里我才发现,其实这并不夸张。美国是一移民的国家,就象我本人来自中国大陆,如有人告诉我他来自法国或印度的某一个城市,我除了知道法国有个巴黎和凡尔赛, 印度有新德里和孟买外,谁会记得名不见经传的地名呢!当然,大家忘不了的是自己的故乡,哪怕是在一穷山沟里。",
          },
        },

        {
          paragraph: {
            text: "九十年代末,当别人问我,并知道我从温州来时会有意无意地脱口而出:噢!哪个造假货、产低廉商品的地方哟? 我那时恨不得把自己经销的产品都印上MADE IN WENZHOU来替代MADE IN CHINA为温州产品正名。好在温州人非常有骨气,1999年在杭州武林门一把熊熊大火烧掉自己的假货和次货,在浴火中宣誓了整治和自我提高的决心。今天,温州的传统产业如服装、鞋业、眼镜、打火机已跨入世界名牌的行列, 温州的产品以优良品质和款式新颖而畅销全世界。现在人们已充分理解温州的信誉和产品已犹如凤凰涅磐在浴火中获得新生了!",
          },
        },

        {
          paragraph: {
            text: '二十一世纪初的今天,还会有人问我, Where were you from ? 我回答WENZHOU.我的话音刚落, 对方就羡慕地竖起大拇指直夸温州,称赞温州人"勤奋、务实、团结、热心、奉献的行事风格,敢为人先、善于经商"的生意头脑。确实, 勤劳而有智慧的温州人在经济改革开放初期的滚滚洪流浪中驾着一叶扁舟凭着过人的勇气和胆识, 从浙江东南一偶驶向神州大地和五湖四海, 闯荡出一条"温州模式"的改革之路。为中国经济改革开放树立了一个楷模, 成为中国民营经济改革开放的发祥地之一。温州也因"温州(人)精神"而名扬四海。',
          },
        },

        {
          paragraph: {
            text: '据不完全统计现在有175万温州人在全国各地创建了2000多个商品城 ,有60万温州人在世界93个国家和地区经商创业，构筑起一个温州人的人文和营销网络,同是也成为华侨世界一股异军突起的新生力量。美国《洛杉矶时报》曾这样报道温州人: "就像是当代的马可·波罗，温州人正在开拓着中国蓬勃发展的经济疆土。他们面对陌生的环境，将中国的商业扩展到了全世界。"',
          },
        },

        {
          paragraph: {
            text: "中国的经济改革开放政策为温州带来了前所未有的机遇,在这30年来温州发生了翻天覆地的变化。我每次回去如果没有人带路,肯定会迷路。朋友们笑我怎么在自己家门口也会迷路。市区扩大了几倍,宽阔的大道淹没了弄堂、小巷。拔地而起的摩登大厦覆盖了矮墙灰瓦的旧屋, 人文之美的青青草地、怒放的鲜花和优雅的雕像重塑城市的荒芜之地。",
          },
        },

        {
          paragraph: {
            text: '城市建设变了,生活变富裕了, 教育一代比一代好了。温州在变革中开求发展,在发展中再一次次变革,唯独没有变的是温州人的"传统精神"，也就是吃苦耐劳、自强不息、善于经商, 敢为人先，经世致用,追求卓越"的温州精神和人文风气。温州的第一代创业者在"温州精神"支撑下完美地完成了哪个特定时期赋予的历史任务。第二代的继承和发展者在"温州精神"鼓舞下,从父辈那里接过单纯的制造业,将行业扩展到金融、教育、开矿、房地产、高科技、娱乐等等行业, 完成了第二次质的跨越。当我深深感动于温州人的聪明才智时,我蓦然感悟到: 正是中国政府奉行经济改革开放政策和走平发展之路,温州才能在"大我"中实现"小我"的发展和提升。',
          },
        },

        {
          paragraph: {
            text: "在中华人民共和国成立60周年之际,我从大太平洋彼岸深情回望家乡,并以文抒情,衷心祝愿伟大的中国国泰民安,繁荣昌盛,福泽世界! 亲爱的中国HAPPY BIRTH DAY !",
          },
        },
      ],
      title: "望家乡",
      previewText:
        "李社潮（庆祝中华人民共和国成立60周年）我的家乡-温州,在长江支流秀丽的瓯江之畔。东有名山雁荡山, 北有媲美桂林漓江的国家级风景名胜区南溪江, 南有孕育出瑞安古城的飞云江,群山叠叠, 江河环绕。小时候听老人说, ...",
      date: "2020-03-28",
      imageURL: "/images/article/1584916298156168.png",
    },
  },
  {
    id: 32207,
    categoryClass: "CulturalPark",
    parentDirectory: "culture",
    category: "文化园地",
    subcategory: "家乡的艺术和文化",
    subDirectory: "/culture/art",
    article: {
      content: [
        {
          listNoStyleNoIndent: [
            {
              text: "本篇的文和画均为Coral珊瑚所作",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《梦里花开》",
            },
            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "经年累月 缠裹的梦",
            },

            {
              text: "裂出洁质的肌肤",
            },

            {
              text: "忘了是否疼痛",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "燃成灰烬前的诗中",
            },

            {
              text: "拾几朵芳菲的魂魄",
            },

            {
              text: "咏叹了笔墨 称颂",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "最美的时光",
            },

            {
              text: "不过是 把你们",
            },

            {
              text: "在纸上细细地种",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "恍惚人间的惆怅",
            },

            {
              text: "馥郁一个梦",
            },

            {
              text: "开成花一般地从容",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《吻》",
            },

            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "满天繁星",
            },

            {
              text: "幽暗 吟唱给寂夜的 吻",
            },

            {
              text: "指引迷津",
            },

            {
              text: "星光陪伴旅程",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "风情万种是风",
            },

            {
              text: "簇拥热闹起春天的 吻",
            },

            {
              text: "花朵绽放繁盛",
            },

            {
              text: "回馈红尘",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "夕阳无限好",
            },

            {
              text: "亲温暖秋叶的 吻",
            },

            {
              text: "金光灿耀",
            },

            {
              text: "每一片",
            },

            {
              text: "梦的眼神",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "盈眶热泪的雨",
            },

            {
              text: "是感恩大地的 吻",
            },

            {
              text: "飘泊天涯沦落人",
            },

            {
              text: "觅回 家的温存",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《昨日》",
            },

            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "昨日",
            },

            {
              text: "犹如案板上的岁月",
            },

            {
              text: "一截一截切去",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "青春 年华 欢乐 记忆",
            },

            {
              text: "每切一刀",
            },

            {
              text: "其实都有一声响痛",
            },

            {
              text: "割断 别离",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "我是一个做梦的人",
            },

            {
              text: "只有跌落在梦境里",
            },

            {
              text: "才睁苏醒的眼睛",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "月光一如继往地探访",
            },

            {
              text: "和我共品一杯茶香清气",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "把一片落叶藏起",
            },

            {
              text: "满卷的诗行",
            },

            {
              text: "写下美丽的静寂",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "",
            },
            {
              text: "",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "只有流水的声音",
            },

            {
              text: "一半奔向远方",
            },

            {
              text: "浪淘昨日的",
            },

            {
              text: "难以忘记",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "一半写着深情",
            },

            {
              text: "沉淀河底",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《因为你》",
            },
            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "一粒艺术的种子",
            },

            {
              text: "埋藏心底",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "发芽 一隅安寂",
            },

            {
              text: "温暖把岁月抱紧",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "发芽 一隅安寂",
            },
            {
              text: "温暖把岁月抱紧",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "漂泊的心",
            },

            {
              text: "忍耐淅沥的雨",
            },

            {
              text: "刷洗 也历练坚定",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "寂寞 在寂寞的茧里",
            },

            {
              text: "梦织起舞翩翩的",
            },

            {
              text: "千丝万缕",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "因为你",
            },

            {
              text: "浓写的痛苦与悲绪",
            },

            {
              text: "只是方寸间的距离",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "因为你",
            },

            {
              text: "点燃和光芒了",
            },

            {
              text: "自己",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《寄你一片月光》",
            },

            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "切块今晚的中秋月",
            },

            {
              text: "寄你一片月光",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "驰骋千里而至的白马",
            },

            {
              text: "如约 会在入梦时分抵岸",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "你启封时",
            },

            {
              text: "切记小心翼翼",
            },

            {
              text: "捧住这份明亮",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "一如握在手中的蜡烛",
            },

            {
              text: "热泪滚烫",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "读完星星在夜空写下的",
            },

            {
              text: "信长长",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "心意",
            },

            {
              text: "该已被月光",
            },

            {
              text: "明了在水面上",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "徘徊不出杯中的",
            },

            {
              text: "你我",
            },

            {
              text: "不知如何沉浮于",
            },

            {
              text: "世事沧桑",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "今夜只宜",
            },

            {
              text: "对饮一杯月光",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《纸》二首",
            },
            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《宣纸》",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "你如此轻柔",
            },

            {
              text: "薄而无依",
            },

            {
              text: "几滴水墨",
            },

            {
              text: "就以赴死的生命",
            },

            {
              text: "滔滔渲翻天地",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "你一生 红颜薄命",
            },

            {
              text: "取决于执笔者的笃定",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "你无法承受",
            },

            {
              text: "命运多舛的",
            },

            {
              text: "反复无常",
            },

            {
              text: "涂改变异",
            },

            {
              text: "终遭千穿百孔地遗弃",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "你有一挥而蹴的灵气",
            },

            {
              text: "酣畅墨迹的游移和淋漓",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "粘在有后盾的裱纸上",
            },

            {
              text: "才终于成就自己",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《水彩纸》",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "经过百回的压制 磨砺",
            },

            {
              text: "才产生你",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "红颜而不薄命",
            },

            {
              text: "喜持笔者的坚定",
            },

            {
              text: "但无一失足成千古恨的",
            },

            {
              text: "遗憾与抛弃",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "精彩腾云驾雾",
            },

            {
              text: "自如演绎",
            },

            {
              text: "做坚实的自己",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "无需粘贴什么上身",
            },

            {
              text: "而成为后盾",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "画框添增",
            },

            {
              text: "几分精致美丽",
            },

            {
              text: "但若分离",
            },

            {
              text: "你依然是你",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《向日葵》",
            },

            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "我只是一朵希望",
            },

            {
              text: "追随和渴慕",
            },

            {
              text: "爱的光芒",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "你从晨曦轻焕",
            },

            {
              text: "到日落辉别西山",
            },

            {
              text: "普照着千千万万",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "我用痴情",
            },

            {
              text: "把一粒粒心事",
            },

            {
              text: "写满脸庞",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "把花只开成",
            },

            {
              text: "你的模样",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《花季》",
            },

            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "不揣测花开的理由",
            },

            {
              text: "朵朵心事的秘密",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "不去明白雨滴",
            },

            {
              text: "相思的淅沥",
            },

            {
              text: "零落花迹",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "纸上的水语",
            },

            {
              text: "几笔狂抹恣意",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "将错就错的天定",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "一张时间的空白",
            },

            {
              text: "不剩重来的期许",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "唯握从容之笔",
            },

            {
              text: "着色淡定 竭力",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "用心上的眼睛",
            },

            {
              text: "写纸上的花季",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "《结局》",
            },
            {
              text: "文／Coral珊瑚",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "",
            },
            {
              text: "",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "黑夜是白日闭上的眼睛",
            },

            {
              text: "死亡是生命最后的词语",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "因为相遇",
            },

            {
              text: "满目的波光粼粼",
            },

            {
              text: "是翅膀抖动的鸟鸣",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "不必用结局",
            },

            {
              text: "把情节催促成焦虑",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "今夜我携月光来访",
            },

            {
              text: "不知何处",
            },

            {
              text: "有听涛共梦的白帆",
            },

            {
              text: "可以私语",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "浪花打碎所有的思绪",
            },

            {
              text: "辽阔一片广际",
            },

            {
              text: "涌起又平复放下水域",
            },
          ],
        },

        {
          listNoStyleNoIndent: [
            {
              text: "写惊涛拍岸的诗句",
            },

            {
              text: "听风平浪静的淡叙",
            },
          ],
        },
      ],
      title: "《寄你一片月光》等十首",
      previewText:
        "本篇的文和画均为Coral珊瑚所作《梦里花开》文／Coral珊瑚经年累月 缠裹的梦裂出洁质的肌肤忘了是否疼痛燃成灰烬前的诗中拾几朵芳菲的魂魄咏叹了笔墨 称颂最美的时光不过是 把你们在纸上细细地种恍惚人间的惆怅馥郁...",
      date: "2020-03-28",
      imageURL: "/images/article/1585362352130151.jpg",
    },
  },
  {
    id: 32208,
    categoryClass: "CulturalPark",
    parentDirectory: "culture",
    category: "文化园地",
    subcategory: "家乡温州",
    subDirectory: "/culture/wenzhou",
    article: {
      content: [
        {
          paragraph: {
            text: '"温州人"是特定历史的冠名，永嘉太守、山水诗人谢灵运的朝代，叫"永嘉人"，不叫"温州人"。',
          },
        },

        {
          paragraph: {
            text: '我女儿生在哈尔滨，六岁到美国，她和我那些旅美老乡的子女，子女的子女，连"国语（汉语）"都懒得讲，他们还会说自己是"温州人"吗？',
          },
        },

        {
          paragraph: {
            text: '历史的有轨列车至少在这里拐了个弯：从幽闭走向开放，从轻商走到重商，从抽象思维转变成世俗凡事的具体操作，从内陆经济走向沿海经济，才有温州人大出风头 的机会。当初，可是江西"老表"尽领风骚的年代，我在南昌滕王阁看到众多文人墨客、风流才子的肖像，他们是东方的莎士比亚汤显祖，田园派大诗人陶渊明，以 及朱熹、王安石、晏殊、文天祥......温州人，自叹弗如去吧！',
          },
        },

        {
          paragraph: {
            text: '"温州人"是个约略的地理概念。我生于温州朔门，长于乐清城关，却一直不把自己当成"温州人"。我心目中的温州人，仅以温州旧城或以鹿城区居住的人群为 准。他们应该是象我母亲和哥哥那样，操一口标准的温州话，而生活习俗，则象乐清老祖母说的那样"温州人啊，隔壁邻居和邻居都不认识，招待客人点心，面条里 只下两个鸡蛋，乐清人就不一样，一定给你吃五、六个蛋的！"',
          },
        },

        {
          paragraph: {
            text: '现在把乐清、永嘉、瑞安、平阳、乃至青田人都归入"温州人"的范畴，着实是用了模糊的地理概念。不过也好，早些年要是把乐清人、永嘉人、平阳人归入温州 人，是有点乡下的乌鸦变城里凤凰的高攀感，现在把更能体现温州人敢为天下先，头脑灵光、大小生意统吃，扑倒在地也要抓一把泥回家的永嘉人、平阳人、乐清 人、瑞安人纳入"温州人"的范畴，则有点弥补闹市区的温州人被文明异化、有了种种缺憾的效果。',
          },
        },

        {
          paragraph: {
            text: '"温州人"的凝聚力着实凭了独特的方言。我拿到美国绿卡后第一次回故乡，其间相隔五年。飞机在上海虹桥机场落地，站起来拿头顶的行李箱的瞬间，突然冒出 "走归了"几个字，激动万分，泪盈眼眶：几回回梦萦的家园，如今就在"走归"的脚底下，方言竟有如此凝聚的核当量，它要爆炸起来，回唤出你无底的故园情 愫。',
          },
        },

        {
          paragraph: {
            text: '当年我在西班牙开国际会议，餐馆中偶尔露出二、三句温州话，餐厅老板听到了，就说："是温州人啊，饭吃了先再说！"就要招待我免费餐饮。',
          },
        },

        {
          paragraph: {
            text: '去年在巴黎"老佛爷"百货店的边巷里，走进温州人开的快餐店，妻子携了女儿和店里的伙计们说："我女儿走丢了，会讲温州话，要饭吃，你们给不给吃？"结果 店员们都说："给她吃！给她吃！"妻就回头对女儿说："看，看，遥遥，学温州话多要紧！"',
          },
        },

        {
          paragraph: {
            text: "在美国洛杉矶，就数温州旅美同乡会办得最成功，最好。究其原因，方言的因素至关重要。由于有了相同的语言，汇聚一起就有了天经地义的理由。而不会讲这种语言的人就被疏远、被筛选，中心核块愈加凝固，几近中流砥柱。",
          },
        },

        {
          paragraph: {
            text: '"温州人"是一群具有独特经商理念、思路的人。你不能用广而泛之的概念去套用温州人，什么"勤劳勇敢"啦，"善于经商"啦，等等。因为这可能都是中国人的 特点，而不独独是温州人的。我们要找出温州人的"核心竞争力"（莱维特发表在《哈佛商业评论》上的概念）、核心经商理念，正像索尼的核心竞争力是"小巧玲 珑"，戴尔电脑是"家庭化设计"，麦当劳是"便捷"，我们要确认温州人的核心竞争力、经商理念、价值观是不是诸如"有钱大家赚"，"不怕蚀只怕歇"，"诚 心买，再便宜点给你"，以及从模仿到创新，再实行产业转移的整套机制。',
          },
        },

        {
          paragraph: {
            text: "这两天我一直在想，温州人的特点到底是什么，妻从洛杉矶打电话给我说：\"没别的，只有两个字'灵活'，一切为了生存和发展，灵活，随时要变通、变化......\"我以为其言甚是。",
          },
        },

        {
          paragraph: {
            text: "但更科学、更有机理的答案究竟在哪里呢？我们只能通过结构——解构——再结构的现代方法去实现：把所有有关温州人的话题收集起来，初步塑造温州人的形象，再剔除某些不独属于温州人，而是中国人普遍共有的特质，再结构纯正意义上的温州人！",
          },
        },
      ],
      title: "文化温州人",
      previewText:
        '"温州人"是特定历史的冠名，永嘉太守、山水诗人谢灵运的朝代，叫"永嘉人"，不叫"温州人"。我女儿生在哈尔滨，六岁到美国，她和我那些旅美老乡的子女，子女的子女，连"国语（汉语）"都懒得讲，他们还会说自己是"温州...',
      date: "2020-03-28",
      imageURL: "/images/article/1584916298156168.png",
    },
  },
];

// Home ArticleModule
const BigNews = [
  {
    id: pid1,
    title: pid1Title,
    date: pid1Date,
    imageURL: pid1ImageURL,
    textPreview: pid1PreviewText,
  },
];

const CurrentEvents = [
  {
    id: pid2,
    title: "北美新⽣代创业俱乐部⾸次⻅⾯会圆满举⾏",
    date: pid2Date,
    imageURL: pid2ImageURL,
  },
  {
    id: pid3,
    title: "“浙里有爱·四海迎春”新春慰侨活动 - 温哥华站启动仪式成功举办",
    date: pid3Date,
    imageURL: pid3ImageURL,
  },
  {
    id: pid4,
    title: "加拿大溫州同乡总会在社交媒体上发起了为卑诗省洪水灾民募捐活动",
    date: pid4Date,
    imageURL: pid4ImageURL,
  },
  {
    id: pid5,
    title: "加拿大溫州同乡总会在社交媒体上发起了为卑诗省洪水灾民募捐活动",
    date: pid5Date,
    imageURL: pid5ImageURL,
  },
];

const SponsoredNews = [
  {
    id: pid1,
    Title: pid1Title,
    date: pid1Date,
    Image: pid1ImageURL,
  },
  {
    id: pid2,
    Title: pid2Title,
    date: pid2Date,
    Image: pid2ImageURL,
  },
  {
    id: pid3,
    Title: pid3Title,
    date: pid3Date,
    Image: pid3ImageURL,
  },
  {
    id: pid4,
    Title: pid4Title,
    date: pid4Date,
    Image: pid4ImageURL,
  },
  {
    id: pid5,
    Title: pid5Title,
    date: pid5Date,
    Image: pid5ImageURL,
  },
];

const Articles = {
  ArticleListMessages: ArticleListMessages,
  NewsPreviewItems: NewsPreviewItems,
  CurrentEvents: CurrentEvents,
  BigNews: BigNews,
  testImage: testImage,
  ArticleListImage1: ArticleListImage1,
  sponsorImage1: sponsorImage1,
  SponsoredNews: SponsoredNews,
};

export default Articles;
