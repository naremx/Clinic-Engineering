from rest_framework.permissions import BasePermission

class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.user_type==1)
class IsAdvisor(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.user_type==2)
class IsUser(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.user_type==3)

