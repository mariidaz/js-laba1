function countWords() {
    const text = document.getElementById("textInput").value.trim();
    const outputt = document.getElementById("wordCount");
    
    if (text === "") {
        outputt.textContent = "Кількість слів: 0";
        return;
    }
    
    const words = text.split(/\s+/).filter(word => word.length > 0);
    outputt.textContent = `Кількість слів: ${words.length}`;
}
