import os
from typing import Optional

from supabase._async.client import AsyncClient as Client
from supabase._async.client import create_client


class DatabaseManager:
    _instance: Optional["DatabaseManager"] = None
    client: Client = None  # type: ignore

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    async def _init(self):
        if self.client is not None:
            return

        self.client = await create_client(
            supabase_url=os.environ["SUPABASE_URL"],
            supabase_key=os.environ["SUPABASE_SERVICE_KEY"],
        )

    @classmethod
    async def get_instance(cls) -> "DatabaseManager":
        if cls._instance is None:
            cls._instance = cls()

        await cls._instance._init()
        return cls._instance
