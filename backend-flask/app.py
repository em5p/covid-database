from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/api/agg_test_result', methods=['GET', 'POST'])
def aggregate_test_result():
  pass
