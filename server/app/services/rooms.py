from app.models.rooms import CreateRoomResponse


class RoomsService:
    async def create_room(self, number_of_players: int) -> CreateRoomResponse:
        return CreateRoomResponse(room_code=f"ABCDEF")
