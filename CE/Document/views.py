from .models import Document
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import *
from django.shortcuts import get_object_or_404
from rest_framework import status
from AdvisorInfo.models import AdvisorData
from Document.models import *
from Queue.models import *
import datetime

from io import BytesIO
from django.core.files import File


class adddocument(APIView):
    def post(self, request):
        print(request.data)
        if Queue.objects.filter(user=request.user, id=request.data['id']):
            Dc = Document(
                topic=request.data['topic'],
                end_date=datetime.datetime.strptime(request.data['end_date'], "%Y-%m-%d").date(),
                start_date=datetime.datetime.strptime(request.data['start_date'], "%Y-%m-%d").date(),
                user=request.user,
                queue=get_object_or_404(Queue, id=request.data['id']),
                name=request.data['name'],
                description=request.data['description']
            )
            Dc.save()
            return Response(status=status.HTTP_201_CREATED, )

        elif Queue.objects.filter(name__user=request.user, id=request.data['id']):
            Dc = Document(
                topic=request.data['topic'],
                end_date=datetime.datetime.strptime(request.data['end_date'], "%Y-%m-%d").date(),
                start_date=datetime.datetime.strptime(request.data['start_date'], "%Y-%m-%d").date(),
                user=request.user,
                queue=get_object_or_404(Queue, id=request.data['id']),
                name=request.data['name'],
                description=request.data['description']
            )
            Dc.save()

            return Response(status=status.HTTP_201_CREATED, )


class addsubdoc(APIView):
    def post(self, request):
        if Document.objects.filter(user=request.user, id=request.data['id'], ):
            Sd = SubDoc(
                topic=request.data['topic'],
                user=request.user,
                doc=get_object_or_404(Document, id=request.data['id']),
                name=request.data['name'],
                description=request.data['description']
            )
            Sd.save()
        return Response(status=status.HTTP_201_CREATED)


class deletedocument(APIView):
    def post(self, request):
        Document.objects.filter(id=request.data['id_doc'], user=request.user, queue__id=request.data['id_queue']).delete()
        return Response(status=201)


class showdocument(APIView):
    def post(self, request):
        if request.data['user_type'] == 2 :
            document = Document.objects.filter(user=request.user)
            serializers = DocumentSerializer(document, many=True)
            return Response(serializers.data)

        elif request.data['user_type'] == 3 :
            document = Document.objects.filter(user=request.user)
            serializers = DocumentSerializer(document, many=True)
            return Response(serializers.data)

class getdocument(APIView):
    def post(self, request):
        if request.data['user_type']==2:
            name = get_object_or_404(AdvisorData,user=request.user)
            document = Document.objects.filter(name=name.first_name)
            serializers = DocumentSerializer(document, many=True)
            return Response(serializers.data)

        elif request.data['user_type']==3:
            print(request.user.first_name)
            document = Document.objects.filter(name=request.user.first_name)
            print(document)
            serializers = DocumentSerializer(document,many=True)
            print(serializers)
            return Response(serializers.data)

class showsubdocument(APIView):
    def post(self, request):
        subdocument = SubDoc.objects.filter(user=request.user, doc__id=request.data['id'])
        serializers = SubDocumentSerializer(subdocument, many=True)
        return Response(serializers.data)

class getsubdocument(APIView):
    def post(self, request):
        if request.data['user_type']==2:
            name = get_object_or_404(AdvisorData,user=request.user)
            subdocument = SubDoc.objects.filter(name=name.first_name, doc__id=request.data['id'])
            serializers = SubDocumentSerializer(subdocument, many=True)
            return Response(serializers.data)

        elif request.data['user_type']==3:
            print(request.data)
            subdocument = SubDoc.objects.filter(name=request.user.first_name, doc__id=request.data['id'])
            print(subdocument)
            serializers = SubDocumentSerializer(subdocument, many=True)
            print(serializers)
            return Response(serializers.data)

class file(APIView):
    def post(self, request):

        return Response(serializers.data)
