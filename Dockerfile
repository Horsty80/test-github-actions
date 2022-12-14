# Dockerfile

# Use a Node 18 base image
FROM node:18-alpine as base
# Install pnpm globaly
RUN npm install -g pnpm

FROM base AS dependencies
# Set the working directory to /app inside the container
WORKDIR /app
# Copy pnpm files
COPY package.json pnpm-lock.yaml ./
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN pnpm i --frozen-lockfile

FROM base AS build
# Set the working directory to /app inside the container
WORKDIR /app
# Copy all app
COPY . ./
# Get back dependencies
COPY --from=dependencies /app/node_modules ./node_modules
# Build the app
RUN pnpm build
# Clean up docker
RUN pnpm prune --prod

FROM nginx:stable-alpine AS deploy
# Move app to html directory for nginx redirection
COPY --from=build /app/dist /usr/share/nginx/html 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]