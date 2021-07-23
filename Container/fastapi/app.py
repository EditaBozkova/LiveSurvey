from typing import List
from fastapi import FastAPI
from pydantic import BaseModel

# nefunkcnost importu z scheme.py
#from .scheme import SOdpovedi, SHeader

app = FastAPI()

# lokalni databaze, neidealni a nehotove reseni
db_0 = [] # databaze pro hlavicky anket
db_1 = [] # databaze pro odpovedi


# tyto modely jsou lokalne kvuli neschpnosti importovat
class SHeader(BaseModel):
    autor: str
    nazev: str

class SOdpoved(BaseModel):
    odpoved: str
    
class SOdpovedi(BaseModel):
    List[SOdpoved]


# poslani hlavicky ankety do db
@app.post("/api/createH/")
def create_Header(sHeader: SHeader):
    db_0.append(sHeader.dict())
    return db_0[-1]

# prijem vsech hlavicek anket z db
@app.get("/api/createH/")
async def get_headers():
    return db_0

# smazani konkretni hlavicky ankety z db
@app.delete("/api/createH/{Survey_id}")
async def delete_Header(Survey_id: int):
    db_0.pop(Survey_id-1)
    return (f"Survey header {Survey_id}. has been deleted")


"""
BIG to do:
"""
# poslani odpovedi
@app.post("/api/sendAnsw/")
async def post_odpovedi(odpovedi: SOdpovedi):
     db_1.append(odpovedi.dict())
     return {"odpovedi byly odeslany"}

# prijem odpovedi
@app.get("/api/sendAnsw/")
async def get_odpovedi():
    return db_1

# @app.get("/api/sendAnsw/", response_model=List[scheme.SOdpovedi])

# @app.post("/api/sendAnsw/") # retezec odpovedi a id ankety
# async def post_odpovedi(odpovedi: scheme.SOdpovedi):
#     db.append(odpovedi.dict())
#     return {"odpovedi byly odeslany"}