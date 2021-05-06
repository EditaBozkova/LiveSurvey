from fastapi import FastAPI, Request

#app = FastAPI(root_path="/apif")
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}


apiapp = FastAPI()

@apiapp.get("/items/{item_id}")
async def apif_read_item(item_id: int):
    return {"item_id": item_id}

@apiapp.get("/")
async def apif_root():
    return {"message": "Hello World"}

app.mount('/apif', apiapp)
