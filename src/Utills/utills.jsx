import * as yup from "yup";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import { GiDjinn } from "react-icons/gi";
import { Flex, Kbd } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
import { FaGithub, FaLinkedin, FaReact, FaTelegram } from "react-icons/fa";
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
  },
  {
    name: "Burger Lord",
    image: Product1,
    netlifyLink: "https://burgerlord.netlify.app/",
    gitLink: "https://github.com/AndreyPervozvaniy/ReactFastFood",
  },
  {
    name: "Tasker",
    image: Product3,
    netlifyLink: "https://react-tdlist.netlify.app/",
    gitLink: "https://github.com/AndreyPervozvaniy/todolist",
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
  desc: "On this page you will be able to see my personal subjective evaluation of my knowledge and abilities, because I haven't had a chance to qualitatively evaluate them yet =) And also, on this page, you can see what technologies and libraries I have studied or am studying at the moment! ",
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
