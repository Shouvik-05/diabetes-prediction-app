import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function Home() {
    const [formData, setFormData] = useState({
        Pregnancies: "",
        Glucose: "",
        BloodPressure: "",
        SkinThickness: "",
        Insulin: "",
        BMI: "",
        DiabetesPedigreeFunction: "",
        Age: "",
    });

    const [prediction, setPrediction] = useState("");

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputFeatures = Object.values(formData).map(Number);

        try {
            const response = await axios.post("https://diabetes-api-tdru.onrender.com/predict", {
            features: inputFeatures,
        });
        setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Prediction error:", error);
            setPrediction("Something went wrong.");
        }
    };

    return (
        <div className="App">
            <h1 className="mb-4">Diabetes Prediction</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div className="mb-3" key={key}>
                        <label className="form-label">{key}</label>
                        <input
                            type="number"
                            step="any"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                ))}
                <button type="submit" className="btn btn-primary">Predict</button>
            </form>
            {prediction && (
                <div
                    className="result"
                    style={{
                        backgroundColor: prediction === "Diabetic" ? "#f8d7da" : "#d4edda",
                        color: prediction === "Diabetic" ? "#721c24" : "#155724",
                        border: "1px solid",
                        borderColor: prediction === "Diabetic" ? "#f5c6cb" : "#c3e6cb",
                        padding: "10px",
                        marginTop: "15px",
                        borderRadius: "5px"
                    }}
                >
                    <strong>Result:</strong> {prediction}
                </div>
            )}

        </div>
    );
}

export default Home;
