release: python manage.py migrate && python manage.py collectstatic --noinput
release: cd frontend && npm run build
web: daphne group_call.asgi:application --port $PORT --bind 0.0.0.0 -v2
worker: python manage.py runworker channels --settings=group_call.settings -v2