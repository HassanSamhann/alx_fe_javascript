const quotes = [
    { text: "Life is short, make every moment count.", category: "Motivational" },
    { text: "Knowledge is power.", category: "Educational" },
    { text: "To be or not to be, that is the question.", category: "Philosophical" },
    { text: "The only thing we have to fear is fear itself.", category: "Historical" },
    { text: "I think, therefore I am.", category: "Philosophical" }
  ];
    
  function showRandomQuote(){

    let quotesindex = Math.floor(Math.random()*quotes.length); 
    let quote = quotes[quotesindex]; 
    let displayquote=  document.getElementById("quoteDisplay")
    displayquote.innerHTML = `${quote.text} - ${quote.category}`
  }


  document.getElementById("newQuote").addEventListener("click",showRandomQuote);

  function addQuote(){
    let newQuoteText = document.getElementById("newQuoteText").value; 
    let newQuoteCategory = document.getElementById("newQuoteCategory").value; 

    if(newQuoteText&&newQuoteCategory){
        quotes.push({text: newQuoteText, category:newQuoteCategory }); 
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';    }
  }
  function createAddQuoteForm() {
    const formContainer = document.createElement('div');
  
    const quoteInput = document.createElement('input');
    quoteInput.setAttribute('id', 'newQuoteText');
    quoteInput.setAttribute('type', 'text');
    quoteInput.setAttribute('placeholder', 'Enter a new quote');
    
    const categoryInput = document.createElement('input');
    categoryInput.setAttribute('id', 'newQuoteCategory');
    categoryInput.setAttribute('type', 'text');
    categoryInput.setAttribute('placeholder', 'Enter quote category');
    
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Quote';
    addButton.onclick = addQuote;
    
    formContainer.appendChild(quoteInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);
    
    document.body.appendChild(formContainer);
  }
  
  createAddQuoteForm();