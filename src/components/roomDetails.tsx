import type { RoomProps } from "../utils/types"

const RoomDetails = ({room}:{room: RoomProps}) => {
  if(room) return (
    <div className="flex flex-dir-col gam align-ic mbm maxw36r">
      {room.name &&
        `${room.number} ${room.name} ${room.seats > 0 ? ` - 🪑 ${room.seats}` : ''}`
      }
      {room.description &&
        <p className="phm">{room.description}</p>
      }
    </div>
  )
}

export default RoomDetails