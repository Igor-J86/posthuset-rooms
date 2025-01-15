import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Room from "./room";
import { colors } from "../utils/globals";
import type { FloorPlanType, RoomProps, Floor } from "../utils/types";

const FloorBase = () => {
  // Load texture
  //const texture = useTexture("./19etg-test2.jpg");

  return (
    <>
      {/* <mesh rotation={[0, 0, 0]} position={[2, 5, -0.35]}>
        <planeGeometry args={[80, 32]} />
        <meshStandardMaterial map={texture} color={colors.default} />
      </mesh> */}
      {/* Left part */}
      <mesh rotation={[0, 0, 0]} position={[-21.8, 2.6, -0.6]}>
        {/* Plane geometry for the floor */}
        <boxGeometry args={[29, 25, 0.4]} />
        {/* Apply the texture as material */}
        <meshStandardMaterial color={colors.gray} />
      </mesh>
      {/* Right part */}
      <mesh rotation={[0, 0, 0]} position={[14, 2.6, -0.6]}>
        <boxGeometry args={[29, 25, 0.4]} />
        <meshStandardMaterial color={colors.gray} />
      </mesh>
      {/* Middle part */}
      <mesh rotation={[0, 0, 0]} position={[-3.9, 2.6, -0.6]}>
        <boxGeometry args={[6.8, 19.8, 0.4]} />
        <meshStandardMaterial color={colors.gray} />
      </mesh>
      {/* Right part small */}
      <mesh rotation={[0, 0, 0]} position={[33, 2.6, -0.6]}>
        <boxGeometry args={[9, 16.5, 0.4]} />
        <meshStandardMaterial color={colors.gray} />
      </mesh>
    </>
  );
};

const FloorPlan = ({
  floorPlan,
  onRoomClick,
  selectedFloor,
  selectedRoom,
}: {
  floorPlan: FloorPlanType;
  onRoomClick: (room: string) => void;
  selectedFloor: number;
  selectedRoom: string;
}) => {
  return (
    <Canvas
      camera={{ position: [1, -3, 22] }}
      className="canvas"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 10]} />
      <OrbitControls
        minAzimuthAngle={0} // Prevent rotation to the left (sideways)
        maxAzimuthAngle={0} // Prevent rotation to the right (sideways)
        maxPolarAngle={2.5} // Allow vertical tilting (up/down) only to 90 degrees
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
  );
};

export default FloorPlan;
