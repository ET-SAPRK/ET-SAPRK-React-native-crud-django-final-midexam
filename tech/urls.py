from django.urls import path
from . import views

urlpatterns = [
    path("list-tech", views.Tech.as_view(), name="List-teacher"),
    path("techDel/<int:pk>", views.TechDel.as_view(), name="teacher-del"),
]
