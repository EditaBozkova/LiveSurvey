from typing import List
from fastapi import FastAPI, Request
#from .scheme import SOdpovedi, SHeader
from pydantic import BaseModel

#app = FastAPI(root_path="/apif")
app = FastAPI()

db_0 = []
db_1 = []

class SHeader(BaseModel):
    autor: str
    nazev: str

class SOdpoved(BaseModel):
    odpoved: str
    
class SOdpovedi(BaseModel):
    List[SOdpoved]

@app.post("/api/createH/")
def create_Header(sHeader: SHeader):
    db_0.append(sHeader.dict())
    return db_0[-1]

@app.get("/api/createH/")
async def get_headers():
    return db_0

@app.delete("/api/createH/{Survey_id}")
async def delete_Header(Survey_id: int):
    db_0.pop(Survey_id-1)
    return (f"Survey header {Survey_id}. has been deleted")

# @app.get("/api/sendAnsw/", response_model=List[scheme.SOdpovedi])

# @app.post("/api/sendAnsw/") # retezec odpovedi a id ankety
# async def post_odpovedi(odpovedi: scheme.SOdpovedi):
#     db.append(odpovedi.dict())
#     return {"odpovedi byly odeslany"}

@app.post("/api/sendAnsw/")
async def post_odpovedi(odpovedi: SOdpovedi):
     db_1.append(odpovedi.dict())
     return {"odpovedi byly odeslany"}

@app.get("/api/sendAnsw/")
async def get_odpovedi():
    return db_1