const $ = selector => document.querySelector(selector);

class ModalWindow extends HTMLElement{
	constructor(){
		super();
		let buttons = this.querySelectorAll('modal-button');
		for(let button of buttons)
			if(button.hasAttribute('action') && button.getAttribute('action') == 'close')
				button.addEventListener('click', () => this.close());
	}

	connectedCallback(){
		this.style.position = 'fixed';
		this.style.top = '50%';
		this.style.left = '50%';
		this.style.transform = 'translate(-50%, -50%)';
		this.style.minWidth = '300px';
		this.style.minHeight = '150px';
		this.style.border = '1px solid black';
		this.style.borderRadius = '5px';
		this.style.display = 'none';
	}

	close(){
		this.style.animationName = 'fadeOut';
		this.style.animationDuration = '.5s';
		this.style.display = 'none';
	}

	show(){
		this.style.animationName = 'fadeIn';
		this.style.animationDuration = '.5s';
		this.style.display = 'block';
	}
}

class ModalTitle extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.style.display = 'block';
		this.style.padding = '5px';
		this.style.borderBottom = '1px solid silver';
		this.style.fontSize = '20px';
		this.style.fontWeight = 'bold';
	}
}

class ModalBody extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.style.display = 'block';	
		this.style.padding = '5px';
	}
}

class ModalButton extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.style.padding = '5px';
		this.style.color = 'white';
		this.style.background = '#4590cc';
		this.style.borderRadius = '5px';
		this.style.cursor = 'pointer';
	}
}

class ModalButtons extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.style.margin = '10px';
		this.style.display = 'block';
		this.style.textAlign = 'right';
	}
}

customElements.define('modal-window', ModalWindow);
customElements.define('modal-title', ModalTitle);
customElements.define('modal-body', ModalBody);
customElements.define('modal-button', ModalButton);
customElements.define('modal-buttons', ModalButtons);