from django.urls import path
from . import views

urlpatterns = [
    path("list-student", views.Stud.as_view(), name="List-studente"),
    path("studel/<int:pk>", views.StudDel.as_view(), name="stud-del"),
]
