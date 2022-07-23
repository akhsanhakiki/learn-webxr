from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

def serve():
    os.chdir(os.path.dirname(__file__))
    server = HTTPServer(('localhost', 8080), SimpleHTTPRequestHandler)
    server.serve_forever()

def main():
    serve()

if __name__ == '__main__':
    main()
