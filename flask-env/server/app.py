from flask import Flask, jsonify, render_template, request

from http_status import HttpStatus
# import pickle
from werkzeug.utils import secure_filename

app = Flask(__name__)
# model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/upload/', methods=['POST'])
def upload_and_predict():
    file = request.files['file']
    filename = secure_filename(file.filename)

    return jsonify(filename), HttpStatus.ok_200.value

if __name__ == '__main__':
    app.run(debug=True)