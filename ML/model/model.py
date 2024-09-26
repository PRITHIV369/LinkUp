# import pandas as pd
# from sklearn.neighbors import KNeighborsClassifier
# from sklearn.preprocessing import MultiLabelBinarizer, LabelEncoder
# import numpy as np
# data = {
#     "interest": [
#         "['Healthcare', 'Music', 'Cooking']",
#         "['Gaming', 'Art', 'Human Resources']",
#         "['Gaming', 'Sales', 'Cooking']",
#         "['Healthcare', 'Gardening', 'Reading']",
#         "['Sales', 'Reading', 'Finance']",
#         "['Traveling', 'Music', 'Science']",
#         "['Gaming', 'Sales', 'Cooking']",
#     ],
#     "city": ["Jaipur", "Kolkata", "Chennai", "Kolkata", "Hyderabad", "Chennai","Chennai"],
#     "about": [
#         "['Analytical Skills', 'Innovative Mindset', 'Networking Skills']",
#         "['Attention to Detail', 'Analytical Skills', 'Problem Solving']",
#         "['Innovative Mindset', 'Strong Communication', 'Teamwork']",
#         "['Attention to Detail', 'Leadership', 'Adaptability']",
#         "['Adaptability', 'Creative Thinking', 'Leadership']",
#         "['Teamwork', 'Problem Solving', 'Creative Thinking']",
#         "['Teamwork', 'Problem Solving', 'Creative Thinking']",
#     ],
#     "personality_trait": ["Analytical", "Creative", "Pragmatic", "Pessimistic", "Empathetic", "Ambivert","Pragmatic"],
# }
# df = pd.DataFrame(data)
# mlb_interest = MultiLabelBinarizer()
# mlb_about = MultiLabelBinarizer()
# le_personality = LabelEncoder()
# df['interest'] = df['interest'].apply(eval)
# df['about'] = df['about'].apply(eval)
# interest_binarized = mlb_interest.fit_transform(df['interest'])
# about_binarized = mlb_about.fit_transform(df['about'])
# personality_binarized = le_personality.fit_transform(df['personality_trait']).reshape(-1, 1)
# features = pd.DataFrame(interest_binarized, columns=mlb_interest.classes_)
# features = features.join(pd.DataFrame(about_binarized, columns=mlb_about.classes_))
# features['city'] = LabelEncoder().fit_transform(df['city'])
# features['personality_trait'] = personality_binarized
# weight_factor = 2  
# weighted_features = np.concatenate([features.values] + [features.values] * (weight_factor - 1), axis=0)
# knn = KNeighborsClassifier(n_neighbors=min(5, len(df)))  
# knn.fit(weighted_features, np.arange(len(weighted_features)))  
# new_user = {
#     "interest": ["Gaming", "Cooking"],
#     "city": "Chennai",
#     "about": ["Teamwork", "Problem Solving"],
#     "personality_trait": "Pragmatic",
# }
# new_user_interest_binarized = mlb_interest.transform([new_user['interest']])
# new_user_about_binarized = mlb_about.transform([new_user['about']])
# new_user_city = LabelEncoder().fit(df['city']).transform([new_user['city']])
# new_user_personality = le_personality.transform([new_user['personality_trait']])
# new_user_features = pd.DataFrame(new_user_interest_binarized, columns=mlb_interest.classes_)
# new_user_features = new_user_features.join(pd.DataFrame(new_user_about_binarized, columns=mlb_about.classes_))
# new_user_features['city'] = new_user_city[0]
# new_user_features['personality_trait'] = new_user_personality[0]
# new_user_weighted = np.concatenate([new_user_features.values] + [new_user_features.values] * (weight_factor - 1), axis=0)
# matches = knn.kneighbors(new_user_weighted, return_distance=False)
# matched_users_indices = matches[0].flatten()
# valid_indices = matched_users_indices[matched_users_indices < len(df)]
# matched_users = df.iloc[valid_indices]
# print("Matched Users:")
# print(matched_users[['interest', 'city', 'about', 'personality_trait']].reset_index(drop=True))
import pandas as pd
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.neighbors import NearestNeighbors
import numpy as np

# Sample dataset
data = {
    'user_data': [
        ['Healthcare', 'Music', 'Cooking', 'Analytical'],
        ['Gaming', 'Art', 'Human Resources', 'Creative'],
        ['Traveling', 'Science', 'Reading', 'Ambivert'],
        ['Gaming', 'Sales', 'Cooking', 'Pragmatic'],
        ['Healthcare', 'Gardening', 'Reading', 'Pessimistic'],
        ['Sales', 'Reading', 'Finance', 'Empathetic'],
    ]
}

# Create DataFrame
df = pd.DataFrame(data)

# One-hot encode interests and personality
mlb = MultiLabelBinarizer()
X = mlb.fit_transform(df['user_data'].apply(lambda x: x[:-1] + [x[-1]]))  # Include personality in encoding

# Using Nearest Neighbors to find matches
nbrs = NearestNeighbors(n_neighbors=3, algorithm='auto').fit(X)

# Example user with all four elements
example_user = ['Gaming', 'Sales', 'Cooking', 'Ambivert']
example_encoded = mlb.transform([example_user])

# Find matches
distances, indices = nbrs.kneighbors(example_encoded)

# Get matched users including their full data
matched_users = df.iloc[indices[0]]

# Display results
print("Example User Data:", example_user)
print("Matched Users (including all elements):")
print(matched_users['user_data'])
