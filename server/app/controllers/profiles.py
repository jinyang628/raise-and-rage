import logging

from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from httpx import codes

from app.models.profiles import Profile
from app.services.profiles import ProfilesService

log = logging.getLogger(__name__)


class ProfilesController:
    def __init__(self, service: ProfilesService):
        self.router = APIRouter()
        self.service = service
        self.setup_routes()

    def setup_routes(self):
        router = self.router

        @router.post(
            "/",
        )
        async def create_profile(input: Profile):
            try:
                log.info("Creating profile...")
                await self.service.create_profile(profile=input)
                log.info("Profile created successfully")
                return JSONResponse(
                    status_code=codes.OK, content={"message": "Profile created successfully"}
                )
            except Exception as e:
                log.error("Unexpected error in rooms controller.py: %s", str(e))
                raise HTTPException(
                    status_code=codes.INTERNAL_SERVER_ERROR, detail="An unexpected error occurred"
                ) from e
