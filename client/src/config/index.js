import about from "@/pages/shopping-view/about.jsx";
import { Label } from "@radix-ui/react-dropdown-menu";

export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "Food_products", label: "Food Products" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Common Products" },
    ],
  },
  {
    label: "Products by choice",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Hair & Beard Products" },
      { id: "adidas", label: "Body lotion" },
      { id: "puma", label: "Natural Faragrance" },
      { id: "levi", label: "home decor" },
      { id: "zara", label: "natural food products" },
      { id: "h&m", label: "bath products and others" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "men",
    label: "Men",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Women",
    path: "/shop/listing",
  },
  {
    id: "Food_products",
    label: "Food Products",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Common Products",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
  
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  Food_products: "Food Products",
  accessories: "Accessories",
  footwear: "Common Products",
}; 

export const brandOptionsMap = {
  nike: "Hair & Beard Products",
  adidas: "Body lotion",
  puma: "Natural Faragrance",
  levi: "Home Decor",
  zara: "Natural Food products",
  "h&m": "Bath Products and Others",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "Food_products", label: "Food Products" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Common Products" },
  ],
  brand: [
    { id: "nike", label: "Hair & Beard Products" },
    { id: "adidas", label: "Body lotion" },
    { id: "puma", label: "Natural Faragrance" },
    { id: "levi", label: "Home Decor" },
    { id: "zara", label: "natural food products" },
    { id: "h&m", label: "bath products and others" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
