import pandas as pd

df = pd.read_csv('crime_data_base.csv')
print(df[' PRIMARY DESCRIPTION'].unique())