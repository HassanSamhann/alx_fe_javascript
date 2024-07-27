const quotes = [
    { text: "Life is short, make every moment count.", category: "Motivational" },
    { text: "Knowledge is power.", category: "Educational" },
    { text: "To be or not to be, that is the question.", category: "Philosophical" },
    { text: "The only thing we have to fear is fear itself.", category: "Historical" },
    { text: "I think, therefore I am.", category: "Philosophical" }
  ];
    
  function showRandom(){

    let quotesindex = Math.floor(Math.random()*quotes.length); 
    let quote = quotes[quotesindex]; 
    document.getElementById("quoteDisplay").innerText = `${quote.text} - ${quote.category}` ;  
  }


  document.getElementById("newQuote").addEventListener("click",showRandom);

  function addQuote(){
    let newQuoteText = document.getElementById("newQuoteText").value; 
    let newQuoteCategory = document.getElementById("newQuoteCategory").value; 

    if(newQuoteText&&newQuoteCategory){
        quotes.push({text: newQuoteText, category:newQuoteCategory }); 
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';    }
  }
