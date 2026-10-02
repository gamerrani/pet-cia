# trabalho-engenharia-software-2026
Trabalho de clínica veterinária do Técnico em Informática, segundo semestre de 2026.
https://www.figma.com/design/vycgmrAmdcp3CUc3rcnZnU/Sem-t%C3%ADtulo?node-id=0-1&t=xtN04bufQyUgCyt9-1
https://mermaid.ai/app/projects/5af26ac1-c26f-4aac-97f1-bbe63ed1c96e/diagrams/5cf36d64-ed5e-4621-9001-e74547e528c3/share/invite/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudElEIjoiNWNmMzZkNjQtZWQ1ZS00NjIxLTkwMDEtZTc0NTQ3ZTUyOGMzIiwiYWNjZXNzIjoiRWRpdCIsInB1cnBvc2UiOiJzaGFyZS1pbnZpdGUiLCJpYXQiOjE3OTA5NjIzMjUsImV4cCI6MTc5MzU1NDMyNX0.sCg4lyyKvp5irjUoX7oatxddKvLnNTTeaVFcogoqeAU?entryPoint=share-modal

```mermaid
flowchart TD
%% atores
cliente["cliente"]
garcom["garcom"]

%% acoes
subgraph sistema
pedir["pedir comida"]
vinho["pedir vinho"]
end


cliente--"faz pedido"---comida
garcom--"recebe o pedido"---comida

vinho-."extende".-> comida
 
```
## diagrama de classe
### diagrama de classe
```mermaid
classDiagram
class veterinario{
    %% atributos caracteristicas que serao
    %% armazenadas no sistema
    -cpf:string
    %% metodos: acoes que serao desempenhadas
    %% por essa entidade no sistema
+darcpf()string
}

```



