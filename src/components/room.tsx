import { Text } from "@react-three/drei";
import type { RoomProps } from "./floorPlan";
import { colors } from "../utils/globals";

const Room: React.FC<RoomProps> = ({
  name,
  coordinates,
  dimensions,
  onClick,
  selected,
}) => (
  <mesh
    position={coordinates}
    onClick={onClick}
    onPointerOver={(e) =>
      e.object.material.color.set(selected ? colors.selected : colors.default)
    }
    onPointerLeave={(e) =>
      e.object.material.color.set(selected ? colors.selected : colors.default)
    }
  >
    <boxGeometry args={dimensions} />
    <meshStandardMaterial color={selected ? colors.selected : colors.default} />
    {/* Add room number */}
    <Text position={[0, 0, 0.11]} fontSize={0.5}>
      {name}
    </Text>
  </mesh>
);

export default Room;
