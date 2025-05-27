from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework import status
from django.db.models import Q
from django.shortcuts import get_object_or_404
import requests

from .models import Book, Author, Category, BorrowRecord, BookReview
from .serializers import (
    BookSerializer,
    AuthorSerializer,
    CategorySerializer,
    BorrowRecordSerializer,
    BookReviewSerializer
)

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 5  # Default page size
    page_size_query_param = 'page_size'  # Allow ?page_size=10
    max_page_size = 50  # Max allowed


# ---------------- Google Books API ----------------
@api_view(['GET'])
def search_google_books(request):
    query = request.GET.get('q', '')
    if not query:
        return Response({'error': 'Missing search term (?q=...)'}, status=400)

    response = requests.get("https://www.googleapis.com/books/v1/volumes", params={'q': query})
    if response.status_code != 200:
        return Response({'error': 'Google API request failed'}, status=500)

    books = response.json().get('items', [])
    results = []
    for item in books:
        volume = item.get('volumeInfo', {})
        results.append({
            'title': volume.get('title'),
            'authors': volume.get('authors', []),
            'description': volume.get('description', 'No description available'),
            'thumbnail': volume.get('imageLinks', {}).get('thumbnail'),
            'publishedDate': volume.get('publishedDate'),
            'pageCount': volume.get('pageCount'),
            'categories': volume.get('categories', []),
            'infoLink': volume.get('infoLink'),
        })

    return Response({'results': results})


# ---------------- Book FBVs ----------------

@api_view(['GET', 'POST'])
def book_list(request):
    if request.method == 'GET':
        books = Book.objects.all()

        # FILTERING
        category_id = request.GET.get('category')
        if category_id:
            books = books.filter(category_id=category_id)

        # SEARCH
        search_query = request.GET.get('search')
        if search_query:
            books = books.filter(
                Q(title__icontains=search_query) |
                Q(description__icontains=search_query)
            )

        # PAGINATION
        paginator = StandardResultsSetPagination()
        paginated_books = paginator.paginate_queryset(books, request)
        serializer = BookSerializer(paginated_books, many=True)
        return paginator.get_paginated_response(serializer.data)

    elif request.method == 'POST':
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def book_detail(request, pk):
    book = get_object_or_404(Book, pk=pk)
    if request.method == 'GET':
        serializer = BookSerializer(book)
        return Response(serializer.data)
    elif request.method in ['PUT', 'PATCH']:
        serializer = BookSerializer(book, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ---------------- Author FBVs ----------------
@api_view(['GET', 'POST'])
def author_list(request):
    if request.method == 'GET':
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def author_detail(request, pk):
    author = get_object_or_404(Author, pk=pk)
    if request.method == 'GET':
        serializer = AuthorSerializer(author)
        return Response(serializer.data)
    elif request.method in ['PUT', 'PATCH']:
        serializer = AuthorSerializer(author, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        author.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ---------------- Category FBVs ----------------
@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def category_detail(request, pk):
    category = get_object_or_404(Category, pk=pk)
    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    elif request.method in ['PUT', 'PATCH']:
        serializer = CategorySerializer(category, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ---------------- BorrowRecord FBVs ----------------
@api_view(['GET', 'POST'])
def borrowrecord_list(request):
    if request.method == 'GET':
        records = BorrowRecord.objects.all()
        serializer = BorrowRecordSerializer(records, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BorrowRecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def borrowrecord_detail(request, pk):
    record = get_object_or_404(BorrowRecord, pk=pk)
    if request.method == 'GET':
        serializer = BorrowRecordSerializer(record)
        return Response(serializer.data)
    elif request.method in ['PUT', 'PATCH']:
        serializer = BorrowRecordSerializer(record, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ---------------- BookReview FBVs ----------------
@api_view(['GET', 'POST'])
def bookreview_list(request):
    if request.method == 'GET':
        reviews = BookReview.objects.all()
        serializer = BookReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BookReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def bookreview_detail(request, pk):
    review = get_object_or_404(BookReview, pk=pk)
    if request.method == 'GET':
        serializer = BookReviewSerializer(review)
        return Response(serializer.data)
    elif request.method in ['PUT', 'PATCH']:
        serializer = BookReviewSerializer(review, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
