# Group Call App

The main technology used here to pull off this project were React (A front-end library) and Django REST Framework (DRF is a Python based back-end framework).

## Resources

- [Heroku Deployment Guide](https://realpython.com/django-hosting-on-heroku/)
-[Add Buildpack](https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app)
-[Herku BuildPacks](https://devcenter.heroku.com/articles/buildpacks)


## Commands
```bash
pip freeze > requirements.txt
git push heroku main
python manage.py collectstatic --noinput
heroku config:set DISABLE_COLLECTSTATIC=1


# 
release: python manage.py migrate && python manage.py collectstatic --noinput && python manage.py runserver 
release: cd frontend && npm run build

```

