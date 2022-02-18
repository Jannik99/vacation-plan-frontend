# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:17-alpine3.14 as build

# Set the working directory
RUN mkdir -p /srv/app
WORKDIR /srv/app

# Install Angular-CLI
RUN npm install -g @angular/cli

# Add the source code to app
COPY . .

# Get Java and Bash
RUN apk add --no-cache openjdk8 bash
RUN npm install @openapitools/openapi-generator-cli -g

# Install all the dependencies
RUN npm install

# Serve Angular application
CMD npm start

# # UNCOMMENT FOLLOWING IF YOU WANT TO RUN AS PRODUCTION SERVER
# # Stage 2: Serve app with nginx server

# # Use official nginx image as the base image
# FROM nginx:latest as server

# WORKDIR /

# # Copy the build output to replace the default nginx contents.
# COPY --from=build /srv/app/dist/vacation-plan-frontend /usr/share/nginx/html

# # Expose the port
# EXPOSE 80
