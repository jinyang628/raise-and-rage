from pydantic import BaseModel


class Profile(BaseModel):
    user_id: str
    username: str
