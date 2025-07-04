# usa node y una versión LTS ligera
FROM node:18-alpine

# carpeta de trabajo
WORKDIR /usr/src/app

# copiar todo
COPY package*.json ./

# instala dependencias
RUN npm install

# copiar archivos nuevamente luego de instalación de modulos
COPY . .

# abrir puerto 3000
EXPOSE 3000

# inciar con npm
CMD [ "npm", "start" ]
