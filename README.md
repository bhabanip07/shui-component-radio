
Steps to test:

1] create a html page like master.html.
2] in  the header tag <head> put below two tag

"<link rel="stylesheet" href="https://rawgit.com/bhabanip07/shui-component-radio/master/shuiRadio.css">
<script src="https://rawgit.com/bhabanip07/shui-component-radio/master/shuiRadio.js" async></script>"

3] in the body of html page just put some of the 

"<body>
<div class="light group">
  <div class="component-wrapper">
    <sh-radio-button data-radioid="id1"
      data-scheme="light"
      data-name="selectionLight"
      data-label="First Siemens"
      data-disabled=true
    ></sh-radio-button>
  </div>
  <div class="component-wrapper">
    <sh-radio-button
      data-radioid="id2"
      data-scheme="light"
      data-name="selectionLight"
      data-label="Third one"
	 
    ></sh-radio-button>
  </div>
</div>
</body>"

4] now  this <sh-radio-button> web component is rendered as radio button inside a #shadow dom  with its own properties as per properties you associate in your master.html
