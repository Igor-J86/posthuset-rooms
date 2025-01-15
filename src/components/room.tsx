import { Mesh } from "three";
import { Text } from "@react-three/drei";
import type { RoomProps } from "../utils/types";
import { colors } from "../utils/globals";

const Room: React.FC<RoomProps> = ({
  number,
  coordinates,
  dimensions,
  onClick,
  selected,
}) => (
  <mesh
    position={coordinates}
    onClick={onClick}
    onPointerOver={(e) =>
      e.object instanceof Mesh &&
      e.object.material.color.set(selected ? colors.selected : colors.default)
    }
    onPointerLeave={(e) =>
      e.object instanceof Mesh &&
      e.object.material.color.set(selected ? colors.selected : colors.default)
    }
  >
    <boxGeometry args={dimensions} />
    <meshStandardMaterial color={selected ? colors.selected : colors.default} />
    {/* Add room number */}
    <Text position={[0, 0, 0.12]} fontSize={0.5} color={'#111111'} scale={1.5}>
      {number}
    </Text>
  </mesh>
);

export default Room;
