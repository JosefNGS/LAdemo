# Golang API Setup Guide
## Quick Start Guide for Go API Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Setup Documentation

**Service Owner**: Jonne Waselius (Backend Developer)  
**Contact**: Jonne@nordicglobalsolutions.com

---

## Quick Start

### Prerequisites

- **Go** (1.21+)
- **PostgreSQL** (14+)
- **Docker** (optional, for containerization)

### Setup Steps

1. **Install Go**:
   ```bash
   # macOS
   brew install go
   
   # Linux
   sudo apt-get install golang-go
   ```

2. **Create Go Project**:
   ```bash
   cd backend/golang-api
   go mod init bitnexus-api
   ```

3. **Create API Server**:
   ```go
   package main
   
   import (
       "net/http"
       "github.com/gorilla/mux"
   )
   
   func main() {
       r := mux.NewRouter()
       r.HandleFunc("/health", healthHandler).Methods("GET")
       http.ListenAndServe(":8080", r)
   }
   ```

4. **Run Server**:
   ```bash
   go run main.go
   ```

---

## Configuration

### Database Connection

**Environment Variables**:
- `DATABASE_URL` - PostgreSQL connection string
- `API_PORT` - API server port (default: 8080)

---

## Troubleshooting

### Server Not Starting

**Check**:
1. Go installed correctly
2. Dependencies installed (`go mod download`)
3. Port 8080 available
4. Database connection configured

---

**This setup guide gets you started with Golang API. For detailed implementation, see IMPLEMENTATION_GUIDE.md.**
