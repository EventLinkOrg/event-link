FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Set the command to start the application
CMD ["npm", "start"]

# Expose the port on which the application will run
EXPOSE 3000