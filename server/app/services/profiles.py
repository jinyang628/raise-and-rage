from app.models.profiles import Profile
from app.utils.database import DatabaseManager


class ProfilesService:
    async def create_profile(self, profile: Profile):
        db_manager = await DatabaseManager.get_instance()
        await db_manager.client.table("profiles").insert(profile.model_dump()).execute()
