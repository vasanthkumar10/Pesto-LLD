// ------------------------------------------------
// MEMENTO pattern
// ------------------------------------------------

// Originator -> the content provider or playground
class TextFile {
  constructor() {
    this.content = "";
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }

  createMemento() {
    return new Memento(this.content);
  }

  restore(memento) {
    this.content = memento.getState();
  }
}

// Memento -> Represents the exact saved snapshot
class Memento {
  constructor(content) {
    this.state = content;
  }

  getState() {
    return this.state;
  }
}

// caretaker -> manages undo and redo ops
class CodeEditor {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }

  save(memento) {
    this.history.push(memento);
    this.currentIndex = this.history.length - 1;
  }

  undo(file) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      file.restore(this.history[this.currentIndex]);
    }
  }

  redo(file) {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      file.restore(this.history[this.currentIndex]);
    }
  }
}

// editor
// const file = new TextFile();
// console.log(file.getContent());
// file.setContent("This is line 1");
// console.log(file.getContent());

// const vscode = new CodeEditor();
// vscode.save(file.createMemento());
// console.log(vscode);

// file.setContent("This is modified line 1");
// console.log(file.getContent());

// vscode.save(file.createMemento());
// console.log(vscode);

// vscode.undo(file);
// console.log(vscode);
// console.log(file.getContent());

// vscode.redo(file);
// console.log(vscode);
// console.log(file.getContent());

// testing
const file = new TextFile();
const vscode = new CodeEditor();

console.log("Initial text -> ", file.getContent());
file.setContent("This is LLD class day 3");
vscode.save(file.createMemento());
// console.log(file.getContent());
// console.log("-".repeat(50));
file.setContent("This is LLD class day 4");
vscode.save(file.createMemento());
// console.log(file.getContent());
// console.log("-".repeat(50));
file.setContent("This is LLD class day 5");
vscode.save(file.createMemento());
// console.log(file.getContent());
// console.log("-".repeat(50));

// console.log(vscode);

console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.undo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
vscode.redo(file);
console.log(file.getContent());
