from fastapi import FastAPI
from pymongo import MongoClient
from bson.objectid import ObjectId

app = FastAPI()

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["blog_database"]
blogs_collection = db["blogs"]


@app.post("/blogs")
def add_blog(blog: dict):
    # Insert the blog into MongoDB
    result = blogs_collection.insert_one(blog)
    # Return the ID of the inserted blog
    return {"id": str(result.inserted_id)}


@app.get("/blogs")
def fetch_blogs():
    # Fetch all the blogs from MongoDB
    blogs = list(blogs_collection.find())
    # Convert the BSON ObjectId to string
    for blog in blogs:
        blog["_id"] = str(blog["_id"])
    # Return the list of blogs
    return {"blogs": blogs}


@app.get("/blogs/{blog_id}")
def fetch_blog_by_id(blog_id: str):
    # Fetch the blog from MongoDB by ID
    blog = blogs_collection.find_one({"_id": ObjectId(blog_id)})
    # Convert the BSON ObjectId to string
    blog["_id"] = str(blog["_id"])
    # Return the blog
    return blog

@app.put("/blogs/{id}")
async def update_blog_by_id(id: str, blog: dict):
    # Remove the _id field from the blog dictionary
    blog_copy = blog.copy()
    del blog_copy["_id"]

    # Update the blog in MongoDB by ID
    result =  blogs_collection.find_one_and_update({"_id": ObjectId(id)}, {"$set": blog_copy})

    # Return the ID of the updated blog
    return {"id": str(id)}