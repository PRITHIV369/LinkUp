import pandas as pd
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.neighbors import NearestNeighbors
import ast
import numpy as np
df = pd.read_csv('ML/dataset/dataset.csv')
df['user_data'] = df['user_data'].apply(ast.literal_eval)
mlb = MultiLabelBinarizer()
X = mlb.fit_transform(df['user_data'])
nbrs = NearestNeighbors(n_neighbors=3, algorithm='auto').fit(X)
new_user = ['reading', 'programming', 'traveling', 'gaming']
new_encoded = mlb.transform([new_user])
distances, indices = nbrs.kneighbors(new_encoded)
matched_users = df.iloc[indices[0]]
print("New User Data:", new_user)
print()
print("Matched Users (based on interests):")
print()
print(matched_users['user_data'])
print()
total_matches = 0
for matched in matched_users['user_data']:
    overlap = len(set(new_user) & set(matched))
    total_matches += overlap / len(new_user) 
accuracy = (total_matches / len(matched_users)) * 100
print(f"Accuracy (based on interest overlap): {accuracy:.2f}%")
