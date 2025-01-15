import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import FloorBase from "./floorBase"
import Room from "./room"
import type { FloorPlanType, RoomProps, Floor } from "../utils/types"

const FloorPlan = ({
  floorPlan,
  onRoomClick,
  selectedFloor,
  selectedRoom,
}: {
  floorPlan: FloorPlanType
  onRoomClick: (room: string) => void
  selectedFloor: number
  selectedRoom: string
}) => {
  return (
    <Canvas
      camera={{ position: [1, -3, 22] }}
      className="canvas"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 10]} />
      <OrbitControls
        minAzimuthAngle={0}
        maxAzimuthAngle={0}
        maxPolarAngle={2.5}
        minPolarAngle={1}
        target={[0,1,0]}
        enablePan
      />
      <FloorBase />
      {floorPlan.floors.map(
        (floor: Floor) =>
          floor.id === selectedFloor && (
            <group key={floor.id}>
              {floor.rooms.map((room: RoomProps) => (
                <Room
                  key={room.id}
                  {...room}
                  selected={selectedRoom.length >= 4 && room.number.includes(selectedRoom)}
                  onClick={() => onRoomClick(room.number)}
                />
              ))}
            </group>
          )
      )}
    </Canvas>
  )
}

export default FloorPlan
