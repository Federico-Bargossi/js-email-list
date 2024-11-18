const emaiList = [];
const listaEmail = document.getElementById("lista-email");
let emailItems = "";

const renderEmail = () => {
    let verifica = 0;
    for (let i = 0; i < 10; i++) {
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((resp) => {
                const curEmail = resp.data.response;
                emaiList.push(curEmail);
                const card = `<li>${curEmail}</li>`;
                emailItems += card;
                verifica++;
                if (verifica === 10) {
                    listaEmail.innerHTML = emailItems;
                }

            })
    }
}

renderEmail();
