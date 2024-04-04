# Use an official nginx image as the base image
FROM nginx:alpine

# Remove the default nginx configuration
RUN rm -rf /usr/share/nginx/html/*

# Copy the contents of your HTML project to the default nginx web root
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
