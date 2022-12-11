from django.shortcuts import render, redirect
from .forms import ContactForm


def contactView(request):
    form = ContactForm()
    contaxt = {'form': form}
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('contacts')
    return render(request, 'base.html', contaxt)
