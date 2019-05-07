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
        from django.shortcuts import render
        import base64
        from django.conf import settings
        from django.core.files.base import ContentFile
        file = request.data['image']
        print(file)
        super_file = SuperFile.objects.create(
            user=User.objects.get(id=request.data['user']),
            subdoc=SubDoc.objects.get(id=request.data['id']),
        )
        SubDoc.objects.filter(id=request.data['id']).update(status='completed')
        file_name = file['uri'].split('/')[-1]
        super_file.file.save(file_name,ContentFile(base64.b64decode(file['base64'])),save=True)
        serializers = FileSerializer(super_file,context={'request':request})
        return Response(serializers.data,status=status.HTTP_200_OK)

class showfile(APIView):
    def post(self,request):
        show_file = SuperFile.objects.filter(subdoc__id=request.data['id'])
        serializers = FileSerializer(show_file, many=True)
        print(serializers)
        return Response(serializers.data)

# class confirm(APIView):
#     def post(self, request):
#         permission_classes = ()
#         decision = int(request.data['decision'])
#         print("show")
#         if decision != 1:
#             print(55555555)
#         else:
#             print(request.data)
#             SuperFile.objects.filter(id=request.data['id']).update(status='finished')
#
#             try:
#                 notification_list = Notification.objects.filter(user=queue.user)
#                 for notification in notification_list:
#                     notification.send_notification(
#                         message='you have received new file',
#                         # เพิ่มรายละเอียด queue ไหน
#                         title='NEW FILE RECEIVED',
#                         data={'status': 200},
#                     )
#             except:
#                 pass
#
#         return Response(status=200)
