from flask import Flask, render_template
from flask_restful import abort, Api, fields, marshal_with, reqparse, Resource

from datetime import datetime
from http_status import HttpStatus
from models import ModelResponseModel
import pickle
from pytz import utc

app = Flask(__name__)
# model = pickle.load(open('model.pkl', 'rb'))

class ModelResponseManager():
    last_id = 0
    def __init__(self):
        self.res = dict()

    def insert_response(self, model_response):
        self.__class__.last_id += 1
        model_response.id = self.__class__.last_id
        self.res[self.__class__.last_id] = model_response

    def get_response(self, id):
        return self.res[id]

model_response_fields = {
    'id': fields.Integer,
    'uri': fields.Url('model_response_endpoint'),
    'creation_date': fields.DateTime,
    'output': fields.String,
}

model_response_manager = ModelResponseManager()

class ModelResponse(Resource):
    def abort_if_id_not_found(self, id):
        if id not in model_response_manager.res:
            abort(
                HttpStatus.not_found_404.value, 
                message="Model response {} not found".format(id))

    @marshal_with(model_response_fields)
    def get(self, id):
        self.abort_if_id_not_found(id)
        return model_response_manager.get_response(id)

class ModelResponseList(Resource):
    @marshal_with(model_response_fields)
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('output', type=str, required=True, help='Output cannot be blank!')
        args = parser.parse_args()
        model_response = ModelResponseModel(
            creation_date=datetime.now(utc),
            output=args['output'],
        )
        model_response_manager.insert_response(model_response) 
        return model_response, HttpStatus.created_201.value

@app.route('/')
def home():
    return render_template('index.html')

server = Api(app)
server.add_resource(ModelResponseList, '/api/res/')
server.add_resource(ModelResponse, '/api/res/<int:id>', endpoint='model_response_endpoint')

if __name__ == '__main__':
    app.run(debug=True)