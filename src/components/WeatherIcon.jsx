// icon: string from getWeatherIcon() — e.g. "clear-day", "partly-night", "rain", "thunder"
// size: pixel box size (default 76)

function WeatherIcon({ icon, size = 76 }) {
  const scale = size / 76;
  const s = (px) => px * scale;

  const cloud = (top, bottom) => (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: s(2),
        width: s(70),
        height: s(38),
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: s(14),
          width: s(40),
          height: s(24),
          borderRadius: s(13),
          background: `linear-gradient(160deg,${top},${bottom})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: s(17),
          top: s(4),
          width: s(30),
          height: s(30),
          borderRadius: "50%",
          background: `linear-gradient(155deg,#fff,${top})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: s(36),
          top: s(14),
          width: s(34),
          height: s(22),
          borderRadius: s(12),
          background: `linear-gradient(160deg,${top},${bottom})`,
        }}
      />
    </div>
  );

  const sun = (w) => (
    <div
      style={{
        width: s(w),
        height: s(w),
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 32% 28%,#ffeeb0,#f7ab3f 56%,#d9700f)",
        boxShadow: "0 18px 40px -14px rgba(217,112,15,.6)",
        animation: "sunPulse 4s ease-in-out infinite",
      }}
    />
  );

  const moon = (w) => (
    <div
      style={{
        width: s(w),
        height: s(w),
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 34% 30%,#f4f6fb,#c9d2e0 62%,#a8b3c6)",
      }}
    />
  );

  const drop = (left, delay, h = 12) => (
    <div
      style={{
        position: "absolute",
        left: s(left),
        top: s(44),
        width: s(4),
        height: s(h),
        borderRadius: s(3),
        background: "oklch(.7 .12 235)",
        animation: `drop 1.3s linear ${delay}s infinite`,
      }}
    />
  );

  const flake = (left, delay) => (
    <div
      style={{
        position: "absolute",
        left: s(left),
        top: s(46),
        width: s(8),
        height: s(8),
        borderRadius: "50%",
        background: "#fbfdff",
        boxShadow: "inset 0 0 0 1.5px #9fb0c6",
        animation: `flake 3.4s linear ${delay}s infinite`,
      }}
    />
  );

  const bolt = (w, h, left) => (
    <div
      style={{
        position: "absolute",
        left: s(left),
        top: s(42),
        width: s(w),
        height: s(h),
        background: "linear-gradient(170deg,#ffd863,#ee9c14)",
        clipPath:
          "polygon(52% 0%,10% 58%,42% 58%,26% 100%,92% 38%,56% 38%,78% 0%)",
        filter: "drop-shadow(0 4px 10px rgba(230,150,20,.5))",
        animation: "bolt 2.6s ease-in-out infinite",
      }}
    />
  );

  const box = { position: "relative", width: s(76), height: s(76) };

  switch (icon) {
    case "clear-day":
      return <div style={box}>{sun(66)}</div>;
    case "clear-night":
      return <div style={box}>{moon(62)}</div>;
    case "partly-day":
      return (
        <div style={{ position: "relative", width: s(112), height: s(82) }}>
          <div style={{ position: "absolute", right: s(4), top: 0 }}>
            {sun(56)}
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: s(4),
              width: s(88),
              height: s(46),
              animation: "drift 6s ease-in-out infinite",
            }}
          >
            {cloud("#fff", "#dde3ec")}
          </div>
        </div>
      );
    case "partly-night":
      return (
        <div style={{ position: "relative", width: s(112), height: s(82) }}>
          <div style={{ position: "absolute", right: s(4), top: 0 }}>
            {moon(54)}
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: s(4),
              width: s(88),
              height: s(46),
              animation: "drift 6s ease-in-out infinite",
            }}
          >
            {cloud("#f4f7fb", "#d3dbe6")}
          </div>
        </div>
      );
    case "overcast":
      return (
        <div
          style={{
            position: "relative",
            width: s(90),
            height: s(48),
            animation: "drift 6s ease-in-out infinite",
          }}
        >
          {cloud("#f0f3f8", "#cdd5e0")}
        </div>
      );
    case "fog":
      return (
        <div style={box}>
          <div style={{ position: "absolute", left: s(2), top: s(6) }}>
            {cloud("#eef2f8", "#d3dbe6")}
          </div>
          <div
            style={{
              position: "absolute",
              left: s(6),
              top: s(50),
              width: s(62),
              height: s(3),
              borderRadius: s(2),
              background: "#c4cdda",
              animation: "fogBar 3s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: s(12),
              top: s(58),
              width: s(50),
              height: s(3),
              borderRadius: s(2),
              background: "#d1d9e4",
              animation: "fogBar 3s ease-in-out .4s infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: s(8),
              top: s(66),
              width: s(58),
              height: s(3),
              borderRadius: s(2),
              background: "#dde3ec",
              animation: "fogBar 3s ease-in-out .8s infinite",
            }}
          />
        </div>
      );
    case "drizzle":
      return (
        <div style={box}>
          {cloud("#e9edf4", "#c4cdda")}
          <div
            style={{
              position: "absolute",
              left: s(22),
              top: s(46),
              width: s(3),
              height: s(7),
              borderRadius: s(2),
              background: "oklch(.74 .1 235)",
              animation: "drop 2.1s linear infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: s(38),
              top: s(46),
              width: s(3),
              height: s(7),
              borderRadius: s(2),
              background: "oklch(.74 .1 235)",
              animation: "drop 2.1s linear .9s infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: s(52),
              top: s(46),
              width: s(3),
              height: s(7),
              borderRadius: s(2),
              background: "oklch(.74 .1 235)",
              animation: "drop 2.1s linear infinite",
            }}
          />
        </div>
      );
    case "rain":
      return (
        <div style={box}>
          {cloud("#e9edf4", "#c4cdda")}
          {drop(20, 0)}
          {drop(36, 0.5)}
          {drop(52, 0)}
        </div>
      );
    case "heavy-rain":
      return (
        <div style={box}>
          {cloud("#d9e0ea", "#a8b4c6")}
          {drop(14, 0, 15)}
          {drop(27, 0.5, 15)}
          {drop(40, 0, 15)}
          {drop(53, 0.5, 15)}
        </div>
      );
    case "snow":
      return (
        <div style={box}>
          {cloud("#eef2f8", "#ccd5e1")}
          {flake(19, 0)}
          {flake(34, 0.6)}
          {flake(49, 1.2)}
        </div>
      );
    case "sleet":
      return (
        <div style={box}>
          {cloud("#e4eaf3", "#bfc9d8")}
          {drop(20, 0)}
          {flake(34, 0.6)}
          {drop(52, 0.5)}
        </div>
      );
    case "thunder":
      return (
        <div style={box}>
          {cloud("#cfd7e3", "#98a5ba")}
          {bolt(18, 30, 30)}
        </div>
      );
    default:
      return <div style={box}>{sun(66)}</div>;
  }
}

export default WeatherIcon;
