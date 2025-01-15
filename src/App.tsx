import { useState, useEffect } from "react"
import { floorData } from "./utils/globals"
import FloorPlan from "./components/floorPlan"
import type { FloorPlanType } from "./utils/types"
import RoomDetails from "./components/roomDetails"
import { loadLocal, saveLocal } from "./utils/helpers"

function App() {
  const [selectedRoom, setSelectedRoom] = useState<string>("")
  const [selectedFloor, setSelectedFloor] = useState<number>(15)
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("room");

  const handleRoomInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSelectedRoom(e.currentTarget.value)
    if (e.currentTarget.value.length === 2) {
      setSelectedFloor(+e.currentTarget.value)
      saveLocal("posthuset-floor", e.currentTarget.value)
    }
  }

  const roomDescription = () => {
    const getFloor = floorData.floors.filter(
      (floor) => floor.id === selectedFloor
    )
    if (!getFloor[0]) return ""
    const roomDescription = getFloor[0].rooms.filter(
      (room) => room.number === selectedRoom
    )
    if (!roomDescription[0]) return ""
    return roomDescription[0].description
  }

  useEffect(() => {
    const savedFloor = loadLocal("posthuset-floor")
    if(savedFloor) {
      setSelectedFloor(+savedFloor)
    } 
    if (searchTerm) {
      setSelectedFloor(+searchTerm.substring(0,2))
      setSelectedRoom(searchTerm)
      saveLocal("posthuset-floor", searchTerm.substring(0,2))
    }
  },[searchTerm])

  return (
    <div className="main-layout">
      <FloorPlan
        floorPlan={floorData as FloorPlanType}
        onRoomClick={(room) => setSelectedRoom(room)}
        selectedFloor={selectedFloor}
        selectedRoom={selectedRoom}
      />
      <h2>Posthuset rooms</h2>
      <div className="flex gam">
        {floorData.floors.map((floor) => (
          <button key={floor.id} disabled={floor.id === selectedFloor} onClick={() => {
            setSelectedFloor(floor.id)
            saveLocal("posthuset-floor", floor.id.toString())
          }}>
            {floor.name}
          </button>
        ))}
      </div>
      <div className="flex flex-dir-col">
        <label className="form__label" htmlFor="roomInput">
          Find room
        </label>
        <input
          className="form__control maxw20r mb0"
          onInput={(e) => handleRoomInput(e)}
          id="roomInput"
          value={selectedRoom && selectedRoom}
          autoFocus
        />
      </div>
      {selectedRoom && <RoomDetails room={roomDescription()} />}
    </div>
  )
}

export default App
