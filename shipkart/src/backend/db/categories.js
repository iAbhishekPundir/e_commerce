import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Women",
    description:"clothes 2023",
    img:"https://res.cloudinary.com/donqbxlnc/image/upload/v1648896554/fashify/4f54b81d-51ca-4526-bab3-04066d977f5a1648368745195-Levis_keqmez.webp"
  },
  {
    _id: uuid(),
    categoryName: "Men",
    description:"clothes 2023",
    img: "https://res.cloudinary.com/donqbxlnc/image/upload/v1648896074/fashify/e3220043-d4db-4c8a-9a5e-80459db0aae31648190230381-Roadster-_HL_fan7lo.webp"
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:"New Trend",
    img:"https://res.cloudinary.com/donqbxlnc/image/upload/v1648516896/fashify/dce84423-582a-4487-986b-46af90a7048e1647926860775-Allen-Solly-Junior-Girls-Navy-Blue--Off-White-Floral-Print-T-2_d2obqp.jpg",
  },
];
