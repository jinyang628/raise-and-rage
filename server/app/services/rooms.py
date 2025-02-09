from app.models.rooms import CreateRoomResponse


class RoomsService:
    async def create_room(self, buy_in_amount: int, small_blind_amount: int) -> CreateRoomResponse:
        return CreateRoomResponse(room_code=f"ABCDEF")
