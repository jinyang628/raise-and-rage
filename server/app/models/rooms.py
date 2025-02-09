from pydantic import BaseModel


class CreateRoomRequest(BaseModel):
    buy_in_amount: int
    small_blind_amount: int


class CreateRoomResponse(BaseModel):
    room_code: str
