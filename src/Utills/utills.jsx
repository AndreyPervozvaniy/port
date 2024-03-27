import * as yup from "yup";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import { GiDjinn } from "react-icons/gi";
import { Flex, Kbd } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { RiBearSmileFill } from "react-icons/ri";
import {
  SiChakraui,
  SiRedux,
  SiReacthookform,
  SiAxios,
  SiReactquery,
  SiReactrouter,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
export const navLinks = [
  {
    name: "Products",
    path: "/product",
    keyComb: (
      <Flex alignItems={"center"}>
        <Kbd>Ctrl</Kbd> <Kbd mx={1}>+</Kbd> <Kbd>1</Kbd>
      </Flex>
    ),
  },
  {
    name: "Contacts",
    path: "/contact",
    keyComb: (
      <Flex alignItems={"center"}>
        <Kbd>Ctrl</Kbd> <Kbd mx={1}>+</Kbd> <Kbd>2</Kbd>
      </Flex>
    ),
  },
  {
    name: "Skills",
    path: "/skills",
    keyComb: (
      <Flex alignItems={"center"}>
        <Kbd>Ctrl</Kbd> <Kbd mx={1}>+</Kbd> <Kbd>3</Kbd>
      </Flex>
    ),
  },
];

export const ProductData = [
  {
    name: "Yamasaki Academy",
    image: Product2,
    netlifyLink: "https://yamasakiacademydnipro.netlify.app/",
    gitLink: "https://github.com/AndreyPervozvaniy/my-app",
    img: item3,
    year: 2023,
  },
  {
    name: "Burger Lord",
    image: Product1,
    netlifyLink: "https://burgerlord.netlify.app/",
    gitLink: "https://github.com/AndreyPervozvaniy/ReactFastFood",
    img: item2,
    year: 2024,
  },
  {
    name: "Tasker",
    image: Product3,
    netlifyLink: "https://react-tdlist.netlify.app/",
    gitLink: "https://github.com/AndreyPervozvaniy/todolist",
    img: item1,
    year: 2023,
  },
];
export const FormSchema = yup
  .object({
    name: yup
      .string()
      .min(3, "Минимум 3 символа")
      .required("Обязательное поле"),
    email: yup.string().email().required("Обязательное поле"),
    feedback: yup
      .string()
      .min(3, "Минимум 3 символа")
      .required("Обязательное поле"),
  })
  .required();

export const ToastObjSuc = {
  title: "Thank you!",
  description: "You have been very helpful to me!",
  status: "success",
  duration: 9000,
  isClosable: true,
};
export const ToastObjErr = {
  title: "Ooops...",
  description:
    "An error has occurred. I am currently working to resolve the issue.",
  status: "error",
  duration: 9000,
  isClosable: true,
};
export const ProductDescription = {
  title1: "My product",
  title2: "Your feedback",
  description: `Greetings, my name is Andrey and I am a beginner frontend developer. I
  would like to share with you several projects that I have been working
  on. Please find below the links to each project as well as their
  respective Git repositories. Thank you for taking the time to review
  my work. I would be grateful for any feedback, suggestions, or tips
  that you may have!`,
};
export const ContactDescription = {
  desc: "On this page, you can find my contact information, including my social media profiles and all the necessary links to get in touch with me.",
};
export const SkillDescription = {
  desc: "This page contains my personal assessment of my knowledge and abilities. As I have not yet had the opportunity to undergo a qualitative assessment at the Trainee or Junior developer level, this assessment is subjective. Additionally, this page lists the technologies and libraries that I have studied or am currently studying. ",
};

export const SocialLink = [
  {
    title: "Telegram",
    link: "https://t.me/AndreyPervozvaniy",
    icon: FaTelegram,
    color: "red",
    text: "I'm on 24/7 =)",
  },

  {
    title: "Djinni",
    link: "https://t.me/AndreyPervozvaniy",
    icon: GiDjinn,
    color: "blue",
    text: "My current CV is available on Djinni!",
  },
  {
    title: "Git",
    link: "https://github.com/AndreyPervozvaniy",
    icon: FaGithub,
    color: "grey",
    text: "My Git repository of projects.",
  },
  {
    title: "Linkedin",
    link: " https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BA%D1%83%D0%B4%D1%80%D1%8F-24343b168/",
    icon: FaLinkedin,
    color: "orange",
    text: "My LinkedIn page is not checked frequently, but I will review your message when I can.",
  },
  {
    title: "Work",
    link: "https://t.me/AndreyPervozvaniy",
    icon: MdWork,
    color: "red",
    text: "This is my current CV on Work.ua. I am primarily interested in the main offer and actively searching for suitable vacancies.",
  },
];
export const SkillObj = [
  {
    icon: FaReact,
    value: 80,
    title: "React",
    color: "cyan",
    badge: "Resting =)",
    variant: "solid",
  },
  {
    icon: SiRedux,
    value: 60,
    title: "React Redux",
    color: "red",
    badge: "Resting =)",
    variant: "solid",
  },
  {
    icon: SiChakraui,
    value: 80,
    title: "Chakra UI",
    color: "blue",
    badge: "Resting =)",
    variant: "solid",
  },
  {
    icon: RiBearSmileFill,
    value: 70,
    title: "Zustand",
    color: "blackAlpha",
    badge: "Resting =)",
    variant: "solid",
  },
  {
    icon: SiReacthookform,
    value: 60,
    title: " Hook Form",
    color: "pink",
    badge: "Studying...",
    variant: "outline",
  },
  {
    icon: FaGithub,
    value: 70,
    title: "Git",
    color: "gray",
    badge: "Resting =)",
    variant: "solid",
  },
  {
    icon: SiAxios,
    value: 60,
    title: "Axios",
    color: "blue",
    badge: "Resting =)",
    variant: "solid",
  },
  {
    icon: SiReactquery,
    value: 60,
    title: " React Query",
    color: "purple",
    badge: "Studying...",
    variant: "outline",
  },
  {
    icon: SiReactrouter,
    value: 70,
    title: "React Router",
    color: "blue",
    badge: "Resting =)",
    variant: "solid",
  },
  {
    icon: SiJavascript,
    value: 80,
    title: "JS",
    color: "yellow",
    badge: "Studying...",
    variant: "outline",
  },
  {
    icon: SiTypescript,
    value: 30,
    title: "TS",
    color: "blue",
    badge: "Studying...",
    variant: "outline",
  },
];
export const MainPageDesc = {
  name: "ANDREY BELOKUDRYA",
  title: " Front-end Developer",
  desc: "For the past 9 months, I have been actively learning programming and contributing to various projects. I strive to bring a unique  perspective to each project.",
  projectName: "REPOSITORY & DEPLOY",
  projectTitle: "Personal projects",
};
export const KeyWordObj = {
  text: " View Projects",
  route: "/product",
  text2: "  Contact me",
  route2: "/contact",
};
export const FloatBtnData = [
  {
    initial: 40,
    exit: 10,
    top: -50,
    href: "https://t.me/AndreyPervozvaniy",
    icon: FaTelegram,
  },
  {
    initial: 80,
    exit: 40,
    top: -100,
    href: "https://www.instagram.com/andreypervozvaniy?igsh=YndvcDNzOHhtd2E4&utm_source=qr",
    icon: FaInstagram,
  },
  {
    initial: 120,
    exit: 80,
    top: -150,
    href: "https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BA%D1%83%D0%B4%D1%80%D1%8F-24343b168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: FaLinkedin,
  },
];
