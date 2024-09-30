import pymongo
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["testDB"]
collection = db["collection"]
data = pd.DataFrame(list(collection.find()))
if "_id" in data.columns:
    data.drop("_id", axis=1, inplace=True)
X = data.drop("target", axis=1)  
y = data["target"]
X = pd.get_dummies(X, drop_first=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LogisticRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred)}")
joblib.dump(model, "ml_model.pkl")
print("Model saved as 'ml_model.pkl'")
