type StorageLike = Pick<Storage, 'getItem' | 'setItem'>

export function readStored<T>(key: string, fallback: T, storage?: StorageLike): T {
  try {
    const raw = (storage ?? localStorage).getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function writeStored(values: Record<string, unknown>, storage?: StorageLike): boolean {
  try {
    const target = storage ?? localStorage
    for (const [key, value] of Object.entries(values)) target.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}
