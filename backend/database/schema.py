import os
import urllib.parse as up
import psycopg2
from dotenv import load_dotenv
load_dotenv()
url = up.urlparse(os.environ["DATABASE_URL"])
conn = psycopg2.connect(database=url.path[1:],
    user=url.username,
    password=url.password,
    host=url.hostname,
    port=url.port
)

print("successful connection")

cur = conn.cursor()
cur.execute("""
DROP TABLE IF EXISTS sites;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS whitelists;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS users;

CREATE TABLE Users
(
    id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);
CREATE TABLE projects
(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(25) UNIQUE NOT NULL,
    description TEXT,
    start_date TIMESTAMP,
    estimate_time INTERVAL,
    user_id INT REFERENCES users(id)
);
CREATE TABLE whitelists
(
    id INT PRIMARY KEY NOT NULL,
    urls VARCHAR(50) UNIQUE,
    project_id INT REFERENCES projects(id)
);
CREATE TABLE tasks
(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(25) UNIQUE NOT NULL,
    category TEXT,
    notes TEXT,
    start_date TIMESTAMP,
    estimate_time INTERVAL,
    actual_time INTERVAL,
    project_id INT REFERENCES projects(id) 
);
CREATE TABLE sites
(
    id INT PRIMARY KEY NOT NULL,
    url TEXT,
    duration INTERVAL,
    time_of_day TIMESTAMP,
    productivity BOOLEAN,
    task_id INT REFERENCES tasks(id)
);
""")
try:
    conn.commit()
    print("tables created successfully")
except:
    print("tables created unsuccessfully")