import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

export const plans = [
  { id: "arcade", name: "Arcade", icon: arcadeIcon, monthlyPrice: 9 },
  { id: "advanced", name: "Advanced", icon: advancedIcon, monthlyPrice: 12 },
  { id: "pro", name: "Pro", icon: proIcon, monthlyPrice: 15 },
];

export const addOns = [
  {
    id: "online-service",
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: "larger-storage",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: "customizable-profile",
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
