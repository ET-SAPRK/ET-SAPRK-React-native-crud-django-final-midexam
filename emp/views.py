from django.shortcuts import render
from rest_framework import generics
from .serializers import EmployeeSerializer


from .models import Employee




class Emp(generics.ListCreateAPIView):
    queryset= Employee.objects.all()
    serializer_class=EmployeeSerializer

class EmpDel(generics.RetrieveAPIView,generics.UpdateAPIView,generics.DestroyAPIView):
         queryset=Employee.objects.all()
         serializer_class=EmployeeSerializer




       
# Create your views here.


    