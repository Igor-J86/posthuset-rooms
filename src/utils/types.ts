import type { Vector3 } from "@react-three/fiber"

export type RoomProps = {
  id: number
  number: string
  name: string
  seats: number
  coordinates: Vector3
  dimensions: []
  onClick?: () => void
  selected: boolean
  description?: string
}

export type Floor = {
  id: number
  name: string
  rooms: RoomProps[]
}

export type FloorPlanType = {
  floors: Floor[]
}