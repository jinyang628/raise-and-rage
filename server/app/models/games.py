from pydantic import BaseModel


class StartRoundRequest(BaseModel):
    room_id: str


class StartRoundResponse(BaseModel):
    small_blind_username: str
    big_blind_username: str


class Game(BaseModel):
    room_id: str  # Foreign key to Room table
    players: list[str]  # List of player usernames
