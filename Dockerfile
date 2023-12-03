# Use the official Node.js image
FROM node:16

# Create a working directory
WORKDIR /app

# Copy the project files to the working directory
COPY package.json ./
COPY package-lock.json ./
COPY src ./

# Install the project dependencies
RUN npm install
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Node.js application
CMD ["node", "dist/index.js"]