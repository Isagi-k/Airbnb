'use client';

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBoatFishing, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is near beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "Property have windmill view!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "Property with modern technologies!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "Property with a pool!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "Property located in countryside!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "Property located on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "Property near lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "Property have skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "Castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Camping here!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "Experience how cave feels like!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "Luxury!",
  },
  
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
