import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksapp';
  readonly APIUrl = "http://localhost:5038/api/books/";

  constructor(private http: HttpClient) {}

  books: any = [];
  editMode: boolean = false;
  editData: any = {};

  // Dedicated two-way bound edit form object
  editForm = {
    title: '',
    desc: '',
    price: '',
    author: '',
    genre: ''
  };

  refreshBooks() {
    this.http.get(this.APIUrl + 'GetBooks').subscribe((data: any) => {
      this.books = data.map((book: any) => ({
        ...book,
        author: book.author ?? '',
        genre:  book.genre  ?? '',
        desc:   book.desc   ?? '',
      }));
    });
  }

  ngOnInit() {
    this.refreshBooks();
  }

  addBook() {
    var newBook   = (<HTMLInputElement>document.getElementById("newBook")).value.trim();
    var newDesc   = (<HTMLInputElement>document.getElementById("newDesc")).value.trim();
    var newPrice  = (<HTMLInputElement>document.getElementById("newPrice")).value.trim();
    var newAuthor = (<HTMLInputElement>document.getElementById("newAuthor")).value.trim();
    var newGenre  = (<HTMLInputElement>document.getElementById("newGenre")).value.trim();

    var formData = new FormData();
    formData.append("title",       newBook);
    formData.append("description", newDesc);
    formData.append("price",       newPrice);
    formData.append("author",      newAuthor);
    formData.append("genre",       newGenre);

    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }

  populateEdit(book: any) {
    this.editMode = true;
    this.editData = { ...book };
    // Populate the two-way bound form
    this.editForm = {
      title:  book.title  ?? '',
      desc:   book.desc   ?? '',
      price:  book.price  ?? '',
      author: book.author ?? '',
      genre:  book.genre  ?? ''
    };
  }

  updateBook() {
    const payload = {
      title:       this.editForm.title,
      description: this.editForm.desc,
      price:       Number(this.editForm.price) || 0,
      author:      this.editForm.author,
      genre:       this.editForm.genre,
    };

    this.http.put(this.APIUrl + 'UpdateBook?id=' + this.editData.id, payload).subscribe({
      next: (data) => {
        alert(data);
        this.editMode = false;
        this.editData = {};
        this.editForm = { title: '', desc: '', price: '', author: '', genre: '' };
        this.refreshBooks();
      },
      error: (err) => {
        console.error('Update failed:', err);
        alert('Update failed: ' + (err.error?.error || err.message));
      }
    });
  }

  cancelEdit() {
    this.editMode = false;
    this.editData = {};
    this.editForm = { title: '', desc: '', price: '', author: '', genre: '' };
  }

  deleteBook(id: any) {
    this.http.delete(this.APIUrl + 'DeleteBook?id=' + id).subscribe(data => {
      alert(data);
      this.refreshBooks();
    });
  }
}
