export function HoneyDivider({
  flip = false,
  color = "#F5E8C7",
}: {
  flip?: boolean;
  color?: string;
}) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[100px]"
      >
        <path
          d="M0,40 C240,90 480,0 720,40 C960,80 1200,10 1440,50 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
