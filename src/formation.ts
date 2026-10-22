export type FormationPoint = { x: number; y: number }
export type FormationPositions = Record<string, FormationPoint>

export const clampCoordinate = (value: number) => Math.max(0, Math.min(1, value))

export function defaultPosition(index: number): FormationPoint {
  return { x: [0.15, 0.5, 0.85][index % 3], y: index < 3 ? 0.25 : 0.75 }
}

export function restorePositions(value: unknown, team: string[], redirects: Record<string, string> = {}): FormationPositions {
  const records = value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}
  return Object.fromEntries(team.map((id, index) => {
    const formerId = Object.keys(redirects).find(key => redirects[key] === id && key in records)
    const point = (records[id] ?? (formerId ? records[formerId] : undefined)) as Partial<FormationPoint> | null | undefined
    return [id, point && typeof point.x === 'number' && Number.isFinite(point.x) && typeof point.y === 'number' && Number.isFinite(point.y)
      ? { x: clampCoordinate(point.x), y: clampCoordinate(point.y) }
      : defaultPosition(index)]
  }))
}

export function moveWithinBounds(point: FormationPoint, dx: number, dy: number): FormationPoint {
  return { x: clampCoordinate(point.x + dx), y: clampCoordinate(point.y + dy) }
}
