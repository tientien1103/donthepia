import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  variant?: "orange" | "white";
}

export default function Button({ children, variant = "orange" }: ButtonProps) {
  return (
    <button
      className={clsx("rounded-full bg-[#f1302f] py-3 px-6 flex gap-2", {
        " bg-white": variant === "white",
      })}
    >
      <p className="text-base text-[#0d0d0d] font-semibold whitespace-nowrap">
        {children}
      </p>
      <Image
        src="/arrow-right.webp"
        alt="arrow-right"
        width={12}
        height={12}
        className="object-contain self-center"
      />
    </button>
  );
}
