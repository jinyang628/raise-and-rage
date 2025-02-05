from pydantic import BaseModel


class CreateRoomRequest(BaseModel):
    number_of_players: int


class CreateRoomResponse(BaseModel):
    room_code: str
