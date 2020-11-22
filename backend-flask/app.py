from flask import Flask, request
app = Flask(__name__)

# Localhost:5000/
@app.route('/')
def hello_world():
    return 'Hello, World!'


# localhost:5000/api/agg_test_result : GET
@app.route('/api/agg_test_results')
def agg_test_results():
  """
  Arguments:
    Location:
    Housing:
    Testing Site:
    Date Processed Start, End

    {'location': location, 'housing': housing .....}
  """

  if request:

    location = request['location']
    # ...

    # Plug that into mysql
    # Dictionary of tuples
    # {total : (number, percent), positive : (number, percent)}
    return_json = jsonify()
    return return_json
  pass
