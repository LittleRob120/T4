const API_URL = "http://localhost:32831/cliente";

export async function listarClientes() {
    const resp = await fetch(`${API_URL}/clientes`);
    return resp.json();
}

export async function cadastrarCliente(cliente) {
    const resp = await fetch(`${API_URL}/cadastrar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
    });
    return resp.ok;
}

export async function excluirCliente(cliente) {
    const resp = await fetch(`${API_URL}/excluir`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
    });
    return resp.ok;
}

export async function atualizarCliente(cliente) {
    const resp = await fetch(`${API_URL}/atualizar`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
    });
    return resp.ok;
}

