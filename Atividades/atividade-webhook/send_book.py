import requests
import json

def add_book(title, author, year):
    endpoint = "http://localhost:5000/"
    headers = {"Content-Type": "application/json"}
    data = {
        "title": title,
        "author": author,
        "year": year
    }
    
    response = requests.post(endpoint, headers=headers, data=json.dumps(data))
    
    if response.status_code == 200:
        print("Resposta do servidor:", response.json())
    else:
        print(f"Erro {response.status_code}: {response.text}")

def delete_book(title):
    endpoint = 'http://localhost:5000'
    headers = {'Content-Type': 'application/json'}
    data = {
        "action": "delete",
        "title": title
    }

    response = requests.post(endpoint, headers=headers, data=json.dumps(data))

    if response.status_code == 200:
        print("Operação bem-sucedida:", response.json().get("message"))
    elif response.status_code == 404:
        print("Erro: Livro não encontrado.")
    else:
        print(f"Erro {response.status_code}: {response.json().get('message')}")

if __name__ == "__main__":
    book_title = input("Informe o título do livro a ser excluído: ")
    delete_book(book_title)
