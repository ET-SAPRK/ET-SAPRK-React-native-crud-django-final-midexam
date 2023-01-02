from django.urls import path
from . import views

urlpatterns = [
    path("list-employee", views.Emp.as_view(), name="List-studente"),
    path("empdel/<int:pk>", views.EmpDel.as_view(), name="stud-del"),
]
