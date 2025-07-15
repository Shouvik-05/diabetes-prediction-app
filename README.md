# 🩺 Diabetes Prediction App

A fullstack machine learning web application built using **React (frontend)** and **Flask (backend)** that predicts whether a person is diabetic based on 8 medical features using a trained SVM model.

---

![App Screenshot](https://user-images.githubusercontent.com/your-github-username/your-image-id.png) <!-- Replace with actual image URL -->

🚀 **Live Demo:** [https://your-live-site.vercel.app](https://your-live-site.vercel.app) <!-- Replace with actual deployed link -->

---

## 📁 Project Structure

```pgsql
diabetes-prediction-app/
├── backend/
│ ├── app.py
│ ├── model/
│ │ ├── svm_model.sav
│ │ └── scaler.sav
│ └── requirements.txt
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ ├── index.js
│ │ ├── App.css
│ │ ├── pages/
│ │ │ ├── Home.js
│ │ │ ├── About.js
│ │ │ ├── Contact.js
│ │ │ └── HowItWorks.js
│ └── package.json
├── README.md
└── .gitignore
```


---

## ⚙️ Technologies Used

### 🧠 Machine Learning
- `scikit-learn` (SVM, StandardScaler)
- `joblib` for model persistence

### 🔙 Backend
- `Flask` + `CORS`
- `Python 3.12`
- `/predict` POST API for model inference

### 🌐 Frontend
- `React`
- `React Router DOM` for multi-page support
- `Bootstrap` for styling

---

## 🔧 How to Run Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Shouvik-05/diabetes-prediction-app.git
cd diabetes-prediction-app
```
### 2. Start the Flask Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```
### 3. Start the React Frontend
```bash
cd ../frontend
npm install
npm start
```
# 🧪 Sample Input (For API Testing)
| Pregnancies | Glucose | BloodPressure  | SkinThickness  | Insulin | BMI | DiabetesPedigreeFunction  | Age | Prediction   |
|-------------|---------|----------------|----------------|---------|-----|---------------------------|-----|--------------|
| 2           | 85      | 60             | 20             | 90      | 23.5| 0.3                       | 29  | Not Diabetic |
| 6           | 148     | 72             | 35             | 0       | 33.6| 0.627                     | 50  | Diabetic     |


## You can test this by sending the following JSON to the backend API (/predict):

```json
{
  "features": [6, 148, 72, 35, 0, 33.6, 0.627, 50]
}
```
## Response:

```json
{
  "prediction": "Diabetic"
}
```
## And for a non-diabetic case:

```json
{
  "features": [1, 85, 66, 29, 0, 26.6, 0.351, 31]
}
```
## Response:

```json
{
  "prediction": "Not Diabetic"
}
```

# 🌱 Future Improvements
✅ Add form validation and loader animations

✅ Store Contact Us messages in database or email service

⏳ Add dark mode toggle

⏳ Deploy backend on Render or Railway

⏳ Add user authentication

# 👨‍💻 Author
Shouvik Bhattacharjee

