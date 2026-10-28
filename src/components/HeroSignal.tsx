import styles from "@/styles/Home.module.css";

export function HeroSignal() {
  return (
    <div className={styles.heroSignal} aria-hidden="true">
      <div className={styles.heroSignalGlow} />
      <svg
        className={styles.heroSignalArtwork}
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          <linearGradient id="signal-line" x1="0" y1="0" x2="1440" y2="900">
            <stop stopColor="hsl(var(--primary))" stopOpacity=".02" />
            <stop offset=".55" stopColor="hsl(var(--primary))" stopOpacity=".22" />
            <stop offset="1" stopColor="hsl(var(--secondary))" stopOpacity=".04" />
          </linearGradient>
          <radialGradient id="signal-core">
            <stop stopColor="hsl(var(--secondary))" stopOpacity=".28" />
            <stop offset=".42" stopColor="hsl(var(--primary))" stopOpacity=".12" />
            <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="signal-halo">
            <stop stopColor="hsl(var(--primary))" stopOpacity=".14" />
            <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="signal-petal" x1="960" y1="340" x2="1118" y2="548">
            <stop stopColor="hsl(var(--secondary))" stopOpacity=".52" />
            <stop offset=".52" stopColor="hsl(var(--primary))" stopOpacity=".2" />
            <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity=".04" />
          </linearGradient>
          <linearGradient id="signal-petal-highlight" x1="950" y1="340" x2="1125" y2="520">
            <stop stopColor="hsl(var(--foreground))" stopOpacity=".3" />
            <stop offset="1" stopColor="hsl(var(--foreground))" stopOpacity="0" />
          </linearGradient>
          <pattern
            id="signal-grid"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1"
              cy="1"
              r="1"
              fill="hsl(var(--foreground))"
              fillOpacity=".15"
            />
          </pattern>
          <mask id="signal-fade">
            <linearGradient
              id="signal-mask-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset=".42" stopColor="white" stopOpacity=".25" />
              <stop offset=".72" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity=".5" />
            </linearGradient>
            <rect width="1440" height="900" fill="url(#signal-mask-gradient)" />
          </mask>
        </defs>

        <g>
          <rect
            x="420"
            y="60"
            width="1020"
            height="780"
            fill="url(#signal-grid)"
            mask="url(#signal-fade)"
            opacity=".42"
          />

          <g stroke="url(#signal-line)" strokeWidth="1">
            <path d="M170 690C394 535 484 270 750 260c183-7 231 167 434 142 91-11 149-75 230-131" />
            <path d="M135 731C380 560 485 305 741 293c173-8 230 150 426 133 102-9 169-72 257-129" />
            <path d="M103 772C358 588 486 341 733 327c161-9 229 133 417 123 112-6 191-68 275-120" />
            <path d="M76 813C338 615 487 379 725 360c150-12 226 117 408 113 122-3 205-59 292-109" />
            <path d="M263 645C444 496 515 210 789 207c191-2 243 192 451 163 73-10 118-42 174-81" />
            <path d="M348 590C497 444 547 159 829 158c205 0 260 209 473 178 47-7 82-25 119-47" />
            <path d="M117 591C340 467 445 229 682 226c121-2 181 66 277 105" />
            <path d="M166 845C414 679 528 453 749 437c170-12 230 91 402 91 109 0 204-39 291-81" />
            <path d="M420 863C560 746 622 564 795 550c171-14 239 70 396 71 91 1 173-27 251-56" />
          </g>

          <g
            className={styles.heroSignalOrbit}
            stroke="hsl(var(--primary))"
            strokeOpacity=".15"
          >
            <ellipse
              cx="1040"
              cy="446"
              rx="226"
              ry="118"
              transform="rotate(-28 1040 446)"
            />
            <ellipse
              cx="1040"
              cy="446"
              rx="270"
              ry="159"
              transform="rotate(32 1040 446)"
            />
            <ellipse
              cx="1040"
              cy="446"
              rx="190"
              ry="282"
              transform="rotate(58 1040 446)"
            />
            <circle cx="1040" cy="446" r="164" strokeDasharray="2 10" />
          </g>

          <circle
            className={styles.heroSignalHalo}
            cx="1040"
            cy="446"
            r="274"
            fill="url(#signal-halo)"
          />
          <circle cx="1040" cy="446" r="150" fill="url(#signal-core)" />

          <g className={styles.heroSignalCore}>
            <g fill="url(#signal-petal)" stroke="url(#signal-petal-highlight)" strokeWidth="1.5">
              <path d="M1040 446c-52-37-82-80-57-126 14-26 40-47 57-63 17 16 43 37 57 63 25 46-5 89-57 126Z" />
              <path d="M1040 446c-52-37-82-80-57-126 14-26 40-47 57-63 17 16 43 37 57 63 25 46-5 89-57 126Z" transform="rotate(90 1040 446)" />
              <path d="M1040 446c-52-37-82-80-57-126 14-26 40-47 57-63 17 16 43 37 57 63 25 46-5 89-57 126Z" transform="rotate(180 1040 446)" />
              <path d="M1040 446c-52-37-82-80-57-126 14-26 40-47 57-63 17 16 43 37 57 63 25 46-5 89-57 126Z" transform="rotate(270 1040 446)" />
            </g>
            <circle
              cx="1040"
              cy="446"
              r="76"
              stroke="hsl(var(--foreground))"
              strokeOpacity=".24"
            />
            <circle
              cx="1040"
              cy="446"
              r="58"
              stroke="hsl(var(--primary))"
              strokeOpacity=".35"
              strokeDasharray="1 8"
            />
            <path
              d="M1040 412c7 21 15 29 36 34-21 5-29 13-36 34-7-21-15-29-36-34 21-5 29-13 36-34Z"
              fill="hsl(var(--primary))"
              fillOpacity=".82"
            />
            <circle cx="1040" cy="446" r="5" fill="hsl(var(--secondary))" />
          </g>

          <g fill="hsl(var(--primary))">
            <circle
              className={styles.heroSignalParticleOne}
              cx="790"
              cy="274"
              r="3"
            />
            <circle
              className={styles.heroSignalParticleTwo}
              cx="1231"
              cy="333"
              r="4"
            />
            <circle
              className={styles.heroSignalParticleThree}
              cx="1176"
              cy="620"
              r="3"
            />
            <circle cx="847" cy="615" r="2" fillOpacity=".55" />
            <circle cx="1312" cy="491" r="2" fillOpacity=".6" />
            <circle cx="918" cy="212" r="2" fillOpacity=".6" />
          </g>
        </g>
      </svg>
    </div>
  );
}