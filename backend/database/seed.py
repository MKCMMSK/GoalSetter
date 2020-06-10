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

INSERT INTO users (id, first_name, last_name, email)
VALUES 
(1, 'Colin', 'Mai', 'Colinmaisk@gmail.com'),
(2, 'Elizabeth', 'Brown', 'ElizabethBrown@gmail.com'),
(3, 'Ali', 'S', 'Alis@gmail.com');

INSERT INTO projects (id, name, description,start_date, estimate_time, actual_time,user_id)
VALUES
(1, 'productivity project', 'google extension for productivity', '2020-06-06', '23:42:00', null, 1),
(2, 'bitcoin project', 'bitcoin miner', '2020-05-01', '00:50:00', '01:50:00', 3),
(3, 'data scraper', 'google extension for scraping company analytics', '2020-04-16', '02:20:00', '01:50:00', 2),
(4, 'security project', 'hush hush', '2020-8-01', '23:20:00', null, 1),
(5, 'interview takehome', 'job interview', '2020-07-01', '10:00:00', null, 2);

INSERT INTO whitelists (id, urls, project_id)
VALUES
(1, 'www.google.ca', 1),
(2, 'www.youtube.com', 1),
(3, 'www.google.ca', 2),
(4, 'www.google.com', 3),
(5, 'www.youtube.com, 2);

INSERT INTO tasks (id, name, category, notes, start_date, estimate_time, actual_time, project_id)
VALUES
(1, 'research python', 'research', 'checkout freecodingacademy', '2020-06-06', '10:00:00', '10:00:00', 1),
(2, 'check out linux academy','research', 'look for aws course', '2020-07-01', '03:00:00', '5:02:12', 2),
(3, 'learn python','learning', 'check out django as well', '2020-06-07', '06:00:00', '08:00:00', 1),
(4, 'complete hw','complete', 'take home interview assignment', '2020-07-01', '10:00:00' , '10:00:00', 5),
(5, 'online shopping','other', 'break time', '2020-05-01', '00:06:00' , '00:07:00', 2);

INSERT INTO sites (id, url, task_id)
VALUES
(1, 'www.google.ca', 1),
(2, 'www.linuxAcademy.com', 1),
(3, 'www.youtube.ca', 1),
(4, 'www.justchiliing.ca', 2),
(5, 'www.google.ca', 1);

INSERT INTO sessions (id, duration, time_of_day, productivity, sites_id)
VALUES
(),
(),
(),
(),
();
""")
try:
    conn.commit()
    print("inserted into tables successfully")
except:
    print("tables not inserted successfully")

    