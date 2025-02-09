import hashlib
import logging
from datetime import datetime

from app.models.rooms import CreateRoomResponse, Room
from app.utils.database import POST

log = logging.getLogger(__name__)


class RoomsService:
    async def create_room(self, buy_in_amount: int, small_blind_amount: int) -> CreateRoomResponse:
        room_id = _generate_room_id(
            buy_in_amount=buy_in_amount, small_blind_amount=small_blind_amount
        )
        await POST(
            "rooms",
            Room(
                id=room_id,
                buy_in_amount=buy_in_amount,
                small_blind_amount=small_blind_amount,
            ),
        )
        return CreateRoomResponse(room_id=room_id)


def _generate_room_id(buy_in_amount: int, small_blind_amount: int) -> str:
    current_time = datetime.now().isoformat()
    combined_input = f"{buy_in_amount}{small_blind_amount}{current_time}"
    hash_object = hashlib.sha256(combined_input.encode())
    hash_hex = hash_object.hexdigest()
    return _hash_to_alphanumeric(hash_hex, length=6)


def _hash_to_alphanumeric(hash_hex: str, length: int) -> str:
    hash_int = int(hash_hex, 16)
    alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    result = []
    for _ in range(length):
        hash_int, remainder = divmod(hash_int, len(alphanumeric))
        result.append(alphanumeric[remainder])

    return "".join(result)
