const unfollow = setInterval(()=>{
    const allElements = document.getElementsByClassName("_aacl _aaco _aacw _adda _aad6 _aade");
  	for (const el of allElements) {
      el.click();
      setTimeout(() => console.log('espera'), 1000);
      setTimeout(() => {
        const xpath = "//a[text()='Dejar de seguir']";
        const matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        matchingElement.click();
    },2000);
      setTimeout(() => console.log('espera'), 1000);
    }
}, 2000);

clearInterval(unfollow);
