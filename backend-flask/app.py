from flask import Flask, request, render_template, jsonify
from flask_mysqldb import MySQL 
from flask_cors import CORS
import datetime, re


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Development1000!'
app.config['MYSQL_DB'] = 'covidtest_fall2020'
# app.config['MYSQL_PORT'] = 3306
CORS(app)
mysql = MySQL(app)

username = "mmoss7"
# Localhost:5000/
@app.route('/')
def main():
    return render_template('main.html')

#CHECK Constraints
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
    
    
    #can housing be all
    
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
    length = len(email)
    if length < 5 or length > 25 or not(re.match(length,r'\w+@\w+')) 
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
    if len(password) < 8:
      return False
    # print(password)

    # print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('register_student', [username, email, fname, lname, location, housing_type, password])

    # cur.execute("select * from User where fname = 'Ema'")
    # value = cur.fetchone()
    # print("return value: ", value)
    cur.close()
    #account for when invalid registration
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
    role = request.form['role']
    print(role)
    
    if role.contains("Lab Technician"):
      is_lab_tech = 1
    else:
      is_lab_tech = 0
    if role.contains("Site Tester"):
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
    user = request.form['username']
    print("username: ", user)
    password = request.form['password']
    print(password)
    print("before procedure call")
    cur = mysql.connection.cursor()
    cur.execute(f"select * from User where username = '{user}' and password = '{password}'")
    value = cur.fetchone()

    if value:
      #user can log in, return True I think
      print("u good")
      global username
      username = user

    else:
      #redirect to register screen but how to know which register function
      print("need to register")

    # cur = mysql.connection.cursor()
    # cur.callproc('register_student', [username, password])

    # cur.execute("select * from User where fname = 'Ema'")
    # value = cur.fetchone()
    # print("return value: ", value)
    # cur.close()
    
    return "you did it"

# localhost:5000/api/student_view_results : POST
@app.route('/api/student_view_results', methods=['GET', 'POST'])
def student_view_results():
  print("begin view results")

  print("request: ", str(request))
  if request.method == 'POST':
    print("begin if request")
    print("username: ", username)
    if request.form['status'] == "ALL":
      status = None
    else:
      status = request.form['status']
    print(status)
    start_date = request.form['start_date'] if request.form['start_date'] else None
    print(start_date)
    end_date = request.form['end_date'] if request.form['end_date'] else None
    print(end_date)
  

    print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('student_view_results', [username, status, start_date, end_date])

    cur.execute("select * from student_view_results_result")
    rv = cur.fetchall()
    print("return value: ", rv)
    cur.close()

    return_list = [
    { 'id': 'Test ID#', 'test_date': 'Timeslot Date', 'processed_date': 'Date Processed','pool_status':'Pool Status', 'status':'Status'}]
    
    for test in rv:
      print("test: ", id)
      test_dict = {'id':test[0],'test_date': test[1], 'processed_date': test[2],'pool_status': test[3],'status': test[4]}
      return_list.append(test_dict)

    return_json = jsonify(return_list)
    return return_json

# localhost:5000/api/explore_results : POST
@app.route('/api/explore_results', methods=['GET', 'POST'])
def explore_results():
  print("begin explore results")

  print("request: ", str(request))
  if request.method == 'POST':
    print("begin if request")
    id = request.form['id']
    print("id: ", id)
  

    print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('explore_results', id)
    cur.execute("select * from explore_results_result")
    rv = cur.fetchone()
    print("return value: ", rv)
    cur.close()

    return_list = [
    { 'test_id': 'Test ID#','id': rv[0]},
    {'test_date':'Date Tested','date_tested': rv[1]},
    {'timeslot':'Timeslot','time': rv[2]},
    {'testing_location':'Testing Location','location': rv[3]},
    {'processed_date':'Date Processed','date_processed': rv[4]},
    {'pooled_result':'Pooled Result','pool_result': rv[5]},
    {'individual_result':'Individual Result','test_result': rv[6]},
    {'processed_by':'Processed By','processor': rv[7]} ]
    return_json = jsonify(return_list)
    return return_json
    
