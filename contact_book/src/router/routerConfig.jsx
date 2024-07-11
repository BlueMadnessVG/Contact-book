import Home from "../components/Home/Home";
import ContactBook from "../components/Contact_Book/ContactBook";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ContactBook/:id",
    element: <ContactBook />,
  },
];
