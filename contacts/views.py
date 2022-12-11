from django.shortcuts import render
from .forms import ContactForm


def contactView(request):
    form = ContactForm()
    contaxt = {'form': form}
    return render(request, 'base.html', contaxt)
