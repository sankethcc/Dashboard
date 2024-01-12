from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId
import flask_cors
from flask_cors import CORS
from pymongo import MongoClient
app = Flask(__name__)

flask_cors.cross_origin(
    methods=['GET', 'POST', 'HEAD', 'OPTIONS', 'PUT', 'DELETE'],
    headers=None,
    supports_credentials=False,
    max_age=None,
    send_wildcard=True,
    always_send=True,
    automatic_options=False
)

CORS(app)

#---------------initializing database---------------------

client = MongoClient('mongodb://localhost:27017/')
mongo_client = client['Assignment']['Dashboard']

#---------------FUNCTION SUPPORTS API---------------------

def get_entity_data(field):
    querry = [
            { '$group': { '_id': f'${field}', 'count': { '$sum': 1 }}}, 
            {'$project': { 'name': '$_id', 'count': 1, '_id': 0 }}
        ]
    result = mongo_client.aggregate(querry)
    return result


#-----------------ROUTES for DASHBOARD--------------------
@app.route("/")
def home():
    return "BlackCoffer Backend"

@app.route('/get_intensity', methods=['GET'])
def intensity():
    data =[]
    categories = ["None",]
    data.append(len(list(mongo_client.find({"intensity": ""}))))

    for i in range(1,7):
        data.append(len(list(mongo_client.find({"intensity": {"$gte": i*10-10, "$lte": i*10}}))))
        categories.append(f"{i*10-10}-{i*10}")
    result = {
        'data':data,
        'categories':categories

    }
    return jsonify(result), 200

@app.route('/get_relevance_likelihood', methods=['GET'])
def area_chart():
    try:
        relevance =[]
        likelihood =[]
        categories = []
        for i in range(0,8):
            if i ==0:
                i=""
            relevance.append(len(list(mongo_client.find({"relevance": i}))))
            likelihood.append(len(list(mongo_client.find({"likelihood": i}))))
            categories.append(f"range {str(i if i!="" else "None")}")
        data ={
            "relevence":relevance,
            "likelihood":likelihood,
            "categories":categories,
        }
        return jsonify(data), 200
    except Exception as e:
        return jsonify({"error":"Error Occured", "exception":str(e)})

@app.route('/region_chart', methods=['GET'])
def region_chart():
    try:
        result = get_entity_data("region")
        country = {}

        for item in list(result):
            if item['name'] == "":
                continue
            country[item['name']] = item['count']
        return jsonify(country), 200
    except Exception as e:
        return jsonify({"error":"Error Occured", "exception":str(e)})

@app.route('/pestle_chart', methods=['GET'])
def pestle_chart():
    try:
        result = get_entity_data("pestle")
        country = {}

        for item in list(result):
            if item['name'] == "":
                continue
            country[item['name']] = item['count']
        return jsonify(country), 200
    except Exception as e:
        return jsonify({"error":"Error Occured", "exception":str(e)})

if __name__ == "__main__":
    app.run(debug=True)