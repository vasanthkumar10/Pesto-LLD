// Memento

// Originator -> the content provider or playground
class codeEditor {
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

// manages undo and redo ops
class Caretaker {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }

  save(memento) {
    this.history.push(memento);
    this.currentIndex = this.history.length - 1;
  }

  // undo
  undo(editor) {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      editor.restore(this.history[this.currentIndex]);
    }
  }

  //   redo
  redo(editor) {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      editor.restore(this.history[this.currentIndex]);
    }
  }
}

// editor
const vscode = new codeEditor();
console.log(vscode.getContent());
const file = new Caretaker();

vscode.setContent("This is line 1");
console.log(vscode.getContent());
file.save(vscode.createMemento());
// console.log(file);

vscode.setContent("This is modified line");
console.log(vscode.getContent());
file.save(vscode.createMemento());
vscode.setContent("This is modified 2 line ");
file.save(vscode.createMemento());
// console.log(file);

console.log(vscode.getContent());
file.undo(vscode);
console.log(vscode.getContent());
file.undo(vscode);
console.log(vscode.getContent());
file.undo(vscode);
console.log(vscode.getContent());
file.redo(vscode);
console.log(vscode.getContent());
file.redo(vscode);
console.log(vscode.getContent());
