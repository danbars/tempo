import { offset, applyOffset } from "@formkit/tempo"

// 💡 Pickup at 9:30 in Europe/Lisbon

// Notice that the time has no offset, thus it is "local":
const d = "2025-03-25 09:30"

// Lisbon is at UTC+0:
const lisbonOffset = offset(d, "Europe/Lisbon")

// Apply the offset to the time:
applyOffset(d, lisbonOffset)
