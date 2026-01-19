
## 📌 Descripción

Este repositorio contiene el **frontend** de la aplicación _Acme Tasks_. Es una aplicación HTML/JS muy simple que consulta al backend para mostrar:

- Estado del backend
- Lista de tareas

El objetivo es que tú puedas centrarte en la parte DevOps: **Docker, Helm, CI/CD, Kubernetes, Ansible y scripting.**

## 📁 Estructura del repositorio

Código

```
frontend-app/
  src/
    index.html
    app.js
  Dockerfile
  helm/
    Chart.yaml
    values.yaml
    values-dev.yaml
    templates/
      _helpers.tpl
      deployment.yaml
      service.yaml
      ingress.yaml
  .github/
    workflows/
      ci.yml        # lo implementas tú
      cd.yml        # lo implementas tú
  .gitignore
  README.md
```

## 🧪 Funcionalidad

El frontend:

- Se sirve con **nginx**
- Llama al backend en `/api/health` y `/api/tasks`
- Muestra el estado del backend
- Lista las tareas devueltas por la API

## 🐳 Docker

Build local:

bash

```
docker build -t frontend:dev .
```

Run local:

bash

```
docker run -p 8080:80 frontend:dev
```

## ⎈ Helm

Despliegue manual:

bash

```
helm upgrade --install frontend ./helm -n acme-dev
```

## 🔄 CI/CD

Este repo **no contiene lógica de CI/CD**, sino que:

- `ci.yml` debe llamar a tu reusable CI del repo `platform-ci-cd`
- `cd.yml` debe llamar a tu reusable CD del repo `platform-ci-cd`

Tu trabajo como DevOps es implementarlos.

## 🧰 Requisitos previos

- Kubernetes local
- Registry local
- Helm
- GitHub Actions configurado
