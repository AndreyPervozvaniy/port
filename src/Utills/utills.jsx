import * as yup from "yup";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import { Flex, Kbd } from "@chakra-ui/react";
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
