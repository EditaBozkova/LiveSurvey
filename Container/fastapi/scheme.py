from typing import List
from pydantic import BaseModel

class SHeader(BaseModel):
    autor: str
    nazev: str

class SOdpoved(BaseModel):
    id_Otazky: str
    odpoved: str

class SOdpovedi(BaseModel):
    answ: List[SOdpoved]

class SOdpovediss(BaseModel):
    """
    model pro ukladani odpovedi
    """

    id_ankety: str
    data: List[List[str]]