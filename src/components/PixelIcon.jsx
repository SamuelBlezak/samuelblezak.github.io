import { ICONS, ICON_PALETTE } from './catSprites'

// Všetky ikony dostanú rovnaký štvorec podľa najväčšej z nich,
// aby mali tlačidlá rovnakú veľkosť bez ohľadu na rozmery ikony.
const BOX = Math.max(
  ...Object.values(ICONS).flatMap(grid => [grid.length, grid[0].length])
)

// name: 'bowl' | 'hand'
// scale: koľko obrazovkových pixelov má jeden pixel ikony
export default function PixelIcon({ name, scale = 2 }) {
  const grid = ICONS[name]
  const width = grid[0].length
  const height = grid.length

  // vycentruj vodorovne, polož na spodok
  const offsetX = Math.floor((BOX - width) / 2)
  const offsetY = BOX - height

  return (
    <svg
      width={BOX * scale}
      height={BOX * scale}
      viewBox={`0 0 ${BOX} ${BOX}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {grid.map((row, y) =>
        [...row].map((c, x) =>
          c === '.' ? null : (
            <rect
              key={`${x}-${y}`}
              x={x + offsetX}
              y={y + offsetY}
              width="1"
              height="1"
              fill={ICON_PALETTE[c]}
            />
          )
        )
      )}
    </svg>
  )
}
