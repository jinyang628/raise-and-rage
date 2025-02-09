import os

from pydantic import BaseModel
from supabase._async.client import AsyncClient as Client
from supabase._async.client import create_client


async def create_supabase() -> Client:
    return await create_client(
        supabase_url=os.environ["SUPABASE_URL"],
        supabase_key=os.environ["SUPABASE_SERVICE_KEY"],
    )


async def POST(table_name: str, data: BaseModel):
    client = await create_supabase()
    return await client.table(table_name).insert(data.model_dump()).execute()


# export async function GET<T extends TableName>(
#   tableName: T,
#   filterConditions?: Partial<Row<T>>,
# ): Promise<Row<T>[]> {
#   // const users = await GET("users", { gender: "male" });

#   const client = await getSupabaseClient();
#   let query = client.from(tableName).select("*");

#   if (filterConditions) {
#     Object.entries(filterConditions).forEach(([column, value]) => {
#       query = query.eq(column, value);
#     });
#   }

#   const { data, error } = await query;

#   if (error) {
#     throw error;
#   }

#   return data as Row<T>[];
# }

# export async function POST<T extends TableName>(
#   tableName: T,
#   data: Partial<Row<T>>[],
# ): Promise<Row<T>[]> {
#   // const users: Row<User>[] = await POST("users", {
#   //   gender: "male",
#   //   ...
#   //   ...
#   // });
#   const client = await getSupabaseClient();

#   const filteredData = data.map((row) =>
#     Object.fromEntries(
#       Object.entries(row).filter(([_, value]) => value != null),
#     ),
#   );

#   const { data: insertedData, error } = await client
#     .from(tableName)
#     .insert(filteredData)
#     .select();

#   if (error) {
#     throw error;
#   }
#   return insertedData as Row<T>[];
# }

# export async function UPDATE<T extends TableName>(
#   tableName: T,
#   filterConditions: Partial<Row<T>>,
#   updateData: Partial<Row<T>>,
# ): Promise<Row<T>[]> {
#   // const updatedUsers = await UPDATE(
#   //   "users",
#   //   { gender: "male" },
#   //   { email: "male_user@email.com" }
#   // );

#   const client = await getSupabaseClient();
#   let query = client.from(tableName).update(updateData);

#   Object.entries(filterConditions).forEach(([column, value]) => {
#     query = query.eq(column, value);
#   });

#   const { data, error } = await query;

#   if (error) {
#     throw error;
#   }

#   return data as unknown as Row<T>[];
# }

# export async function DELETE<T extends TableName>(
#   tableName: T,
#   filterConditions: Partial<Row<T>>,
# ): Promise<Row<T>[]> {
#   // const deletedUsers = await DELETE("users", { gender: "suveen" });

#   const client = await getSupabaseClient();
#   let query = client.from(tableName).delete();

#   Object.entries(filterConditions).forEach(([column, value]) => {
#     query = query.eq(column, value);
#   });

#   const { data, error } = await query;

#   if (error) {
#     throw error;
#   }

#   return data as unknown as Row<T>[];
# }
