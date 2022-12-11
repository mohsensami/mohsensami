from django.contrib import admin
from contacts.models import Contact


class ContactAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'subject')
    # prepopulated_fields = {'slug' : ('name',)}


admin.site.register(Contact, ContactAdmin)