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

INSERT INTO projects ()
VALUES
(),
(),
(),
(),
();

INSERT INTO whitelists ()
VALUES
(),
(),
(),
(),
();

INSERT INTO tasks ()
VALUES
(),
(),
(),
(),
();

INSERT INTO urls ()
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