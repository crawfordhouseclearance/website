let pendingAdConversion = false

export function markAdConversion() {
  pendingAdConversion = true
}

/** Returns true once only, preventing route visits, refreshes and remounts from converting. */
export function consumeAdConversionMarker() {
  if (!pendingAdConversion) return false
  pendingAdConversion = false
  return true
}
