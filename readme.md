--Conectar al psql con el usuario 
psql -U postgres

-- Se crea la base de datos llamada "skatepark"
CREATE DATABASE skatepark;

--Conectarse a la nueva base de dato
\c skatepark

-- CREACION de la Tabla skaters
CREATE TABLE skaters (
    id SERIAL, 
    email VARCHAR(50) NOT NULL, 
    nombre VARCHAR(25) NOT NULL, 
    password VARCHAR(25) NOT NULL, 
    anos_experiencia INT NOT NULL, 
    especialidad VARCHAR(50) NOT NULL, 
    foto VARCHAR(255) NOT NULL, 
    estado BOOLEAN NOT NULL);

-- CONSULTAS DE LA TABLA
SELECT * FROM skaters;


Listado Participantes
id  email                       nombre             pass años especialiadad

1  dannyway@gmail.com           Danny Way          333   30  Vert y Mega Ramp Skateboarding
2  evelienbouilliart@gmail.com  Evelien Bouilliart 666   15  Bowl y Vert Skateboarding
3  tonyhawk@gmail.com           Tony Hawk          999   40  Vert y Street Skateboarding
4  andrewreynolds@gmail.com     Andrew Reynolds    369   25  Street Skateboarding 
5  bobburnquist@gmail.com       Bob Burnquist      336   30  Vert y Mega Ramp Skateboarding
6  chriscole@gmail.com          Chris Cole         339   20  Street Skateboarding
7  daewonsong@gmail.com         Daewon Song        993   30  Street Skateboarding
8  erickoston@gmail.com         Eric Koston        936   30  Street Skateboarding  
9  lizziearmanto@gmail.com      Lizzie Armanto     933   15  Bowl Skateboarding
10 markgonzales@gmail.com       Mark Gonzales      399   35  Street Skateboarding
11 nyjahhuston@gmail.com        Nyjah Huston       693   20  Street Skateboarding
12 paulrodriguez@gmail.com      Paul Rodriguez     963   20  Street Skateboarding
13 rodneymullen@gmail.com       Rodney Mullen      669   40  Street y Freestyle Skateboarding
14 tomschaar@gmail.com          Tom Schaar         663   10  Vert Skateboarding  
15 tonyalva@gmail.com           Tony Alva          699   40  Vert Skateboarding

Participante eliminada
16 elissasteamer@gmail.com      Elissa Steamer     996   25  Street Skateboarding

