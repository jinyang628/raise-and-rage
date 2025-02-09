from app.models.games import StartRoundResponse


class GamesService:
    async def start_round(self, room_id: str) -> StartRoundResponse:
        return StartRoundResponse(
            small_blind_username="small_blind",
            big_blind_username="big_blind",
        )
