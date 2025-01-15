import { colors } from "../utils/globals"
import { Text } from "@react-three/drei"

const FloorBase = () => {
  // Load texture
  //const texture = useTexture("./19etg-test2.jpg")

  return (
    <>
      {/* <mesh rotation={[0, 0, 0]} position={[2, 5, -0.35]}>
        <planeGeometry args={[80, 32]} />
        <meshStandardMaterial map={texture} color={colors.default} />
      </mesh> */}
      {/* Show Plaza direction */}
      <mesh rotation={[0, 0, 0]} position={[0, 18, -0.6]}>
        <Text position={[0, 0, 0.22]} fontSize={0.6} color={"#646464"} scale={1.5}>
          Plaza Hotel ⬆️ 
        </Text>
      </mesh>

      {/* Left part */}
      <mesh rotation={[0, 0, 0]} position={[-21.8, 2.6, -0.6]}>
        {/* Plane geometry for the floor */}
        <boxGeometry args={[29, 25, 0.4]} />
        {/* Apply the texture as material */}
        <meshStandardMaterial color={colors.gray} />
      </mesh>
      
      {/* Middle part */}
      <mesh rotation={[0, 0, 0]} position={[-3.9, 2.6, -0.6]}>
        <boxGeometry args={[6.8, 19.8, 0.4]} />
        <meshStandardMaterial color={colors.gray} />
      </mesh>

      {/* Right part */}
      <mesh rotation={[0, 0, 0]} position={[14, 2.6, -0.6]}>
        <boxGeometry args={[29, 25, 0.4]} />
        <meshStandardMaterial color={colors.gray} />
      </mesh>

      {/* Right part extended */}
      <mesh rotation={[0, 0, 0]} position={[33, 2.6, -0.6]}>
        <boxGeometry args={[9, 16.5, 0.4]} />
        <meshStandardMaterial color={colors.gray} />
      </mesh>
    </>
  )
}

export default FloorBase