CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    creation TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    creation TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id)
    );

CREATE TABLE IF NOT EXISTS hardware (
    id SERIAL PRIMARY KEY,
    family VARCHAR(60) NOT NULL,
    model VARCHAR(60) NOT NULL,
    installation TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS soilSensor (
    id SERIAL PRIMARY KEY,
    humidity FLOAT NOT NULL,
    input TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    hardware_id INTEGER REFERENCES hardware(id)
);

CREATE TABLE IF NOT EXISTS dht11(
    id SERIAL PRIMARY KEY,
    temperature FLOAT NOT NULL,
    humidity FLOAT NOT NULL,
    input TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    hardware_id INTEGER REFERENCES hardware(id)
);

INSERT INTO notes (title, description) VALUES ('First note', 'Content of my first note');
INSERT INTO soilSensor (humidity ) VALUES (0.0);
INSERT INTO dht11 (temperature, humidity) VALUES (0.0, 0.0);