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
(1, 'productivity project', 'google extension for productivity', '2020-06-06', 2592000, null, 1),
(2, 'bitcoin project', 'bitcoin miner', '2020-05-01', 5000, 16000, 3),
(3, 'data scraper', 'google extension for scraping company analytics', '2020-04-16', 22000, 15000, 2),
(4, 'security project', 'hush hush', '2020-8-00', 2592000, null, 1),
(5, 'interview takehome', 'job interview', '2020-07-01', 10000, null, 2);

INSERT INTO whitelists (id, urls, project_id)
VALUES
(1, 'www.google.ca', 1),
(2, 'www.youtube.com', 1),
(3, 'www.google.ca', 2),
(4, 'www.google.com', 3),
(5, 'www.youtube.com, 2);

INSERT INTO tasks (id, name, category, notes, start_date, estimate_time, actual_time, project_id)
VALUES,
(1, 'research python','research', 'checkout freecodingacademy', '2020-06-06', 3600, 3600, 1),
(2, 'check out linux academy','research', 'look for aws course', '2020-07-01', 8000, 500, 2),
(3, 'learn python','learning', 'check out django as well', '2020-06-07', 6000, 8000, 1),
(4, 'complete hw','complete', 'take home interview assignment', '2020-07-01',10000 , 10000, 5),
(5, 'online shopping','other', 'break time', '2020-05-01', 600 , 700, 2);

INSERT INTO sites (id, url, duration, time_of_day, productivity,task_id)
VALUES
(1, 'www.google.ca', 564, '2020-06-02 18:15', 'TRUE', 1),
(2, 'www.linuxAcademy.com', 3600, '2020-06-02 20:15', 'FALSE', 1),
(3, 'www.google.ca', 300, '2020-06-03 9:15', 'TRUE', 1),
(4, 'www.justchiliing.ca', 1000, '2020-07-02 18:15', 'FALSE', 2),
(5, 'www.google.ca', 200, '2020-06-03 13:15', 'TRUE', 1);
""")
try:
    conn.commit()
    print("inserted intotables successfully")
except:
    print("tables created unsuccessfully")

    