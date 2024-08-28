# Livro Server

Um servidor HTTP simples para gerenciar uma lista de livros. Implementado em Python usando o módulo `http.server`.

## Funcionalidades

- **Adicionar um livro**: Envia uma requisição POST com título, autor e ano.
- **Remover um livro**: Envia uma requisição POST com a ação de deletar e o título do livro.

## Requisitos

- Python 3.x
- `cURL` (para testar o servidor)

## Instalação

1. **Clone o repositório**

2. **Verifique se o Python está instalado**:

   ```bash
   python --version
   ```

   Se não estiver instalado, baixe-o [aqui](https://www.python.org/downloads/).

## Executando o Servidor

1. Navegue até o diretório do projeto.

2. Execute o servidor:

   ```bash
   python book_server.py
   ```

   O servidor estará rodando na porta 5000.

## Testando o Servidor

### Adicionar um Livro

```bash
curl -X POST http://localhost:5000/ -H "Content-Type: application/json" -d '{"title":"1984", "author":"George Orwell", "year":1949}'
```

### Remover um Livro

```bash
    curl -X POST http://localhost:5000/ -H "Content-Type: application/json" -d '{"action":"delete", "title":"1984"}'

```
