import { useState } from "react";
import { floorData } from "./utils/globals";
import FloorPlan from "./components/floorPlan";
import type { FloorPlanType } from "./components/floorPlan";
import RoomDetails from "./components/roomDetails";

function App() {
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const [selectedFloor, setSelectedFloor] = useState<number>(15);

  const handleRoomInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSelectedRoom(e.currentTarget.value);
    if (e.currentTarget.value.length === 2) {
      setSelectedFloor(+e.currentTarget.value);
    } else if (e.currentTarget.value === "") {
      setSelectedFloor(15);
    }
  };

  const roomDescription = () => {
    const getFloor = floorData.floors.filter((floor) => floor.id === selectedFloor)
    if (!getFloor) return ''
    const roomDescription = getFloor[0].rooms.filter((room) => room.name === selectedRoom)
    if (!roomDescription) return ''
    return roomDescription[0].description
  }

  return (
    <div className="main-layout">
      <FloorPlan
        floorPlan={floorData as FloorPlanType}
        onRoomClick={(room) => setSelectedRoom(room)}
        selectedFloor={selectedFloor}
        selectedRoom={selectedRoom}
      />
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
      {selectedRoom && (
        <RoomDetails
          room={roomDescription()}
        />
      )}
    </div>
  );
}

export default App;
