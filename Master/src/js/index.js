// Data for the items with styled and formatted details
const itemData = {
    "Keywords": `
     `,
    "Bandit": `
    <h2>Bandit</h2>
    <p>Blue battle icons flipped by defending characters with <strong>Bandit</strong> have no effect.</p>
     `,
    "Bold": `
    <h2>Bold</h2>
    <p>A character with <strong>Bold X</strong> flips <strong>additional battle cards</strong> during an attack.</p>
    <ol>
    Example: If a character has <strong>Bold 2</strong>, it flips <strong>2 extra cards</strong> on top of the standard 2 cards during its attack.
</ol>
<br>
<p><h2>Rulings</h2></p>
<ol>
    <li><b>What happens if a character has more than one instance of Bold or Tough?</b></li>
    <ul>Each Bold or Tough ability works. For example, if a creature with Bold 1 got a Weapon that gave it Bold 2, it would flip 3 additional cards when attacking.</ul>
    <br>
    <li><b>There's now an upgrade that says "Opponents cannot have more than Bold 2" or something to that effect. Mechanically, 3 instances of Bold 2 have worked the same as Bold 6. It hasn't been explicitly said that Bold and Tough stack just like Pierce, so does it?</b></li>
    <ul>Yes. Bold, Tough, Pierce, and other keywords with numerical values do stack.</ul>
</ol>
  `,
    "Item 4": `
    <h2>Item 4 Details</h2>
    <p>Information for <strong>Item 4</strong> is displayed here.</p>
    <p style="color: red;">This text is styled inline.</p>
  `,
    "Item 5": `
    <h2>Item 5 Details</h2>
    <p>Learn more about <strong>Item 5</strong> with this text.</p>
    <ol>
      <li>Step 1</li>
      <li>Step 2</li>
      <li>Step 3</li>
    </ol>
  `,
};

// Function to display details with styled content
function showDetails(itemName) {
    const detailsText = document.getElementById('details-text');
    detailsText.innerHTML = itemData[itemName] || "<p>No details available.</p>";
}

// Populate the scrollable list dynamically
function populateList() {
    const list = document.querySelector('.scrollable-list ul');
    for (const itemName in itemData) {
        const listItem = document.createElement('li');
        listItem.textContent = itemName;
        listItem.onclick = () => showDetails(itemName);
        list.appendChild(listItem);
    }
}

// Initialize the list when the page loads
document.addEventListener('DOMContentLoaded', populateList);
