// const quotes = [
//     { text: "Life is short, make every moment count.", category: "Motivational" },
//     { text: "Knowledge is power.", category: "Educational" },
//     { text: "To be or not to be, that is the question.", category: "Philosophical" },
//     { text: "The only thing we have to fear is fear itself.", category: "Historical" },
//     { text: "I think, therefore I am.", category: "Philosophical" }
//   ];
    
//   function showRandomQuote(){

//     let quotesindex = Math.floor(Math.random()*quotes.length); 
//     let quote = quotes[quotesindex]; 
//     let displayquote=  document.getElementById("quoteDisplay")
//     displayquote.innerHTML = `${quote.text} - ${quote.category}`
//   }


//   document.getElementById("newQuote").addEventListener("click",showRandomQuote);

//   function addQuote(){
//     let newQuoteText = document.getElementById("newQuoteText").value; 
//     let newQuoteCategory = document.getElementById("newQuoteCategory").value; 

//     if(newQuoteText&&newQuoteCategory){
//         quotes.push({text: newQuoteText, category:newQuoteCategory }); 
//         document.getElementById('newQuoteText').value = '';
//         document.getElementById('newQuoteCategory').value = '';    }
//   }
//   function createAddQuoteForm() {
//     const formContainer = document.createElement('div');
  
//     const quoteInput = document.createElement('input');
//     quoteInput.setAttribute('id', 'newQuoteText');
//     quoteInput.setAttribute('type', 'text');
//     quoteInput.setAttribute('placeholder', 'Enter a new quote');
    
//     const categoryInput = document.createElement('input');
//     categoryInput.setAttribute('id', 'newQuoteCategory');
//     categoryInput.setAttribute('type', 'text');
//     categoryInput.setAttribute('placeholder', 'Enter quote category');
    
//     const addButton = document.createElement('button');
//     addButton.textContent = 'Add Quote';
//     addButton.onclick = addQuote;
    
//     formContainer.appendChild(quoteInput);
//     formContainer.appendChild(categoryInput);
//     formContainer.appendChild(addButton);
    
//     document.body.appendChild(formContainer);
//   }
  
//   createAddQuoteForm();


// let quotes = JSON.parse(localStorage.getItem('quotes')) || [
//   { text: "Life is short, make every moment count.", category: "Motivational" },
//   { text: "Knowledge is power.", category: "Educational" }
// ];

// function saveQuotes() {
//   localStorage.setItem('quotes', JSON.stringify(quotes));
// }

// function showRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   const quote = quotes[randomIndex];
//   document.getElementById('quoteDisplay').innerText = `${quote.text} - ${quote.category}`;
//   sessionStorage.setItem('lastQuote', JSON.stringify(quote));
// }

// document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// function addQuote() {
//   const newQuoteText = document.getElementById('newQuoteText').value;
//   const newQuoteCategory = document.getElementById('newQuoteCategory').value;
//   if (newQuoteText && newQuoteCategory) {
//     quotes.push({ text: newQuoteText, category: newQuoteCategory });
//     saveQuotes();
//     document.getElementById('newQuoteText').value = '';
//     document.getElementById('newQuoteCategory').value = '';
//   }
// }

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

// function exportToJsonFile() {
//   const dataStr = JSON.stringify(quotes, null, 2);
//   const blob = new Blob([dataStr], { type: 'application/json' });
//   const url = URL.createObjectURL(blob);
  
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'quotes.json';
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
//   URL.revokeObjectURL(url);
// }

// function importFromJsonFile(event) {
//   const fileReader = new FileReader();
//   fileReader.onload = function(event) {
//     const importedQuotes = JSON.parse(event.target.result);
//     quotes.push(...importedQuotes);
//     saveQuotes();
//     alert('Quotes imported successfully!');
//   };
//   fileReader.readAsText(event.target.files[0]);
// }

// createAddQuoteForm();

let quotes = JSON.parse(localStorage.getItem('quotes')) || [
  { text: "Life is short, make every moment count.", category: "Motivational" },
  { text: "Knowledge is power.", category: "Educational" }
];

let categories = [];
quotes.forEach(quote => {
  if (!categories.includes(quote.category)) {
    categories.push(quote.category);
  }
});

function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quoteDisplay').innerText = `${quote.text} - ${quote.category}`;
  sessionStorage.setItem('lastQuote', JSON.stringify(quote));
}

document.getElementById('newQuote').addEventListener('click', showRandomQuote);

function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    saveQuotes();
    updateCategories(newQuoteCategory);
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
  }
}

function updateCategories(newCategory) {
  if (!categories.includes(newCategory)) {
    categories.push(newCategory);
    const option = document.createElement('option');
    option.value = newCategory;
    option.textContent = newCategory;
    document.getElementById('categoryFilter').appendChild(option);
    saveCategories();
  }
}

function saveCategories() {
  localStorage.setItem('categories', JSON.stringify(categories));
}

function loadCategories() {
  const savedCategories = JSON.parse(localStorage.getItem('categories'));
  if (savedCategories) {
    categories = savedCategories;
    const categoryFilter = document.getElementById('categoryFilter');
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }
}

function filterQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  localStorage.setItem('selectedCategory', selectedCategory);
  const filteredQuotes = selectedCategory === 'all' ? quotes : quotes.filter(quote => quote.category === selectedCategory);
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = '';
  filteredQuotes.forEach(quote => {
    const div = document.createElement('div');
    div.textContent = `${quote.text} - ${quote.category}`;
    quoteDisplay.appendChild(div);
  });
}

function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
    importedQuotes.forEach(quote => {
      updateCategories(quote.category);
    });
  };
  fileReader.readAsText(event.target.files[0]);
}

function syncWithServer() {
  fetch('quotes.json')
    .then(response => response.json())
    .then(serverQuotes => {
      const newQuotes = serverQuotes.filter(serverQuote => !quotes.some(localQuote => localQuote.id === serverQuote.id));
      if (newQuotes.length > 0) {
        quotes.push(...newQuotes);
        saveQuotes();
        updateCategoriesWithServerData(newQuotes);
        document.getElementById('notification').innerText = 'New quotes synchronized from the server!';
      } else {
        document.getElementById('notification').innerText = 'No new quotes from the server.';
      }
    });
}

function updateCategoriesWithServerData(newQuotes) {
  newQuotes.forEach(quote => {
    if (!categories.includes(quote.category)) {
      categories.push(quote.category);
      const option = document.createElement('option');
      option.value = quote.category;
      option.textContent = quote.category;
      document.getElementById('categoryFilter').appendChild(option);
    }
  });
  saveCategories();
}

createAddQuoteForm();
loadCategories();
filterQuotes(); 

const savedCategory = localStorage.getItem('selectedCategory');
if (savedCategory) {
  document.getElementById('categoryFilter').value = savedCategory;
  filterQuotes();
}

setInterval(syncWithServer, 30000);
