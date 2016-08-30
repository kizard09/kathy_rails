class AddColumnToBlogPosts < ActiveRecord::Migration
  def change
    add_column :blog_posts, :tag_id, :integer
    add_column :blog_posts, :category_id, :integer
  end
end
