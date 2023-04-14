import OrderTable from "./OrderTable";
import ProductTable from "./ProductTable";
import UserTable from "./UserTable";

const navigation = () => {
  return [
    {
      title: "Product",
      // icon: HomeOutline,
      datatable: ProductTable,
    },
    {
      title: "Order",
      // icon: AccountCogOutline,
      datatable: OrderTable,
    },
    {
      title: "User",
      // icon: AccountCogOutline,
      datatable: UserTable,
    },
    // {
    //   sectionTitle: "Pages",
    // },
    // {
    //   title: "Login",
    //   icon: Login,
    //   path: "/pages/login",
    //   openInNewTab: true,
    // },
    // {
    //   title: "Register",
    //   icon: AccountPlusOutline,
    //   path: "/pages/register",
    //   openInNewTab: true,
    // },
    // {
    //   title: "Error",
    //   icon: AlertCircleOutline,
    //   path: "/pages/error",
    //   openInNewTab: true,
    // },
    // {
    //   sectionTitle: "User Interface",
    // },
    // {
    //   title: "Typography",
    //   icon: FormatLetterCase,
    //   path: "/typography",
    // },
    // {
    //   title: "Icons",
    //   path: "/icons",
    //   icon: GoogleCirclesExtended,
    // },
    // {
    //   title: "Cards",
    //   icon: CreditCardOutline,
    //   path: "/cards",
    // },
    // {
    //   title: "Tables",
    //   icon: Table,
    //   path: "/tables",
    // },
    // {
    //   icon: CubeOutline,
    //   title: "Form Layouts",
    //   path: "/form-layouts",
    // },
  ];
};

export default navigation;
