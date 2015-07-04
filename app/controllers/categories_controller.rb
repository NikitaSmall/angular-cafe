class CategoriesController < ApplicationController

  def all
    @categories = Category.all
  end
end
