class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = '';

    for (let i = 0; i < searchWord.length; i++) {
      prefix += searchWord[i];

      // Filter products that start with the current prefix
      const suggestions = this.products.filter(product => product.startsWith(prefix));

      // Take only the first 3 suggestions
      result.push(suggestions.slice(0, 3));
    }

    return result;
  }
}

// Example Usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mousepad";

const system = new SearchSuggestionSystem(products);
const suggestions = system.getSuggestions(searchWord);

console.log(suggestions);