# localhost:5000/api/test_sign_up_filter : POST
@app.route('/api/test_sign_up_filter', methods=['GET', 'POST'])
def test_sign_up_filter():
  print("begin view appts")

  print("request: ", str(request))
  if request.method == 'POST':
    print("begin if request")

    print("username: ", username)
    if request.form['testing_site'] == "ALL":
      testing_site = None
    else:
      testing_site = request.form['testing_site']

    start_date = request.form['start_date'] if request.form['start_date'] else None
    end_date = request.form['end_date'] if request.form['end_date'] else None
    
    start_time = request.form['start_time'] if request.form['start_time'] else None
    end_time = request.form['end_time'] if request.form['end_time'] else None
  

    print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('test_sign_up_filter', [username, testing_site, start_date, end_date, start_time, end_time])

    cur.execute("select * from test_sign_up_for_result")
    rv = cur.fetchall()
    print("return value: ", rv)
    cur.close()

    return_list = [
    { 'date': 'Date', 'time': 'Time', 'address': 'Site Address','site':'Test Site'}]
    
    for appt in rv:
      print("appt: ", appt[0])
      appt_dict = {'date':appt[0],'time': appt[1], 'address': appt[2],'site': appt[3]}
      return_list.append(appt_dict)

    return_json = jsonify(return_list)
    return return_json

# localhost:5000/api/test_sign_up : POST
@app.route('/api/test_sign_up', methods=['GET', 'POST'])
def test_sign_up():
  # print("begin test sign up")

  print("request: ", str(request))
  if request.method == 'POST':
    # print("begin if request")
    # print("username: ", username)
    #request comes from filter tests
    site = request.form['site']
    # print(email)
    date = request.form['date']
    # print(fname)
    time = request.form['time']
    # print(lname)

    # print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('test_sign_up', [username, site, date, time])

    # cur.execute("select * from User where fname = 'Ema'")
    # value = cur.fetchone()
    # print("return value: ", value)
    cur.close()
    #account for when invalid sign up
    return "you did it"
    
# localhost:5000/api/tests_processed : POST
@app.route('/api/tests_processed', methods=['GET', 'POST'])
def tests_processed():
  print("begin tests processed")

  print("request: ", str(request))
  if request.method == 'POST':
    print("begin if request")

    print("username: ", username)
    if request.form['status'] == "ALL":
      status = None
    else:
      status = request.form['status']

    start_date = request.form['start_date'] if request.form['start_date'] else None
    end_date = request.form['end_date'] if request.form['end_date'] else None
    
  

    print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('tests_processed', [start_date, end_date,status,username])

    cur.execute("select * from tests_processed_result")
    rv = cur.fetchall()
    print("return value: ", rv)
    cur.close()

    return_list = [
    { 'test_id': 'Test ID#', 'pool_id': 'Pool ID', 'test_date': 'Date Tested','process_date':'Date Processed', 'test_status': 'Result'}]
    
    for test in rv:
      print("test: ", test[0])
      test_dict = {'test_id': test[0],'pool_id': test[1], 'test_date': test[2],'process_date': test[3]}
      return_list.append(test_dict)

    return_json = jsonify(return_list)
    return return_json

# localhost:5000/api/view_pools : POST
@app.route('/api/view_pools', methods=['GET', 'POST'])
def view_pools():
  print("begin view pools")

  print("request: ", str(request))
  if request.method == 'POST':
    print("begin if request")

    if request.form['pool_status'] == "ALL":
      pool_status = None
    else:
      pool_status = request.form['pool_status']

    start_date = request.form['start_date'] if request.form['start_date'] else None
    end_date = request.form['end_date'] if request.form['end_date'] else None
    
    processed_by = request.form['processed_by'] if request.form['processed_by'] else None
  

    print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('view_pools', [start_date, end_date, pool_status, processed_by])

    cur.execute("select * from view_pools")
    rv = cur.fetchall()
    print("return value: ", rv)
    cur.close()

    return_list = [
    { 'pool_id': 'Pool ID', 'test_ids': 'Test IDs', 'date_processed': 'Date Processed','processed_by':'Processed By', 'pool_status': 'Pool Status'}]
    
    for pool in rv:
      print("test: ", pool[0])
      pool_dict = {'pool_id': pool[0],'test_ids': pool[1], 'date_processed': pool[2],'processed_by': pool[3]}
      return_list.append(pool_dict)

    return_json = jsonify(return_list)
    return return_json

# localhost:5000/api/create_pool : POST
@app.route('/api/create_pool', methods=['GET', 'POST'])
def create_pool():
  # select query to choose from needed
  #add to pool procedure is executed simultaneously & subsequently

  print("request: ", str(request))
  if request.method == 'POST':
    # print("begin if request")
    pool_id = request.form['pool_id']
    # print("username: ", username)
    test_ids = request.form['test_ids']
    # print(email)
    test_id1 = test_ids[0]
    

    # print("before procedure call")

    cur = mysql.connection.cursor()
    cur.callproc('create_pool', [pool_id, test_id1])

    if len(test_ids) > 1:
      for i in range(1,len(test_ids) - 1):
        cur.callproc('assign_test_to_pool',[pool_id, test_ids[i]])

    # cur.execute("select * from User where fname = 'Ema'")
    # value = cur.fetchone()
    # print("return value: ", value)
    cur.close()
    #account for when invalid registration
    return "you did it"