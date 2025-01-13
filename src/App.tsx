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
          autoFocus
        />
      </div>
      {selectedRoom && (
        <RoomDetails
          room={selectedRoom}
        />
      )}
    </div>
  );
}

export default App;
