FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copia el archivo package.json y package-lock.json
ADD package.json /src/package.json

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . /src

# Expone el puerto 8300
EXPOSE 8300

# Comando para iniciar la aplicación
CMD [ "node", "src/index.js" ]