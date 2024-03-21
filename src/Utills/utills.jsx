import * as yup from "yup";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import { GiDjinn } from "react-icons/gi";
import { Flex, Icon, Kbd } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
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

export const SocialLink = [
  {
    title: "Telegram",
    link: "https://t.me/AndreyPervozvaniy",
    icon: FaTelegram,
    color: "red",
    text: "Can text me 9-21",
  },

  {
    title: "Djinni",
    link: "https://t.me/AndreyPervozvaniy",
    icon: GiDjinn,
    color: "blue",
    text: "Can text me 9-21",
  },
  {
    title: "Git",
    link: "https://github.com/AndreyPervozvaniy",
    icon: FaGithub,
    color: "grey",
    text: "Can text me 9-21",
  },
  {
    title: "Linkedin",
    link: " https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BA%D1%83%D0%B4%D1%80%D1%8F-24343b168/",
    icon: FaLinkedin,
    color: "orange",
    text: "Can text me 9-21",
  },
  {
    title: "Work",
    link: "https://t.me/AndreyPervozvaniy",
    icon: MdWork,
    color: "red",
    text: "Can text me 9-21",
  },
];
