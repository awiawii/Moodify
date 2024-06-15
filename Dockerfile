# Base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Download and install Cloud SQL Auth proxy
RUN curl -o /usr/local/bin/cloud_sql_proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.11.3/cloud-sql-proxy.linux.amd64 \
    && chmod +x /usr/local/bin/cloud_sql_proxy

# Set environment variables
ENV PORT 8080
ENV API_KEY=AIzaSyBaaRRy-CDpf2vOAXKnZRTMuaYlBGZp3Hc
ENV AUTH_DOMAIN=casptone-of-ours.firebaseapp.com
ENV PROJECT_ID=casptone-of-ours
ENV STORAGE_BUCKET=casptone-of-ours.appspot.com
ENV MESSAGING_SENDERID=643160831565
ENV APP_ID=1:643160831565:web:838b20b4a4309fe08d0e04

# Expose port 8080
EXPOSE 8080

# Start the Cloud SQL Auth proxy and then your Node.js application
CMD ["sh", "-c", "/usr/local/bin/cloud_sql_proxy --address 0.0.0.0 --port 1234 casptone-of-ours:asia-southeast2:moodify-sql-instance & npm start"]
