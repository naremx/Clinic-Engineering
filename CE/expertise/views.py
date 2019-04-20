from rest_framework.views import APIView

import pandas as pd
class expertise(APIView):
    def get(self,request):
        exp = pd.read_csv("contact.csv")

        adid = exp['degree']

        count = 0
        for i in range(0,12):
            print(1)