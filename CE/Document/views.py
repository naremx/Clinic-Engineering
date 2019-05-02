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
        print(678678678678678678)
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
        print(request.data)
        print(12312312343348284587748)
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
        print(request.data)
        print(222222222222222)
        Document.objects.filter(id=request.data['id_doc'], user=request.user, queue__id=request.data['id_queue']).delete()
        return Response(status=201)


class showdocument(APIView):
    def post(self, request):
        print(request.data)
        print(777777777)
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
            document = Document.objects.filter(user=request.user)
            serializers = DocumentSerializer(document,many=True)
            return Response(serializers.data)

class showsubdocument(APIView):
    def post(self, request):
        subdocument = SubDoc.objects.filter(user=request.user, doc__id=request.data['id'])
        serializers = SubDocumentSerializer(subdocument, many=True)
        return Response(serializers.data)

class getsubdocument(APIView):
    def post(self, request):
        if request.data['user_type']==2:
            print(222222222222222222222222222)
            name = get_object_or_404(AdvisorData,user=request.user)
            print(request.data['id'])
            print(name.first_name)
            subdocument = SubDoc.objects.filter(name=name.first_name, doc__id=request.data['id'])
            print(subdocument)
            serializers = SubDocumentSerializer(subdocument, many=True)
            print(serializers)
            return Response(serializers.data)

        elif request.data['user_type']==3:
            print(3333333333333333333333333333)
            subdocument = SubDoc.objects.filter(user=request.user, doc__id=request.data['id'])
            serializers = SubDocumentSerializer(subdocument, many=True)
            print(serializers)
            return Response(serializers.data)

class file(APIView):
    def post(self, request):
        print(request.data)
        print(request.user)
        user = User.objects.get(username=request.user)
        subdoc = SubDoc.objects.get(user__username=request.user, id=request.data['id'])
        print(user)
        print(subdoc)
        serializers = FileSerializer(subdoc, many=True)
        a = SuperFile.objects.all()
        print(a)

        SuperFile.objects.create(
            subdoc=subdoc,
            user=user,
        )
        file = SuperFile.objects.get(user__username=request.user, subdoc__id=request.data['id'])
        file.file.save(request.data['file']['name'], request.data['file'])
        return Response(serializers.data)
