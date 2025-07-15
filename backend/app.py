from flask import Flask, request, jsonify
import numpy as np
import joblib
import os
from flask_cors import CORS  # ⬅️ Import this

app = Flask(__name__)
CORS(app)  # ⬅️ Enable CORS


# Load model and scaler
model = joblib.load(os.path.join('model', 'svm_model.sav'))
scaler = joblib.load(os.path.join('model', 'scaler.sav'))

@app.route('/')
def home():
    return "Diabetes Prediction API is Running"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Expecting 8 features in order
        data = request.get_json()
        features = data.get('features')

        if not features or len(features) != 8:
            return jsonify({'error': 'Invalid input. Must provide 8 numerical features.'}), 400

        # Preprocess
        input_array = np.array(features).reshape(1, -1)
        input_scaled = scaler.transform(input_array)
        prediction = model.predict(input_scaled)

        result = 'Diabetic' if prediction[0] == 1 else 'Not Diabetic'

        return jsonify({'prediction': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 10000)))

