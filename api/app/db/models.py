from sqlalchemy import Column, Integer, String, Float, null
from sqlalchemy.ext.declarative import declarative_base
from uuid import UUID

Base = declarative_base()


class Item(Base):  # ← For database table
    __tablename__ = "items"  # ← Table name in database

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    description = Column(String, nullable=True)
    price = Column(Float, nullable=True)
    tax = Column(Float, default=10.5)
    # tags would need a separate table or JSON column


class User(Base):
    __tablename__ = "user"

    id = Column(String, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    password_hash = Column(String, nullable=False)
    specialty = Column()


class Patient(Base):
    __tablename__ = "patient"

    id = Column(String, primary_key=True, index=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    date_of_birth = Column()


class Shunt(Base):
    __tablename__ = "shunt"
    id = Column(String, primary_key=True, index=True)


class CSFLabs(Base):
    __tablename__ = "csf_labs"
    id = Column(String, primary_key=True, index=True)


class ImagingStudies(Base):
    ___tablename__ = "imagin_studies"
    id = Column(String, primary_key=True, index=True)
