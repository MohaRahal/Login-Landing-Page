document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;

        // Exibe os dados no console (apenas para teste)
        console.log('Usuário:', user);
        console.log('Senha:', password);

        // Realize alguma ação local com os dados
        alert(`Usuário: ${user}\nSenha: ${password}`);
    });
});