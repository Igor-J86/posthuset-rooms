import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import type { Vector3 } from "@react-three/fiber";
import Room from "./room";
import { colors } from "../utils/globals";

export type RoomProps = {
  id: number;
  name: string;
  coordinates: Vector3;
  dimensions: [];
  onClick?: () => void;
  selected: boolean;
  description?: string;
};

type Floor = {
  id: number;
  name: string;
  rooms: RoomProps[];
};

export type FloorPlanType = {
  floors: Floor[];
};

const FloorBase = () => {
  // Load texture
  const texture = useTexture("./15etg-test.png");

  return (
    <>
      {/* <mesh rotation={[0, 0, 0]} position={[2, 5, -0.3]}>
        <planeGeometry args={[80, 32]} />
        <meshStandardMaterial map={texture} color={colors.default} />
      </mesh> */}
      {/* Left part */}
      <mesh rotation={[0, 0, 0]} position={[-21.8, 2.6, -0.44]}>
        {/* Plane geometry for the floor */}
        <boxGeometry args={[29, 25, 0.1]} />
        {/* Apply the texture as material */}
        <meshStandardMaterial color={colors.gray} />
      </mesh>
      {/* Right part */}
      <mesh rotation={[0, 0, 0]} position={[14, 2.6, -0.44]}>
        <boxGeometry args={[29, 25, 0.1]} />
        <meshStandardMaterial color={colors.gray} />
      </mesh>
      {/* Middle part */}
      <mesh rotation={[0, 0, 0]} position={[-3.9, 2.6, -0.44]}>
        <boxGeometry args={[6.8, 19.8, 0.1]} />
        <meshStandardMaterial color={colors.gray} />
      </mesh>
      {/* Right part small */}
      <mesh rotation={[0, 0, 0]} position={[33, 2.6, -0.44]}>
        <boxGeometry args={[9, 16.5, 0.1]} />
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
    <>
      <Canvas
        camera={{ position: [1, -5, 20] }}
        className="canvas"
        style={{
          maxWidth: "1440px",
          width: "100%",
          height: "550px",
          borderRadius: "4px",
          backgroundColor: "#cfcfcf"
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 10]} />
        <OrbitControls
          minAzimuthAngle={0} // Prevent rotation to the left (sideways)
          maxAzimuthAngle={0} // Prevent rotation to the right (sideways)
          maxPolarAngle={2.8} // Allow vertical tilting (up/down) only to 90 degrees
          minPolarAngle={0.2}
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
                    selected={room.name === selectedRoom}
                    onClick={() => onRoomClick(room.name)}
                  />
                ))}
              </group>
            )
        )}
      </Canvas>
      {floorPlan.floors.map(
        (floor: Floor) => floor.id === selectedFloor && floor.name
      )}
    </>
  );
};

export default FloorPlan;
