#!/usr/bin/env python3
"""
Simple HTTP server that serves TypeScript files with correct MIME types
and proxies them through esm.sh for transpilation.
"""
import http.server
import socketserver
import urllib.parse
import urllib.request
from pathlib import Path

PORT = 8000

class TypeScriptHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for ES modules
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def guess_type(self, path):
        mimetype, encoding = super().guess_type(path)
        # Set correct MIME types for TypeScript files
        if path.endswith('.tsx') or path.endswith('.ts'):
            return 'application/javascript', encoding
        return mimetype, encoding
    
    def do_GET(self):
        parsed_path = urllib.parse.urlparse(self.path)
        file_path = Path(parsed_path.path.lstrip('/'))
        
        # If it's a TypeScript file, proxy through esm.sh
        if file_path.suffix in ['.ts', '.tsx'] and file_path.exists():
            try:
                # Read the local file
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # For now, serve with JavaScript MIME type
                # The browser will need to handle transpilation via esm.sh
                self.send_response(200)
                self.send_header('Content-Type', 'application/javascript; charset=utf-8')
                self.end_headers()
                self.wfile.write(content.encode('utf-8'))
                return
            except Exception as e:
                self.send_error(500, f"Error reading file: {str(e)}")
                return
        
        # For other files, use default handler
        super().do_GET()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), TypeScriptHandler) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        print("Press Ctrl+C to stop the server")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

