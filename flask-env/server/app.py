from flask import Flask, jsonify, render_template, request
from flask_cors import CORS, cross_origin
from http_status import HttpStatus

import os
# import pickle
from werkzeug.utils import secure_filename

BASE_DIR = os.path.dirname(__file__)
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'static/pdfs')
ALLOWED_EXTENSIONS = set(['pdf'])

app = Flask(__name__)
CORS(app)

# model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/upload/', methods=['POST'])
def upload_and_predict():
    file = request.files['file']
    filename = secure_filename(file.filename)
    file.save(os.path.join(UPLOAD_FOLDER, filename))

    # obj = data = ResumeParser('/static/pdfs/{}'.format(filename)).get_extracted_data()

    print({"filename": filename})
    return jsonify({"filename": filename}), HttpStatus.ok_200.value
    
if __name__ == '__main__':
    app.run(debug=True)