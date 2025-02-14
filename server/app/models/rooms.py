from pydantic import BaseModel


class CreateRoomRequest(BaseModel):
    buy_in_amount: int
    small_blind_amount: int
    user_id: str


class CreateRoomResponse(BaseModel):
    room_id: str


class Room(BaseModel):
    id: str
    buy_in_amount: int
    small_blind_amount: int
    users: list[str]
