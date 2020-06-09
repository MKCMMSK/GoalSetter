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
(1, Colin, Mai, Colinmaisk@gmail.com),
(2, Elizabeth, Brown, ElizabethBrown@gmail.com),
(3, Ali, S, Alis@gmail.com);

INSERT INTO projects (id, name, description,start_date, estimate_time, actual_time,user_id)
VALUES
(1, "),
(),
(),
(),
();

INSERT INTO whitelists (id, urls, project_id)
VALUES
(),
(),
(),
(),
();

INSERT INTO tasks (id, name, category, notes, start_date, estimate_time, actual_time, project_id)
VALUES
(),
(),
(),
(),
();

INSERT INTO sites ()
VALUES
(),
(),
(),
(),
();
""")
try:
    conn.commit()
    print("inserted intotables successfully")
except:
    print("tables created unsuccessfully")

    