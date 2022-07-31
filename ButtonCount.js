class ButtonCount extends HTMLElement {

        // <style> output {color: red;} button {background: green;} </style>
        constructor() {
            super();


            let btn = document.createElement('button');
            btn.innerHTML = 'Times Clicked : ';

            let count = document.createElement('output');
            count.textContent = 0;

            btn.append(count);
            // add the slot in
            let slot = document.createElement('slot');
            btn.append(slot);

            // Update the count when the button is clicked
            btn.addEventListener('click', () => {
                let currVal = Number(count.textContent);
                count.textContent = currVal + 1;
            });
            // Attach and open up shadow tree and add the button to it
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.append(btn);
        }
    }

    // Define the custom element in the registry
    customElements.define('button-count', ButtonCount);