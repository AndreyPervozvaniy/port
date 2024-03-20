import * as yup from "yup";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";

import { Flex, Icon, Kbd } from "@chakra-ui/react";
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
