from flask import Flask, request
from flask_mysqldb import MySQL 
from flask_cors import CORS


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Development1000!'
app.config['MYSQL_DB'] = 'covidtest_fall2020'
CORS(app)
mysql = MySQL(app)


# Localhost:5000/
@app.route('/')
def hello_world():
    return 'Hello, World!'


# localhost:5000/api/agg_test_result : POST
@app.route('/api/agg_test_results', methods=['GET', 'POST'])
def agg_test_results():
  """
  Arguments:
    Location:
    Housing:
    Testing Site:
    Date Processed Start, End

    {'location': location, 'housing': housing .....}
  """

  print("begin method")

  if request:

    (print("if request"))

    if request['location'] == "ALL":
      location = 'null'
    else:
      location = request['location']

    housing = request['housing'] if request['housing'] else "NULL"
    
    if request['testing_site'] == "ALL":
      testing_site = 'null'
    else:
      testing_site = request['testing_site']

    date_processed_start = request['date_processed_start'] if request['date_processed_start'] else "NULL"
    date_processed_end = request['date_processed_end'] if request['date_processed_end'] else "NULL"

    

    # Plug that into mysql
    cur = mysql.connection.cursor()
    cur.callproc("aggregate_results", [location, housing, testing_site, date_processed_start, date_processed_end])
    rv = cur.fetchall()

    print("rv", rv)
    
    # Dictionary of tuples
    # {total : (number, percent), positive : (number, percent)}
    # return_json = jsonify()
    # return return_json
    return "end"
  pass
