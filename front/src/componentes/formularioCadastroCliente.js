import React, { useState } from 'react';

export default function FormularioCadastroCliente({ onCadastrar, tema }) {
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onCadastrar) {
            onCadastrar({ nome, nomeSocial, email });
        }
        setNome('');
        setNomeSocial('');
        setEmail('');
    };

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome social"
                        value={nomeSocial}
                        onChange={e => setNomeSocial(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" style={{ background: tema }}>@</span>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group mb-3">
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        style={{ background: tema }}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}