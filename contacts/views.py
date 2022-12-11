from django.shortcuts import render, redirect
from .forms import ContactForm
from django.contrib import messages


def contactView(request):
    form = ContactForm()
    contaxt = {'form': form}
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message sent successfully', 'success')
        else:
            messages.error(request, 'An error has occurred during sending message.')
        return redirect('contacts')
    return render(request, 'base.html', contaxt)
