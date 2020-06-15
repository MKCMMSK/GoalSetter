import os
import urllib.parse as up
import psycopg2

from dotenv import load_dotenv
load_dotenv()

up.uses_netloc.append("postgres")
url = up.urlparse(os.environ["DATABASE_URL"])
try:
    conn = psycopg2.connect(database=url.path[1:],
                            user=url.username,
                            password=url.password,
                            host=url.hostname,
                            port=url.port
                            )
    print("successful")
except:
    print("Not connected")

# for localhost setup
# insert config in .env file "export DB_NAME=goal_setter..."
# uncomment below
""" DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASS")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")

try:
    conn = psycopg2.connect("dbname=%s user=%s password=%s host=%s port=%s" % (
        DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT))
    print("successful")
except:
    print("Not connected") """
