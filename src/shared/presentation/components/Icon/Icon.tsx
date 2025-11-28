type IconProps =
  | {
      svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      type: "info";
      label: string;
    }
  | {
      svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      type: "decorative";
      label?: never;
    };

const Icon = ({ svg: Svg, type, label }: IconProps) => {
  return (
    <span
      aria-label={type === "info" ? label : undefined}
      aria-hidden={type === "decorative"}
    >
      <Svg />
    </span>
  );
};

export default Icon;
