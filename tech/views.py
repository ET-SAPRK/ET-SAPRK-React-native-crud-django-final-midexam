from django.shortcuts import render
from rest_framework import generics
from .serializers import TeacherSerializer


from .models import Teacher




class Tech(generics.ListCreateAPIView):
    queryset= Teacher.objects.all()
    serializer_class=TeacherSerializer

class TechDel(generics.RetrieveAPIView,generics.UpdateAPIView,generics.DestroyAPIView):
         queryset=Teacher.objects.all()
         serializer_class=TeacherSerializer




       
# Create your views here.


    