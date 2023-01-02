from django.shortcuts import render
from rest_framework import generics
from .serializers import StudentSerializer


from .models import Student




class Stud(generics.ListCreateAPIView):
    queryset= Student.objects.all()
    serializer_class=StudentSerializer

class StudDel(generics.RetrieveAPIView,generics.UpdateAPIView,generics.DestroyAPIView):
         queryset=Student.objects.all()
         serializer_class=StudentSerializer




       
# Create your views here.


    