# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY package*.json /app/

# Install any needed packages specified in package.json
RUN npm install

# Copy the current directory contents into the container at /app
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "run", "dev"]