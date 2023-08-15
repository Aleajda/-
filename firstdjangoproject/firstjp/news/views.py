from django.shortcuts import render, redirect
from .models import XZ
from .forms import XZForm

def news_home(request):
    news = XZ.objects.order_by('-date')[:2]
    return render(request, "news/news_home.html", {'news': news})

def create_news(request):
    error = ""
    if request.method == "POST":
        form = XZForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('news_home')
        else:
            error: error = 'Ошибка заполнения'

    form = XZForm()

    data = {
        'form': form,
        'error': error
    }

    return render(request, 'news/create_news.html', data)

