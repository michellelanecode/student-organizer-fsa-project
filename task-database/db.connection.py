import dotenv
from pymongo import MongoClient;
URI = dotenv.get_key(".env", "ATLASURI")
client = MongoClient(URI);
db = client.get_database("stu-org-data")
task_data_collection = db.get_collection("task-data")
all_tasks = task_data_collection.find();

for task in all_tasks:
    print(task)