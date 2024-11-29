from rest_framework import viewsets
from .serializers import TaskSerializers
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializers
    queryset = Task.objects.all()
    