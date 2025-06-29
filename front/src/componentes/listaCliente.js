import React, { useState } from 'react';

export default function ListaCliente({ clientes, onExcluir, onAtualizar }) {
    const [showModal, setShowModal] = useState(false);
    const [clienteEditando, setClienteEditando] = useState(null);
    const [form, setForm] = useState({ nome: '', nomeSocial: '', email: '' });

    const abrirModal = (cliente) => {
        setClienteEditando(cliente);
        setForm({
            nome: cliente.nome,
            nomeSocial: cliente.nomeSocial,
            email: cliente.email
        });
        setShowModal(true);
    };

    const fecharModal = () => {
        setShowModal(false);
        setClienteEditando(null);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSalvar = () => {
        if (clienteEditando) {
            onAtualizar({ ...clienteEditando, ...form });
        }
        fecharModal();
    };

    const handleExcluirClick = (cliente) => {
        if (window.confirm(`Deseja realmente excluir o cliente "${cliente.nome}"?`)) {
            onExcluir(cliente);
        }
    };

    return (
        <div className="container-fluid">
            <h2>Lista de Clientes</h2>
            <ul className="list-group">
                {clientes && clientes.length > 0 ? (
                    clientes.map((cliente, idx) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={cliente.id || idx}>
                            <span>
                                <strong>{cliente.nome}</strong> ({cliente.nomeSocial}) - {cliente.email}
                            </span>
                            <div>
                                {onAtualizar && (
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => abrirModal(cliente)}
                                    >
                                        Atualizar
                                    </button>
                                )}
                                {onExcluir && (
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleExcluirClick(cliente)}
                                    >
                                        Excluir
                                    </button>
                                )}
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">Nenhum cliente cadastrado.</li>
                )}
            </ul>

            {/* Modal */}
            {showModal && (
                <div
                    className="modal show"
                    style={{
                        display: 'block',
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Atualizar Cliente</h5>
                                <button type="button" className="btn-close" onClick={fecharModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nome"
                                        value={form.nome}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nome Social</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nomeSocial"
                                        value={form.nomeSocial}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={fecharModal}>
                                    Cancelar
                                </button>
                                <button type="button" className="btn btn-primary" onClick={handleSalvar}>
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}