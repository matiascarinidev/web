import LogoAntenor from "../LogoAntenor";

interface HeaderLogoProps {
  readonly color?: string;
  readonly size?: number;
}

export default function HeaderLogo({
  color = "#ffffff",
  size = 1,
}: HeaderLogoProps) {
  return (
    <LogoAntenor
      color={color}
      size={size}
      className="hover:cursor-pointer w-full"
    />
  );
}
