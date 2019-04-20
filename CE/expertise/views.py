from rest_framework.views import APIView
from AdvisorInfo.models import *
from .models import Expertise
import pandas as pd


class expertise(APIView):
    def get(self, request):
        # print(os.getcwd())
        # print(glob.glob("*"))

        lnk = pd.read_csv("link.csv")
        adid = lnk['adid']
        bkid = lnk['bkid']

        avs = pd.read_csv("advisor.csv")
        adname = avs['adname']
        adnameid = avs['adnameid']

        exp = pd.read_csv("expertise.csv")
        bookid = exp['bookid']
        expertise = exp['expertise']

        contact = pd.read_csv("contact.csv")
        name = contact['name']
        advisor_id = 169
        adname_list = []
        expertise_list = []

        for item in lnk['adid']:
            a = advisor_name(avs, item)
            adname_list.append(a)
        for item in lnk['bkid']:
            a = expertise_name(exp, item)
            expertise_list.append(a)
        all = [{'adname': a, 'expname': b} for a, b in zip(adname_list, expertise_list)]
        for i in all:
            if AdvisorData.objects.filter(first_name=i['adname']):
                a = AdvisorData.objects.get(first_name=i['adname'])
                Expertise.objects.create(
                    advisor=a,
                    expertise=i['expname']
                )
            else:
                pass


def expertise_name(exp, item):
    count = 0
    for b in exp['bookid']:
        if b != item:
            count += 1
        else:
            return exp['expertise'][count]


def advisor_name(avs, item):
    count = 0
    for b in avs['adnameid']:
        if b != item:
            count += 1
        else:
            return avs['adname'][count]

# print(avs['adname'][])

# for b in avs['adnameid']:
#     if lnk['adid'] == avs['adnameid']:
#         avs['adname'] = lnk['adid']
#
# for c in lnk['bkid']:
#     for d in exp['bookid']:
#         if lnk['bkid']==exp['bookid']:
#             exp['expertise']=lnk['bkid']
#             for e in contact['name']:
#                 if avs['adname']==contact['name']:
