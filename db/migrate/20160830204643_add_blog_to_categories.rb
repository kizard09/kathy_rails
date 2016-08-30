class AddBlogToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :blog_post_id, :integer
  end
end
