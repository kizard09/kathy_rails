class AddOptimizationToBlogPosts < ActiveRecord::Migration
  def change
    add_column :blog_posts, :description, :text
    add_column :blog_posts, :keywords, :text
  end
end
