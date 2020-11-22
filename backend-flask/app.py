from flask import Flask, request, render_template, jsonify
from flask_mysqldb import MySQL 
from flask_cors import CORS
import datetime


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Development1000!'
app.config['MYSQL_DB'] = 'covidtest_fall2020'
# app.config['MYSQL_PORT'] = 3306
CORS(app)
mysql = MySQL(app)


# Localhost:5000/
@app.route('/')
def main():
    return render_template('main.html')


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
    print("hi: ", request.form['location'])
    print(f'type : {type(request.form["location"])}')

    if request.form['location'] == "ALL":
      location = None
    else:
      location = request.form['location']

    housing = request.form['housing'] if request.form['housing'] else None
    
    if request.form['testing_site'] == "ALL":
      testing_site = None
    else:
      testing_site = request.form['testing_site']

    date_processed_start = request.form['date_processed_start'] if request.form['date_processed_start'] else None
    date_processed_end = request.form['date_processed_end'] if request.form['date_processed_end'] else None

    

    # Plug that into mysql
    cur = mysql.connection.cursor()
    # cur.callproc('aggregate_results', [None, None, None, None , None])
    cur.callproc('aggregate_results', [location, housing, testing_site, date_processed_start, date_processed_end])
    cur.execute("select * from aggregate_results_result")
    rv = cur.fetchall()
    print("return value: ", rv)
    cur.close()

    total = 0
    for status in rv:
      print("status: ", status)
      total += status[1]

    return_list = [
    { 'status': 'Total', 'total_tests': total, 'percent': 100},
    { 'status': 'Positive', 'total_tests': rv[1][1], 'percent': float(rv[1][2])},
    { 'status': 'Negative', 'total_tests': rv[0][1], 'percent': float(rv[0][2])},
    { 'status': 'Pending', 'total_tests': rv[2][1], 'percent': float(rv[2][2])}]

    return_json = jsonify(return_list)
    return return_json

    
    # Dictionary of tuples
    # {total : (number, percent), positive : (number, percent)}

    

    # return_json = jsonify()
    # return return_json
    # return "end"
  # pass


# localhost:5000/api/register_student : POST
@app.route('/api/register_student', methods=['GET', 'POST'])
def register_student():
  # print("begin register student")

  print("request: ", str(request))
  if request.method == 'POST':
    # print("begin if request")
    username = request.form['username']
    # print("username: ", username)
    email = request.form['email']
    # print(email)
    fname = request.form['fname']
    # print(fname)
    lname = request.form['lname']
    # print(lname)
    location = request.form['location']
    # print(location)
    housing_type = request.form['housing_type']
    # print(housing_type)
    password = request.form['password']
    # print(password)

    # print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('register_student', [username, email, fname, lname, location, housing_type, password])

    # cur.execute("select * from User where fname = 'Ema'")
    # value = cur.fetchone()
    # print("return value: ", value)
    cur.close()
    
    return "you did it"

# localhost:5000/api/register_employee : POST
@app.route('/api/register_employee', methods=['GET', 'POST'])
def register_employee():
  print("begin register employee")

  print("request: ", str(request))
  if request.method == 'POST':
    print("begin if request")
    emp_username = request.form['emp_username']
    print("emp_username: ", emp_username)
    emp_email = request.form['emp_email']
    print(emp_email)
    emp_fname = request.form['emp_fname']
    print(emp_fname)
    emp_lname = request.form['emp_lname']
    print(emp_lname)
    phone = request.form['phone']
    print(phone)
    is_lab_tech = request.form['is_lab_tech']
    print(is_lab_tech)
    
    if is_lab_tech =="true" or is_lab_tech =="True":
      is_lab_tech = 1
    else:
      is_lab_tech = 0

    is_site_tester = request.form['is_site_tester']
    print(is_site_tester)
    if is_site_tester =="true" or is_site_tester =="True":
      is_site_tester = 1
    else:
      is_site_tester = 0
    
    emp_password = request.form['emp_password']
    print(emp_password)

    print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('register_employee', [emp_username, emp_email, emp_fname, emp_lname, phone, is_lab_tech, is_site_tester, emp_password])

    cur.execute("select * from User where fname = 'Ema'")
    value = cur.fetchone()
    print("return value: ", value)
    cur.close()
    
    return "you did it"


# localhost:5000/api/login : POST
@app.route('/api/login', methods=['GET', 'POST'])
def login():
  print("begin login")

  print("request: ", str(request))
  if request.method == 'POST':
    print("begin if request")
    username = request.form['username']
    print("username: ", username)
    password = request.form['password']
    print(password)

    print("before procedure call")

    # cur = mysql.connection.cursor()
    # cur.callproc('register_student', [username, password])

    # cur.execute("select * from User where fname = 'Ema'")
    # value = cur.fetchone()
    # print("return value: ", value)
    # cur.close()
    
    return "you did it"
    
