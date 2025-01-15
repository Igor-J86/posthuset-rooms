# Posthuset Rooms
A simple and interactive overview of rooms at Posthuset, so you don‘t have to wander around trying to find that meeting room.

## Usage
You can select a room by clicking on the floor map, or by searching for it. It will automatically switch to the floor based on the two first digits from the input.

### Search param
There is also support for a search param named `room`.
By adding `?room=1803` after the url, it will both set the floor and the room for you. It is useful when the map should be opened directly with a room selected.

## Tech stack
- 😱 React
- 🦺 TypeScript
- 🧩 Three Fiber
- 🛠️ Vite
- 🪄 PostCSS
