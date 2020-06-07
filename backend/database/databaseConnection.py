import psycopg2

try:
    conn = psycopg2.connect(database="wiqbhzyf",
    user="wiqbhzyf",
    password="46dqd7zYzR6p8XBQgoZsDlRzG8DFQHf0",
    host="ruby.db.elephantsql.com",
    port="5432"
    )
    print("successful")
except:
    print("Not connected")