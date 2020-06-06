import os

from flask import Flask, render_template, request
from flask_restful import abort, Api, fields, marshal_with, reqparse, Resource

from datetime import datetime
from http_status import HttpStatus
from models import Profile
import pickle
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './static/pdf_files'
ALLOWED_EXTENSIONS = set(['pdf'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# model = pickle.load(open('model.pkl', 'rb'))

class ProfileManager():
    last_id = 0
    def __init__(self):
        self.profiles = dict()

    def insert_response(self, profile):
        self.__class__.last_id += 1
        profile.id = self.__class__.last_id
        self.profiles[self.__class__.last_id] = profile

    def get_response(self, id):
        return self.profiles[id]

profile_fields = {
    'id': fields.Integer,
    'uri': fields.Url('model_response_endpoint'),
    'name': fields.String,
    'email': fields.String,
    'phone': fields.String,
    'university': fields.String,
    'languages': fields.String,
    'experience': fields.String,
    'os': fields.String,
    'programming_skills': fields.String,
    'db_skills': fields.String,
    'ml_skills': fields.String,
}

profile_manager = ProfileManager()

# class ModelResponse(Resource):
#     def abort_if_id_not_found(self, id):
#         if id not in model_response_manager.res:
#             abort(
#                 HttpStatus.not_found_404.value, 
#                 message="Model response {} not found".format(id))

#     @marshal_with(profile_fields)
#     def get(self, id):
#         self.abort_if_id_not_found(id)
#         return model_response_manager.get_response(id)

class ModelResponseList(Resource):

    @marshal_with(profile_fields)
    def post(self):
        # parser = reqparse.RequestParser()
        # parser.add_argument('file', 
        #     type=werkzeug.datastructures.FileStorage, 
        #     location='files', 
        #     required=True, 
        #     help='File has to be submitted!')

        # args = parser.parse_args()

        # file = args['file']

        # profile = Profile(
        #     name = None,
        #     email = None,
        #     phone = None,
        #     university = None,
        #     languages = None,
        #     experience = None,
        #     os = None,
        #     programming_skills = None,
        #     db_skills = None,
        #     ml_skills = None
        # )
        # profile_manager.insert_response(profile)

        # return profile, HttpStatus.created_201.value
        file = request['file']
        filename = secure_filename(file.filename)
        destination="/".join(UPLOAD_FOLDER)
        file.save(destination)
        
        response = {"message": "OK"}
        return response

@app.route('/')
def index():
    return render_template('index.html')


server = Api(app)
server.add_resource(ModelResponseList, '/api/upload/')
# server.add_resource(ModelResponse, '/api/res/<int:id>', endpoint='model_response_endpoint')

if __name__ == '__main__':
    app.run(debug=True)