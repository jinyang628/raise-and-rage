import logging

from fastapi import APIRouter, HTTPException

from app.models.rooms import CreateRoomRequest, CreateRoomResponse
from app.services.rooms import RoomsService

log = logging.getLogger(__name__)


class RoomsController:
    def __init__(self, service: RoomsService):
        self.router = APIRouter()
        self.service = service
        self.setup_routes()

    def setup_routes(self):
        router = self.router

        @router.post(
            "/",
            response_model=CreateRoomResponse,
        )
        async def create_room(input: CreateRoomRequest) -> CreateRoomResponse:
            try:
                log.info("Creating room...")
                response: CreateRoomResponse = await self.service.create_room(
                    buy_in_amount=input.buy_in_amount,
                    small_blind_amount=input.small_blind_amount,
                )
                log.info("Room created with code %s", response.room_id)
                return response
            except Exception as e:
                log.error("Unexpected error in rooms controller.py: %s", str(e))
                raise HTTPException(status_code=500, detail="An unexpected error occurred") from e
