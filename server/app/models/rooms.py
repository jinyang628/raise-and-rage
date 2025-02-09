from pydantic import BaseModel


class CreateRoomRequest(BaseModel):
    buy_in_amount: int
    small_blind_amount: int


class CreateRoomResponse(BaseModel):
    room_id: str


class Room(BaseModel):
    id: str
    buy_in_amount: int
    small_blind_amount: int
    num_players: int = 1
