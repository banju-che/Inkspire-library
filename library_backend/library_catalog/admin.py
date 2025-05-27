from django.contrib import admin
from .models import Author, Category, Book, BorrowRecord, BookReview

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'birth_date')
    search_fields = ('name',)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'isbn', 'available_copies')
    list_filter = ('category', 'author')
    search_fields = ('title', 'isbn')
    autocomplete_fields = ['author', 'category']

@admin.register(BorrowRecord)
class BorrowRecordAdmin(admin.ModelAdmin):
    list_display = ('book', 'user', 'borrow_date', 'return_date')
    search_fields = ('book__title', 'user__username')
    search_fields = ('book__title', 'borrower__username')

@admin.register(BookReview)
class BookReviewAdmin(admin.ModelAdmin):
    list_display = ('book', 'user', 'rating', 'review_date')
    list_filter = ('rating',)
    search_fields = ('book__title', 'user__username')
