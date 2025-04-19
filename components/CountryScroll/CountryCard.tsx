import Image from "next/image";
import { Country } from "@/data/countries";

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="flex  items-center space-x-3 min-w-[200px] p-3 mx-2 rounded-xl bg-white/90 dark:bg-[#13294E]/90 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-white dark:hover:bg-[#13294E]">
      <div className="relative w-10 h-7 overflow-hidden rounded-md shadow-sm">
        <Image
          src={`https://flagcdn.com/w160/${country.code}.png`}
          alt={`${country.name} flag`}
          fill
          className="object-cover"
          sizes="40px"
          priority={false}
        />
      </div>
      <h3 className="text-sm font-medium text-[#13294E] dark:text-white truncate">
        {country.name}
      </h3>
    </div>
  );
};

export default CountryCard;
