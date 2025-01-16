import { Mesh } from "three";
import { Text } from "@react-three/drei";
import type { RoomProps } from "../utils/types";
import { colors } from "../utils/globals";

const Room: React.FC<RoomProps> = ({
  number,
  name,
  coordinates,
  dimensions,
  seats,
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
    <meshStandardMaterial color={selected ? colors.selected : colors.default} />
    <boxGeometry args={dimensions} />
    <Text
      position={[0, name ? 0.4 : 0, 0.12]}
      fontSize={0.3}
      color={"#111111"}
      scale={1.5}
      raycast={() => null}
    >
      {number}
    </Text>
    {name && (
      <Text
        position={[0, number ? -0.3 : 0, 0.12]}
        textAlign="center"
        fontSize={0.2}
        color={"#111111"}
        scale={1.5}
        raycast={() => null}
      >
        {name}{'\n'}
        {seats > 0 && `- ${seats} -`}
      </Text>
    )}
  </mesh>
);

export default Room;
