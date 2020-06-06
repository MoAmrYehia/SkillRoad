from flask import Flask, jsonify, render_template, request
from flask_cors import CORS, cross_origin
from http_status import HttpStatus

# import nltk
import os
# import pickle
from pyresparser import ResumeParser
from werkzeug.utils import secure_filename

# PARENT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
BASE_DIR = os.path.dirname(__file__)
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'static/pdfs')
ALLOWED_EXTENSIONS = set(['pdf'])

# print(os.path.join(PARENT_DIR, 'nltk_data/corpora'))
# nltk.download('stopwords', download_dir=os.path.join(PARENT_DIR, 'nltk_data/corpora'))
# nltk.data.path.append(os.path.join(BASE_DIR, 'nltk_data'))

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

    obj = data = ResumeParser('/static/pdfs/{}'.format(filename)).get_extracted_data()

    print({"filename": obj})
    return jsonify({"filename": obj}), HttpStatus.ok_200.value
    
if __name__ == '__main__':
    app.run(debug=True)