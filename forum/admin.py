from django.contrib import admin
from .models import Post
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.admin import UserAdmin as AuthUserAdmin
from .models import User
# Register your models here.
admin.site.register(Post)

class MyUserCreationForm(UserCreationForm):
	def clean_username(self):
		username = self.cleaned_data["username"]
        try:
        	User._default_manager.get(username=username)
        except User.DoesNotExist:
            return username
        raise forms.ValidationError(self.error_messages['duplicate_username'])
 
class Meta(UserCreationForm.Meta):
	model = User
 
 
class UserAdmin(AuthUserAdmin):
	create_form_class = UserCreationForm
    add_form = MyUserCreationForm
    update_form_class = UserChangeForm