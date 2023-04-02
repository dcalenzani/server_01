from django.urls import path
from . import views

app_name = 'formulario'

urlpatterns = [
    # ex: /formulario/
    path('', views.IndexView.as_view(), name='index'),
    # ex: /formulario/5
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    # ex: /formulario/5/results/
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    # ex: /formulario/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
