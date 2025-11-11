interface WaveDecorationProps {
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}

const WaveDecoration = ({ className = "", position = "top" }: WaveDecorationProps) => {
  const getPathByPosition = () => {
    switch (position) {
      case "bottom":
        return "M0,50 Q50,80 100,50";
      case "left":
        return "M50,0 Q20,50 50,100";
      case "right":
        return "M50,0 Q80,50 50,100";
      default:
        return "M0,50 Q50,20 100,50";
    }
  };

  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={getPathByPosition()}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-muted-foreground/20"
      />
    </svg>
  );
};

export default WaveDecoration;
