FROM mcr.microsoft.com/windows/servercore:ltsc2022

# Install Chocolatey
RUN powershell -Command \
    Set-ExecutionPolicy Bypass -Scope Process -Force; \
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; \
    iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# Install Node.js
RUN choco install nodejs -y

# Copy the application
WORKDIR /app
COPY . .

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
