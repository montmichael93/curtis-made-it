import forSaleBirdHouse from "/public/forSaleBirdHouse.jpg";
import forSaleCoasterSet from "/public/forSaleCoasterSet.jpg";
import forSaleDeskTopPhoneHolders from "/public/forSaleDeskTopPhoneHolders.jpg";
import forSalePlanterBox from "/public/forSalePlanterBox.jpg";
import forSaleSquirrelTable from "/public/forSaleSquirrelTable.jpg";
import forSalePatioChairs from "/public/forSalePatioChairs.jpg";
import forSaleWishingWell from "/public/forSaleWishingWell.jpg";
import { BuildsForSale } from "../../utils/types";

export const forSaleBuilds: BuildsForSale[] = [
  {
    name: "Bird House",
    image: forSaleBirdHouse,
    price: 65,
    description: "Plus Shipping",
  },
  {
    name: "Coaster Set",
    image: forSaleCoasterSet,
    price: 55,
    description: "With Bases, Plus Shipping",
  },
  {
    name: "Laser Engraved Desktop Phone Holders",
    image: forSaleDeskTopPhoneHolders,
    price: 95,
    description: "two tone Padauk and Hard Maple, plus Shipping",
  },
  {
    name: "Ceder Planter Box",
    image: forSalePlanterBox,
    price: 250,
    description: "Plus Delivery, sealed for longer outdoor life",
  },
  {
    name: "Squirrel Picnic Table",
    image: forSaleSquirrelTable,
    price: [14, 40, 100],
    description: "Plus Shipping",
  },
  {
    name: "Patio Chairs Set",
    image: forSalePatioChairs,
    price: 400,
    description: "Plus Shipping/Delivery",
  },
  {
    name: "Wishing Well",
    image: forSaleWishingWell,
    price: 2000,
    description:
      "plus delivery, 30 days lead time. Sealed for longer outdoor life",
  },
];
