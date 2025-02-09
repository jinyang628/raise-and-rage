import logging

from fastapi import APIRouter, HTTPException

from app.models.games import StartRoundRequest, StartRoundResponse
from app.services.games import GamesService

log = logging.getLogger(__name__)


class GamesController:
    def __init__(self, service: GamesService):
        self.router = APIRouter()
        self.service = service
        self.setup_routes()

    def setup_routes(self):
        router = self.router

        @router.post(
            "/",
            response_model=StartRoundResponse,
        )
        async def start_round(input: StartRoundRequest) -> StartRoundResponse:
            try:
                log.info("Starting round...")
                response: StartRoundResponse = await self.service.start_round(
                    room_id=input.room_id,
                )
                return response
            except Exception as e:
                log.error("Unexpected error in games controller.py: %s", str(e))
                raise HTTPException(status_code=500, detail="An unexpected error occurred") from e
