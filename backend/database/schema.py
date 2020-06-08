import psycopg2

conn = psycopg2.connect(database="wiqbhzyf",
user="wiqbhzyf",
password="46dqd7zYzR6p8XBQgoZsDlRzG8DFQHf0",
host="ruby.db.elephantsql.com",
port="5432"
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
    total_duration INTERVAL.
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
    timestamp INTERVAL,
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