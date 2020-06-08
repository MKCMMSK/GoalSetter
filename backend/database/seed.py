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
cur.execute("""""")
try:
    conn.commit()
    print("tables created successfully")
except:
    print("tables created unsuccessfully")