from django.urls import path
from .views import (
    book_list, book_detail,
    author_list, author_detail,
    category_list, category_list,
    search_google_books, single_book
)

urlpatterns = [
    # Google Books API Search
    path('google-books/', search_google_books, name='google-books'),
    path('google-book/<str:volume_id>/', single_book, name='single-google-book'),

    # Book Endpoints
    path('books/', book_list, name='book-list'),
    path('books/<int:pk>/', book_detail, name='book-detail'),

    # Author Endpoints
    path('authors/', author_list, name='author-list'),
    path('authors/<int:pk>/', author_detail, name='author-detail'),

    # Category Endpoints
    path('categories/', category_list, name='category-list'),
    path('categories/<int:pk>/', category_list, name='category-detail'),
]
