-- Eliminar tablas si ya existen
-- CASCADE: elimina cualquier relacion existente
DROP TABLE IF EXISTS "Asignaturas" CASCADE;
DROP TABLE IF EXISTS "Usuario" CASCADE;

-- Tabla de usuarios
CREATE TABLE "Usuario" (

    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
    
);

-- Tabla de Asignaturas
CREATE TABLE "Asignaturas" (

    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    nombrecompleto TEXT,
    descripcion TEXT,
    areaconocimiento TEXT,
    carrera TEXT,
    numerocreditos INT,
    contenidotematico TEXT,
    semestre INT,
    profesor TEXT,
    
    estudiante_id INT NOT NULL,

    -- FK
    CONSTRAINT fk_estudiante
      FOREIGN KEY(estudiante_id) 
	  REFERENCES "Usuario"(id)
	  ON DELETE CASCADE 
    
);
