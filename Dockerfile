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
ENV API_KEY=<your_API_KEY>
ENV AUTH_DOMAIN=<your_AUTH_DOMAIN>
ENV PROJECT_ID=<your_PROJECT_ID>
ENV STORAGE_BUCKET=<your_STORAGE_BUCKET>
ENV MESSAGING_SENDERID=<your_MESSAGING_SENDERID>
ENV APP_ID=<your_APP_ID>

# Expose port 8080
EXPOSE 8080

# Start the Cloud SQL Auth proxy and then your Node.js application
CMD ["sh", "-c", "/usr/local/bin/cloud_sql_proxy --address 0.0.0.0 --port 1234 <your_connection> & npm start"]
