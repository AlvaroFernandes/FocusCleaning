const CircularProgress = ({ progress, cW }) => {
  const radius = cW / 2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;
  return (
    <svg width={cW} height={cW} viewBox={`-1 -1 102 102`}>
      <circle
        className="progress__bg"
        strokeWidth="4px"
        r={radius}
        cx={cW / 2}
        cy={cW / 2}
      />

      <circle
        className="progress__circle"
        r={radius}
        cx={cW / 2}
        cy={cW / 2}
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        transform={`rotate(-90 ${cW / 2} ${cW / 2})`}
      />
    </svg>
  );
};

export default CircularProgress;
