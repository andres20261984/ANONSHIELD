# Jacnanonmail (Ephemail Clone)

Jacnanonmail es una aplicación de correo temporal construida con **Node.js**, **Express** y **Redis**. Permite generar direcciones de correo electrónico efímeras que expiran automáticamente después de un período de tiempo.

## Características

- Generación de correos electrónicos temporales.
- Backend en Node.js con Express.
- Uso de Redis como base de datos en memoria.
- API REST sencilla.
- Preparado para contenedores Docker.

## Instalación local

### Requisitos

- Docker
- Docker Compose

### Instrucciones

1. Clona este repositorio:
   ```bash
   git clone <url-del-repo>
   cd jacnanonmail-main/backend
   ```

2. Inicia los servicios con Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. La API estará disponible en `http://localhost:3000`.

## API

### `GET /generate`

Genera un nuevo correo temporal. Devuelve un JSON con el correo y su ID.

## Licencia

MIT
