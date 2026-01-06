# Organize project into frontend/ and backend/ folders

# Create directories
New-Item -ItemType Directory -Force -Path "frontend" | Out-Null
New-Item -ItemType Directory -Force -Path "backend" | Out-Null

Write-Host "Moving frontend files..."

# Move frontend files
Move-Item -Path "src" -Destination "frontend\src" -Force
Move-Item -Path "index.html" -Destination "frontend\index.html" -Force
Move-Item -Path "docs.html" -Destination "frontend\docs.html" -Force
Move-Item -Path "manifesto.html" -Destination "frontend\manifesto.html" -Force
Move-Item -Path "public" -Destination "frontend\public" -Force
Move-Item -Path "build.js" -Destination "frontend\build.js" -Force
Move-Item -Path "server.js" -Destination "frontend\server.js" -Force
Move-Item -Path "server.py" -Destination "frontend\server.py" -Force

Write-Host "Moving backend files..."

# Move backend files
Move-Item -Path "netlify" -Destination "backend\netlify" -Force

Write-Host "Done! Files organized."

