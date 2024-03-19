import Contact from "../Pages/ContactPage/Contact";
import Product from "../Pages/ProductPage/Product";
import Skills from "../Pages/SkillsPage/Skills";
import Main from "../Pages/MainPage/Main";
export const PATHS = {
  MAIN: "/",
  CONTACT: "/contact",
  PRODUCT: "/product",
  SKILLS: "/skills",
};
export const routes = [
  { path: PATHS.CONTACT, element: Contact   },
  { path: PATHS.MAIN, element: Main  },
  { path: PATHS.PRODUCT, element: Product    },
  { path: PATHS.SKILLS, element: Skills   },
];
