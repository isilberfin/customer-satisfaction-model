import pickle
from flask import Flask, render_template, request, jsonify
import numpy as np
import pandas as pd

app= Flask(__name__)
pickled_model = pickle.load(open('model.pkl','rb'))

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/predict_api',methods=['POST'])
def predict_api():
    #data=request.json['data']
    print(request.json["data"])
    
    new_data = []
    for keyDict in request.json["data"]:
        new_data.append(int(request.json["data"][keyDict]) )
    print(new_data)
    a = np.array([new_data])
    output = pickled_model.predict(a)
    returnValue = ""
    if output[0] == 0:
        returnValue = "Neutral or Not Satisfied"
    else:
        returnValue = "Satisfied"
#print(output[0])
    return jsonify({"result":returnValue})




if __name__=="__main__":
    app.run(debug=True)


#
#

