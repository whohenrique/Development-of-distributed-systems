from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class BookRequestHandler(BaseHTTPRequestHandler):
    book_collection = []  # Lista para armazenar os livros
    
    def delete_book(self, data):
        title_to_remove = data.get('title')
        if not title_to_remove:
            self._send_response(400, {"status": "error", "message": "Título do livro não foi fornecido"})
            print("Erro: Título do livro não foi fornecido")
            return

        for book in self.book_collection:
            if book['title'] == title_to_remove:
                self.book_collection.remove(book)
                print(f"Livro removido: {title_to_remove}")
                self._send_response(200, {"status": "success", "message": "Livro removido com sucesso"})
                return

        self._send_response(404, {"status": "error", "message": "Livro não encontrado"})
        print("Erro: Livro não encontrado")

    def do_POST(self):
        print("Recebendo solicitação...")
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data)
            title = data.get('title')
            author = data.get('author')
            year = data.get('year')

            if not title or not author or not year:
                self._send_response(400, {"status": "error", "message": "Dados do livro incompletos"})
                print("Erro: Dados do livro incompletos")
                return

            self.book_collection.append({"title": title, "author": author, "year": year})
            print(f"Livro adicionado: {data}")
            self._send_response(200, {"status": "success", "message": "Livro adicionado com sucesso"})
            print("Resposta de sucesso enviada")

        except json.JSONDecodeError:
            self._send_response(400, {"status": "error", "message": "Erro ao processar JSON"})
            print("Erro ao processar JSON")

    def _send_response(self, status_code, response_body):
        self.send_response(status_code)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response_body).encode('utf-8'))

def run_server(server_class=HTTPServer, handler_class=BookRequestHandler, port=5000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Servidor está ativo na porta {port}...")
    httpd.serve_forever()

if __name__ == "__main__":
    run_server()
