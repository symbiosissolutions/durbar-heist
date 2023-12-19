# Use an official Node.js runtime as a parent image
FROM node:18.12.1-alpine3.17 AS base

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY package*.json /app/

# Install any needed packages specified in package.json
RUN npm install --only=production

# Copy the current directory contents into the container at /app
COPY . /app

# Change ownership of /app to node user
RUN chown -R node:node /app

# Switch to the node user
USER node

# Generate prisma client
RUN npx prisma generate

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]