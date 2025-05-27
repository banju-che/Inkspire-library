# library_catalog/serializers.py

from rest_framework import serializers
from .models import Book, Author, Category, BorrowRecord, BookReview

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    category = CategorySerializer()

    class Meta:
        model = Book
        fields = '__all__'

    def create(self, validated_data):
        author_data = validated_data.pop('author')
        category_data = validated_data.pop('category')
        author, _ = Author.objects.get_or_create(**author_data)
        category, _ = Category.objects.get_or_create(**category_data)
        return Book.objects.create(author=author, category=category, **validated_data)

    def update(self, instance, validated_data):
        author_data = validated_data.pop('author', None)
        category_data = validated_data.pop('category', None)

        if author_data:
            author, _ = Author.objects.get_or_create(**author_data)
            instance.author = author

        if category_data:
            category, _ = Category.objects.get_or_create(**category_data)
            instance.category = category

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance

class BorrowRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = BorrowRecord
        fields = '__all__'

class BookReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookReview
        fields = '__all__'
