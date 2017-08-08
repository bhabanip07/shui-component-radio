// Create a class for the element

class XProduct extends HTMLElement {
  

  constructor() {
    // Always call super first in constructor
    super();
	 
  var shadow = this.attachShadow({mode: 'open'});
    // Create a shadow root
	
    var label = document.createElement("label");
    var text = this.getAttribute('data-label');
    label.for = this.getAttribute('data-radioid');
	
	
    var radio = document.createElement("input");
    radio.type = "radio";
	
	radio.name = this.getAttribute('data-name');
	radio.themeClassName = `SHRadioButton--${this.getAttribute('data-scheme')}Scheme`;
    radio.disabled = this.getAttribute('data-disabled');
	radio.id = this.getAttribute('data-radioid');
	// radio.isTouchDevice = 'ontouchstart' in document.documentElement;
    radio.isLight = this.getAttribute('data-scheme') === 'light' ? true : false;
	radio.value = this.getAttribute('data-label');
	
	if(radio.disabled){
	radio.className = 'SHRadioButton';
	}
	else
	radio.className = 'SHRadioButton';
	
	
	label.appendChild(radio);
    label.appendChild(document.createTextNode(text));
	 
    shadow.appendChild(label);

  }
}

// Define the new element
customElements.define('sh-radio-button', XProduct);





