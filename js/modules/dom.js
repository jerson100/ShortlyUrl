import { ApiUrl } from "./Api.js";
import { copied } from "./clipboard.js";

export const frmSubmit = async () => {

    const frm = document.querySelector(".shorten-link__form");

    const links = document.querySelector('.shorten-link__links');

    frm.addEventListener('submit', async e =>{

        e.preventDefault();

        const url = frm[0].value;

        try {
            
            const data = await ApiUrl.generarURL(url);

            const newLink = linkEle(data);

            links.appendChild(newLink);

            frm[0].value = "";

        } catch (error) {
    
            console.error(error);

            alert('error'+error);

        }

    });

    links.addEventListener('click',e=>{
        console.log(e.target);
        if(e.target.tagName === 'BUTTON' && 
           e.target.classList.contains("btn")){

            const input = e.target
                           .parentElement
                           .firstElementChild
                           .nextElementSibling
            
            console.log(input)

            copied(input);

            e.target.textContent = 'copied';
            e.target.classList.add("btn--violet");

        }

    });

};

const linkEle = ({url, hashid}) => {

    const newLink = document.createElement('div');
    
    newLink.classList.add('shorten-link__link');
    
    newLink.innerHTML = `

        <div class="shorten-link__left">
        
            <div class="shorten-link__url-add">
                <a href="${url}" class="shorten-link__url-link" target="_blank">
                    ${url}
                </a>
                
            </div>

        </div>

        <div class="shorten-link__right">
        
            <div class="shorten-link__url-acort">
                <a href="https://rel.ink/${hashid}" class="shorten-link__url-link shorten-link__url-link--cyan" target="_blank">
                    https://rel.ink/${hashid}
                </a>
                <input type="text" value="https://rel.ink/${hashid}" style="transform: scale(0);"
            </div>

            <button class="btn btn--fill btn--b-5">copy</button>

        </div>

    `;

    return newLink;

};
