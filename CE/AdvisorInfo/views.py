from .models import AdvisorData

def advisor(request):
    p = AdvisorData(
        first_name='',
        last_name='',
        email='',
        department='',
        expertise='',
        address='',
        telephone='',
        tax_num='',
        gender=''
    )
    p.save()
