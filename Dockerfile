# Step 1: Use a Node.js base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/backend

# Step 3: Copy package.json and package-lock.json to the container
COPY ./package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the backend code to the container
COPY . .

# Step 6: Expose the port the backend will run on (adjust this if needed)
EXPOSE 5000

# Step 7: Define the command to run the backend server
CMD ["npm", "start"]
